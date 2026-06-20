/* ============================================================
   Seven Company - i18n engine
   ------------------------------------------------------------
   - Lưu lựa chọn ngôn ngữ vào localStorage
   - Áp dụng bản dịch lên element có data-i18n="key.path"
   - Hỗ trợ thêm attribute: data-i18n-placeholder / data-i18n-aria-label / data-i18n-title
   - Toggle qua bất kỳ element nào có class .lang-toggle (event delegation)
   ============================================================ */

window.SevenI18n = (function () {

  const STORAGE_KEY = 'seven-lang';
  const DEFAULT     = 'en';
  const SUPPORTED   = ['en', 'vi'];

  /** Truy cập key dạng "a.b.c" trong object lồng nhau */
  function pick(obj, path) {
    return path.split('.').reduce(
      (acc, k) => (acc && acc[k] !== undefined) ? acc[k] : undefined,
      obj
    );
  }

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(saved) ? saved : DEFAULT;
  }

  /** Áp dụng dịch lên root (mặc định document). Có thể gọi lại sau khi inject DOM mới. */
  function apply(lang, root) {
    lang = SUPPORTED.includes(lang) ? lang : DEFAULT;
    root = root || document;

    const t = window.TRANSLATIONS && window.TRANSLATIONS[lang];
    if (!t) {
      console.warn('[i18n] missing translations for', lang);
      return;
    }

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    /* innerHTML translations */
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const val = pick(t, el.getAttribute('data-i18n'));
      if (val !== undefined && val !== null) el.innerHTML = val;
    });

    /* Attribute translations */
    ['placeholder', 'aria-label', 'title', 'alt'].forEach(attr => {
      root.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
        const val = pick(t, el.getAttribute(`data-i18n-${attr}`));
        if (val !== undefined && val !== null) el.setAttribute(attr, val);
      });
    });

    /* Cập nhật trạng thái toggle button */
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.setAttribute('data-current', lang);
      const aria = pick(t, lang === 'en' ? 'lang.switch_to_vi' : 'lang.switch_to_en');
      if (aria) btn.setAttribute('aria-label', aria);
    });
  }

  function toggle() {
    const next = getLang() === 'en' ? 'vi' : 'en';
    apply(next);
  }

  function set(lang) { apply(lang); }

  function init() {
    /* Event delegation - click ở bất kỳ .lang-toggle nào trên trang */
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-toggle');
      if (!btn) return;
      e.preventDefault();
      toggle();
    });

    /* Áp dụng lần đầu cho DOM tĩnh (header chưa có lúc này nếu partials chạy sau) */
    apply(getLang());
  }

  return { init, apply, set, toggle, getLang };

})();

/* Tự khởi tạo khi DOM sẵn sàng */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.SevenI18n.init());
} else {
  window.SevenI18n.init();
}
