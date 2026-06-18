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
    }, 1500);
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
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
        const html = await res.text();
        // Bơm fragment vào vị trí (giữ thẻ wrapper để không phá layout)
        slot.innerHTML = html;
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
  ─────────────────────────────────────────────────────── */
  function setupReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('in'));
      return;
    }

    // Fire CỰC sớm — element còn cách viewport 600px là đã bắt đầu reveal.
    // Cộng thêm --t-slow chỉ 0.3s = animation xong từ trước khi user thấy section.
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: '200px 0px 600px 0px' });

    reveals.forEach(el => io.observe(el));
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
     5) CONTACT FORM
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

    setupHeader();
    setupMobileDrawer();
    setupReveal();
    setupParallax();
    setupForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
