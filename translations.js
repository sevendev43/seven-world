/* ============================================================
   Seven Company — Translations (EN + VI)
   ------------------------------------------------------------
   Mỗi key map sang innerHTML của element có data-i18n="key".
   Cú pháp:
     <h1 data-i18n="hero.title"></h1>
     <input data-i18n-placeholder="form.name_ph">
   Mở rộng key mới: thêm vào CẢ en và vi để giữ song song.
   ============================================================ */

window.TRANSLATIONS = {

  /* ─────────────────────────────── ENGLISH ─────────────────────────────── */
  en: {

    /* Common chunks */
    common: {
      get_started:   'Get Started',
      contact_us:    'Contact Us',
      learn_more:    'Learn more →',
      read_more:     'Read our full story →',
      view_all:      'View all services',
      see_all:       'See all reasons',
      browse_svc:    'Browse Services',
      talk_to_us:    'Talk to us',
      view_pricing:  'See engagement models',
      home:          'Home'
    },

    /* Header / Topbar */
    topbar: {
      note:    'contact@sevenworld.net  ·  +84 96 1583 777',
      privacy: 'Privacy Policy',
      terms:   'Terms of Service'
    },
    nav: {
      about:    'About',
      services: 'Services',
      cases:    'Case Studies',
      why:      'Why Us',
      contact:  'Contact'
    },

    /* CASE STUDIES page */
    cases_page: {
      crumb:   'Case Studies',
      eyebrow: 'Selected Work',
      title:   'Real campaigns.<br/><span class="accent">Real revenue</span>.',
      lede:    'Seven programs across seven verticals — finance, fashion, beauty, AI, gaming, health, and technology. Each one performance-priced, fully attributed, and built to compound.',
      sum_rev: 'Total revenue impact',
      sum_inv: 'Total managed investment',
      sum_v:   'Verticals delivered',
      sec_eyebrow: 'The work',
      sec_title:   'Performance across <span class="accent">every vertical</span>.',
      m_invest:  'Investment',
      m_rev:     'Revenue impact',
      read_case: 'Read the full case study →',
      c1_cat:  'Finance',
      c1_desc: 'An always-on affiliate program for a precious-metals investment platform — finance publishers and high-intent content driving qualified investors at scale.',
      c1_unit: 'New investors referred',
      c2_cat:  'Fashion',
      c2_desc: 'Performance affiliate marketing for a sailmaking & marine-fabric retailer — niche content and creator partnerships converting hobbyists into buyers.',
      c2_unit: 'New orders driven',
      c3_cat:  'Beauty',
      c3_desc: 'Beauty affiliate program executed through our ReviewKing media network — performance-priced and fully attributed across content and social.',
      c3_unit: 'New orders driven',
      c4_cat:  'AI',
      c4_desc: 'Affiliate + content engine for an AI video-ad generator — review placements and tutorials converting creators into paying subscribers.',
      c4_unit: 'New subscriptions',
      c5_cat:  'Gaming',
      c5_desc: 'High-volume affiliate program for a digital game-key marketplace — community, deal, and creator channels driving transactions at low CPA.',
      c5_unit: 'New transactions driven',
      c6_cat:  'Health',
      c6_desc: 'Affiliate marketing for a behavioral-change wearable — long-form reviews and creator stories turning curiosity into referred unit sales.',
      c6_unit: 'Units sold via referral',
      c7_cat:  'Technology',
      c7_desc: 'Affiliate program for a domain registrar & web platform — developer and SMB audiences converted into new account sign-ups.',
      c7_unit: 'New sign-ups',
      cta_eyebrow:  'Your campaign next',
      cta_title:    'Want results like <span class="accent">these</span>?',
      cta_lede:     'Tell us your category and target — a partner replies within one business day.',
      cta_services: 'Explore services →'
    },

    /* Footer */
    footer: {
      desc: 'Seven World — affiliate marketing & performance advertising from Da Nang. We run the ReviewKing & TsunamiHub media networks and manage $10M+ in ad spend for brands across SEA.',
      tagline: '"The final destination is Freedom."',
      company: 'Company',
      services: 'Services',
      legal: 'Legal',
      get_in_touch: 'Get in touch',
      copyright: 'Seven World Ltd. All rights reserved.',
      links: {
        about: 'About Seven',
        cases: 'Case Studies',
        why: 'Why Us',
        contact: 'Contact',
        marketing: 'Affiliate Marketing',
        paid_media: 'Performance Ads',
        channels:   'Owned Channels',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    },

    /* HOME — Hero */
    hero: {
      eyebrow: 'Da Nang · Established 2018',
      title:   'Scaling<br/><span class="accent">affiliate brands</span><br/>through performance<br/><span class="accent">advertising</span>.',
      lede:    'Seven World is Da Nang\'s specialist affiliate marketing agency — $10M+ in managed ad spend, AI-powered campaign optimisation, and owned media networks that compound your reach. <em>The final destination is Freedom.</em>',
      cta_primary:   'Get Started',
      cta_secondary: 'Explore Services →',
      stat1_v: '$10M+',  stat1_l: 'Managed ad spend',
      stat2_v: '350%',   stat2_l: 'Average campaign ROI',
      stat3_v: '7+',     stat3_l: 'Years of partnerships',
      float1_k: 'ROI', float2_k: 'Ad spend', float3_k: 'Campaigns live'
    },

    /* HOME — About preview */
    home_about: {
      eyebrow: 'About Seven World',
      title:   'One focus: <span class="accent">affiliate marketing</span> that performs.',
      p1:      'Founded in 2018 in Da Nang by Dong Phong, Seven World is a specialist affiliate marketing and performance advertising agency. We manage ad spend across every major platform, run our own high-traffic media networks, and connect brands to the channels that convert.',
      p2:      'Our philosophy is simple: <em>we have no customers, only Partners</em>. Every engagement is win-win or it isn\'t one at all — that\'s what has kept brands running campaigns with us year after year.',
      card1_tag: 'EST. 2018',
      card1_h: 'Born in Da Nang.<br/>Trusted across SEA.',
      stat_a_v: '$10M+', stat_a_l: 'Managed ad spend',
      stat_b_v: '350%',  stat_b_l: 'Average ROI'
    },

    /* HOME — Services preview */
    home_services: {
      eyebrow: 'What We Do',
      title:   'Three capabilities. <span class="accent">One focus</span> — performance.',
      lede:    'Whether you need affiliate network management, paid media scale, or a channel that compounds over time — you work directly with senior practitioners who run the accounts.',
      mk_title: 'Affiliate Marketing', mk_tag: 'Core service',
      mk_desc:  'End-to-end affiliate network management — partner recruitment, offer optimisation, and scale across CPS, CPA, and CPL models.',
      re_title: 'Performance Advertising', re_tag: 'Paid media',
      re_desc:  'Campaign management across Google, Meta, TikTok, and native — AI-powered bidding, creative testing, and attribution that holds.',
      co_title: 'Owned Media Channels', co_tag: 'ReviewKing & TsunamiHub',
      co_desc:  'Our proprietary media networks give your brand first-party audiences and editorial credibility that paid-only campaigns can\'t replicate.'
    },

    /* HOME — Why preview */
    home_why: {
      eyebrow: 'Why Seven',
      title:   'The reasons partners <span class="accent">stay for years</span>.',
      a_h: 'Performance, proven',
      a_p: 'Over $10M in managed ad spend and an average campaign ROI of 350% — receipts, not promises.',
      b_h: 'Win-win, always',
      b_p: '"We have no customers, only Partners." Our success is measured by yours — that\'s the whole model.',
      c_h: 'Owned reach that compounds',
      c_p: 'ReviewKing and TsunamiHub — two proprietary media networks that amplify paid campaigns and reduce your dependency on rising CPMs.'
    },

    /* HOME — Team (3-person leadership preview) */
    home_team: {
      eyebrow: 'The people behind Seven',
      title:   'Senior hands. <span class="accent">One room</span>.',
      lede:    'The three people who\'ll be in your kick-off call — and stay there for the long run. No layer of juniors between you and the decisions that matter.',
      cta:     'Meet the wider team →'
    },

    /* HOME — Portfolio */
    home_portfolio: {
      eyebrow: 'Selected Work',
      title:   'Campaigns that <span class="accent">moved the needle</span>.',
      kpi_inv: 'investment', kpi_rev: 'revenue impact',
      a_tag: 'Finance · Affiliate',   a_h: 'GoldAvenue Affiliate Marketing',
      a_p:   'Feb 2025 – Feb 2026 · Gold investment platform',             a_kpi2: 'investors referred',
      b_tag: 'Fashion · Affiliate',   b_h: 'SailRite Affiliate Marketing',
      b_p:   'Sailing & outdoor gear · Performance affiliate',             b_kpi2: 'new orders',
      c_tag: 'Beauty · Affiliate',    c_h: 'LashByMaya Affiliate Program',
      c_p:   'Mar 2025 – Mar 2026 · ReviewKing network',                  c_kpi2: 'orders driven',
      d_tag: 'AI · Affiliate',        d_h: 'Creatify AI Affiliate Program',
      d_p:   'Apr 2025 – Apr 2026 · AI video creative platform',          d_kpi2: 'subscriptions',
      e_tag: 'Gaming · Affiliate',    e_h: 'Instant Gaming Affiliate Program',
      e_p:   'Jun 2025 – Jun 2026 · Digital game keys platform',          e_kpi2: 'transactions',
      f_tag: 'Health · Affiliate',    f_h: 'Pavlok Affiliate Marketing',
      f_p:   'May 2025 – May 2026 · Habit-change wearable',               f_kpi2: 'units sold',
      g_tag: 'Technology · Affiliate',g_h: 'Dynadot Affiliate Program',
      g_p:   'Jul 2025 – Jul 2026 · Domain registrar',                    g_kpi2: 'sign-ups'
    },

    /* HOME — Testimonials */
    home_testimonials: {
      eyebrow: 'Voices',
      title:   'What partners <span class="accent">say about Seven</span>.',
      a_q: 'The Seven team treated our budget like their own. The ROI numbers spoke for themselves — but the honesty across every call is what kept us coming back.',
      a_n: 'Minh Tran', a_r: 'Growth lead, fintech partner',
      b_q: 'They turned down our business when they thought a competitor would serve us better. That candour is worth ten good campaigns.',
      b_n: 'Hoang Nguyen', b_r: 'E-commerce founder',
      c_q: 'ReviewKing\'s editorial authority gave our brand a credibility boost no ad budget could buy. Seven knew exactly how to bridge it to conversions.',
      c_n: 'Linh Pham', c_r: 'Co-founder, Orbit Logistics'
    },

    /* HOME — CTA callout */
    home_cta: {
      eyebrow: 'Let\'s begin',
      title:   'Tell us about your <span class="accent">ambition</span>.',
      lede:    'A senior partner will respond within one business day. Marketing, asset, or membership — start where it matters most to you. <em>The final destination is Freedom.</em>',
      quote:   '"We have no customers, only Partners. Win-win is the ultimate goal."',
      q_name:  'Dong Phong', q_role: 'Founder & CEO, Seven Company'
    },

    /* HOME — Trust strip */
    home_trust: {
      label: 'Platforms we run & optimise every day'
    },

    /* HOME — Capabilities (bento) */
    home_caps: {
      eyebrow: 'What we do',
      title:   'A full growth stack — <span class="accent">performance-first</span>.',
      lede:    'Affiliate programs, paid media across every major platform, and owned media networks — wired together with AI-driven optimisation and clean attribution.',
      a_tag: 'Core business', a_h: 'Affiliate Marketing',
      a_p: 'Full-funnel affiliate programs — partner recruitment, onboarding, tracking, optimisation and payout management, run end-to-end.',
      a_l1: 'Partner sourcing & vetting', a_l2: 'Tracking & fraud control', a_l3: 'Payout & reconciliation',
      b_tag: 'Owned media · Reviews', b_h: 'ReviewKing',
      b_p: 'Our owned review network — research-driven reviews across tech, beauty and consumer categories that pull in high-intent organic traffic and convert.',
      c_tag: 'Owned media · Content', c_h: 'TsunamiHub',
      c_p: 'Our second-house content network for finance, crypto and growth-stage brands — compounding organic reach and affiliate revenue across SEA.',
      d_h: 'AI optimisation', d_p: 'Bidding & creative decisions assisted by models, refined daily.',
      e_h: 'Clean attribution', e_p: 'Every order traced to source — no guessing, fully reconciled.',
      f_h: 'Performance Advertising', f_p: 'Google, Meta, TikTok & native — AI-assisted bidding and creative testing.',
      g_h: 'Owned Media Channels', g_p: 'Proprietary review & content networks built for organic reach across SEA.'
    },

    /* HOME — Process */
    home_process: {
      eyebrow: 'How it works',
      title:   'A clear path from <span class="accent">audit</span> to <span class="accent">scale</span>.',
      s1_h: 'Audit & strategy', s1_p: 'We map your funnel, margins and channels — then build a performance plan with real targets.',
      s2_h: 'Launch campaigns', s2_p: 'Affiliate partners and paid media go live across the right platforms, with tracking wired from day one.',
      s3_h: 'Optimise with AI', s3_p: 'Bidding, creative and partner mix are tuned daily — cutting waste and compounding what works.',
      s4_h: 'Scale & compound', s4_p: 'Winning channels are scaled and reinforced with owned media, so reach keeps growing — not renting.'
    },

    /* HOME — Metrics band */
    home_metrics: {
      eyebrow: 'By the numbers',
      title:   'Receipts, <span class="accent">not promises</span>.',
      m1: 'Managed ad spend', m2: 'Average campaign ROI', m3: 'Years of partnerships', m4: 'Orders driven in 12 months',
      t1: 'Founded in Da Nang', t2: 'Google Ads Partner', t3: 'ReviewKing launched', t4: 'TsunamiHub launched', t5: '$10M+ managed',
      spend_foot: '<strong>$10.4M</strong> deployed across 6 years',
      orders_foot: '<strong>433</strong>/mo avg · <strong>640</strong> peak'
    },

    /* HOME — Pricing / engagement models */
    home_pricing: {
      eyebrow: 'Engagement models',
      title:   'Ways to <span class="accent">work with us</span>.',
      lede:    'Flexible engagements built around your stage and goals — every one designed to be win-win.',
      t1_name: 'Launch', t1_desc: 'For brands starting affiliate & paid media.', t1_amt: 'Performance-based',
      t1_l1: '1–2 paid channels', t1_l2: 'Affiliate program setup', t1_l3: 'Tracking & monthly reporting',
      t2_badge: 'Most partners', t2_name: 'Growth', t2_desc: 'For scaling brands wanting full-funnel performance.', t2_amt: 'Retainer + performance',
      t2_l1: 'All major paid channels', t2_l2: 'Managed affiliate network', t2_l3: 'AI optimisation & creative testing', t2_l4: 'Owned media placements',
      t3_name: 'Scale', t3_desc: 'For established brands compounding reach.', t3_amt: 'Custom partnership',
      t3_l1: 'Dedicated senior team', t3_l2: 'Cross-border programs', t3_l3: 'Priority owned-media reach', t3_l4: 'Quarterly strategy reviews'
    },

    /* HOME — FAQ */
    home_faq: {
      eyebrow: 'FAQ',
      title:   'Questions partners <span class="accent">ask first</span>.',
      q1: 'What exactly does Seven World do?',
      a1: 'We are a specialist affiliate marketing agency — running affiliate programs, performance advertising across every major platform, and our own ReviewKing & TsunamiHub media networks.',
      q2: 'How do you charge?',
      a2: 'It depends on the engagement — performance-based, retainer plus performance, or a custom partnership. We design every deal to be win-win.',
      q3: 'Which platforms do you run?',
      a3: 'Google Ads, Meta, TikTok, YouTube, native and programmatic — plus organic reach through our owned media networks.',
      q4: 'How do you measure results?',
      a4: 'Clean attribution. Every order is traced to its source and fully reconciled — you see real ROI, not vanity metrics.',
      q5: 'Do you work with brands outside Vietnam?',
      a5: 'Yes. We run cross-border programs for brands across Southeast Asia from our base in Da Nang.',
      q6: 'How soon can we start?',
      a6: 'A senior partner responds within one business day. After a short audit, most engagements go live within two to three weeks.'
    },

    /* About page hero */
    about_page: {
      eyebrow: 'About Seven World',
      title:   'Da Nang\'s specialist <span class="accent">affiliate marketing</span> agency.',
      lede:    'Founded in 2018, Seven World is a performance-first affiliate marketing agency. We help brands across SEA drive customer acquisition through strategic partnerships, high-converting paid media, and owned media networks. <em>The final destination is Freedom.</em>',
      crumb:   'About'
    },

    about_story: {
      eyebrow: 'Our Story',
      title:   'From a solo affiliate experiment to a $10M+ performance agency.',
      p1: 'Seven World began in 2018 when Dong Phong — running a series of solo affiliate marketing projects — discovered that careful media buying, strategic content, and the right partners could compound into something much bigger than any single campaign.',
      p2: 'What started as a multi-channel affiliate network grew into a full performance-marketing practice managing more than <strong>$10M in ad spend</strong> across Google, Facebook, TikTok, Bing, and native channels — with an average campaign ROI of <strong>350%</strong>.',
      p3: 'Today, Seven World operates two proprietary media networks — <em>ReviewKing</em> and <em>TsunamiHub</em> — which give brand partners first-party audiences, editorial credibility, and compounding affiliate traffic that paid-only campaigns can\'t replicate.'
    },

    about_mvv: {
      eyebrow:   'What We Stand For',
      title:     'Mission, vision, and the <span class="accent">values</span> behind both.',
      mission_h: 'Our Mission',
      mission_sh:'Help brands maximise customer acquisition through performance affiliate marketing.',
      mission_p: 'Every brand needs customers. We bring them — through affiliate networks that scale, paid media that converts, and owned channels we\'ve built over years.',
      vision_h:  'Our Vision',
      vision_sh: 'To be SEA\'s most trusted affiliate marketing agency.',
      vision_p:  'The final destination is Freedom — for our partners and for the team that serves them. We build for the decade, not the quarter.',
      values_h:  'Our Values',
      values_sh: '"We have no customers, only Partners." Win-win or nothing.',
      values_p:  'Integrity, craft, and outcomes over output. Confidentiality as reflex. Long over loud.'
    },

    about_lead: {
      eyebrow: 'Leadership',
      title:   'The people who\'ll <span class="accent">answer your call</span>.',
      n1: 'Dong Phong', r1: 'Founder &amp; CEO',
      b1: 'Started Seven in 2018. Leads affiliate strategy, partner relationships, and the overall direction of the agency.',
      n2: 'Kim Chi',    r2: 'Marketing Director',
      b2: 'Heads brand, content, and performance — bringing affiliate campaigns from offer setup to paid-scale distribution.',
      n3: 'Tuan Anh',   r3: 'Operations Director',
      b3: 'Runs the affiliate operations floor — partners, tracking, and the day-to-day execution that makes campaigns ship on time.',
      n4: 'Quoc Truong',r4: 'Tech &amp; Analytics',
      b4: 'Owns the data side — attribution, tracking infrastructure, and the AI-powered optimisation behind our campaigns.'
    },

    about_princ: {
      eyebrow: 'How We Work',
      title:   'Six principles that guide <span class="accent">every engagement</span>.',
      p1_h: '1 · Partners, not customers',
      p1_p: 'The phrase isn\'t decorative. It governs how we price, how we communicate, and how we behave when a campaign isn\'t working.',
      p2_h: '2 · Senior hands on the work',
      p2_p: 'Founders and directors do the strategy and review every campaign. No layer of juniors learning on your spend.',
      p3_h: '3 · Measure the right thing',
      p3_p: 'We define the number that matters before we spend a dollar of yours — and earn the right to celebrate only when it moves.',
      p4_h: '4 · Quiet about your business',
      p4_p: 'Brands, offers, and partners pass through our office every week. Confidentiality is reflex, not policy.',
      p5_h: '5 · Long over loud',
      p5_p: 'We choose partners we expect to work with for a decade. Most of our top affiliate accounts started small and grew with us.',
      p6_h: '6 · Owned reach beats rented reach',
      p6_p: 'We invest in our own media so your campaigns run on channels with earned authority — not just media we\'re buying from someone else.'
    },

    about_miles: {
      eyebrow: 'Growth Milestones',
      title:   'Seven years of work, <span class="accent">measured</span>.',
      lede:    'From a single Google Ads experiment to a specialist affiliate agency managing $10M+ in ad spend across SEA, Europe, and North America.',
      m1_h: 'Beginnings',
      m1_p: 'Explored Google Ads and paid traffic methods. First solo affiliate experiments.',
      m2_h: 'Google Ads Agency Partner',
      m2_p: 'Earned Google Ads Agency Partner status — direct platform support, beta access, and tier-1 attribution data.',
      m3_h: 'Seven World Ltd.',
      m3_p: 'Founded Seven World Ltd. Partnered with major crypto, forex, and e-commerce affiliate programs. Revenue surpassed $2.5M.',
      m4_h: 'Global expansion',
      m4_p: 'Expanded into Europe and North America. Doubled the affiliate network and launched the ReviewKing media property.',
      m5_h: '$10M+ managed',
      m5_p: 'Managed $10M+ in ad spend, maintained a 350% average ROI, and launched TsunamiHub — our second owned media network.',
      m6_year: 'Today',
      m6_h: 'Affiliate-first, media-owned',
      m6_p: 'A specialist affiliate agency with two owned media networks and a full performance advertising desk — all from Da Nang.'
    },

    about_nums: {
      eyebrow: 'By the numbers',
      title:   'Seven years of work, <span class="accent">measured</span>.',
      l1: 'Year founded',
      l2: 'Managed ad spend',
      l3: 'Average campaign ROI',
      l4: 'Owned media networks'
    },

    about_charts: {
      eyebrow: 'Growth in Numbers',
      title:   'Seven years of <span class="accent">compounding results</span>.',
      lede:    'From first-year experiments to $10M+ in managed ad spend — each year building on the last.',
      c1_eyebrow: 'Ad Spend Under Management',
      c1_title:   'Managed budget growth, USD',
      roi_eyebrow: 'Campaign Performance',
      roi_title:   'Average campaign ROI',
      roi_desc:    'Measured across affiliate, Google, Facebook, and TikTok channels — sustained over 6+ years.',
      rev_eyebrow: 'Revenue Milestones',
      rev1_l: '2021 revenue',
      rev2_l: '2024 ad spend',
      rev3_l: 'Customers acquired'
    },

    about_cta: {
      eyebrow: 'Work with us',
      title:   'Begin a conversation with <span class="accent">a senior partner</span>.',
      lede:    'Tell us about your brand, your affiliate program, or your growth targets. We respond within one business day.',
      quote:   '"We have no customers, only Partners. Win-win is the ultimate goal for maintaining a long-term, effective partnership."',
      q_name:  'Dong Phong',
      q_role:  'Founder &amp; CEO'
    },

    /* Services page hero */
    services_page: {
      eyebrow: 'What We Do',
      title:   'Affiliate marketing.<br/><span class="accent">Performance-first</span>.',
      lede:    'From end-to-end affiliate campaigns to paid media management and owned media networks — one team, one focus, measurable results.',
      crumb:   'Services'
    },

    svc_overview: {
      mk_sub: 'Affiliate · Performance · Content',
      re_sub: 'Google · Facebook · TikTok · Native',
      co_sub: 'ReviewKing · TsunamiHub'
    },

    svc_mk: {
      badge: 'Core business',
      title: 'Marketing Agency.',
      lede:  'End-to-end campaign management across Google, Facebook, Bing, TikTok and native advertising — with AI-powered data-driven optimization for cost-effective lead acquisition and retention. Over <strong>$10M in managed ad spend</strong>. Average campaign ROI <strong>350%</strong>.',
      s1: 'Affiliate marketing networks',
      s2: 'Google &amp; Bing ads',
      s3: 'Meta / Facebook / Instagram',
      s4: 'TikTok ads &amp; creator partnerships',
      s5: 'Native advertising',
      s6: 'Content marketing &amp; SEO',
      s7: 'Landing page &amp; CRO',
      s8: 'Attribution &amp; analytics',
      cta_primary:   'Start a partnership',
      cta_secondary: 'Request capabilities deck'
    },

    svc_kpi: {
      eyebrow: 'Why Choose Us',
      title:   'Numbers our partners <span class="accent">return for</span>.',
      l1: 'Managed ad spend · 350% avg ROI',
      l2: 'Global users reached',
      l3: 'Google Ads Agency Partner',
      l4: 'Brand safety &amp; compliance'
    },

    svc_hybrid: {
      eyebrow: 'Our Proprietary Method',
      title:   'The Hybrid <span class="accent">Ad Strategy</span>.',
      lede:    'Affiliate partnerships fused with targeted paid media — each channel amplifying the other to drive conversions neither could reach alone.',
      concept_eyebrow: 'The Concept',
      concept_h: 'Affiliate networks meet paid media intent.',
      concept_p: 'Affiliate partners generate trust and high-intent inbound. Paid media scales that inbound to the right audience at the right cost. Neither runs in isolation.',
      s1: 'Partner-driven inbound + paid amplification',
      s2: 'Cross-channel attribution',
      s3: 'AI-powered bid &amp; budget optimization',
      s4: 'Continuous funnel testing',
      proof_eyebrow: 'Proven Impact · 2024–Present',
      proof_h: 'Forex &amp; Crypto Hybrid Programs.',
      kpi1: 'Invested',
      kpi2: 'Customers acquired',
      kpi3: 'ROI delivered'
    },

    svc_cases: {
      eyebrow: 'Case Studies',
      title:   'Performance in <span class="accent">the wild</span>.',
      c1_badge: 'Paid Advertising · Feb 2024 – Present',
      c1_h: 'Derive Google Ads Performance',
      c1_p: 'Funnel-optimised Google Ads program built for the lowest viable CPA while protecting acquisition quality.',
      c1_s1: 'Projected reach: 7–10M users / year',
      c1_s2: 'Projected registrations: 54K–150K annually',
      c1_s3: 'Cost per acquisition (CPA): $15–$45',
      c1_s4: 'Continuous funnel optimisation to cut cost without sacrificing value',
      c2_badge: 'Affiliate · Mar 2025 – Mar 2026',
      c2_h: 'LashByMaya Affiliate Program',
      c2_p: 'Beauty affiliate program executed through our ReviewKing media network — performance-priced, fully attributed.',
      c2_s1: 'Investment: $48,000',
      c2_s2: 'New orders driven: 5,200',
      c2_s3: 'Revenue impact: $322K',
      c2_s4: 'Channel: ReviewKing.info content + social'
    },

    svc_pm: {
      badge: 'Paid media',
      title: 'Performance Advertising.',
      lede:  'Full-service paid media management across every major platform — Google, Facebook, TikTok, Bing, and native networks. AI-powered bidding, continuous creative testing, and cross-channel attribution to hit your CPA targets.',
      s1: 'Google Ads &amp; Bing Ads',
      s2: 'Meta (Facebook &amp; Instagram)',
      s3: 'TikTok Ads',
      s4: 'Native advertising (Outbrain, Taboola)',
      s5: 'AI-powered bid optimization',
      s6: 'Creative testing &amp; iteration',
      s7: 'Cross-channel attribution',
      s8: 'Landing page &amp; CRO',
      cta_primary:   'Start a campaign',
      cta_secondary: 'Request capabilities deck'
    },

    svc_traffic: {
      eyebrow: 'Traffic Sources',
      title:   'Six channels we run — <span class="accent">orchestrated</span>, not siloed.',
      t1_h: 'Search Advertising',
      t1_p: 'Targeted campaigns on Google Ads and Bing Ads — industry-specific keywords that signal high user intent.',
      t2_h: 'Content &amp; SEO Traffic',
      t2_p: 'Niche blog networks, content sites, and high-authority guest posts in finance, crypto, and e-commerce.',
      t3_h: 'Influencer &amp; Community',
      t3_p: 'Trusted creators and niche communities used to broaden reach and build credibility where ads alone can\'t.',
      t4_h: 'Social Media Ads',
      t4_p: 'Paid campaigns across Meta (Facebook &amp; Instagram), TikTok, and Twitter / X — tuned to demographic intent.',
      t5_h: 'Native &amp; Programmatic',
      t5_p: 'Outbrain, Taboola, RevContent and other high-performance native placements optimised for conversion.',
      t6_h: 'Email &amp; Retargeting',
      t6_p: 'Whitelisted email lists and remarketing audiences re-engaged with intent-matched creative to close the loop.'
    },

    svc_ch: {
      eyebrow: 'Owned Channels',
      title:   'Media we built — <span class="accent">audiences we own</span>.',
      lede:    'Our ReviewKing network powers affiliate campaigns for physical and digital products across beauty, tech, and consumer categories.',
      c1_tag: 'Editorial &amp; reviews',
      c1_p:   'A trusted platform of research-driven reviews for tech and consumer products — boosting brand credibility and conversion.',
      c2_tag: 'Facebook Page',
      c2_p:   'Long-form review content and creator partnerships for beauty and lifestyle brands.',
      c3_tag: 'Facebook Group',
      c3_p:   'An engaged community for product discovery, review threads, and affiliate-driven recommendations.',
      c4_tag: 'YouTube channel',
      c4_p:   'Video reviews and product walkthroughs that convert intent into action.',
      c5_tag: 'Instagram',
      c5_p:   'Short-form reviews, creator collabs, and shoppable product features.',
      c6_tag: 'Performance media network',
      c6_p:   'Our second-house media network — focused on finance, crypto, and growth-stage brands.',
      cta_visit:    'Visit website →',
      cta_fanpage:  'Open Fanpage →',
      cta_group:    'Open Group →',
      cta_yt:       'Watch on YouTube →',
      cta_ig:       'Follow on Instagram →',
      cta_visit2:   'Visit website →'
    },

    svc_proc: {
      eyebrow: 'Engagement Process',
      title:   'How a Seven engagement <span class="accent">begins</span>.',
      s1_h: 'Discovery call',
      s1_p: 'A short conversation with a partner. We share notes on what\'s possible and what isn\'t.',
      s2_h: 'Scoping &amp; brief',
      s2_p: 'We co-author a one-page brief naming the outcome, the metric, and the constraints.',
      s3_h: 'Proposal &amp; kick-off',
      s3_p: 'A clear proposal — scope, team, timeline, fee. Kick-off within one to two weeks.',
      s4_h: 'Weekly cadence',
      s4_p: 'Weekly working sessions, monthly reviews, and a clear definition of "done".',
      footer: 'Typical engagements run between 8-week focused projects and ongoing retainers of twelve months and beyond.'
    },

    svc_cta: {
      eyebrow: 'Ready to begin',
      title:   'Ready to scale your <span class="accent">affiliate program</span>?',
      lede:    'A partner will reply within one business day with next steps.',
      why_btn: 'Why work with Seven →',
      quote:   '"Their affiliate program brought us 5,200 orders in twelve months. The data was clean, the channel was ours."',
      q_name:  'Maya Tran',
      q_role:  'Founder, LashByMaya'
    },

    /* Why Us page hero */
    why_page: {
      eyebrow: 'Why Seven',
      title:   'The reasons partners<br/><span class="accent">stay for years</span>.',
      lede:    'Hiring a partner is a leap of trust. Here is what we believe earns it — and what to expect in the first ninety days of working with us.',
      crumb:   'Why Us'
    },

    why_diff: {
      eyebrow: 'What sets us apart',
      title:   'Six things you\'ll <span class="accent">notice</span> by month three.',
      d1_h: 'Performance, proven',
      d1_p: '$10M+ in managed ad spend and an average campaign ROI of 350%. Receipts, not promises — we\'ll share campaign-level data on the first call.',
      d2_h: 'Partners, not customers',
      d2_p: 'Our model is win-win — you grow, we grow. Every engagement begins with the metric that matters to you, and we\'re paid to move it.',
      d3_h: 'AI-powered optimization',
      d3_p: 'Data-driven media buying that gets cheaper and smarter as campaigns mature — built into every account from day one.',
      d4_h: 'Three pillars, one team',
      d4_p: 'Brand, asset, and network advice from one trusted partner — strategies that reinforce each other instead of competing.',
      d5_h: 'Disciplined process',
      d5_p: 'Clear scopes, transparent reporting, and weekly cadence — no mystery, no scope creep, no surprises.',
      d6_h: 'Discretion &amp; trust',
      d6_p: 'We handle sensitive deals and brand pivots. Confidentiality and judgment are part of every engagement.',
      n1: 'Year founded',
      n2: 'Managed ad spend',
      n3: 'Average campaign ROI',
      n4: 'Disciplines, one team'
    },

    why_compare: {
      eyebrow: 'A fair comparison',
      title:   'Where Seven fits in <span class="accent">your shortlist</span>.',
      lede:    'We\'re not the cheapest, the largest, or the loudest. Here\'s an honest read on how we compare to the other options most of our clients consider.',
      c1_label: 'Network agencies',
      c1_h: 'Bigger, slower, juniors do the work.',
      c1_p: 'Strong process and brand prestige — but day-to-day work often lands with junior teams. Suited to enterprise scale, less to founder-led businesses.',
      c2_label: 'Seven World',
      c2_h: 'Specialist affiliate team. Senior hands, one focus.',
      c2_p: 'Partners on the work, weekly cadence, and access to affiliate, paid media, and owned channels in one relationship. Built for brands that want measurable growth.',
      c3_label: 'Freelancers &amp; boutiques',
      c3_h: 'Sharp, narrow, no continuity.',
      c3_p: 'Excellent in a specific craft — but you\'ll stitch together the strategy, the design, the media, and the analytics yourself.',
      c4_label: 'In-house teams',
      c4_h: 'Capable, but limited by headcount.',
      c4_p: 'Great for ongoing brand work — but scaling paid spend and affiliate networks requires specialist depth that most in-house teams don\'t have.'
    },

    why_days: {
      eyebrow: 'What to expect',
      title:   'Your first <span class="accent">ninety days</span>.',
      d1_h: 'Days 1–30 · Listen &amp; map',
      d1_p: 'We spend the first month understanding the business — customers, financials, competitors, internal context — before recommending anything material.',
      d2_h: 'Days 31–60 · Define &amp; commit',
      d2_p: 'We co-author the strategy and the success metric. By day sixty, both sides know exactly what we\'re moving and how we\'ll measure it.',
      d3_h: 'Days 61–90 · Execute &amp; learn',
      d3_p: 'Work goes live. We meet weekly, report monthly, and adjust based on what the data is actually saying — not what we hoped it would.'
    },

    why_voices: {
      eyebrow: 'Voices',
      title:   'From the people who chose <span class="accent">to stay</span>.',
      q1: 'Five years in and we still pick up the phone first when something big is coming. That tells me everything.',
      n1: 'Minh Tran', r1: 'CEO, Habitat Living',
      q2: 'They turn down work when they think we\'d be better served elsewhere. That kind of honesty earns the next ten engagements.',
      n2: 'Hoang Nguyen', r2: 'Family office principal',
      q3: 'ReviewKing put our brand in front of exactly the right audience. Better organic reach than any paid channel we\'d tried.',
      n3: 'Linh Pham', r3: 'Marketing Director, FinanceEdge SEA'
    },

    why_cta: {
      eyebrow: 'Take the next step',
      title:   'A short conversation is <span class="accent">the best test</span>.',
      lede:    'Spend thirty minutes with a partner. Walk away with a clearer view of your problem — and a better sense of whether we\'re the right room.',
      book_btn: 'Book a call',
      see_btn:  'See services',
      quote:    '"The first call was already worth the price of the engagement."',
      q_name:   'Hoang Nguyen',
      q_role:   'Family office principal'
    },

    /* Contact page hero */
    contact_page: {
      eyebrow: 'Contact',
      title:   'Let\'s start <span class="accent">a conversation</span>.',
      lede:    'Tell us about your brand, your asset, or your ambition. A senior partner will respond within one business day.',
      crumb:   'Contact'
    },

    contact_reach: {
      eyebrow: 'Reach us',
      title:   'Three ways to <span class="accent">begin</span>.',
      lede:    'Whichever is easiest for you — we read every message and respond personally.',
      l1_title: 'General enquiries',
      l1_bd:    'Business development',
      l2_title: 'Call or message',
      l3_title: 'Visit our office',
      l3_addr:  '145 Le Van Duyet, Nai Hien Dong Ward,<br/>Son Tra District, Da Nang City, Vietnam',
      hours_title: 'Office hours',
      hours_p:     'Monday – Friday · 9:00 – 18:00 ICT<br/>By appointment on weekends'
    },

    contact_form: {
      eyebrow: 'Send a message',
      title:   'Tell us about your project.',
      name:    'Full name',           name_ph:    'Your name',
      email:   'Email',               email_ph:   'you@company.com',
      company: 'Company',             company_ph: 'Company name',
      phone:   'Phone (optional)',
      interest: 'I\'m interested in',
      interest_default: 'Select a service',
      interest_mk: 'Affiliate Marketing',
      interest_re: 'Performance Advertising',
      interest_co: 'Owned Media Channels',
      interest_other: 'Something else',
      budget:  'Budget range (optional)',
      budget_default: 'Select if relevant',
      budget_1: 'Under USD 10,000',
      budget_2: 'USD 10,000 – 50,000',
      budget_3: 'USD 50,000 – 200,000',
      budget_4: 'USD 200,000+',
      budget_5: 'Prefer to discuss',
      message: 'How can we help?',
      message_ph: 'A few sentences about your project or goals.',
      submit:  'Send message',
      footnote: 'We respond within one business day. Your message is read by a partner, not a chatbot.'
    },

    contact_faq: {
      eyebrow: 'Common questions',
      title:   'Before you <span class="accent">write to us</span>.',
      q1_h: 'How quickly do you respond?',
      q1_p: 'Within one business day, by a partner — not an inbox manager. Most inbound messages get a substantive reply the same afternoon.',
      q2_h: 'What size of company do you work with?',
      q2_p: 'Mostly founder-led businesses between USD 2M and USD 50M in revenue. We also work with family offices, developers, and select enterprise teams.',
      q3_h: 'Do you work outside Vietnam?',
      q3_p: 'Yes — we manage affiliate programs and paid media for brands across Southeast Asia. Da Nang is our home but the work is regional.',
      q4_h: 'Can I partner through ReviewKing or TsunamiHub?',
      q4_p: 'Yes — brands that qualify can be featured on our owned media networks for affiliate-priced placements. Mention this when you reach out.'
    },

    /* Privacy + Terms */
    privacy_page: {
      eyebrow: 'Legal',
      title:   'Privacy <span class="accent">Policy</span>.',
      lede:    'How Seven Company Ltd. collects, uses, stores, and protects information you share with us.',
      updated: 'Last updated:',
      crumb:   'Privacy Policy'
    },
    privacy_body: {
      html: `
        <h2>1. Who we are</h2>
        <p>Seven World Ltd. ("Seven", "we", "us", "our") is a specialist affiliate marketing agency based at 145 Le Van Duyet, Nai Hien Dong Ward, Son Tra District, Da Nang City, Vietnam. This policy describes how we handle the personal information of visitors, partners, and clients.</p>
        <p>Questions about this policy or your data can be sent to <a href="mailto:contact@sevenworld.net">contact@sevenworld.net</a>.</p>

        <h2>2. Information we collect</h2>
        <p>We collect the minimum information needed to provide our services:</p>
        <ul>
          <li><strong>Contact information</strong> — name, email, phone, and company you give us through forms or correspondence.</li>
          <li><strong>Engagement information</strong> — the details of the affiliate program, campaign brief, or media placement enquiry you raise with us.</li>
          <li><strong>Site usage</strong> — pages visited, referrer, approximate location (city level), and basic device information. We use this to understand traffic and improve the site.</li>
          <li><strong>Marketing &amp; campaign data</strong> — where you are an advertising partner, we may handle aggregated campaign performance data on your behalf, governed by a separate agreement.</li>
        </ul>

        <h2>3. How we use it</h2>
        <ul>
          <li>To respond to enquiries and operate engagements.</li>
          <li>To send relevant updates if you have opted in.</li>
          <li>To improve our site and services through aggregated analytics.</li>
          <li>To meet legal, accounting, and tax obligations.</li>
        </ul>
        <p>We do not sell your information to third parties.</p>

        <h2>4. How we share it</h2>
        <p>We share information only with: (a) trusted service providers under contract who help us deliver the work (e.g. analytics, email, hosting, payment processors); (b) advertising platforms strictly to run campaigns you have authorized; and (c) authorities where required by law.</p>

        <h2>5. Cookies &amp; analytics</h2>
        <p>Our site uses essential cookies for functionality and may use analytics cookies to understand traffic patterns. You can disable non-essential cookies in your browser without losing core functionality.</p>

        <h2>6. How we store &amp; protect it</h2>
        <p>Personal information is stored on access-controlled systems with industry-standard safeguards. We retain information only as long as needed for the purpose collected, plus any period required by Vietnamese law.</p>

        <h2>7. Your rights</h2>
        <p>You may, at any time:</p>
        <ul>
          <li>Request a copy of the information we hold about you.</li>
          <li>Ask us to correct or delete information.</li>
          <li>Withdraw consent for marketing communications.</li>
          <li>Lodge a complaint with the relevant Vietnamese authority.</li>
        </ul>
        <p>Send any of these requests to <a href="mailto:contact@sevenworld.net">contact@sevenworld.net</a>.</p>

        <h2>8. Children</h2>
        <p>Our services are not directed to anyone under 16 and we do not knowingly collect their information.</p>

        <h2>9. Changes to this policy</h2>
        <p>We may update this policy as our services evolve. Material changes will be flagged on this page and dated above.</p>

        <h2>10. Advertising compliance statement</h2>
        <p>We comply with FTC disclosure requirements, affiliate program terms, and applicable advertising policies across the platforms we operate on (Google, Meta, TikTok, Bing, and native networks).</p>
        <ul>
          <li>Every affiliate placement we publish is clearly disclosed.</li>
          <li>We do not use spam, misleading claims, or prohibited traffic sources.</li>
          <li>We honour partner program terms for promotion methods, attribution windows, and prohibited keywords.</li>
          <li>Campaigns are monitored 24/7 for brand-safety and compliance issues.</li>
        </ul>
        <p>Compliance concerns, takedown requests, or partner program questions can be sent to <a href="mailto:contact@sevenworld.net">contact@sevenworld.net</a>.</p>
      `
    },
    terms_page: {
      eyebrow: 'Legal',
      title:   'Terms of <span class="accent">Service</span>.',
      lede:    'The agreement between you and Seven Company Ltd. when using this website and the services described on it.',
      updated: 'Last updated:',
      crumb:   'Terms of Service'
    },
    terms_body: {
      html: `
        <h2>1. Acceptance of terms</h2>
        <p>By accessing or using <a href="https://sevenworld.net">sevenworld.net</a> (the "Site") or any service provided by Seven World Ltd. ("Seven", "we", "us"), you agree to be bound by these Terms. If you do not agree, please do not use the Site or services.</p>

        <h2>2. About Seven World</h2>
        <p>Seven World Ltd. is a company registered in Da Nang City, Vietnam, providing affiliate marketing, performance advertising, and owned media services. Our registered office is at 145 Le Van Duyet, Nai Hien Dong Ward, Son Tra District, Da Nang City.</p>

        <h2>3. Use of the Site</h2>
        <ul>
          <li>You may use the Site for lawful, personal, and business purposes consistent with these Terms.</li>
          <li>You agree not to attempt to gain unauthorised access, disrupt service, copy our content for resale, or impersonate Seven or any of its representatives.</li>
          <li>We reserve the right to suspend or restrict access where this clause is breached.</li>
        </ul>

        <h2>4. Services &amp; engagements</h2>
        <p>Any work Seven performs for you — affiliate campaigns, paid media management, owned media placements, or otherwise — is governed by a separate written engagement letter or service order which will set out scope, fees, deliverables, and confidentiality. These Terms do not by themselves create a service obligation.</p>

        <h2>5. Intellectual property</h2>
        <p>All content on the Site (text, graphics, logos, photographs, code, and design) is owned by Seven Company Ltd. or licensed to us. You may not copy, modify, redistribute, or use any part of the Site commercially without our prior written consent.</p>
        <p>Work product delivered under an engagement is governed by the IP terms of that engagement letter, not by this clause.</p>

        <h2>6. Disclaimers</h2>
        <p>The Site and its content are provided on an "as is" and "as available" basis. Statistics quoted (such as historical campaign ROI) reflect past results and are not a guarantee of future performance. Real estate information is illustrative and not an offer or solicitation.</p>

        <h2>7. Limitation of liability</h2>
        <p>To the maximum extent permitted by Vietnamese law, Seven will not be liable for indirect, incidental, special, or consequential losses arising from your use of the Site. Liability under any engagement is limited to the terms of that engagement's contract.</p>

        <h2>8. Third-party links</h2>
        <p>The Site may link to third-party websites and platforms (advertising platforms, Telegram, social networks). We are not responsible for the content or practices of those sites.</p>

        <h2>9. Governing law</h2>
        <p>These Terms are governed by the laws of the Socialist Republic of Vietnam. Any dispute will be resolved through the competent courts of Da Nang, unless an engagement contract specifies a different forum or arbitration rule.</p>

        <h2>10. Changes</h2>
        <p>We may update these Terms from time to time. Material changes will be flagged on this page and dated above. Continued use of the Site after a change constitutes acceptance of the revised Terms.</p>

        <h2>11. Contact</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:admin@sevenworld.net">admin@sevenworld.net</a> or write to our registered office.</p>
      `
    },

    /* Language toggle aria */
    lang: { switch_to_vi: 'Switch to Vietnamese', switch_to_en: 'Switch to English' }
  },


  /* ─────────────────────────────── TIẾNG VIỆT ───────────────────────────────
     Giọng văn: tự tin, ấm, hơi editorial. Câu ngắn, có nhịp.
     Brand terms giữ nguyên: "Đối tác" (viết hoa), "Đích đến cuối cùng là Tự do".
  ─────────────────────────────────────────────────────────────────────────── */
  vi: {

    common: {
      get_started:   'Bắt đầu',
      contact_us:    'Liên hệ ngay',
      learn_more:    'Tìm hiểu thêm →',
      read_more:     'Đọc trọn câu chuyện →',
      view_all:      'Xem toàn bộ dịch vụ',
      see_all:       'Xem tất cả lý do',
      browse_svc:    'Khám phá dịch vụ',
      talk_to_us:    'Trao đổi với chúng tôi',
      view_pricing:  'Xem hình thức hợp tác',
      home:          'Trang chủ'
    },

    topbar: {
      note:    'contact@sevenworld.net  ·  +84 96 1583 777',
      privacy: 'Chính sách bảo mật',
      terms:   'Điều khoản dịch vụ'
    },
    nav: {
      about:    'Giới thiệu',
      services: 'Dịch vụ',
      cases:    'Dự án tiêu biểu',
      why:      'Vì sao chọn Seven',
      contact:  'Liên hệ'
    },

    /* TRANG CASE STUDIES */
    cases_page: {
      crumb:   'Dự án tiêu biểu',
      eyebrow: 'Dự án tiêu biểu',
      title:   'Chiến dịch thật.<br/><span class="accent">Doanh thu thật</span>.',
      lede:    'Bảy chương trình trên bảy lĩnh vực — tài chính, thời trang, làm đẹp, AI, gaming, sức khỏe và công nghệ. Mỗi dự án đều tính phí theo hiệu suất, đo lường minh bạch và được xây để tăng trưởng bền vững.',
      sum_rev: 'Tổng doanh thu tạo ra',
      sum_inv: 'Tổng vốn quản lý',
      sum_v:   'Lĩnh vực đã triển khai',
      sec_eyebrow: 'Dự án',
      sec_title:   'Hiệu suất trên <span class="accent">mọi lĩnh vực</span>.',
      m_invest:  'Vốn đầu tư',
      m_rev:     'Doanh thu tạo ra',
      read_case: 'Đọc bài viết chi tiết →',
      c1_cat:  'Tài chính',
      c1_desc: 'Chương trình affiliate vận hành liên tục cho nền tảng đầu tư kim loại quý — các trang tài chính và nội dung đúng nhu cầu mang về nhà đầu tư chất lượng ở quy mô lớn.',
      c1_unit: 'Nhà đầu tư mới giới thiệu',
      c2_cat:  'Thời trang',
      c2_desc: 'Affiliate theo hiệu suất cho nhà bán lẻ vải buồm & vải hàng hải — nội dung ngách và hợp tác creator chuyển người chơi thành khách mua.',
      c2_unit: 'Đơn hàng mới',
      c3_cat:  'Làm đẹp',
      c3_desc: 'Chương trình affiliate ngành làm đẹp triển khai qua mạng ReviewKing — tính phí theo hiệu suất, đo lường đầy đủ trên nội dung và mạng xã hội.',
      c3_unit: 'Đơn hàng mới',
      c4_cat:  'AI',
      c4_desc: 'Cỗ máy affiliate + nội dung cho công cụ tạo quảng cáo video bằng AI — bài đánh giá và hướng dẫn chuyển creator thành người dùng trả phí.',
      c4_unit: 'Lượt đăng ký mới',
      c5_cat:  'Gaming',
      c5_desc: 'Chương trình affiliate quy mô lớn cho sàn key game số — cộng đồng, kênh săn deal và creator thúc đẩy giao dịch với CPA thấp.',
      c5_unit: 'Giao dịch mới',
      c6_cat:  'Sức khỏe',
      c6_desc: 'Affiliate marketing cho thiết bị đeo thay đổi hành vi — bài đánh giá dài và câu chuyện từ creator biến sự tò mò thành đơn hàng giới thiệu.',
      c6_unit: 'Sản phẩm bán qua giới thiệu',
      c7_cat:  'Công nghệ',
      c7_desc: 'Chương trình affiliate cho nhà đăng ký tên miền & nền tảng web — chuyển nhóm lập trình viên và doanh nghiệp nhỏ thành tài khoản đăng ký mới.',
      c7_unit: 'Lượt đăng ký mới',
      cta_eyebrow:  'Chiến dịch tiếp theo là của bạn',
      cta_title:    'Muốn kết quả như <span class="accent">thế này</span>?',
      cta_lede:     'Cho chúng tôi biết lĩnh vực và mục tiêu của bạn — một đối tác sẽ phản hồi trong vòng một ngày làm việc.',
      cta_services: 'Khám phá dịch vụ →'
    },

    footer: {
      desc: 'Seven World — Agency affiliate marketing & Quảng cáo performance tại Đà Nẵng. Vận hành mạng ReviewKing & TsunamiHub, quản lý hơn 10 triệu USD ngân sách quảng cáo cho các thương hiệu tại SEA. Đích đến cuối cùng là Tự do.',
      tagline: '"Đích đến cuối cùng là Tự do."',
      company: 'Về công ty',
      services: 'Dịch vụ',
      legal: 'Pháp lý',
      get_in_touch: 'Kết nối với Seven',
      copyright: 'Công ty TNHH Seven World. Bảo lưu mọi quyền.',
      links: {
        about: 'Về Seven',
        cases: 'Dự án tiêu biểu',
        why: 'Vì sao chọn Seven',
        contact: 'Liên hệ',
        marketing: 'Affiliate Marketing',
        paid_media: 'Quảng cáo Performance',
        channels:   'Kênh truyền thông',
        privacy: 'Chính sách bảo mật',
        terms: 'Điều khoản dịch vụ'
      }
    },

    hero: {
      eyebrow: 'Đà Nẵng · Thành lập 2018',
      title:   'Tăng trưởng <span class="accent">affiliate</span><br/>qua quảng cáo <span class="accent">performance</span>.',
      lede:    'Seven World là Agency Affiliate Marketing chuyên biệt tại Đà Nẵng — hơn 10 triệu USD ngân sách quảng cáo đã vận hành, tối ưu bằng AI, và mạng truyền thông sở hữu giúp nhân đôi tầm với. <em>Đích đến cuối cùng là Tự do.</em>',
      cta_primary:   'Bắt đầu',
      cta_secondary: 'Khám phá dịch vụ →',
      stat1_v: '$10M+',  stat1_l: 'Ngân sách quảng cáo đã vận hành',
      stat2_v: '350%',   stat2_l: 'ROI trung bình mỗi chiến dịch',
      stat3_v: '7+',     stat3_l: 'Năm đồng hành cùng Đối tác',
      float1_k: 'ROI', float2_k: 'Ngân sách', float3_k: 'Chiến dịch đang chạy'
    },

    home_about: {
      eyebrow: 'Về Seven World',
      title:   'Một trọng tâm: <span class="accent">affiliate marketing</span> tạo ra hiệu quả thực.',
      p1:      'Anh Đông Phong sáng lập Seven World tại Đà Nẵng năm 2018 — khởi đầu là một mạng lưới affiliate marketing đa kênh, từng bước trở thành một agency performance chuyên biệt quản lý hơn 10 triệu USD ngân sách và vận hành hai mạng truyền thông sở hữu.',
      p2:      'Triết lý của Seven rất đơn giản: <em>không có khách hàng, chỉ có Đối tác</em>. Mỗi mối hợp tác phải là đôi bên cùng thành công — không thì thôi. Chính nguyên tắc đó đã giữ Đối tác ở lại với chúng tôi năm này qua năm khác.',
      card1_tag: 'EST. 2018',
      card1_h: 'Thành lập ở Đà Nẵng.<br/>Được tin cậy toàn SEA.',
      stat_a_v: '$10M+', stat_a_l: 'Ngân sách đã vận hành',
      stat_b_v: '350%',  stat_b_l: 'ROI trung bình'
    },

    home_services: {
      eyebrow: 'Chúng tôi làm gì',
      title:   'Ba năng lực. <span class="accent">Một trọng tâm</span> — performance.',
      lede:    'Dù bạn cần quản lý mạng affiliate, mở rộng paid media, hay một kênh truyền thông tích lũy theo thời gian — bạn sẽ làm việc trực tiếp với người điều hành tài khoản.',
      mk_title: 'Affiliate Marketing', mk_tag: 'Dịch vụ cốt lõi',
      mk_desc:  'Quản lý mạng affiliate toàn diện — tuyển đối tác, tối ưu offer, và mở rộng theo mô hình CPS, CPA, CPL.',
      re_title: 'Quảng cáo Performance', re_tag: 'Paid media',
      re_desc:  'Quản lý chiến dịch trên Google, Meta, TikTok và native — đặt giá thầu bằng AI, kiểm thử sáng tạo, và attribution chuẩn xác.',
      co_title: 'Kênh truyền thông sở hữu', co_tag: 'ReviewKing & TsunamiHub',
      co_desc:  'Mạng truyền thông riêng của Seven mang đến đối tác tệp khán giả first-party và uy tín biên tập — thứ mà ngân sách quảng cáo đơn thuần không thể thay thế.'
    },

    home_why: {
      eyebrow: 'Vì sao chọn Seven',
      title:   'Lý do Đối tác <span class="accent">ở lại với chúng tôi nhiều năm</span>.',
      a_h: 'Hiệu quả — có chứng minh',
      a_p: 'Đã vận hành hơn 10 triệu USD ngân sách quảng cáo, ROI trung bình 350% mỗi chiến dịch. Đây là số liệu, không phải là lời hứa.',
      b_h: 'Đôi bên cùng thành công — và sẽ luôn như vậy',
      b_p: '"Chúng tôi không có khách hàng, chỉ có Đối tác." Thành công của Seven được đo bằng thành công của bạn — đó là toàn bộ mô hình.',
      c_h: 'Tầm với tích lũy, không cần đi thuê',
      c_p: 'ReviewKing và TsunamiHub — hai mạng truyền thông riêng của Seven khuếch đại chiến dịch paid và giảm sự phụ thuộc vào CPM ngày càng tăng.'
    },

    home_team: {
      eyebrow: 'Những người đứng sau Seven',
      title:   'Người dày dạn. <span class="accent">Một mái nhà</span>.',
      lede:    'Ba người sẽ có mặt trong cuộc kick-off của bạn — và ở lại suốt chặng đường dài. Không có lớp junior xen giữa bạn và các quyết định quan trọng.',
      cta:     'Gặp toàn bộ đội ngũ →'
    },

    home_portfolio: {
      eyebrow: 'Dự án tiêu biểu',
      title:   'Những chiến dịch <span class="accent">tạo ra kết quả thực</span>.',
      kpi_inv: 'đầu tư', kpi_rev: 'doanh thu',
      a_tag: 'Tài chính · Affiliate', a_h: 'GoldAvenue Affiliate Marketing',
      a_p:   'T2/2025 – T2/2026 · Nền tảng đầu tư vàng',                 a_kpi2: 'nhà đầu tư mới',
      b_tag: 'Thời trang · Affiliate',b_h: 'SailRite Affiliate Marketing',
      b_p:   'Thiết bị thuyền buồm · Affiliate performance',              b_kpi2: 'đơn hàng mới',
      c_tag: 'Làm đẹp · Affiliate',   c_h: 'LashByMaya Affiliate Program',
      c_p:   'T3/2025 – T3/2026 · Mạng ReviewKing',                      c_kpi2: 'đơn hàng',
      d_tag: 'AI · Affiliate',        d_h: 'Creatify AI Affiliate Program',
      d_p:   'T4/2025 – T4/2026 · Nền tảng sáng tạo video AI',           d_kpi2: 'đăng ký mới',
      e_tag: 'Gaming · Affiliate',    e_h: 'Instant Gaming Affiliate Program',
      e_p:   'T6/2025 – T6/2026 · Nền tảng mua key game',                e_kpi2: 'giao dịch',
      f_tag: 'Sức khoẻ · Affiliate',  f_h: 'Pavlok Affiliate Marketing',
      f_p:   'T5/2025 – T5/2026 · Thiết bị đeo hình thành thói quen',    f_kpi2: 'sản phẩm bán',
      g_tag: 'Công nghệ · Affiliate', g_h: 'Dynadot Affiliate Program',
      g_p:   'T7/2025 – T7/2026 · Nhà đăng ký tên miền',                 g_kpi2: 'tài khoản mới'
    },

    home_testimonials: {
      eyebrow: 'Họ nói gì',
      title:   'Đối tác và hội viên <span class="accent">nói gì về Seven</span>.',
      a_q: 'Đội Seven coi ngân sách của chúng tôi như của chính họ. Con số ROI tự nó đã nói rồi — nhưng sự thẳng thắn trong từng cuộc gọi mới là lý do chúng tôi ở lại.',
      a_n: 'Minh Trần', a_r: 'Trưởng Growth, đối tác fintech',
      b_q: 'Chương trình affiliate của họ mang lại 5.200 đơn hàng trong 12 tháng. Dữ liệu rõ ràng, kênh là của chúng tôi — đây là affiliate marketing thực sự.',
      b_n: 'Maya Trần', b_r: 'Founder, LashByMaya',
      c_q: 'ReviewKing đã đưa thương hiệu chúng tôi vào đúng đối tượng người dùng. Không giống bất kỳ kênh paid nào chúng tôi đã thử — organic và chuyển đổi thực sự.',
      c_n: 'Linh Phạm', c_r: 'Giám đốc Marketing, FinanceEdge SEA'
    },

    home_cta: {
      eyebrow: 'Cùng bắt đầu',
      title:   'Kể cho Seven nghe về <span class="accent">khát vọng của bạn</span>.',
      lede:    'Một đối tác cấp cao của Seven sẽ phản hồi trong vòng một ngày làm việc. Marketing, tài sản hay hội viên — hãy bắt đầu từ điều quan trọng nhất với bạn. <em>Đích đến cuối cùng là Tự do.</em>',
      quote:   '"Chúng tôi không có khách hàng, chỉ có Đối tác. Cùng thắng là mục đích cuối cùng."',
      q_name:  'Đông Phong', q_role: 'Nhà sáng lập & CEO, Seven Company'
    },

    /* HOME — Trust strip */
    home_trust: {
      label: 'Nền tảng chúng tôi vận hành & tối ưu mỗi ngày'
    },

    /* HOME — Capabilities (bento) */
    home_caps: {
      eyebrow: 'Chúng tôi làm gì',
      title:   'Một bộ máy tăng trưởng đầy đủ — <span class="accent">ưu tiên hiệu quả</span>.',
      lede:    'Chương trình affiliate, quảng cáo trả phí trên mọi nền tảng lớn, và mạng truyền thông sở hữu — kết nối với nhau bằng tối ưu AI và đo lường minh bạch.',
      a_tag: 'Lĩnh vực cốt lõi', a_h: 'Affiliate Marketing',
      a_p: 'Chương trình affiliate trọn phễu — tuyển chọn đối tác, onboarding, theo dõi, tối ưu và quản lý chi trả, vận hành đầu-cuối.',
      a_l1: 'Tìm & sàng lọc đối tác', a_l2: 'Theo dõi & chống gian lận', a_l3: 'Chi trả & đối soát',
      b_tag: 'Truyền thông sở hữu · Review', b_h: 'ReviewKing',
      b_p: 'Mạng review sở hữu của chúng tôi — đánh giá dựa trên nghiên cứu ở mảng công nghệ, làm đẹp và tiêu dùng, kéo về lưu lượng tự nhiên ý định cao và dễ chuyển đổi.',
      c_tag: 'Truyền thông sở hữu · Nội dung', c_h: 'TsunamiHub',
      c_p: 'Mạng nội dung thứ hai cho tài chính, crypto và thương hiệu tăng trưởng — nhân rộng reach tự nhiên và doanh thu affiliate khắp SEA.',
      d_h: 'Tối ưu bằng AI', d_p: 'Quyết định đấu giá & creative có AI hỗ trợ, tinh chỉnh mỗi ngày.',
      e_h: 'Đo lường minh bạch', e_p: 'Mọi đơn hàng truy về nguồn — không phỏng đoán, đối soát đầy đủ.',
      f_h: 'Quảng cáo Performance', f_p: 'Google, Meta, TikTok & native — đấu giá hỗ trợ AI và thử nghiệm creative.',
      g_h: 'Kênh truyền thông sở hữu', g_p: 'Mạng review & nội dung độc quyền, xây cho reach tự nhiên khắp SEA.'
    },

    /* HOME — Process */
    home_process: {
      eyebrow: 'Quy trình',
      title:   'Lộ trình rõ ràng từ <span class="accent">audit</span> đến <span class="accent">tăng trưởng</span>.',
      s1_h: 'Audit & chiến lược', s1_p: 'Chúng tôi soi phễu, biên lợi nhuận và kênh của bạn — rồi dựng kế hoạch hiệu quả với mục tiêu thật.',
      s2_h: 'Triển khai chiến dịch', s2_p: 'Đối tác affiliate và quảng cáo trả phí lên sóng đúng nền tảng, gắn theo dõi ngay từ ngày đầu.',
      s3_h: 'Tối ưu bằng AI', s3_p: 'Đấu giá, creative và cơ cấu đối tác được tinh chỉnh hằng ngày — cắt lãng phí, nhân cái hiệu quả.',
      s4_h: 'Mở rộng & tích lũy', s4_p: 'Kênh thắng được scale và củng cố bằng media sở hữu, để tầm với tiếp tục lớn — không phải đi thuê.'
    },

    /* HOME — Metrics band */
    home_metrics: {
      eyebrow: 'Bằng những con số',
      title:   'Bằng chứng, <span class="accent">không phải lời hứa</span>.',
      m1: 'Ngân sách quảng cáo đã vận hành', m2: 'ROI trung bình mỗi chiến dịch', m3: 'Năm đồng hành cùng Đối tác', m4: 'Đơn hàng tạo ra trong 12 tháng',
      t1: 'Thành lập tại Đà Nẵng', t2: 'Đối tác Google Ads', t3: 'Ra mắt ReviewKing', t4: 'Ra mắt TsunamiHub', t5: 'Quản lý $10M+',
      spend_foot: '<strong>$10.4M</strong> giải ngân trong 6 năm',
      orders_foot: '<strong>433</strong>/tháng · đỉnh <strong>640</strong>'
    },

    /* HOME — Pricing / engagement models */
    home_pricing: {
      eyebrow: 'Hình thức hợp tác',
      title:   'Các cách <span class="accent">làm việc cùng Seven</span>.',
      lede:    'Hình thức linh hoạt theo giai đoạn và mục tiêu của bạn — mọi thỏa thuận đều hướng tới cùng thắng.',
      t1_name: 'Launch', t1_desc: 'Cho thương hiệu mới bắt đầu affiliate & trả phí.', t1_amt: 'Theo hiệu quả',
      t1_l1: '1–2 kênh trả phí', t1_l2: 'Thiết lập chương trình affiliate', t1_l3: 'Theo dõi & báo cáo hằng tháng',
      t2_badge: 'Đa số đối tác chọn', t2_name: 'Growth', t2_desc: 'Cho thương hiệu đang scale, cần hiệu quả trọn phễu.', t2_amt: 'Phí cố định + hiệu quả',
      t2_l1: 'Mọi kênh trả phí lớn', t2_l2: 'Mạng affiliate được quản lý', t2_l3: 'Tối ưu AI & thử nghiệm creative', t2_l4: 'Vị trí trên media sở hữu',
      t3_name: 'Scale', t3_desc: 'Cho thương hiệu đã vững, muốn tích lũy tầm với.', t3_amt: 'Hợp tác tùy chỉnh',
      t3_l1: 'Đội ngũ senior chuyên trách', t3_l2: 'Chương trình xuyên biên giới', t3_l3: 'Ưu tiên reach media sở hữu', t3_l4: 'Đánh giá chiến lược hằng quý'
    },

    /* HOME — FAQ */
    home_faq: {
      eyebrow: 'FAQ',
      title:   'Những câu hỏi đối tác <span class="accent">hỏi đầu tiên</span>.',
      q1: 'Seven World thực sự làm gì?',
      a1: 'Chúng tôi là agency affiliate marketing chuyên biệt — vận hành chương trình affiliate, quảng cáo performance trên mọi nền tảng lớn, và sở hữu mạng truyền thông ReviewKing & TsunamiHub.',
      q2: 'Seven tính phí thế nào?',
      a2: 'Tùy hình thức hợp tác — theo hiệu quả, phí cố định cộng hiệu quả, hoặc hợp tác tùy chỉnh. Mọi thỏa thuận đều hướng tới cùng thắng.',
      q3: 'Seven vận hành những nền tảng nào?',
      a3: 'Google Ads, Meta, TikTok, YouTube, native và programmatic — cùng reach tự nhiên qua mạng media sở hữu.',
      q4: 'Seven đo lường kết quả ra sao?',
      a4: 'Đo lường minh bạch. Mọi đơn hàng được truy về nguồn và đối soát đầy đủ — bạn thấy ROI thật, không phải chỉ số phù phiếm.',
      q5: 'Seven có làm với thương hiệu ngoài Việt Nam không?',
      a5: 'Có. Chúng tôi vận hành các chương trình xuyên biên giới cho thương hiệu khắp Đông Nam Á, từ trụ sở tại Đà Nẵng.',
      q6: 'Bao lâu thì có thể bắt đầu?',
      a6: 'Một đối tác cấp cao phản hồi trong vòng một ngày làm việc. Sau bước audit ngắn, đa số hợp tác lên sóng trong 2–3 tuần.'
    },

    about_page: {
      eyebrow: 'Về Seven World',
      title:   'Agency affiliate chuyên biệt<br/>của <span class="accent">Đà Nẵng</span>.',
      lede:    'Thành lập năm 2018, Seven World là agency affiliate marketing chuyên biệt tại Đà Nẵng — quản lý hơn 10 triệu USD ngân sách quảng cáo và vận hành mạng lưới media sở hữu ReviewKing & TsunamiHub. <em>Đích đến cuối cùng là Tự do.</em>',
      crumb:   'Giới thiệu'
    },

    about_story: {
      eyebrow: 'Câu chuyện Seven',
      title:   'Từ một thử nghiệm affiliate đến agency chuyên biệt.',
      p1: 'Seven World khởi đầu năm 2018 khi anh Đông Phong — khi đó đang chạy một loạt dự án affiliate marketing độc lập — nhận ra rằng media buying khôn ngoan, nội dung chiến lược, và đúng Đối tác có thể cộng dồn thành thứ lớn hơn nhiều so với một chiến dịch đơn lẻ.',
      p2: 'Khởi đầu là một mạng lưới affiliate đa kênh, dần trở thành một practice performance-marketing đầy đủ, đã vận hành hơn <strong>10 triệu USD ngân sách quảng cáo</strong> trên Google, Facebook, TikTok, Bing và native — với ROI trung bình mỗi chiến dịch là <strong>350%</strong>.',
      p3: 'Theo thời gian, chúng tôi xây dựng hai media property sở hữu — <em>ReviewKing</em> và <em>TsunamiHub</em> — tạo ra tầm với publisher mà hầu hết agency chỉ có thể thuê. Ngày nay, hai mạng lưới này khuếch đại mọi chương trình affiliate Seven vận hành, cho phép đối tác tiếp cận đối tượng được chúng tôi tự xây dựng.'
    },

    about_mvv: {
      eyebrow:   'Chúng tôi đứng về điều gì',
      title:     'Sứ mệnh, tầm nhìn và <span class="accent">giá trị</span> đứng sau cả hai.',
      mission_h: 'Sứ mệnh',
      mission_sh:'Giúp các thương hiệu tối đa hoá thu hút khách hàng bằng chiến lược dữ liệu-dẫn-đường.',
      mission_p: 'Mọi thương hiệu đều cần khách hàng. Chúng tôi tồn tại để mang họ đến — qua marketing hiệu quả, các quan hệ đối tác cộng dồn theo thời gian, và những kênh được kiểm chứng trước khi đề xuất.',
      vision_h:  'Tầm nhìn',
      vision_sh: 'Trở thành thương hiệu hàng đầu thế giới về affiliate marketing và quảng cáo số.',
      vision_p:  'Đích đến cuối cùng là Tự do — cho Đối tác, cho hội viên, và cho cả đội ngũ phục vụ họ. Những mối quan hệ dài hạn đo bằng thập kỷ.',
      values_h:  'Giá trị',
      values_sh: '"Chúng tôi không có khách hàng, chỉ có Đối tác." Cùng thắng — hoặc không bắt đầu.',
      values_p:  'Chính trực, tay nghề, và kết quả thay vì sản lượng. Bảo mật như phản xạ. Dài hơi hơn ồn ào.'
    },

    about_lead: {
      eyebrow: 'Ban lãnh đạo',
      title:   'Những người sẽ <span class="accent">nhấc máy cho bạn</span>.',
      n1: 'Đông Phong', r1: 'Nhà sáng lập &amp; CEO',
      b1: 'Khởi xướng Seven năm 2018. Dẫn dắt chiến lược affiliate, quan hệ đối tác, và định hướng phát triển toàn bộ agency.',
      n2: 'Kim Chi',    r2: 'Giám đốc Marketing',
      b2: 'Phụ trách thương hiệu, nội dung và performance — đưa chiến dịch affiliate từ thiết lập offer đến quy mô paid media.',
      n3: 'Tuấn Anh',   r3: 'Giám đốc Vận hành',
      b3: 'Điều hành mảng affiliate — đối tác, tracking, và vận hành mỗi ngày để các chiến dịch đi đến đích đúng hạn.',
      n4: 'Quốc Trường',r4: 'Tech &amp; Analytics',
      b4: 'Phụ trách hạ tầng dữ liệu — attribution, tracking, và tối ưu chiến dịch bằng AI.'
    },

    about_princ: {
      eyebrow: 'Cách chúng tôi làm việc',
      title:   'Sáu nguyên tắc cho <span class="accent">mọi hợp tác</span>.',
      p1_h: '1 · Đối tác, không phải khách hàng',
      p1_p: 'Cụm từ này không phải để trang trí. Nó chi phối cách Seven định giá, giao tiếp, và cư xử khi chiến dịch chưa hiệu quả.',
      p2_h: '2 · Người dày dạn trực tiếp làm',
      p2_p: 'Founder và giám đốc trực tiếp làm chiến lược và review từng chiến dịch. Không có lớp junior "học việc" trên ngân sách của bạn.',
      p3_h: '3 · Đo đúng thứ cần đo',
      p3_p: 'Trước khi tiêu một đồng nào của bạn, chúng tôi xác định con số quan trọng nhất — và chỉ ăn mừng khi con số đó chạy.',
      p4_h: '4 · Kín tiếng về công việc của bạn',
      p4_p: 'Thương hiệu, offer, và đối tác đi qua văn phòng Seven mỗi tuần. Bảo mật là phản xạ — không phải chính sách.',
      p5_h: '5 · Dài hơi thay vì ồn ào',
      p5_p: 'Chúng tôi chọn Đối tác mình kỳ vọng làm việc cùng cả thập kỷ. Hầu hết tài khoản affiliate lớn nhất hiện nay đều bắt đầu nhỏ và lớn lên cùng Seven.',
      p6_h: '6 · Tầm với sở hữu hơn tầm với đi thuê',
      p6_p: 'Chúng tôi đầu tư vào mạng truyền thông của chính mình để chiến dịch của bạn chạy trên các kênh có authority thực — không chỉ media đi mua từ người khác.'
    },

    about_miles: {
      eyebrow: 'Các cột mốc tăng trưởng',
      title:   'Bảy năm làm việc, <span class="accent">đo được</span>.',
      lede:    'Từ một thử nghiệm Google Ads đơn lẻ đến một agency affiliate chuyên biệt vận hành hơn 10 triệu USD ngân sách tại SEA, châu Âu và Bắc Mỹ.',
      m1_h: 'Khởi đầu',
      m1_p: 'Khám phá Google Ads và các phương pháp paid traffic. Những thử nghiệm affiliate độc lập đầu tiên.',
      m2_h: 'Google Ads Agency Partner',
      m2_p: 'Trở thành Google Ads Agency Partner — hỗ trợ trực tiếp từ nền tảng, quyền dùng beta, và dữ liệu attribution tier-1.',
      m3_h: 'Thành lập Seven World Ltd.',
      m3_p: 'Thành lập Công ty TNHH Seven World. Hợp tác với các chương trình affiliate lớn trong mảng crypto, forex và e-commerce. Doanh thu vượt 2,5 triệu USD.',
      m4_h: 'Mở rộng toàn cầu',
      m4_p: 'Mở rộng sang châu Âu và Bắc Mỹ. Tăng gấp đôi mạng lưới affiliate, ra mắt ReviewKing — mạng truyền thông sở hữu đầu tiên.',
      m5_h: 'Vận hành 10M+ ngân sách',
      m5_p: 'Vận hành hơn 10 triệu USD ngân sách quảng cáo, duy trì ROI trung bình 350%, ra mắt TsunamiHub — mạng truyền thông sở hữu thứ hai.',
      m6_year: 'Hôm nay',
      m6_h: 'Affiliate-first, media sở hữu',
      m6_p: 'Một agency affiliate chuyên biệt với hai mạng truyền thông sở hữu và một bộ phận quảng cáo performance đầy đủ — tất cả từ Đà Nẵng.'
    },

    about_nums: {
      eyebrow: 'Theo số liệu',
      title:   'Bảy năm làm việc, <span class="accent">đo được</span>.',
      l1: 'Năm thành lập',
      l2: 'Ngân sách đã vận hành',
      l3: 'ROI trung bình',
      l4: 'Mạng truyền thông sở hữu'
    },

    about_charts: {
      eyebrow: 'Tăng trưởng theo số liệu',
      title:   'Bảy năm <span class="accent">tích lũy kết quả</span>.',
      lede:    'Từ những thử nghiệm năm đầu đến hơn 10 triệu USD ngân sách quản lý — mỗi năm đều xây dựng trên nền của năm trước.',
      c1_eyebrow: 'Ngân sách quảng cáo quản lý',
      c1_title:   'Tăng trưởng ngân sách theo năm, USD',
      roi_eyebrow: 'Hiệu suất chiến dịch',
      roi_title:   'ROI trung bình chiến dịch',
      roi_desc:    'Đo trên các kênh affiliate, Google, Facebook và TikTok — duy trì ổn định qua 6+ năm.',
      rev_eyebrow: 'Các cột mốc doanh thu',
      rev1_l: 'Doanh thu 2021',
      rev2_l: 'Ad spend 2024',
      rev3_l: 'Khách hàng đã tiếp cận'
    },

    about_cta: {
      eyebrow: 'Hợp tác với Seven',
      title:   'Bắt đầu cuộc trò chuyện với <span class="accent">một đối tác cấp cao</span>.',
      lede:    'Kể cho Seven nghe về thương hiệu, offer hay mục tiêu acquisition của bạn. Chúng tôi phản hồi trong vòng một ngày làm việc.',
      quote:   '"Chúng tôi không có khách hàng, chỉ có Đối tác. Cùng thắng là mục đích cuối cùng để duy trì một mối hợp tác dài hạn và hiệu quả."',
      q_name:  'Đông Phong',
      q_role:  'Nhà sáng lập &amp; CEO'
    },

    services_page: {
      eyebrow: 'Chúng tôi làm gì',
      title:   'Affiliate marketing.<br/><span class="accent">Performance-first</span>.',
      lede:    'Từ quản lý mạng affiliate, paid media đến kênh truyền thông sở hữu — tất cả dưới một mái nhà, một đội ngũ chịu trách nhiệm với kết quả thực.',
      crumb:   'Dịch vụ'
    },

    svc_overview: {
      mk_sub: 'Affiliate · Performance · Nội dung',
      re_sub: 'Google · Facebook · TikTok · Native',
      co_sub: 'ReviewKing · TsunamiHub'
    },

    svc_mk: {
      badge: 'Lĩnh vực chính',
      title: 'Agency Marketing.',
      lede:  'Quản lý chiến dịch trọn gói trên Google, Facebook, Bing, TikTok và native — được tối ưu bằng AI và dữ liệu để thu hút và giữ chân khách hàng với chi phí hiệu quả. Đã vận hành hơn <strong>10 triệu USD ngân sách quảng cáo</strong>. ROI trung bình mỗi chiến dịch <strong>350%</strong>.',
      s1: 'Mạng lưới affiliate marketing',
      s2: 'Google &amp; Bing Ads',
      s3: 'Meta / Facebook / Instagram',
      s4: 'TikTok Ads &amp; hợp tác creator',
      s5: 'Native advertising',
      s6: 'Content marketing &amp; SEO',
      s7: 'Landing page &amp; CRO',
      s8: 'Attribution &amp; analytics',
      cta_primary:   'Khởi tạo hợp tác',
      cta_secondary: 'Yêu cầu hồ sơ năng lực'
    },

    svc_kpi: {
      eyebrow: 'Vì sao chọn Seven',
      title:   'Những con số khiến Đối tác <span class="accent">quay lại</span>.',
      l1: 'Ngân sách đã vận hành · ROI trung bình 350%',
      l2: 'Người dùng toàn cầu tiếp cận',
      l3: 'Google Ads Agency Partner',
      l4: 'Brand safety &amp; tuân thủ'
    },

    svc_hybrid: {
      eyebrow: 'Phương pháp độc quyền của Seven',
      title:   'Chiến lược <span class="accent">Hybrid Ad</span>.',
      lede:    'Quan hệ đối tác affiliate kết hợp với paid media được nhắm chính xác — mỗi kênh khuếch đại kênh kia để tạo ra chuyển đổi mà từng kênh đơn lẻ không thể đạt được.',
      concept_eyebrow: 'Khái niệm',
      concept_h: 'Mạng affiliate gặp ý định paid media.',
      concept_p: 'Đối tác affiliate tạo niềm tin và lưu lượng inbound có ý định cao. Paid media nhân rộng nguồn inbound đó đến đúng đối tượng với đúng chi phí. Không kênh nào hoạt động cô lập.',
      s1: 'Inbound từ đối tác + khuếch đại paid',
      s2: 'Attribution xuyên kênh',
      s3: 'Tối ưu đấu giá &amp; ngân sách bằng AI',
      s4: 'Liên tục thử nghiệm phễu chuyển đổi',
      proof_eyebrow: 'Hiệu quả thực tế · 2024 – Hiện tại',
      proof_h: 'Chương trình Hybrid Forex &amp; Crypto.',
      kpi1: 'Đầu tư',
      kpi2: 'Khách hàng thu được',
      kpi3: 'ROI đạt được'
    },

    svc_cases: {
      eyebrow: 'Case studies',
      title:   'Hiệu quả <span class="accent">ngoài thực địa</span>.',
      c1_badge: 'Paid Advertising · 02/2024 – Hiện tại',
      c1_h: 'Hiệu quả Derive Google Ads',
      c1_p: 'Chương trình Google Ads được tối ưu phễu — chi phí CPA thấp nhất có thể, không hy sinh chất lượng khách hàng.',
      c1_s1: 'Tiếp cận dự kiến: 7–10 triệu người dùng / năm',
      c1_s2: 'Lượt đăng ký dự kiến: 54K–150K mỗi năm',
      c1_s3: 'Chi phí mỗi khách hàng (CPA): $15–$45',
      c1_s4: 'Tối ưu phễu liên tục để giảm chi phí mà không giảm giá trị',
      c2_badge: 'Affiliate · 03/2025 – 03/2026',
      c2_h: 'Chương trình Affiliate LashByMaya',
      c2_p: 'Chương trình affiliate ngành làm đẹp được triển khai qua mạng lưới truyền thông ReviewKing — định giá theo hiệu quả, attribution đầy đủ.',
      c2_s1: 'Đầu tư: $48,000',
      c2_s2: 'Đơn hàng mới: 5,200',
      c2_s3: 'Doanh thu tác động: $322K',
      c2_s4: 'Kênh: nội dung ReviewKing.info + social'
    },

    svc_pm: {
      badge: 'Paid media',
      title: 'Quảng cáo Performance.',
      lede:  'Quản lý paid media toàn diện trên mọi nền tảng — Google, Facebook, TikTok, Bing và native network. Tối ưu bid bằng AI, kiểm thử creative liên tục và attribution đa kênh để đạt CPA mục tiêu.',
      s1: 'Google Ads &amp; Bing Ads',
      s2: 'Meta (Facebook &amp; Instagram)',
      s3: 'TikTok Ads',
      s4: 'Native advertising (Outbrain, Taboola)',
      s5: 'Tối ưu bid bằng AI',
      s6: 'Kiểm thử &amp; cải tiến creative',
      s7: 'Attribution đa kênh',
      s8: 'Landing page &amp; CRO',
      cta_primary:   'Bắt đầu chiến dịch',
      cta_secondary: 'Yêu cầu bản năng lực'
    },

    svc_traffic: {
      eyebrow: 'Nguồn lưu lượng',
      title:   'Sáu kênh chúng tôi vận hành — <span class="accent">phối hợp</span>, không rời rạc.',
      t1_h: 'Quảng cáo Search',
      t1_p: 'Chiến dịch nhắm mục tiêu trên Google Ads và Bing Ads — từ khoá đặc thù ngành thể hiện ý định mua hàng cao.',
      t2_h: 'Content &amp; SEO',
      t2_p: 'Mạng blog ngách, website nội dung và guest post trên các tên miền uy tín — trọng tâm finance, crypto, e-commerce.',
      t3_h: 'Influencer &amp; cộng đồng',
      t3_p: 'Các creator đáng tin cậy và cộng đồng ngách giúp mở rộng tiếp cận và xây dựng uy tín — nơi ads đơn lẻ không làm được.',
      t4_h: 'Social Media Ads',
      t4_p: 'Chiến dịch paid trên Meta (Facebook &amp; Instagram), TikTok và Twitter / X — tinh chỉnh theo nhân khẩu học và ý định.',
      t5_h: 'Native &amp; Programmatic',
      t5_p: 'Outbrain, Taboola, RevContent và các vị trí native hiệu suất cao khác — được tối ưu cho chuyển đổi.',
      t6_h: 'Email &amp; Retargeting',
      t6_p: 'Danh sách email whitelisted và các nhóm remarketing được khơi lại bằng creative khớp ý định để đóng vòng chuyển đổi.'
    },

    svc_ch: {
      eyebrow: 'Kênh sở hữu',
      title:   'Truyền thông chúng tôi dựng — <span class="accent">audience chúng tôi sở hữu</span>.',
      lede:    'Mạng lưới ReviewKing của Seven phụ trách các chiến dịch affiliate cho sản phẩm vật lý và số — trong các ngành làm đẹp, công nghệ và tiêu dùng.',
      c1_tag: 'Biên tập &amp; review',
      c1_p:   'Nền tảng review dựa trên nghiên cứu cho sản phẩm công nghệ và tiêu dùng — tăng độ tin cậy thương hiệu và chuyển đổi.',
      c2_tag: 'Facebook Page',
      c2_p:   'Nội dung review dài và hợp tác creator cho các thương hiệu làm đẹp và lifestyle.',
      c3_tag: 'Facebook Group',
      c3_p:   'Cộng đồng tương tác cao để khám phá sản phẩm, thread review và giới thiệu sản phẩm theo cơ chế affiliate.',
      c4_tag: 'Kênh YouTube',
      c4_p:   'Review video và unbox sản phẩm — biến ý định mua thành hành động.',
      c5_tag: 'Instagram',
      c5_p:   'Review dạng ngắn, hợp tác creator, và các post sản phẩm có thể mua được.',
      c6_tag: 'Mạng truyền thông performance',
      c6_p:   'Mạng truyền thông thứ hai của Seven — tập trung vào finance, crypto và các thương hiệu giai đoạn tăng trưởng.',
      cta_visit:    'Vào website →',
      cta_fanpage:  'Vào Fanpage →',
      cta_group:    'Vào Group →',
      cta_yt:       'Xem trên YouTube →',
      cta_ig:       'Theo dõi Instagram →',
      cta_visit2:   'Vào website →'
    },

    svc_proc: {
      eyebrow: 'Quy trình hợp tác',
      title:   'Một hợp tác với Seven <span class="accent">bắt đầu thế nào</span>.',
      s1_h: 'Discovery call',
      s1_p: 'Một cuộc trò chuyện ngắn với đối tác cấp cao. Cùng nhìn nhận điều gì khả thi và điều gì không.',
      s2_h: 'Phạm vi &amp; brief',
      s2_p: 'Cùng soạn brief một trang — chỉ rõ kết quả mong muốn, chỉ số đo, và ràng buộc.',
      s3_h: 'Đề xuất &amp; khởi động',
      s3_p: 'Đề xuất rõ ràng — phạm vi, đội ngũ, mốc thời gian, phí. Khởi động trong 1–2 tuần.',
      s4_h: 'Nhịp làm việc hàng tuần',
      s4_p: 'Working session hàng tuần, review hàng tháng, và định nghĩa rõ ràng thế nào là "xong".',
      footer: 'Engagement điển hình kéo dài từ dự án ngắn 8 tuần đến retainer dài 12 tháng trở lên.'
    },

    svc_cta: {
      eyebrow: 'Sẵn sàng bắt đầu',
      title:   'Sẵn sàng mở rộng <span class="accent">chương trình affiliate</span> của bạn?',
      lede:    'Một đối tác cấp cao sẽ phản hồi và đề xuất bước tiếp theo trong vòng một ngày làm việc.',
      why_btn: 'Vì sao chọn Seven →',
      quote:   '"Chương trình affiliate của họ mang về 5.200 đơn hàng trong 12 tháng. Dữ liệu rõ ràng, kênh là của chúng tôi."',
      q_name:  'Maya Trần',
      q_role:  'Founder, LashByMaya'
    },

    why_page: {
      eyebrow: 'Vì sao Seven',
      title:   'Lý do Đối tác<br/><span class="accent">ở lại nhiều năm</span>.',
      lede:    'Chọn đúng đối tác là một bước đặt niềm tin. Đây là cách Seven xứng đáng với niềm tin đó — và những gì bạn có thể kỳ vọng trong 90 ngày đầu hợp tác.',
      crumb:   'Vì sao Seven'
    },

    why_diff: {
      eyebrow: 'Điều khiến Seven khác biệt',
      title:   'Sáu điều bạn sẽ <span class="accent">nhận ra</span> sau ba tháng.',
      d1_h: 'Hiệu quả — có chứng minh',
      d1_p: 'Hơn 10 triệu USD ngân sách quảng cáo đã vận hành và ROI trung bình mỗi chiến dịch là 350%. Đây là số liệu, không phải lời hứa — chúng tôi sẽ chia sẻ dữ liệu cấp chiến dịch ngay từ cuộc gọi đầu tiên.',
      d2_h: 'Đối tác, không phải khách hàng',
      d2_p: 'Mô hình của Seven là cùng thắng — bạn lớn, chúng tôi lớn. Mỗi hợp tác đều bắt đầu từ chỉ số quan trọng nhất với bạn, và chúng tôi được trả công để dịch chuyển chỉ số đó.',
      d3_h: 'Tối ưu bằng AI',
      d3_p: 'Media buying dẫn-đường-bởi-dữ-liệu — càng chạy càng rẻ và càng thông minh khi chiến dịch trưởng thành. Được tích hợp vào mọi account ngay từ ngày một.',
      d4_h: 'Ba lĩnh vực, một đội',
      d4_p: 'Tư vấn thương hiệu, tài sản và mạng lưới — từ một đối tác tin cậy duy nhất. Các chiến lược bổ trợ cho nhau, không tranh giành lẫn nhau.',
      d5_h: 'Quy trình kỷ luật',
      d5_p: 'Phạm vi rõ ràng, báo cáo minh bạch, nhịp làm việc hàng tuần — không bí ẩn, không scope creep, không bất ngờ.',
      d6_h: 'Kín tiếng &amp; tin cậy',
      d6_p: 'Chúng tôi xử lý các thương vụ nhạy cảm và việc xoay trục thương hiệu. Bảo mật và phán đoán là phần của mọi hợp tác.',
      n1: 'Năm thành lập',
      n2: 'Ngân sách đã vận hành',
      n3: 'ROI trung bình mỗi chiến dịch',
      n4: 'Lĩnh vực, một đội'
    },

    why_compare: {
      eyebrow: 'So sánh khách quan',
      title:   'Seven nằm ở đâu trong <span class="accent">danh sách lựa chọn</span> của bạn.',
      lede:    'Seven không rẻ nhất, không lớn nhất, không ồn ào nhất. Đây là cách nhìn thẳng thắn về việc Seven so với những lựa chọn phổ biến khác mà các đối tác thường cân nhắc.',
      c1_label: 'Network agency lớn',
      c1_h: 'To hơn, chậm hơn, người làm thực tế là junior.',
      c1_p: 'Quy trình mạnh và thương hiệu lớn — nhưng phần lớn công việc hằng ngày rơi vào tay đội junior. Phù hợp với enterprise hơn là doanh nghiệp do founder dẫn dắt.',
      c2_label: 'Seven World',
      c2_h: 'Đội affiliate chuyên biệt. Senior trực tiếp, một trọng tâm.',
      c2_p: 'Đối tác cấp cao trực tiếp làm, nhịp làm việc hàng tuần, và tiếp cận affiliate, paid media và owned channels trong một mối quan hệ. Dành cho brand muốn tăng trưởng đo được.',
      c3_label: 'Freelancer &amp; boutique',
      c3_h: 'Sắc bén, hẹp, không liên tục.',
      c3_p: 'Xuất sắc trong một mảng cụ thể — nhưng bạn sẽ phải tự ghép chiến lược, thiết kế, media và analytics lại với nhau.',
      c4_label: 'Đội in-house',
      c4_h: 'Có năng lực, nhưng bị giới hạn bởi nhân sự.',
      c4_p: 'Tốt cho công việc brand thường xuyên — nhưng mở rộng ngân sách paid và affiliate network đòi hỏi chiều sâu chuyên môn mà hầu hết đội in-house không có.'
    },

    why_days: {
      eyebrow: 'Bạn nên kỳ vọng gì',
      title:   '<span class="accent">Chín mươi ngày</span> đầu tiên với Seven.',
      d1_h: 'Ngày 1–30 · Lắng nghe &amp; lập bản đồ',
      d1_p: 'Tháng đầu Seven dùng để hiểu doanh nghiệp — khách hàng, tài chính, đối thủ, ngữ cảnh nội bộ — trước khi đề xuất bất kỳ điều gì có trọng lượng.',
      d2_h: 'Ngày 31–60 · Định nghĩa &amp; cam kết',
      d2_p: 'Cùng nhau soạn chiến lược và chỉ số đo thành công. Đến ngày thứ 60, cả hai bên biết chính xác đang dịch chuyển điều gì và đo lường ra sao.',
      d3_h: 'Ngày 61–90 · Thực thi &amp; học',
      d3_p: 'Công việc đi live. Họp tuần, báo cáo tháng, và điều chỉnh dựa trên dữ liệu thực sự đang nói — không phải dữ liệu ta mong nó nói.'
    },

    why_voices: {
      eyebrow: 'Họ nói gì',
      title:   'Những người chọn <span class="accent">ở lại với Seven</span>.',
      q1: 'Năm năm rồi mà khi có việc lớn, chúng tôi vẫn nhấc điện thoại gọi cho Seven đầu tiên. Điều đó nói lên tất cả.',
      n1: 'Minh Trần', r1: 'CEO, Habitat Living',
      q2: 'Họ từ chối nhận việc khi nghĩ chúng tôi sẽ được phục vụ tốt hơn ở chỗ khác. Sự thẳng thắn đó xứng đáng với mười hợp tác kế tiếp.',
      n2: 'Hoàng Nguyễn', r2: 'Đại diện Family Office',
      q3: 'ReviewKing đưa thương hiệu chúng tôi đến đúng đối tượng. Organic và chuyển đổi thực — hơn bất kỳ kênh paid nào chúng tôi đã thử.',
      n3: 'Linh Phạm', r3: 'Giám đốc Marketing, FinanceEdge SEA'
    },

    why_cta: {
      eyebrow: 'Bước tiếp theo',
      title:   'Một cuộc trò chuyện ngắn là <span class="accent">phép thử tốt nhất</span>.',
      lede:    'Dành 30 phút với một đối tác cấp cao. Bạn sẽ rời cuộc gọi với cái nhìn rõ ràng hơn về vấn đề của mình — và cảm nhận tốt hơn liệu Seven có phải là nơi phù hợp.',
      book_btn: 'Đặt lịch gọi',
      see_btn:  'Xem dịch vụ',
      quote:    '"Cuộc gọi đầu tiên đã đáng giá bằng cả engagement."',
      q_name:   'Hoàng Nguyễn',
      q_role:   'Đại diện Family Office'
    },

    contact_page: {
      eyebrow: 'Liên hệ',
      title:   'Bắt đầu <span class="accent">một cuộc trò chuyện</span>.',
      lede:    'Kể cho Seven nghe về thương hiệu, tài sản, hay khát vọng của bạn. Một đối tác cấp cao sẽ phản hồi trong vòng một ngày làm việc.',
      crumb:   'Liên hệ'
    },

    contact_reach: {
      eyebrow: 'Cách liên hệ',
      title:   'Ba cách để <span class="accent">bắt đầu</span>.',
      lede:    'Cách nào tiện nhất với bạn — Seven đọc mọi tin nhắn và phản hồi trực tiếp.',
      l1_title: 'Liên hệ chung',
      l1_bd:    'Phát triển kinh doanh',
      l2_title: 'Gọi điện hoặc nhắn tin',
      l3_title: 'Ghé văn phòng',
      l3_addr:  '145 Lê Văn Duyệt, phường Nại Hiên Đông,<br/>quận Sơn Trà, thành phố Đà Nẵng',
      hours_title: 'Giờ làm việc',
      hours_p:     'Thứ 2 – Thứ 6 · 9:00 – 18:00 (giờ Việt Nam)<br/>Cuối tuần theo lịch hẹn'
    },

    contact_form: {
      eyebrow: 'Gửi tin nhắn',
      title:   'Kể cho Seven nghe về dự án của bạn.',
      name:    'Họ và tên',           name_ph:    'Tên của bạn',
      email:   'Email',               email_ph:   'ban@congty.com',
      company: 'Công ty',             company_ph: 'Tên công ty',
      phone:   'Số điện thoại (tuỳ chọn)',
      interest: 'Tôi quan tâm tới',
      interest_default: 'Chọn một dịch vụ',
      interest_mk: 'Affiliate Marketing',
      interest_re: 'Quảng cáo Performance',
      interest_co: 'Kênh truyền thông sở hữu',
      interest_other: 'Khác',
      budget:  'Ngân sách (tuỳ chọn)',
      budget_default: 'Chọn nếu phù hợp',
      budget_1: 'Dưới 10,000 USD',
      budget_2: '10,000 – 50,000 USD',
      budget_3: '50,000 – 200,000 USD',
      budget_4: 'Trên 200,000 USD',
      budget_5: 'Muốn trao đổi thêm',
      message: 'Seven có thể giúp gì?',
      message_ph: 'Vài câu mô tả về dự án hoặc mục tiêu của bạn.',
      submit:  'Gửi tin nhắn',
      footnote: 'Seven phản hồi trong vòng một ngày làm việc. Tin nhắn của bạn được một đối tác đọc trực tiếp, không phải chatbot.'
    },

    contact_faq: {
      eyebrow: 'Câu hỏi thường gặp',
      title:   'Trước khi bạn <span class="accent">gửi tin nhắn</span>.',
      q1_h: 'Seven phản hồi trong bao lâu?',
      q1_p: 'Trong vòng một ngày làm việc, do một đối tác trực tiếp xử lý — không phải nhân viên quản lý hộp thư. Phần lớn tin nhắn nhận được phản hồi có nội dung ngay trong buổi chiều cùng ngày.',
      q2_h: 'Seven làm việc với doanh nghiệp quy mô nào?',
      q2_p: 'Chủ yếu là doanh nghiệp do founder dẫn dắt, doanh thu từ 2 đến 50 triệu USD. Seven cũng làm việc với family office, chủ đầu tư, và một số đội enterprise được chọn lọc.',
      q3_h: 'Seven có làm việc ngoài Việt Nam không?',
      q3_p: 'Có — Seven quản lý affiliate program và paid media cho brand khắp Đông Nam Á. Đà Nẵng là trụ sở nhưng công việc mang tính khu vực.',
      q4_h: 'Tôi có thể hợp tác qua ReviewKing hay TsunamiHub không?',
      q4_p: 'Có — brand đủ tiêu chí có thể được đăng tải trên mạng lưới media sở hữu của chúng tôi với chi phí kiểu affiliate. Hãy đề cập điều này khi liên hệ.'
    },

    privacy_page: {
      eyebrow: 'Pháp lý',
      title:   'Chính sách <span class="accent">bảo mật</span>.',
      lede:    'Cách Công ty TNHH Seven thu thập, sử dụng, lưu trữ và bảo vệ thông tin bạn chia sẻ.',
      updated: 'Cập nhật lần cuối:',
      crumb:   'Chính sách bảo mật'
    },
    privacy_body: {
      html: `
        <h2>1. Chúng tôi là ai</h2>
        <p>Công ty TNHH Seven World ("Seven", "chúng tôi") là agency affiliate marketing chuyên biệt có trụ sở tại 145 Lê Văn Duyệt, phường Nại Hiên Đông, quận Sơn Trà, thành phố Đà Nẵng, Việt Nam. Chính sách này mô tả cách Seven xử lý thông tin cá nhân của khách truy cập, Đối tác và khách hàng.</p>
        <p>Câu hỏi về chính sách này hoặc dữ liệu của bạn có thể gửi tới <a href="mailto:contact@sevenworld.net">contact@sevenworld.net</a>.</p>

        <h2>2. Thông tin Seven thu thập</h2>
        <p>Chúng tôi thu thập tối thiểu những thông tin cần thiết để cung cấp dịch vụ:</p>
        <ul>
          <li><strong>Thông tin liên hệ</strong> — tên, email, số điện thoại và công ty bạn cung cấp qua biểu mẫu hoặc thư từ.</li>
          <li><strong>Thông tin engagement</strong> — chi tiết chương trình affiliate, brief chiến dịch, hoặc yêu cầu đặt quảng cáo trên media bạn gửi cho Seven.</li>
          <li><strong>Dữ liệu sử dụng website</strong> — trang đã xem, nguồn dẫn vào, vị trí gần đúng (cấp thành phố), và thông tin thiết bị cơ bản. Dùng để hiểu lưu lượng và cải thiện website.</li>
          <li><strong>Dữ liệu marketing &amp; chiến dịch</strong> — với Đối tác quảng cáo, chúng tôi có thể xử lý dữ liệu hiệu suất chiến dịch theo dạng tổng hợp thay bạn, theo một thoả thuận riêng.</li>
        </ul>

        <h2>3. Cách Seven sử dụng</h2>
        <ul>
          <li>Để phản hồi yêu cầu và vận hành engagement.</li>
          <li>Để gửi cập nhật phù hợp nếu bạn đã đồng ý nhận.</li>
          <li>Để cải thiện website và dịch vụ qua phân tích tổng hợp.</li>
          <li>Để tuân thủ nghĩa vụ pháp lý, kế toán và thuế.</li>
        </ul>
        <p>Seven không bán thông tin của bạn cho bên thứ ba.</p>

        <h2>4. Cách Seven chia sẻ</h2>
        <p>Chúng tôi chỉ chia sẻ thông tin với: (a) các nhà cung cấp dịch vụ tin cậy đang hợp đồng giúp triển khai công việc (ví dụ analytics, email, hosting, thanh toán); (b) các nền tảng quảng cáo chỉ để chạy chiến dịch bạn đã uỷ quyền; và (c) cơ quan chức năng theo yêu cầu của pháp luật.</p>

        <h2>5. Cookie &amp; analytics</h2>
        <p>Website Seven dùng cookie thiết yếu cho chức năng và có thể dùng cookie analytics để hiểu lưu lượng. Bạn có thể tắt cookie không thiết yếu trong trình duyệt mà không mất chức năng cốt lõi.</p>

        <h2>6. Cách Seven lưu trữ &amp; bảo vệ</h2>
        <p>Thông tin cá nhân được lưu trên hệ thống có kiểm soát truy cập với các biện pháp bảo vệ theo tiêu chuẩn ngành. Seven chỉ lưu trong thời gian cần thiết cho mục đích thu thập, cộng thêm thời gian luật Việt Nam yêu cầu.</p>

        <h2>7. Quyền của bạn</h2>
        <p>Bạn có quyền, vào bất kỳ thời điểm nào:</p>
        <ul>
          <li>Yêu cầu bản sao thông tin Seven đang lưu về bạn.</li>
          <li>Yêu cầu Seven sửa hoặc xoá thông tin.</li>
          <li>Rút lại sự đồng ý nhận thông tin marketing.</li>
          <li>Khiếu nại với cơ quan chức năng Việt Nam có thẩm quyền.</li>
        </ul>
        <p>Gửi mọi yêu cầu trên tới <a href="mailto:contact@sevenworld.net">contact@sevenworld.net</a>.</p>

        <h2>8. Trẻ em</h2>
        <p>Dịch vụ Seven không hướng tới người dưới 16 tuổi và Seven không cố ý thu thập thông tin của họ.</p>

        <h2>9. Thay đổi chính sách</h2>
        <p>Seven có thể cập nhật chính sách khi dịch vụ phát triển. Thay đổi có ý nghĩa sẽ được nêu rõ trên trang này và ghi ngày ở trên.</p>

        <h2>10. Tuyên bố tuân thủ quảng cáo</h2>
        <p>Seven tuân thủ các yêu cầu công bố của FTC, điều khoản của các chương trình affiliate, và chính sách quảng cáo áp dụng trên các nền tảng đang vận hành (Google, Meta, TikTok, Bing và các mạng native).</p>
        <ul>
          <li>Mọi vị trí affiliate Seven đăng đều được công bố rõ ràng.</li>
          <li>Seven không dùng spam, các tuyên bố gây hiểu lầm, hay nguồn lưu lượng bị cấm.</li>
          <li>Seven tuân thủ điều khoản của chương trình đối tác về phương thức quảng bá, attribution window và các từ khoá bị cấm.</li>
          <li>Chiến dịch được giám sát 24/7 về brand-safety và tuân thủ.</li>
        </ul>
        <p>Mọi vấn đề tuân thủ, yêu cầu gỡ nội dung hoặc câu hỏi về chương trình đối tác có thể gửi tới <a href="mailto:contact@sevenworld.net">contact@sevenworld.net</a>.</p>
      `
    },
    terms_page: {
      eyebrow: 'Pháp lý',
      title:   'Điều khoản <span class="accent">dịch vụ</span>.',
      lede:    'Thoả thuận giữa bạn và Công ty TNHH Seven khi sử dụng website này cùng các dịch vụ liên quan.',
      updated: 'Cập nhật lần cuối:',
      crumb:   'Điều khoản dịch vụ'
    },
    terms_body: {
      html: `
        <h2>1. Chấp nhận điều khoản</h2>
        <p>Bằng việc truy cập hoặc sử dụng <a href="https://sevenworld.net">sevenworld.net</a> ("Website") hoặc bất kỳ dịch vụ nào do Công ty TNHH Seven ("Seven", "chúng tôi") cung cấp, bạn đồng ý tuân thủ Điều khoản này. Nếu không đồng ý, vui lòng không sử dụng Website hoặc dịch vụ.</p>

        <h2>2. Về Seven World</h2>
        <p>Công ty TNHH Seven World là một công ty đăng ký tại thành phố Đà Nẵng, Việt Nam, cung cấp dịch vụ affiliate marketing, quảng cáo performance và media sở hữu. Trụ sở đăng ký tại 145 Lê Văn Duyệt, phường Nại Hiên Đông, quận Sơn Trà, thành phố Đà Nẵng.</p>

        <h2>3. Cách sử dụng Website</h2>
        <ul>
          <li>Bạn có thể sử dụng Website cho các mục đích hợp pháp, cá nhân và kinh doanh phù hợp với Điều khoản này.</li>
          <li>Bạn đồng ý không cố tình truy cập trái phép, làm gián đoạn dịch vụ, sao chép nội dung để bán lại, hay mạo danh Seven hoặc đại diện của Seven.</li>
          <li>Seven giữ quyền tạm ngừng hoặc hạn chế truy cập nếu điều khoản này bị vi phạm.</li>
        </ul>

        <h2>4. Dịch vụ &amp; hợp tác</h2>
        <p>Mọi công việc Seven thực hiện cho bạn — chiến dịch affiliate, quản lý paid media, đặt quảng cáo trên media sở hữu, hay khác — được điều chỉnh bằng một engagement letter hoặc service order riêng, trong đó nêu rõ phạm vi, phí, sản phẩm bàn giao và bảo mật. Điều khoản này không tự động tạo ra nghĩa vụ dịch vụ.</p>

        <h2>5. Sở hữu trí tuệ</h2>
        <p>Toàn bộ nội dung trên Website (text, hình ảnh, logo, ảnh chụp, code và thiết kế) thuộc sở hữu của Công ty TNHH Seven hoặc được cấp phép cho Seven. Bạn không được sao chép, sửa đổi, phân phối lại hay sử dụng bất kỳ phần nào của Website cho mục đích thương mại khi chưa có sự đồng ý trước bằng văn bản.</p>
        <p>Sản phẩm bàn giao theo một engagement được điều chỉnh bởi điều khoản IP trong engagement letter đó, không phải điều khoản này.</p>

        <h2>6. Miễn trừ trách nhiệm</h2>
        <p>Website và nội dung được cung cấp "nguyên trạng" và "có sẵn". Các con số dẫn ra (ví dụ ROI chiến dịch trong quá khứ) phản ánh kết quả đã đạt được và không phải là bảo đảm cho hiệu suất tương lai.</p>

        <h2>7. Giới hạn trách nhiệm</h2>
        <p>Trong phạm vi tối đa pháp luật Việt Nam cho phép, Seven không chịu trách nhiệm cho các tổn thất gián tiếp, ngẫu nhiên, đặc biệt hay hệ quả phát sinh từ việc bạn sử dụng Website. Trách nhiệm theo bất kỳ engagement nào được giới hạn theo các điều khoản của hợp đồng engagement đó.</p>

        <h2>8. Liên kết bên thứ ba</h2>
        <p>Website có thể dẫn tới các website và nền tảng của bên thứ ba (nền tảng quảng cáo, Telegram, mạng xã hội). Seven không chịu trách nhiệm về nội dung hay thực tiễn của các trang đó.</p>

        <h2>9. Luật áp dụng</h2>
        <p>Điều khoản này được điều chỉnh bởi pháp luật của Cộng hoà Xã hội Chủ nghĩa Việt Nam. Mọi tranh chấp sẽ được giải quyết qua các toà án có thẩm quyền tại Đà Nẵng, trừ khi hợp đồng engagement quy định một diễn đàn hoặc quy tắc trọng tài khác.</p>

        <h2>10. Thay đổi</h2>
        <p>Seven có thể cập nhật Điều khoản theo thời gian. Thay đổi có ý nghĩa sẽ được nêu trên trang này và ghi ngày ở trên. Việc tiếp tục sử dụng Website sau một thay đổi đồng nghĩa với việc chấp nhận Điều khoản đã sửa đổi.</p>

        <h2>11. Liên hệ</h2>
        <p>Câu hỏi về Điều khoản này có thể gửi tới <a href="mailto:admin@sevenworld.net">admin@sevenworld.net</a> hoặc gửi thư tới trụ sở đăng ký của Seven.</p>
      `
    },

    lang: { switch_to_vi: 'Chuyển sang tiếng Việt', switch_to_en: 'Chuyển sang tiếng Anh' }
  }

};
