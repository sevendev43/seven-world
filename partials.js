/* ============================================================
   Seven Company — Partials (Header / Footer / Topbar Injector)
   ------------------------------------------------------------
   Bơm chrome vào mỗi trang. Mọi text dùng data-i18n để SevenI18n
   dịch ngay sau khi render.
   ============================================================ */

(function () {
  const cfg  = window.SITE_CONFIG || {};
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  /* ---------- SVG icons ---------- */
  const ICON = {
    logo: `<img src="assets/svg-sevenworld/logo-icon.svg" width="36" height="36" alt="" aria-hidden="true" style="display:block;flex-shrink:0">`,
    telegram: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21.5 3.5L2 11.2c-.7.3-.7 1.3 0 1.6l4.6 1.7 1.8 5.7c.2.6.9.8 1.4.3l2.6-2.4 4.5 3.3c.6.4 1.4.1 1.6-.6L23 5.2c.2-.9-.7-1.7-1.5-1.7zM10 14.5l-.5 4 1.2-1.2 7.6-7.6c.3-.3-.1-.5-.4-.3L10 14.5z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c.7-1.3 2.3-2.3 4-2.3 3 0 4 2 4 5V20h-4v-4.5c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.3-.1.6-.1 1V20h-4z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.4-2 2-2H17V2.1c-.4-.1-1.7-.1-3-.1-3 0-5 1.8-5 5.2V10H6v4h3v8z"/></svg>`,
    instagram:`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
    youtube:  `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 8s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9C16 5 12 5 12 5s-4 0-7.2.2c-.4 0-1.3 0-2 .8C2.2 6.6 2 8 2 8S1.8 9.7 1.8 11.4v1.2C1.8 14.3 2 16 2 16s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.6.2 6.9.2 6.9.2s4 0 7.2-.2c.4 0 1.3 0 2-.8.6-.7.8-2 .8-2s.2-1.7.2-3.4v-1.2C22.2 9.7 22 8 22 8zM10 14.5v-5l4.5 2.5z"/></svg>`
  };

  /* ---------- Brand block ---------- */
  const brandHTML = (href = 'index.html') => `
    <a href="${href}" class="brand" aria-label="${cfg.brand?.name || 'Seven'} home">
      <span class="brand-mark">${ICON.logo}</span>
      <span class="brand-text">
        <span class="brand-name">${cfg.brand?.name || 'SEVEN'}</span>
        <span class="brand-sub">${cfg.brand?.sub || 'COMPANY'}</span>
      </span>
    </a>`;

  /* ---------- Menu items (map config.menu → translation keys) ---------- */
  const menuKeyByHref = {
    'about.html':         'nav.about',
    'services.html':      'nav.services',
    'case-studies.html':  'nav.cases',
    'why-us.html':        'nav.why',
    'contact.html':       'nav.contact'
  };

  const menuItems = (cfg.menu || []).map(item => {
    const active = item.href.toLowerCase() === path ? ' is-active' : '';
    const i18n = menuKeyByHref[item.href.toLowerCase()];
    const i18nAttr = i18n ? ` data-i18n="${i18n}"` : '';
    return `<a href="${item.href}" class="nav-link${active}"${i18nAttr}>${item.label}</a>`;
  }).join('');

  const mobileMenu = (cfg.menu || []).map(item => {
    const active = item.href.toLowerCase() === path ? ' is-active' : '';
    const i18n = menuKeyByHref[item.href.toLowerCase()];
    const i18nAttr = i18n ? ` data-i18n="${i18n}"` : '';
    return `<a href="${item.href}" class="drawer-link${active}"${i18nAttr}>${item.label}</a>`;
  }).join('');

  /* ---------- Topbar ---------- */
  const topbarLinkKeys = {
    'privacy.html': 'topbar.privacy',
    'terms.html':   'topbar.terms'
  };
  const topbarLinks = (cfg.topbar?.links || []).map(l => {
    const active = l.href.toLowerCase() === path ? ' is-active' : '';
    const i18n = topbarLinkKeys[l.href.toLowerCase()];
    const i18nAttr = i18n ? ` data-i18n="${i18n}"` : '';
    return `<a href="${l.href}" class="topbar-link${active}"${i18nAttr}>${l.label}</a>`;
  }).join('<span class="topbar-sep" aria-hidden="true">·</span>');

  const topbarHTML = cfg.topbar ? `
    <div class="topbar">
      <div class="container topbar-inner">
        <span class="topbar-note" data-i18n="topbar.note">${cfg.topbar.note || ''}</span>
        <nav class="topbar-links" aria-label="Secondary">${topbarLinks}</nav>
      </div>
    </div>` : '';

  /* ---------- Language toggle (segmented EN | VI) ---------- */
  const langToggleHTML = `
    <button type="button" class="lang-toggle" data-current="en" aria-label="Switch language">
      <span data-lang="en">EN</span>
      <span data-lang="vi">VI</span>
    </button>`;

  /* ---------- Mobile menu CTA ---------- */
  const ctaLabel = cfg.cta?.label || 'Get Started';
  const ctaHref  = cfg.cta?.href  || 'contact.html';

  /* ---------- Header ---------- */
  const headerHTML = `
    <header class="site-header" id="siteHeader">
      ${topbarHTML}
      <div class="header-main">
        <div class="container nav-wrap">
          ${brandHTML('index.html')}

          <nav class="nav-links" aria-label="Primary">
            ${menuItems}
          </nav>

          <div class="header-actions">
            ${langToggleHTML}
            <a href="${ctaHref}" class="btn btn-gold btn-sm nav-cta" data-i18n="common.get_started">${ctaLabel}</a>
          </div>

          <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
        ${mobileMenu}
        <div class="drawer-sep"></div>
        ${(cfg.topbar?.links || []).map(l => {
          const i18n = topbarLinkKeys[l.href.toLowerCase()];
          const i18nAttr = i18n ? ` data-i18n="${i18n}"` : '';
          return `<a href="${l.href}" class="drawer-link drawer-link-sm"${i18nAttr}>${l.label}</a>`;
        }).join('')}
        <div class="drawer-sep"></div>
        ${langToggleHTML}
        <a href="${ctaHref}" class="btn btn-gold" data-i18n="common.get_started">${ctaLabel}</a>
      </div>
    </header>`;

  /* ---------- Footer columns (with i18n keys per known column) ---------- */
  const footerColKey = {
    'Company':  'footer.company',
    'Services': 'footer.services',
    'Legal':    'footer.legal'
  };
  const footerLinkKey = {
    'about.html':         'footer.links.about',
    'case-studies.html':  'footer.links.cases',
    'why-us.html':   'footer.links.why',
    'contact.html':  'footer.links.contact',
    'services.html#marketing':   'footer.links.marketing',
    'services.html#paid-media':  'footer.links.paid_media',
    'services.html#channels':    'footer.links.channels',
    'privacy.html':  'footer.links.privacy',
    'terms.html':    'footer.links.terms'
  };

  const footerCols = (cfg.footer?.columns || []).map(col => {
    const titleKey = footerColKey[col.title];
    const titleAttr = titleKey ? ` data-i18n="${titleKey}"` : '';
    const links = col.links.map(l => {
      const lKey = footerLinkKey[l.href.toLowerCase()];
      const lAttr = lKey ? ` data-i18n="${lKey}"` : '';
      return `<a href="${l.href}"${lAttr}>${l.label}</a>`;
    }).join('');
    return `
      <div class="footer-col">
        <h5${titleAttr}>${col.title}</h5>
        ${links}
      </div>`;
  }).join('');

  const socialLinks = (cfg.socials || []).map(s => {
    const icon = ICON[s.name.toLowerCase()] || '';
    return `<a href="${s.href}" aria-label="${s.name}" target="_blank" rel="noopener">${icon}</a>`;
  }).join('');

  const year = new Date().getFullYear();

  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          ${brandHTML('index.html')}
          <p data-i18n="footer.desc">${cfg.footer?.description || ''}</p>
          <p class="footer-tagline" data-i18n="footer.tagline">"${cfg.brand?.tagline || ''}"</p>
        </div>

        <div class="footer-right">
          ${footerCols}

          <div class="footer-col footer-contact">
            <h5 data-i18n="footer.get_in_touch">Get in touch</h5>
            <div class="footer-contact-row">
              <a href="mailto:${cfg.contact?.email || ''}">${cfg.contact?.email || ''}</a>
              <a href="tel:${(cfg.contact?.phone || '').replace(/\s/g, '')}">${cfg.contact?.phone || ''}</a>
              <p class="footer-address">${(cfg.contact?.address || '').replace(/\s*\|\s*/g, '<br/>')}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <small>© ${year} <span data-i18n="footer.copyright">${cfg.footer?.copyright || ''}</span></small>
          <div class="socials" aria-label="Social media">${socialLinks}</div>
        </div>
      </div>
    </footer>`;

  /* ---------- Mount ---------- */
  const mount = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  };
  mount('site-header', headerHTML);
  mount('site-footer', footerHTML);

  /* ---------- Áp dụng dịch ngay sau khi header/footer được bơm ---------- */
  if (window.SevenI18n) {
    window.SevenI18n.apply(window.SevenI18n.getLang());
  }
})();
