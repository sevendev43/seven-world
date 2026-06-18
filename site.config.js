/* ============================================================
   Seven Company — Site Configuration
   ------------------------------------------------------------
   Đổi 1 chỗ ở file này = đổi toàn bộ website.
   Giống như "Customize → Menus / Site Identity" trong WordPress.
   ============================================================ */

window.SITE_CONFIG = {

  /* -------- Branding -------- */
  brand: {
    name: 'SEVEN',
    sub:  'COMPANY',
    tagline: 'The final destination is Freedom.'
  },

  /* -------- Top utility bar --------
     Nằm trên cùng header (mỏng, nhỏ). Chứa email + legal links. */
  topbar: {
    note: 'contact@sevenworld.net  ·  +84 96 1583 777',
    links: [
      { label: 'Privacy Policy',    href: 'privacy.html' },
      { label: 'Terms of Service',  href: 'terms.html'   }
    ]
  },

  /* -------- Primary Navigation --------
     Mỗi mục là { label, href }. Thêm/bớt mục ở đây sẽ
     cập nhật toàn site (header + footer + mobile drawer). */
  menu: [
    { label: 'About',    href: 'about.html'    },
    { label: 'Services', href: 'services.html' },
    { label: 'Why Us',   href: 'why-us.html'   },
    { label: 'Contact',  href: 'contact.html'  }
  ],

  /* -------- Call-to-action nút trên header -------- */
  cta: {
    label: 'Get Started',
    href:  'contact.html'
  },

  /* -------- Thông tin liên hệ (Seven Company Ltd. — Đà Nẵng) -------- */
  contact: {
    email:         'contact@sevenworld.net',
    emailBusiness: 'bd@sevenworld.net',
    emailAdmin:    'admin@sevenworld.net',
    phone:         '+84 96 1583 777',
    telegram:      '@sevencompany_bd',
    address:       '145 Le Van Duyet, Nai Hien Dong Ward, Son Tra District, Da Nang City, Vietnam',
    mapQuery:      '145 Le Van Duyet, Son Tra, Da Nang',
    websites: [
      { label: 'sevenworld.net',  href: 'https://sevenworld.net'  },
      { label: 'tsunamihub.info', href: 'https://tsunamihub.info' },
      { label: 'reviewking.info', href: 'https://reviewking.info' }
    ]
  },

  /* -------- Mạng xã hội -------- */
  socials: [
    { name: 'Telegram',  href: 'https://t.me/sevencompany_bd' },
    { name: 'LinkedIn',  href: '#' },
    { name: 'Facebook',  href: '#' }
  ],

  /* -------- Cụm liên kết ở footer -------- */
  footer: {
    description:
      'A multi-discipline group from Đà Nẵng — affiliate marketing, real estate, and the entrepreneur community that connects them. The final destination is Freedom.',
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About Seven',  href: 'about.html'    },
          { label: 'Why Us',       href: 'why-us.html'   },
          { label: 'Contact',      href: 'contact.html'  }
        ]
      },
      {
        title: 'Services',
        links: [
          { label: 'Marketing Agency',  href: 'services.html#marketing'   },
          { label: 'Real Estate',       href: 'services.html#real-estate' },
          { label: 'Business Community',href: 'services.html#community'   }
        ]
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy',   href: 'privacy.html' },
          { label: 'Terms of Service', href: 'terms.html'   }
        ]
      }
    ],
    copyright: 'Seven Company Ltd. All rights reserved.'
  }

};
