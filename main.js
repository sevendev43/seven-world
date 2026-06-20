/* ============================================================
   Seven Company - Page Interactions
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
     0a) PAGE LOADER - fade out sau ~1.5s
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
     1) SECTION LOADER - bơm các fragment HTML vào placeholder
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
    const header = document.getElementById('siteHeader');
    if (!toggle || !drawer) return;

    // Align the drawer's top edge to the header's actual bottom so it never
    // overlaps the logo (header height varies: topbar collapses on scroll).
    const positionDrawer = () => {
      if (header) drawer.style.top = Math.round(header.getBoundingClientRect().bottom) + 'px';
    };

    const close = () => {
      toggle.classList.remove('open');
      drawer.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    toggle.addEventListener('click', () => {
      positionDrawer();
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
     4c) HOVER COUNT-UP - re-runs each time the user hovers a
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
     5) MARQUEE - clone sets until track fills viewport,
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
     6) PLEXUS BACKGROUND - floating gold nodes + connection lines
     Canvas uses mix-blend-mode:multiply: visible on white/sand
     sections, naturally invisible on dark sections.
  ─────────────────────────────────────────────────────── */
  function setupPlexus() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // On phones the full-screen node network + binary rain is heavy and visually
    // busy. Skip it entirely - the page keeps its clean white + subtle grid base.
    if (window.matchMedia('(max-width:640px)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'plexus-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    const GOLD   = '226,186,84';
    const COUNT  = 150;
    const LINK_D = 162;
    const SPEED  = 0.28;
    const MARGIN = 220; // off-screen buffer so drifting nodes fade in/out softly

    // Binary "rain" - sparse 0/1 streams at random columns, drifting down and
    // fading out. Each stream re-seeds with a new random column/speed/length on
    // recycle, so the field never looks gridded or looped.
    const STEP = 21;          // vertical gap between glyphs in a stream
    const RAIN_FONT = "13px 'Space Mono', 'Courier New', monospace";

    let nodes = [], drops = [], W = 0, H = 0, raf = 0;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function mkDrop(scatter) {
      const len = 5 + Math.floor(Math.random() * 8);   // 5–12 glyphs per stream
      return {
        x:     Math.round(Math.random() * W),
        // scatter=true on first paint so streams don't all start at the top;
        // otherwise seed just above the viewport for a clean entry.
        y:     scatter ? Math.random() * H : -(Math.random() * H * 0.5 + len * STEP),
        speed: 0.35 + Math.random() * 0.85,
        len:   len,
        glyphs: Array.from({ length: len }, () => (Math.random() < 0.5 ? '0' : '1'))
      };
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
        // Reflect off the (buffered) viewport edges so the field stays evenly
        // distributed and never clumps. The canvas is a fixed background, so the
        // motion is fully self-contained and NOT coupled to page scroll.
        if (n.x < 0 || n.x > W) n.vx *= -1;
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
            const alpha = (1 - Math.sqrt(d2) / LINK_D) * .50;
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
        ctx.fillStyle = `rgba(${GOLD},.82)`;
        ctx.fill();
      });

      // ── Binary rain ──────────────────────────────────────────
      ctx.font = RAIN_FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      drops.forEach(d => {
        d.y += d.speed;
        // Rare glyph flip keeps a stream feeling "live" rather than static.
        if (Math.random() < 0.03) {
          d.glyphs[(Math.random() * d.len) | 0] = Math.random() < 0.5 ? '0' : '1';
        }
        for (let i = 0; i < d.len; i++) {
          const cy = d.y - i * STEP;            // i=0 is the leading (lowest) glyph
          if (cy < -STEP || cy > H + STEP) continue;
          const tail  = 1 - i / d.len;          // brighter head, fading trail
          const depth = 1 - Math.min(1, d.y / H); // whole stream fades as it descends
          const a = 0.38 * tail * (0.18 + 0.82 * depth);
          if (a <= 0.01) continue;
          ctx.fillStyle = `rgba(${GOLD},${a})`;
          ctx.fillText(d.glyphs[i], d.x, cy);
        }
        // Recycle once the trailing glyph has cleared the bottom.
        if (d.y - d.len * STEP > H) Object.assign(d, mkDrop(false));
      });

      raf = requestAnimationFrame(tick);
    }

    resize();
    nodes = Array.from({ length: COUNT }, mkNode);
    const DROP_COUNT = Math.round(Math.min(90, Math.max(26, W / 24)));
    drops = Array.from({ length: DROP_COUNT }, () => mkDrop(true));
    raf = requestAnimationFrame(tick);

    // NOTE: the plexus is deliberately NOT shifted on scroll. It used to be, which
    // caused nodes to pile up into a band on fast scrolls. As a fixed background
    // layer it just drifts on its own — smooth and clump-free at any scroll speed.

    window.addEventListener('resize', () => {
      resize();
      nodes.forEach(n => { if (n.x > W) n.x = Math.random() * W; });
      drops.forEach(d => { if (d.x > W) d.x = Math.round(Math.random() * W); });
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(tick);
    });
  }

  /* ───────────────────────────────────────────────────────
     6b) BAND PLEXUS - same floating-node network as the global
     plexus, but scoped to the dark "By the numbers" band and
     composited normally so the gold nodes glow on near-black
     (the global canvas is multiply-blended → invisible on dark).
  ─────────────────────────────────────────────────────── */
  function setupBandPlexus() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Phones: skip the scoped node network in the metrics band too - keep it light.
    if (window.matchMedia('(max-width:640px)').matches) return;

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
     7) BACK-TO-TOP BUTTON
  ─────────────────────────────────────────────────────── */
  function setupBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<svg viewBox="0 0 16 16"><polyline points="3,10 8,5 13,10"/></svg>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ───────────────────────────────────────────────────────
     8) CLICK BURST - tech ripple + particle spray
  ─────────────────────────────────────────────────────── */
  function setupClickEffect() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const SKIP = new Set(['INPUT','TEXTAREA','SELECT']);

    document.addEventListener('click', (e) => {
      if (SKIP.has(e.target.tagName)) return;

      const burst = document.createElement('div');
      burst.className = 'click-burst';
      burst.style.left = e.clientX + 'px';
      burst.style.top  = e.clientY + 'px';

      const ring  = document.createElement('div');
      ring.className = 'click-ring';
      const ring2 = document.createElement('div');
      ring2.className = 'click-ring2';
      const dot  = document.createElement('div');
      dot.className = 'click-dot';

      burst.appendChild(ring);
      burst.appendChild(ring2);
      burst.appendChild(dot);

      const COUNT = 8;
      for (let i = 0; i < COUNT; i++) {
        const p = document.createElement('div');
        p.className = 'click-particle';
        p.style.setProperty('--a', (360 / COUNT * i) + 'deg');
        burst.appendChild(p);
      }

      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 700);
    });
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
      const subject = encodeURIComponent(`New enquiry - ${interest}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${data.get('company') || '-'}\nInterest: ${interest}\n\n${message}`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      note.textContent = 'Thank you - opening your email client to send the message.';
      note.dataset.state = 'ok';
      form.reset();
    });
  }

  /* ───────────────────────────────────────────────────────
     MOBILE · Collapsible cards (accordion)
     On phones each card shows only its identity (icon/num/photo
     + tag + title). Tapping a card reveals its detail and closes
     any other open card in the same group. Desktop is untouched.
  ─────────────────────────────────────────────────────── */
  function setupMobileCards() {
    if (!window.matchMedia('(max-width:640px)').matches) return;

    const GROUPS = [
      { group: '#capabilities .bento', item: '.bento-card', detail: 'p, .bento-list, .bento-link' },
      { group: '#process .process',    item: '.process-step', detail: 'p' },
      { group: '.why-grid',            item: '.why-item',     detail: 'p' },
      { group: '.team-grid',           item: '.team-card',    detail: '.team-bio' }
    ];

    GROUPS.forEach(cfg => {
      const group = document.querySelector(cfg.group);
      if (!group) return;
      const items = Array.from(group.querySelectorAll(cfg.item));

      items.forEach(item => {
        const details = Array.from(item.children).filter(c => c.matches(cfg.detail));
        if (!details.length) return;

        // Wrap the trailing detail nodes so we can animate them open/closed.
        const body = document.createElement('div');
        body.className = 'm-acc-body';
        item.insertBefore(body, details[0]);
        details.forEach(d => body.appendChild(d));
        item.classList.add('m-acc');

        item.addEventListener('click', (e) => {
          // Let real links work once the card is already open.
          if (e.target.closest('a') && item.classList.contains('m-open')) return;
          e.preventDefault();
          const willOpen = !item.classList.contains('m-open');
          items.forEach(s => s.classList.remove('m-open'));
          item.classList.toggle('m-open', willOpen);
        });
      });
    });
  }

  /* ───────────────────────────────────────────────────────
     MOBILE · Pricing carousel
     Show the featured "Most partners" card first; the other two
     live in a horizontal scroll-snap track with round pager dots.
  ─────────────────────────────────────────────────────── */
  function setupPricingCarousel() {
    if (!window.matchMedia('(max-width:640px)').matches) return;
    const grid = document.querySelector('#pricing .pricing-grid');
    if (!grid) return;

    // Featured card leads.
    const featured = grid.querySelector('.is-featured');
    if (featured) grid.insertBefore(featured, grid.firstChild);

    const cards = Array.from(grid.children);
    if (cards.length < 2) return;

    const dots = document.createElement('div');
    dots.className = 'm-dots';
    dots.setAttribute('role', 'tablist');
    cards.forEach((card, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'm-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Show plan ' + (i + 1));
      dot.addEventListener('click', () => {
        const target = grid.scrollLeft +
          (card.getBoundingClientRect().left - grid.getBoundingClientRect().left);
        grid.scrollTo({ left: target, behavior: 'smooth' });
        // Immediate feedback - don't rely solely on the scroll event.
        dots.querySelectorAll('.m-dot').forEach((d, j) =>
          d.classList.toggle('is-active', j === i));
      });
      dots.appendChild(dot);
    });
    grid.after(dots);

    // Keep the active dot in sync with the scroll position.
    let raf = 0;
    grid.addEventListener('scroll', () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const gr = grid.getBoundingClientRect();
        const mid = gr.left + gr.width / 2;
        let active = 0, best = Infinity;
        cards.forEach((c, i) => {
          const r = c.getBoundingClientRect();
          const d = Math.abs((r.left + r.width / 2) - mid);
          if (d < best) { best = d; active = i; }
        });
        dots.querySelectorAll('.m-dot').forEach((d, i) =>
          d.classList.toggle('is-active', i === active));
      });
    }, { passive: true });
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
    setupBackToTop();
    setupClickEffect();
    setupMobileCards();
    setupPricingCarousel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
