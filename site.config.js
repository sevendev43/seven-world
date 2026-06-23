/* ============================================================
   Seven Company - Site Configuration
   ------------------------------------------------------------
   Đổi 1 chỗ ở file này = đổi toàn bộ website.
   Giống như "Customize → Menus / Site Identity" trong WordPress.
   ============================================================ */

window.SITE_CONFIG = {

  /* -------- Branding -------- */
  brand: {
    name: 'SEVEN',
    sub:  'WORLD',
    tagline: 'The final destination is Freedom.'
  },

  /* -------- Top utility bar --------
     Nằm trên cùng header (mỏng, nhỏ). Chứa email + legal links. */
  topbar: {
    note: 'contact@sevenworld.net  ·  +84 96 1583 777',
    links: [
      { label: 'Privacy Policy',    href: '/privacy' },
      { label: 'Terms of Service',  href: '/terms'   }
    ]
  },

  /* -------- Primary Navigation --------
     Mỗi mục là { label, href }. Thêm/bớt mục ở đây sẽ
     cập nhật toàn site (header + footer + mobile drawer). */
  menu: [
    { label: 'About',        href: '/about'        },
    { label: 'Services',     href: '/services'     },
    // { label: 'Case Studies', href: '/case-studies' },
    { label: 'Why Us',       href: '/why-us'       },
    { label: 'Contact',      href: '/contact'      }
  ],

  /* -------- Call-to-action nút trên header -------- */
  cta: {
    label: 'Get Started',
    href:  '/contact'
  },

  /* -------- Thông tin liên hệ (Seven Company Ltd. - Đà Nẵng) -------- */
  contact: {
    email:         'contact@sevenworld.net',
    emailAdmin:    'admin@sevenworld.net',
    phone:         '+84 96 1583 777',
    address:       '145 Le Van Duyet, Nai Hien Dong Ward | Son Tra District, Da Nang City, Vietnam',
    mapQuery:      '145 Le Van Duyet, Son Tra, Da Nang',
    websites: [
      { label: 'sevenworld.net',  href: 'https://sevenworld.net'  },
      { label: 'tsunamihub.info', href: 'https://tsunamihub.info' },
      { label: 'reviewking.info', href: 'https://reviewking.info' }
    ]
  },

  /* -------- Mạng xã hội -------- */
  socials: [
    { name: 'TikTok',   href: 'https://www.tiktok.com/@sevenworld.net' },
    { name: 'YouTube',  href: 'https://www.youtube.com/channel/UCyx53WemOlRwoZNb64Y3tng' },
    { name: 'X',        href: 'https://x.com/sevenworldnet' },
    { name: 'Facebook', href: '#' }   // TODO: cập nhật link Facebook sau
  ],

  /* -------- Cụm liên kết ở footer -------- */
  footer: {
    description:
      'Seven World - Affiliate marketing & performance advertising from Đà Nẵng. We run the ReviewKing & TsunamiHub media networks and manage $10M+ in ad spend for brands across SEA. The final destination is Freedom.',
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About Seven',  href: '/about'        },
          // { label: 'Case Studies', href: '/case-studies' },
          { label: 'Why Us',       href: '/why-us'       },
          { label: 'Contact',      href: '/contact'      }
        ]
      },
      {
        title: 'Services',
        links: [
          { label: 'Affiliate Marketing', href: '/services#marketing'  },
          { label: 'Performance Ads',     href: '/services#paid-media' },
          { label: 'Owned Channels',      href: '/services#channels'   }
        ]
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy',   href: '/privacy' },
          { label: 'Terms of Service', href: '/terms'   }
        ]
      }
    ],
    copyright: 'Seven Company Ltd. All rights reserved.'
  }

};
