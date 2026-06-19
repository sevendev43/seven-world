/* ============================================================
   Seven Company — Page Interactions
   Chạy SAU khi partials.js đã bơm header/footer.

   Quy trình:
     1. Load các section qua data-include (fetch fragment).
     2. Setup header sticky, mobile drawer.
     3. Setup reveal-on-scroll cho mọi .reveal đã có trong DOM.
     4. Setup parallax cho các blob trang trí.
     5. Setup form liên hệ.
   ============================================================ */

(function () {

  /* ───────────────────────────────────────────────────────
     0a) PAGE LOADER — fade out sau ~1.5s
     Timer chạy ngay khi script load, không đợi DOMContentLoaded.
  ─────────────────────────────────────────────────────── */
  (function hidePageLoader () {
    setTimeout(function () {
      var el = document.getElementById('pageLoader');
      if (!el) return;
      el.classList.add('is-hiding');
      // Dọn DOM sau khi fade xong, tránh để div thừa
      setTimeout(function () { el.parentNode && el.parentNode.removeChild(el); }, 700);
    }, 500);
  })();

  /* ───────────────────────────────────────────────────────
     0) TEAM-PHOTO FALLBACK
     Try .jpg → .png → .webp, then surrender to .no-photo
     (the gold-initial placeholder in CSS).
     Exposed on window so inline onerror in sections/team.html
     can call it once injected via innerHTML.
  ─────────────────────────────────────────────────────── */
  window.teamPhotoFallback = function (img) {
    var m = (img.getAttribute('src') || '').match(/(.*)\.(jpg|png|webp)(\?.*)?$/i);
    if (!m) { img.style.display = 'none'; img.parentElement.classList.add('no-photo'); return; }
    var base = m[1], ext = m[2].toLowerCase();
    var order = ['jpg', 'png', 'webp'];
    var next = order[order.indexOf(ext) + 1];
    if (next) { img.src = base + '.' + next + '?v=' + Date.now(); }
    else      { img.style.display = 'none'; img.parentElement.classList.add('no-photo'); }
  };

  /* ───────────────────────────────────────────────────────
     1) SECTION LOADER — bơm các fragment HTML vào placeholder
     <div data-include="sections/hero.html"></div>
  ─────────────────────────────────────────────────────── */
  async function loadIncludes(root = document) {
    const slots = root.querySelectorAll('[data-include]');
    if (!slots.length) return;

    await Promise.all(Array.from(slots).map(async (slot) => {
      const url = slot.getAttribute('data-include');
      try {
        const res = await fetch(url, { cache: 'reload' });
        if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
        const html = await res.text();
        // DOMParser handles SVG-in-HTML more reliably than innerHTML assignment
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const frag = document.createDocumentFragment();
        while (doc.body.firstChild) frag.appendChild(doc.body.firstChild);
        slot.innerHTML = '';
        slot.appendChild(frag);
        // Hỗ trợ nested data-include nếu có
        await loadIncludes(slot);
      } catch (err) {
        console.warn('[Seven] Section load failed:', url, err);
        slot.innerHTML = `<!-- Failed to load ${url} -->`;
      }
    }));
  }

  /* ───────────────────────────────────────────────────────
     2) HEADER STICKY + MOBILE DRAWER
  ─────────────────────────────────────────────────────── */
  function setupHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function setupMobileDrawer() {
    const toggle = document.getElementById('navToggle');
    const drawer = document.getElementById('mobileDrawer');
    if (!toggle || !drawer) return;

    const close = () => {
      toggle.classList.remove('open');
      drawer.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    toggle.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      drawer.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    window.addEventListener('resize', () => { if (window.innerWidth > 1024) close(); });
  }

  /* ───────────────────────────────────────────────────────
     3) REVEAL-ON-SCROLL
     Dùng IO + scroll fallback để đảm bảo mọi card đều reveal
     kể cả khi IO không fire (mobile stacked layout, timing).
  ─────────────────────────────────────────────────────── */
  function setupReveal() {
    const reveals = Array.from(document.querySelectorAll('.reveal'));
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('in'));
      return;
    }

    const BUFFER = 300; // px below viewport to pre-reveal

    // Khi 1 card trong .stagger reveal → reveal toàn bộ siblings cùng group
    const revealEl = (el) => {
      if (el.classList.contains('in')) return;
      el.classList.add('in');
      const parent = el.parentElement;
      if (parent && parent.classList.contains('stagger')) {
        parent.querySelectorAll('.reveal').forEach(sib => sib.classList.add('in'));
      }
    };

    const checkEl = (el) => {
      if (el.classList.contains('in')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + BUFFER && rect.bottom > -BUFFER) {
        revealEl(el);
      }
    };

    // IO: primary trigger
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          revealEl(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: `0px 0px ${BUFFER}px 0px` });

    reveals.forEach(el => io.observe(el));

    // Scroll fallback: handles stacked-mobile case where IO misses siblings
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        reveals.forEach(checkEl);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Immediate check after layout settles
    requestAnimationFrame(() => reveals.forEach(checkEl));
  }

  /* ───────────────────────────────────────────────────────
     4) SOFT PARALLAX cho các blob decorative
  ─────────────────────────────────────────────────────── */
  function setupParallax() {
    const blobs = document.querySelectorAll('[data-parallax]');
    if (!blobs.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const tick = () => {
      const y = window.scrollY;
      blobs.forEach(b => {
        const speed = parseFloat(b.dataset.parallax) || 0.15;
        b.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(tick); ticking = true; }
    }, { passive: true });
  }

  /* ───────────────────────────────────────────────────────
     4b) COUNT-UP cho [data-count] (dải metrics)
     Giữ prefix/suffix (vd $ … M+ … %). data-format="comma"
     thêm dấu phẩy ngăn nghìn. Tôn trọng reduced-motion.
  ─────────────────────────────────────────────────────── */
  function setupCounters() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    const fmt = (n, el) => {
      const pre = el.dataset.prefix || '';
      const suf = el.dataset.suffix || '';
      const dec = parseInt(el.dataset.decimals, 10) || 0;
      let v;
      if (dec > 0) {
        v = n.toFixed(dec);
      } else {
        v = Math.round(n);
        if (el.dataset.format === 'comma') v = v.toLocaleString('en-US');
      }
      return pre + v + suf;
    };

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const run = (el) => {
      const target = parseFloat(el.dataset.target) || 0;
      if (reduce) { el.textContent = fmt(target, el); return; }
      const dur = 1200, start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);   // easeOutCubic
        el.textContent = fmt(target * eased, el);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt(target, el);
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) { els.forEach(run); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    els.forEach(el => io.observe(el));
  }

  /* ───────────────────────────────────────────────────────
     4c) HOVER COUNT-UP — re-runs each time the user hovers a
     container marked [data-count-hover]; animates its
     [data-htarget] figures (popup stat panels).
  ─────────────────────────────────────────────────────── */
  function setupHoverCounters() {
    const triggers = document.querySelectorAll('[data-count-hover]');
    if (!triggers.length) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const fmt = (n, el) =>
      (el.dataset.hprefix || '') + Math.round(n) + (el.dataset.hsuffix || '');

    const animate = (el) => {
      const target = parseFloat(el.dataset.htarget) || 0;
      if (reduce) { el.textContent = fmt(target, el); return; }
      el.textContent = fmt(0, el);   // start from zero immediately
      const dur = 900, start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased, el);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt(target, el);
      };
      requestAnimationFrame(step);
    };

    triggers.forEach(trigger => {
      const nums = trigger.querySelectorAll('[data-htarget]');
      trigger.addEventListener('mouseenter', () => nums.forEach(animate));
    });
  }

  /* ───────────────────────────────────────────────────────
     5) MARQUEE — clone sets until track fills viewport,
     then pin exact pixel offset so there's never a gap
  ─────────────────────────────────────────────────────── */
  function setupMarquee() {
    const track = document.querySelector('.marquee-track');
    if (!track) return;
    const original = track.querySelector('.marquee-set');
    if (!original) return;

    // Clone until track is at least 2× viewport wide + one extra set
    const needed = window.innerWidth * 2 + original.offsetWidth;
    while (track.scrollWidth < needed) {
      const clone = original.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    }

    // Set exact px offset so animation moves by precisely one set width
    track.style.setProperty('--set-w', original.offsetWidth + 'px');
  }

  /* ───────────────────────────────────────────────────────
     6) PLEXUS BACKGROUND — floating gold nodes + connection lines
     Canvas uses mix-blend-mode:multiply: visible on white/sand
     sections, naturally invisible on dark sections.
  ─────────────────────────────────────────────────────── */
  function setupPlexus() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'plexus-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    const GOLD   = '226,186,84';
    const COUNT  = 110;
    const LINK_D = 160;
    const SPEED  = 0.28;
    const MARGIN = 220; // off-screen buffer for recycling

    let nodes = [], W = 0, H = 0, raf = 0, lastScrollY = 0;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function mkNode(yOverride) {
      return {
        x:  Math.random() * W,
        y:  yOverride !== undefined ? yOverride : (Math.random() * (H + MARGIN * 2) - MARGIN),
        vx: (Math.random() - .5) * SPEED,
        vy: (Math.random() - .5) * SPEED,
        r:  Math.random() * 2 + 1.2
      };
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        // No Y bounce — nodes that drift off are recycled in scroll handler
        // For natural drift within screen, gently reflect near the buffer zone
        if (n.y < -(MARGIN - 10) || n.y > H + MARGIN - 10) n.vy *= -1;
      });

      const vis = nodes.filter(n => n.y > -MARGIN && n.y < H + MARGIN);

      const D2 = LINK_D * LINK_D;
      for (let i = 0; i < vis.length; i++) {
        for (let j = i + 1; j < vis.length; j++) {
          const dx = vis[i].x - vis[j].x;
          const dy = vis[i].y - vis[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < D2) {
            const alpha = (1 - Math.sqrt(d2) / LINK_D) * .42;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${GOLD},${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.moveTo(vis[i].x, vis[i].y);
            ctx.lineTo(vis[j].x, vis[j].y);
            ctx.stroke();
          }
        }
      }

      vis.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD},.72)`;
        ctx.fill();
      });

      raf = requestAnimationFrame(tick);
    }

    resize();
    lastScrollY = window.scrollY;
    nodes = Array.from({ length: COUNT }, mkNode);
    raf = requestAnimationFrame(tick);

    // Shift nodes synchronously on scroll — eliminates 1-frame jitter
    window.addEventListener('scroll', () => {
      const dy = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      nodes.forEach(n => {
        n.y -= dy;
        // Recycle at opposite edge so density stays constant while scrolling
        if (n.y < -(MARGIN + 40)) { n.y = H + MARGIN; n.x = Math.random() * W; }
        else if (n.y > H + MARGIN + 40) { n.y = -MARGIN; n.x = Math.random() * W; }
      });
    }, { passive: true });

    window.addEventListener('resize', () => {
      resize();
      nodes.forEach(n => { if (n.x > W) n.x = Math.random() * W; });
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(tick);
    });
  }

  /* ───────────────────────────────────────────────────────
     6b) BAND PLEXUS — same floating-node network as the global
     plexus, but scoped to the dark "By the numbers" band and
     composited normally so the gold nodes glow on near-black
     (the global canvas is multiply-blended → invisible on dark).
  ─────────────────────────────────────────────────────── */
  function setupBandPlexus() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const band = document.querySelector('.metrics-band');
    if (!band) return;
    const host = band.querySelector('.metrics-bg') || band;

    const canvas = document.createElement('canvas');
    canvas.className = 'metrics-plexus';
    canvas.setAttribute('aria-hidden', 'true');
    host.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const GOLD   = '226,186,84';
    const LINK_D = 150;
    const SPEED  = 0.26;

    let nodes = [], W = 0, H = 0, raf = 0, running = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = band.getBoundingClientRect();
      W = Math.max(1, Math.round(r.width));
      H = Math.max(1, Math.round(r.height));
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function mkNode() {
      return {
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - .5) * SPEED,
        vy: (Math.random() - .5) * SPEED,
        r:  Math.random() * 1.8 + 1.1
      };
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      const D2 = LINK_D * LINK_D;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < D2) {
            const alpha = (1 - Math.sqrt(d2) / LINK_D) * .4;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${GOLD},${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD},.8)`;
        ctx.fill();
      });

      raf = requestAnimationFrame(tick);
    }

    function start() { if (!running) { running = true; raf = requestAnimationFrame(tick); } }
    function stop()  { running = false; cancelAnimationFrame(raf); }

    resize();
    const COUNT = Math.round(Math.min(72, Math.max(28, (W * H) / 14000)));
    nodes = Array.from({ length: COUNT }, mkNode);

    window.addEventListener('resize', () => {
      resize();
      nodes.forEach(n => { if (n.x > W) n.x = Math.random() * W; if (n.y > H) n.y = Math.random() * H; });
    }, { passive: true });

    // Run immediately; use the observer only to pause when the band scrolls
    // out of view (and resume when it returns) as a perf optimization.
    start();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(
        es => es.forEach(e => e.isIntersecting ? start() : stop()),
        { threshold: 0 }
      ).observe(band);
    }
  }

  /* ───────────────────────────────────────────────────────
     6) CONTACT FORM
  ─────────────────────────────────────────────────────── */
  function setupForm() {
    const form = document.getElementById('contactForm');
    const note = document.getElementById('formNote');
    if (!form || !note) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const interest = (data.get('interest') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !interest || !message) {
        note.textContent = 'Please complete the required fields.';
        note.dataset.state = 'error';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = 'Please enter a valid email address.';
        note.dataset.state = 'error';
        return;
      }

      const to = (window.SITE_CONFIG && window.SITE_CONFIG.contact && window.SITE_CONFIG.contact.email)
                  || 'contact@sevenworld.net';
      const subject = encodeURIComponent(`New enquiry — ${interest}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${data.get('company') || '—'}\nInterest: ${interest}\n\n${message}`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      note.textContent = 'Thank you — opening your email client to send the message.';
      note.dataset.state = 'ok';
      form.reset();
    });
  }

  /* ───────────────────────────────────────────────────────
     INIT
  ─────────────────────────────────────────────────────── */
  async function init() {
    await loadIncludes();   // sections phải có sẵn trước khi observe

    /* Áp dụng dịch lên DOM mới được bơm (sections + header/footer) */
    if (window.SevenI18n) {
      window.SevenI18n.apply(window.SevenI18n.getLang());
    }

    setupMarquee();
    setupPlexus();
    setupBandPlexus();
    setupHeader();
    setupMobileDrawer();
    setupReveal();
    setupParallax();
    setupCounters();
    setupHoverCounters();
    setupForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
