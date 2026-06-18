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
      why:      'Why Us',
      contact:  'Contact'
    },

    /* Footer */
    footer: {
      desc: 'A multi-discipline group from Da Nang — affiliate marketing, real estate, and the entrepreneur community that connects them. The final destination is Freedom.',
      tagline: '"The final destination is Freedom."',
      company: 'Company',
      services: 'Services',
      legal: 'Legal',
      get_in_touch: 'Get in touch',
      copyright: 'Seven Company Ltd. All rights reserved.',
      links: {
        about: 'About Seven',
        why: 'Why Us',
        contact: 'Contact',
        marketing: 'Marketing Agency',
        real_estate: 'Real Estate',
        community: 'Business Community',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    },

    /* HOME — Hero */
    hero: {
      eyebrow: 'Da Nang · Established 2019',
      title:   'Building <span class="accent">brands</span>, properties,<br/>and a community of <span class="accent">ambition</span>.',
      lede:    'Seven Company is a multi-discipline group from Da Nang — a marketing agency with $10M+ in managed ad spend, a property advisory, and a private network for founders. <em>The final destination is Freedom.</em>',
      cta_primary:   'Get Started',
      cta_secondary: 'Explore Services →',
      stat1_v: '$10M+',  stat1_l: 'Managed ad spend',
      stat2_v: '350%',   stat2_l: 'Average campaign ROI',
      stat3_v: '7+',     stat3_l: 'Years of partnerships'
    },

    /* HOME — About preview */
    home_about: {
      eyebrow: 'About Seven Company',
      title:   'A house of three disciplines, built on <span class="accent">one philosophy</span>.',
      p1:      'Founded in 2018 in Da Nang by Dong Phong, Seven Company began as a multi-channel affiliate marketing network and has grown into a group covering marketing, property advisory, and a curated community of founders.',
      p2:      'Our philosophy is simple: <em>we have no customers, only Partners</em>. Every engagement is a win-win or it isn\'t one at all — that\'s the principle that has kept clients and members with us year after year.',
      card1_tag: 'EST. 2018',
      card1_h: 'Born in Da Nang.<br/>Trusted across Vietnam.',
      stat_a_v: '$10M+', stat_a_l: 'Managed ad spend',
      stat_b_v: '350%',  stat_b_l: 'Average ROI'
    },

    /* HOME — Services preview */
    home_services: {
      eyebrow: 'What We Do',
      title:   'Three pillars. <span class="accent">One standard</span> of work.',
      lede:    'Whether you\'re launching a brand, acquiring an asset, or building a network, you\'ll work with senior practitioners who treat your business like their own.',
      mk_title: 'Marketing Agency', mk_tag: 'Core business',
      mk_desc:  'Affiliate marketing, performance campaigns across Google, Facebook, TikTok, and native — with AI-powered optimization.',
      re_title: 'Real Estate', re_tag: 'Advisory & investment',
      re_desc:  'Property consulting for owners and investors across central Vietnam — from sourcing to disposition.',
      co_title: 'Business Community', co_tag: 'Entrepreneur network',
      co_desc:  'A vetted membership of founders, investors, and operators — sharing deals, talent, and lessons.'
    },

    /* HOME — Why preview */
    home_why: {
      eyebrow: 'Why Seven',
      title:   'The reasons partners <span class="accent">stay for years</span>.',
      a_h: 'Performance, proven',
      a_p: 'Over $10M in managed ad spend and an average campaign ROI of 350% — receipts, not promises.',
      b_h: 'Win-win, always',
      b_p: '"We have no customers, only Partners." Our success is measured by yours — that\'s the whole model.',
      c_h: 'Three pillars, one room',
      c_p: 'Marketing, real estate, and community — under one roof. Strategies that reinforce instead of compete.'
    },

    /* HOME — Team (4-person leadership preview) */
    home_team: {
      eyebrow: 'The people behind Seven',
      title:   'Senior hands. <span class="accent">One room</span>.',
      lede:    'The four people who\'ll be in your kick-off call — and stay there for the long run. No layer of juniors between you and the decisions that matter.',
      cta:     'Meet the wider team →'
    },

    /* HOME — Portfolio */
    home_portfolio: {
      eyebrow: 'Selected Work',
      title:   'Campaigns and partnerships from across <span class="accent">the practice</span>.',
      a_tag: 'Marketing · Affiliate', a_h: 'Multi-channel performance for a fintech partner',
      a_p: 'Scaled from a single channel to Google, Facebook, TikTok and native — 4× cost-per-acquisition reduction in nine months.',
      b_tag: 'Real Estate · Coastal', b_h: 'Da Nang coastal asset positioning',
      b_p: 'Sourcing, due diligence, and positioning for a beachside development on the central coast — sold out before the soft launch.',
      c_tag: 'Marketing · E-commerce', c_h: 'Cross-border affiliate scale-up',
      c_p: 'Built a multi-market affiliate program for a Southeast Asian e-commerce brand — millions in attributable revenue.'
    },

    /* HOME — Testimonials */
    home_testimonials: {
      eyebrow: 'Voices',
      title:   'What partners and members <span class="accent">say</span>.',
      a_q: 'The Seven team treated our budget like their own. The ROI numbers spoke for themselves — but the honesty across every call is what kept us.',
      a_n: 'Minh Tran', a_r: 'Growth lead, fintech partner',
      b_q: 'Their property team did the homework no one else would. We bought with confidence and the asset has outperformed every comparable on the coast.',
      b_n: 'Hoang Nguyen', b_r: 'Family office principal',
      c_q: 'The community is the rare thing — actually useful, actually senior, actually discreet. I\'ve hired, raised, and partnered out of it.',
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

    /* About page hero */
    about_page: {
      eyebrow: 'About Seven Company',
      title:   'A house of three disciplines,<br/>built on <span class="accent">one philosophy</span>.',
      lede:    'Founded in 2018, Seven Company specializes in affiliate marketing and digital advertising. We help global brands drive conversions through strategic partnerships and high-performance campaigns. <em>The final destination is Freedom.</em>',
      crumb:   'About'
    },

    about_story: {
      eyebrow: 'Our Story',
      title:   'From an affiliate experiment to a multi-discipline firm.',
      p1: 'Seven Company began in 2018 when Dong Phong — running a series of solo affiliate marketing projects — discovered that careful media buying, strategic content, and the right partners could compound into something much bigger than any single campaign.',
      p2: 'What started as a multi-channel affiliate network grew into a full performance-marketing practice managing more than <strong>$10M in ad spend</strong> across Google, Facebook, TikTok, Bing, and native channels — with an average campaign ROI of <strong>350%</strong>.',
      p3: 'As we worked alongside founders and investors, two adjacent needs kept coming up: <em>where to put profits</em> (real estate) and <em>who to talk to about the next bet</em> (community). So we built both — not as side projects, but as full disciplines led by senior people who could stand on their own.'
    },

    about_mvv: {
      eyebrow:   'What We Stand For',
      title:     'Mission, vision, and the <span class="accent">values</span> behind both.',
      mission_h: 'Our Mission',
      mission_sh:'Helping brands maximize customer acquisition with data-driven strategies.',
      mission_p: 'Every brand needs customers. We bring them — through marketing that performs, partnerships that compound, and channels we test before we recommend.',
      vision_h:  'Our Vision',
      vision_sh: 'To become a global leader in affiliate marketing and digital advertising.',
      vision_p:  'The final destination is Freedom — for our partners, our members, and the team that serves them. Long-term relationships measured in decades.',
      values_h:  'Our Values',
      values_sh: '"We have no customers, only Partners." Win-win or nothing.',
      values_p:  'Integrity, craft, and outcomes over output. Confidentiality as reflex. Long over loud.'
    },

    about_lead: {
      eyebrow: 'Leadership',
      title:   'The people who\'ll <span class="accent">answer your call</span>.',
      n1: 'Dong Phong', r1: 'Founder &amp; CEO',
      b1: 'Started Seven in 2018. Leads strategy across the marketing, real estate, and community pillars.',
      n2: 'Kim Chi',    r2: 'Marketing Director',
      b2: 'Heads brand, content, and performance — bringing campaigns from positioning to paid scale.',
      n3: 'Tuan Anh',   r3: 'Operations Director',
      b3: 'Runs the studio floor — partners, processes, and the day-to-day work that makes engagements ship.',
      n4: 'Quoc Truong',r4: 'Tech &amp; Analytics',
      b4: 'Owns the data side — tracking, attribution, and the AI-powered optimization behind our campaigns.'
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
      p4_p: 'Brands, deals, and people pass through our office every week. Confidentiality is reflex, not policy.',
      p5_h: '5 · Long over loud',
      p5_p: 'We choose partners we expect to work with for a decade. Most of our top accounts started small and grew with us.',
      p6_h: '6 · The whole house',
      p6_p: 'Marketing, real estate, and network advice from one team — strategies that reinforce each other instead of competing for budget.'
    },

    about_miles: {
      eyebrow: 'Growth Milestones',
      title:   'Seven years of work, <span class="accent">measured</span>.',
      lede:    'From a single Google Ads experiment to a multi-discipline group managing $10M+ in ad spend across three continents.',
      m1_h: 'Beginnings',
      m1_p: 'Explored Google Ads and paid traffic methods. First solo affiliate experiments.',
      m2_h: 'Google Ads Agency Partner',
      m2_p: 'Earned Google Ads Agency Partner status — direct platform support, beta access, and tier-1 attribution data.',
      m3_h: 'Seven Company Ltd.',
      m3_p: 'Founded Seven Company Ltd. Partnered with major crypto, forex, and e-commerce affiliate programs. Revenue surpassed $2.5M.',
      m4_h: 'Global expansion',
      m4_p: 'Expanded into Europe and North America. Doubled the affiliate network and opened new media partnerships.',
      m5_h: '$10M+ managed',
      m5_p: 'Managed $10M+ in ad spend, maintained a 350% average ROI, and expanded into programmatic advertising.',
      m6_year: 'Today',
      m6_h: 'Three pillars, one room',
      m6_p: 'Marketing, real estate, and a curated entrepreneur community — under one trusted house in Da Nang.'
    },

    about_nums: {
      eyebrow: 'By the numbers',
      title:   'Seven years of work, <span class="accent">measured</span>.',
      l1: 'Year founded',
      l2: 'Managed ad spend',
      l3: 'Average campaign ROI',
      l4: 'Disciplines under one roof'
    },

    about_cta: {
      eyebrow: 'Work with us',
      title:   'Begin a conversation with <span class="accent">a senior partner</span>.',
      lede:    'Tell us about your brand, your asset, or your ambition. We respond within one business day.',
      quote:   '"We have no customers, only Partners. Win-win is the ultimate goal for maintaining a long-term, effective partnership."',
      q_name:  'Dong Phong',
      q_role:  'Founder &amp; CEO'
    },

    /* Services page hero */
    services_page: {
      eyebrow: 'What We Do',
      title:   'Three pillars.<br/><span class="accent">One standard</span> of work.',
      lede:    'From end-to-end performance campaigns to property advisory and a private founders\' network — under one roof, with one team accountable.',
      crumb:   'Services'
    },

    svc_overview: {
      mk_sub: 'Affiliate · Performance · Content',
      re_sub: 'Advisory · Sourcing · Positioning',
      co_sub: 'Membership · Events · Deal flow'
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

    svc_re: {
      badge: 'Advisory &amp; investment',
      title: 'Real Estate.',
      lede:  'Property consulting for owners and investors — focused on central Vietnam (Da Nang, Hoi An, Quang Nam) with selective work nationwide. From sourcing and due diligence to positioning and disposition strategy.',
      s1: 'Investment advisory',
      s2: 'Coastal &amp; resort assets',
      s3: 'Residential sourcing',
      s4: 'Commercial sourcing',
      s5: 'Market &amp; feasibility studies',
      s6: 'Due diligence',
      s7: 'Asset positioning',
      s8: 'Launch &amp; sales strategy',
      cta_primary:   'Speak with an advisor',
      cta_secondary: 'Request market briefing'
    },

    svc_co: {
      badge: 'Entrepreneur network',
      title: 'Business Community.',
      lede:  'A vetted membership of founders, marketers, investors, and operators — convening in Da Nang and online to share deals, talent, and hard-won lessons. Invitation-based, discreet, and useful in ways networking events almost never are.',
      s1: 'Curated membership',
      s2: 'Monthly meetups in Da Nang',
      s3: 'Online founder salons',
      s4: 'Private deal flow',
      s5: 'Hiring introductions',
      s6: 'Fundraising introductions',
      s7: 'Annual gathering',
      s8: 'Members-only Telegram channels',
      cta_primary:   'Apply for membership',
      cta_secondary: 'Learn about events'
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
      title:   'Tell us which of the three is <span class="accent">on your mind</span>.',
      lede:    'A partner will reply within one business day with next steps.',
      why_btn: 'Why work with Seven →',
      quote:   '"Hire them once for marketing. Within a year you\'ll find a reason to engage them on property or community too."',
      q_name:  'Hoang Nguyen',
      q_role:  'Family office principal'
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
      c2_label: 'Seven Company',
      c2_h: 'Senior hands, three disciplines, one room.',
      c2_p: 'Partners on the work, weekly cadence, and access to property and community alongside marketing. Built for owners who want one trusted relationship.',
      c3_label: 'Freelancers &amp; boutiques',
      c3_h: 'Sharp, narrow, no continuity.',
      c3_p: 'Excellent in a specific craft — but you\'ll stitch together the strategy, the design, the media, and the analytics yourself.',
      c4_label: 'Property brokers',
      c4_h: 'Transaction-led, not advice-led.',
      c4_p: 'Compensated by the deal closing — not by whether the deal was right for you. Our advisors are paid for the homework, not the handshake.'
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
      q3: 'The community alone has paid for our membership ten times over. Everything else is a bonus.',
      n3: 'Linh Pham', r3: 'Co-founder, Orbit Logistics'
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
      interest_mk: 'Marketing Agency',
      interest_re: 'Real Estate',
      interest_co: 'Business Community',
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
      q3_p: 'Yes — we serve clients across Southeast Asia, and our community has members from six countries. Most engagements involve Vietnam in some form.',
      q4_h: 'Is the community accepting new members?',
      q4_p: 'Selectively, by invitation or application. We open a small cohort each quarter to keep the room useful and the conversations honest.'
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
        <p>Seven Company Ltd. ("Seven", "we", "us", "our") is a multi-discipline group based at 145 Le Van Duyet, Nai Hien Dong Ward, Son Tra District, Da Nang City, Vietnam. This policy describes how we handle the personal information of visitors, partners, members, and clients.</p>
        <p>Questions about this policy or your data can be sent to <a href="mailto:contact@sevenworld.net">contact@sevenworld.net</a>.</p>

        <h2>2. Information we collect</h2>
        <p>We collect the minimum information needed to provide our services:</p>
        <ul>
          <li><strong>Contact information</strong> — name, email, phone, and company you give us through forms or correspondence.</li>
          <li><strong>Engagement information</strong> — the details of the project, property enquiry, or membership application you raise with us.</li>
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
        <p>By accessing or using <a href="https://sevenworld.net">sevenworld.net</a> (the "Site") or any service provided by Seven Company Ltd. ("Seven", "we", "us"), you agree to be bound by these Terms. If you do not agree, please do not use the Site or services.</p>

        <h2>2. About Seven Company</h2>
        <p>Seven Company Ltd. is a company registered in Da Nang City, Vietnam, providing marketing, real estate advisory, and community membership services. Our registered office is at 145 Le Van Duyet, Nai Hien Dong Ward, Son Tra District, Da Nang City.</p>

        <h2>3. Use of the Site</h2>
        <ul>
          <li>You may use the Site for lawful, personal, and business purposes consistent with these Terms.</li>
          <li>You agree not to attempt to gain unauthorised access, disrupt service, copy our content for resale, or impersonate Seven or any of its representatives.</li>
          <li>We reserve the right to suspend or restrict access where this clause is breached.</li>
        </ul>

        <h2>4. Services &amp; engagements</h2>
        <p>Any work Seven performs for you — marketing campaigns, real estate advisory, community membership, or otherwise — is governed by a separate written engagement letter, service order, or membership agreement which will set out scope, fees, deliverables, and confidentiality. These Terms do not by themselves create a service obligation.</p>

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
      why:      'Vì sao Seven',
      contact:  'Liên hệ'
    },

    footer: {
      desc: 'Một nhóm đa ngành đến từ Đà Nẵng — affiliate marketing, bất động sản, và cộng đồng doanh nhân là sợi dây nối tất cả lại. Đích đến cuối cùng là Tự do.',
      tagline: '"Đích đến cuối cùng là Tự do."',
      company: 'Về công ty',
      services: 'Dịch vụ',
      legal: 'Pháp lý',
      get_in_touch: 'Kết nối với Seven',
      copyright: 'Công ty TNHH Seven. Bảo lưu mọi quyền.',
      links: {
        about: 'Về Seven',
        why: 'Vì sao Seven',
        contact: 'Liên hệ',
        marketing: 'Agency Marketing',
        real_estate: 'Bất động sản',
        community: 'Cộng đồng doanh nhân',
        privacy: 'Chính sách bảo mật',
        terms: 'Điều khoản dịch vụ'
      }
    },

    hero: {
      eyebrow: 'Đà Nẵng · Thành lập 2018',
      title:   'Kiến tạo <span class="accent">thương hiệu</span>, bất động sản,<br/>và một cộng đồng <span class="accent">đầy khát vọng</span>.',
      lede:    'Seven là nhóm đa ngành đến từ Đà Nẵng — một agency marketing đã vận hành hơn 10 triệu USD ngân sách quảng cáo, một mảng tư vấn bất động sản, và một mạng lưới kín dành cho các nhà sáng lập. <em>Đích đến cuối cùng là Tự do.</em>',
      cta_primary:   'Bắt đầu',
      cta_secondary: 'Khám phá dịch vụ →',
      stat1_v: '$10M+',  stat1_l: 'Ngân sách quảng cáo đã vận hành',
      stat2_v: '350%',   stat2_l: 'ROI trung bình mỗi chiến dịch',
      stat3_v: '7+',     stat3_l: 'Năm đồng hành cùng Đối tác'
    },

    home_about: {
      eyebrow: 'Về Seven Company',
      title:   'Một mái nhà — ba lĩnh vực, <span class="accent">một triết lý</span>.',
      p1:      'Anh Đông Phong sáng lập Seven Company tại Đà Nẵng năm 2018 — khởi đầu là một mạng lưới affiliate marketing đa kênh, rồi từng bước mở rộng thành nhóm ba lĩnh vực: marketing, tư vấn bất động sản, và một cộng đồng doanh nhân được tuyển chọn.',
      p2:      'Triết lý của Seven rất đơn giản: <em>không có khách hàng, chỉ có Đối tác</em>. Mỗi mối hợp tác phải đôi bên cùng thắng — không thì thôi. Chính nguyên tắc đó đã giữ Đối tác và hội viên ở lại với chúng tôi năm này qua năm khác.',
      card1_tag: 'EST. 2018',
      card1_h: 'Sinh ra ở Đà Nẵng.<br/>Tin cậy trên toàn Việt Nam.',
      stat_a_v: '$10M+', stat_a_l: 'Ngân sách đã vận hành',
      stat_b_v: '350%',  stat_b_l: 'ROI trung bình'
    },

    home_services: {
      eyebrow: 'Chúng tôi làm gì',
      title:   'Ba lĩnh vực. <span class="accent">Một chuẩn mực</span>.',
      lede:    'Dù bạn đang ra mắt thương hiệu, mua bất động sản, hay đi tìm mạng lưới của mình — bạn sẽ làm việc trực tiếp với những người dày dạn nhất ở Seven. Những người coi việc của bạn như của chính họ.',
      mk_title: 'Agency Marketing', mk_tag: 'Lĩnh vực chính',
      mk_desc:  'Affiliate marketing và các chiến dịch performance trên Google, Facebook, TikTok, native — được tối ưu liên tục bằng AI.',
      re_title: 'Bất động sản', re_tag: 'Tư vấn & đầu tư',
      re_desc:  'Tư vấn bất động sản cho chủ tài sản và nhà đầu tư miền Trung — từ tìm kiếm, thẩm định cho đến thanh khoản.',
      co_title: 'Cộng đồng doanh nhân', co_tag: 'Mạng lưới nhà sáng lập',
      co_desc:  'Hội viên được tuyển chọn — nhà sáng lập, nhà đầu tư và người đứng đầu — chia sẻ cơ hội, nhân tài và bài học thực chiến.'
    },

    home_why: {
      eyebrow: 'Vì sao Seven',
      title:   'Lý do Đối tác <span class="accent">ở lại nhiều năm</span>.',
      a_h: 'Hiệu quả — có chứng minh',
      a_p: 'Đã vận hành hơn 10 triệu USD ngân sách quảng cáo, ROI trung bình 350% mỗi chiến dịch. Đây là số liệu, không phải lời hứa.',
      b_h: 'Đôi bên cùng thắng — luôn vậy',
      b_p: '"Chúng tôi không có khách hàng, chỉ có Đối tác." Thành công của Seven đo bằng thành công của bạn — đó là toàn bộ mô hình.',
      c_h: 'Ba lĩnh vực, một mái nhà',
      c_p: 'Marketing, bất động sản và cộng đồng cùng dưới một mái — các chiến lược bổ trợ cho nhau, không tranh ngân sách của bạn.'
    },

    home_team: {
      eyebrow: 'Những người đứng sau Seven',
      title:   'Người dày dạn. <span class="accent">Một mái nhà</span>.',
      lede:    'Bốn người sẽ có mặt trong cuộc kick-off của bạn — và ở lại suốt chặng đường dài. Không có lớp junior xen giữa bạn và các quyết định quan trọng.',
      cta:     'Gặp toàn bộ đội ngũ →'
    },

    home_portfolio: {
      eyebrow: 'Dự án tiêu biểu',
      title:   'Những chiến dịch và mối hợp tác qua <span class="accent">cả ba lĩnh vực</span>.',
      a_tag: 'Marketing · Affiliate', a_h: 'Performance đa kênh cho một đối tác fintech',
      a_p: 'Mở rộng từ một kênh duy nhất ra Google, Facebook, TikTok và native — giảm 4 lần chi phí mỗi khách hàng chỉ trong 9 tháng.',
      b_tag: 'Bất động sản · Ven biển', b_h: 'Định vị một dự án ven biển Đà Nẵng',
      b_p: 'Tìm kiếm, thẩm định và định vị một dự án bãi biển miền Trung — bán hết ngay trước cả soft launch.',
      c_tag: 'Marketing · E-commerce', c_h: 'Mở rộng affiliate xuyên biên giới',
      c_p: 'Dựng chương trình affiliate đa thị trường cho một thương hiệu e-commerce Đông Nam Á — hàng triệu USD doanh thu được quy đổi.'
    },

    home_testimonials: {
      eyebrow: 'Họ nói gì',
      title:   'Đối tác và hội viên <span class="accent">nói gì về Seven</span>.',
      a_q: 'Đội Seven coi ngân sách của chúng tôi như của chính họ. Con số ROI tự nó đã nói rồi — nhưng sự thẳng thắn trong từng cuộc gọi mới là lý do chúng tôi ở lại.',
      a_n: 'Minh Trần', a_r: 'Trưởng Growth, đối tác fintech',
      b_q: 'Đội bất động sản của họ làm những phần việc không ai khác chịu làm. Chúng tôi mua với sự yên tâm — và tài sản đó đã vượt mặt mọi tài sản cùng phân khúc trên bờ biển này.',
      b_n: 'Hoàng Nguyễn', b_r: 'Đại diện Family Office',
      c_q: 'Cộng đồng này là của hiếm — thực sự hữu ích, thực sự ở tầm, thực sự kín tiếng. Tôi đã tuyển người, gọi vốn và tìm được Đối tác từ chính nơi này.',
      c_n: 'Linh Phạm', c_r: 'Đồng sáng lập, Orbit Logistics'
    },

    home_cta: {
      eyebrow: 'Cùng bắt đầu',
      title:   'Kể cho Seven nghe về <span class="accent">khát vọng của bạn</span>.',
      lede:    'Một đối tác cấp cao của Seven sẽ phản hồi trong vòng một ngày làm việc. Marketing, tài sản hay hội viên — hãy bắt đầu từ điều quan trọng nhất với bạn. <em>Đích đến cuối cùng là Tự do.</em>',
      quote:   '"Chúng tôi không có khách hàng, chỉ có Đối tác. Cùng thắng là mục đích cuối cùng."',
      q_name:  'Đông Phong', q_role: 'Nhà sáng lập & CEO, Seven Company'
    },

    about_page: {
      eyebrow: 'Về Seven Company',
      title:   'Một mái nhà — ba lĩnh vực,<br/>một <span class="accent">triết lý</span>.',
      lede:    'Thành lập năm 2018, Seven Company chuyên sâu về affiliate marketing và quảng cáo số. Chúng tôi giúp các thương hiệu toàn cầu tăng chuyển đổi qua quan hệ đối tác chiến lược và các chiến dịch hiệu suất cao. <em>Đích đến cuối cùng là Tự do.</em>',
      crumb:   'Giới thiệu'
    },

    about_story: {
      eyebrow: 'Câu chuyện Seven',
      title:   'Từ một thử nghiệm affiliate đến một nhóm đa ngành.',
      p1: 'Seven Company khởi đầu năm 2018 khi anh Đông Phong — khi đó đang chạy một loạt dự án affiliate marketing độc lập — nhận ra rằng media buying khôn ngoan, nội dung chiến lược, và đúng Đối tác có thể cộng dồn thành thứ lớn hơn nhiều so với một chiến dịch đơn lẻ.',
      p2: 'Khởi đầu là một mạng lưới affiliate đa kênh, dần trở thành một practice performance-marketing đầy đủ, đã vận hành hơn <strong>10 triệu USD ngân sách quảng cáo</strong> trên Google, Facebook, TikTok, Bing và native — với ROI trung bình mỗi chiến dịch là <strong>350%</strong>.',
      p3: 'Khi làm việc cùng các nhà sáng lập và nhà đầu tư, hai nhu cầu liền kề liên tục xuất hiện: <em>đặt lợi nhuận ở đâu</em> (bất động sản) và <em>nói chuyện với ai cho ván cược tiếp theo</em> (cộng đồng). Vậy là chúng tôi dựng cả hai — không phải dự án phụ, mà là những mảng đầy đủ do người dày dạn dẫn dắt.'
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
      b1: 'Khởi xướng Seven năm 2018. Dẫn dắt chiến lược trên cả ba lĩnh vực: marketing, bất động sản và cộng đồng.',
      n2: 'Kim Chi',    r2: 'Giám đốc Marketing',
      b2: 'Phụ trách thương hiệu, nội dung và performance — đưa chiến dịch đi từ định vị tới quy mô paid media.',
      n3: 'Tuấn Anh',   r3: 'Giám đốc Vận hành',
      b3: 'Vận hành sàn studio — đối tác, quy trình, và công việc mỗi ngày để các engagement đi đến đích.',
      n4: 'Quốc Trường',r4: 'Tech &amp; Analytics',
      b4: 'Phụ trách mảng dữ liệu — tracking, attribution, và tối ưu chiến dịch bằng AI.'
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
      p4_p: 'Thương hiệu, thương vụ, và con người đi qua văn phòng Seven mỗi tuần. Bảo mật là phản xạ — không phải chính sách.',
      p5_h: '5 · Dài hơi thay vì ồn ào',
      p5_p: 'Chúng tôi chọn Đối tác mình kỳ vọng làm việc cùng cả thập kỷ. Hầu hết Đối tác lớn nhất hiện nay đều bắt đầu nhỏ và lớn lên cùng Seven.',
      p6_h: '6 · Cả mái nhà',
      p6_p: 'Tư vấn marketing, bất động sản và mạng lưới — từ một đội — các chiến lược bổ trợ cho nhau, không tranh ngân sách lẫn nhau.'
    },

    about_miles: {
      eyebrow: 'Các cột mốc tăng trưởng',
      title:   'Bảy năm làm việc, <span class="accent">đo được</span>.',
      lede:    'Từ một thử nghiệm Google Ads đơn lẻ đến một nhóm đa ngành đang vận hành hơn 10 triệu USD ngân sách trên ba châu lục.',
      m1_h: 'Khởi đầu',
      m1_p: 'Khám phá Google Ads và các phương pháp paid traffic. Những thử nghiệm affiliate độc lập đầu tiên.',
      m2_h: 'Google Ads Agency Partner',
      m2_p: 'Trở thành Google Ads Agency Partner — hỗ trợ trực tiếp từ nền tảng, quyền dùng beta, và dữ liệu attribution tier-1.',
      m3_h: 'Thành lập Seven Company Ltd.',
      m3_p: 'Thành lập Công ty TNHH Seven. Hợp tác với các chương trình affiliate lớn trong mảng crypto, forex và e-commerce. Doanh thu vượt 2,5 triệu USD.',
      m4_h: 'Mở rộng toàn cầu',
      m4_p: 'Mở rộng sang châu Âu và Bắc Mỹ. Tăng gấp đôi mạng lưới affiliate, mở thêm các quan hệ media mới.',
      m5_h: 'Vận hành 10M+ ngân sách',
      m5_p: 'Vận hành hơn 10 triệu USD ngân sách quảng cáo, duy trì ROI trung bình 350%, mở rộng sang quảng cáo programmatic.',
      m6_year: 'Hôm nay',
      m6_h: 'Ba lĩnh vực, một mái nhà',
      m6_p: 'Marketing, bất động sản và cộng đồng doanh nhân được tuyển chọn — dưới một mái nhà tin cậy ở Đà Nẵng.'
    },

    about_nums: {
      eyebrow: 'Theo số liệu',
      title:   'Bảy năm làm việc, <span class="accent">đo được</span>.',
      l1: 'Năm thành lập',
      l2: 'Ngân sách đã vận hành',
      l3: 'ROI trung bình',
      l4: 'Lĩnh vực dưới một mái'
    },

    about_cta: {
      eyebrow: 'Hợp tác với Seven',
      title:   'Bắt đầu cuộc trò chuyện với <span class="accent">một đối tác cấp cao</span>.',
      lede:    'Kể cho Seven nghe về thương hiệu, tài sản hay khát vọng của bạn. Chúng tôi phản hồi trong vòng một ngày làm việc.',
      quote:   '"Chúng tôi không có khách hàng, chỉ có Đối tác. Cùng thắng là mục đích cuối cùng để duy trì một mối hợp tác dài hạn và hiệu quả."',
      q_name:  'Đông Phong',
      q_role:  'Nhà sáng lập &amp; CEO'
    },

    services_page: {
      eyebrow: 'Chúng tôi làm gì',
      title:   'Ba lĩnh vực.<br/><span class="accent">Một chuẩn mực</span>.',
      lede:    'Từ chiến dịch performance trọn gói đến tư vấn bất động sản và mạng lưới riêng tư của các nhà sáng lập — tất cả dưới một mái nhà, một đội ngũ chịu trách nhiệm.',
      crumb:   'Dịch vụ'
    },

    svc_overview: {
      mk_sub: 'Affiliate · Performance · Nội dung',
      re_sub: 'Tư vấn · Tìm kiếm · Định vị',
      co_sub: 'Hội viên · Sự kiện · Cơ hội'
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

    svc_re: {
      badge: 'Tư vấn &amp; đầu tư',
      title: 'Bất động sản.',
      lede:  'Tư vấn bất động sản cho chủ tài sản và nhà đầu tư — tập trung khu vực miền Trung (Đà Nẵng, Hội An, Quảng Nam) và chọn lọc trên toàn quốc. Từ tìm kiếm, thẩm định đến định vị và chiến lược thanh khoản.',
      s1: 'Tư vấn đầu tư',
      s2: 'Tài sản ven biển &amp; resort',
      s3: 'Tìm kiếm bất động sản nhà ở',
      s4: 'Tìm kiếm bất động sản thương mại',
      s5: 'Nghiên cứu thị trường &amp; tính khả thi',
      s6: 'Thẩm định pháp lý',
      s7: 'Định vị tài sản',
      s8: 'Chiến lược ra mắt &amp; bán hàng',
      cta_primary:   'Trao đổi với chuyên viên',
      cta_secondary: 'Yêu cầu báo cáo thị trường'
    },

    svc_co: {
      badge: 'Mạng lưới doanh nhân',
      title: 'Cộng đồng doanh nhân.',
      lede:  'Một hội viên được tuyển chọn gồm các nhà sáng lập, marketer, nhà đầu tư và người vận hành — gặp gỡ ở Đà Nẵng và online để chia sẻ thương vụ, nhân tài và bài học thực chiến. Theo lời mời, kín tiếng, và hữu ích theo cách mà các sự kiện networking thông thường gần như không bao giờ có được.',
      s1: 'Hội viên được tuyển chọn',
      s2: 'Gặp mặt hàng tháng tại Đà Nẵng',
      s3: 'Founder salon online',
      s4: 'Cơ hội thương vụ kín',
      s5: 'Giới thiệu tuyển dụng',
      s6: 'Giới thiệu gọi vốn',
      s7: 'Hội nghị thường niên',
      s8: 'Kênh Telegram chỉ dành cho hội viên',
      cta_primary:   'Đăng ký hội viên',
      cta_secondary: 'Tìm hiểu các sự kiện'
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
      title:   'Kể cho Seven nghe đâu là điều <span class="accent">bạn đang nghĩ tới</span>.',
      lede:    'Một đối tác cấp cao sẽ phản hồi và đề xuất bước tiếp theo trong vòng một ngày làm việc.',
      why_btn: 'Vì sao chọn Seven →',
      quote:   '"Thuê họ một lần cho marketing. Trong vòng một năm, bạn sẽ tìm thấy lý do để mời họ làm cả mảng bất động sản hay cộng đồng."',
      q_name:  'Hoàng Nguyễn',
      q_role:  'Đại diện Family Office'
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
      c2_label: 'Seven Company',
      c2_h: 'Người dày dạn, ba lĩnh vực, một mái nhà.',
      c2_p: 'Đối tác cấp cao trực tiếp làm, nhịp làm việc hàng tuần, và tiếp cận thêm mảng bất động sản và cộng đồng song hành với marketing. Dành cho chủ doanh nghiệp muốn một mối quan hệ tin cậy duy nhất.',
      c3_label: 'Freelancer &amp; boutique',
      c3_h: 'Sắc bén, hẹp, không liên tục.',
      c3_p: 'Xuất sắc trong một mảng cụ thể — nhưng bạn sẽ phải tự ghép chiến lược, thiết kế, media và analytics lại với nhau.',
      c4_label: 'Môi giới bất động sản',
      c4_h: 'Lấy phí theo giao dịch — không phải theo lời khuyên.',
      c4_p: 'Họ được trả khi thương vụ chốt — không phải khi thương vụ thực sự đúng cho bạn. Các chuyên viên tư vấn của Seven được trả công cho phần "làm bài tập về nhà", không phải cái bắt tay.'
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
      q3: 'Riêng cộng đồng đã đáng giá gấp mười lần phí hội viên. Mọi thứ khác là phần bonus.',
      n3: 'Linh Phạm', r3: 'Đồng sáng lập, Orbit Logistics'
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
      interest_mk: 'Agency Marketing',
      interest_re: 'Bất động sản',
      interest_co: 'Cộng đồng doanh nhân',
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
      q3_p: 'Có — Seven phục vụ khách hàng khắp Đông Nam Á, và cộng đồng đã có hội viên từ sáu quốc gia. Phần lớn engagement vẫn có liên quan tới Việt Nam ở một dạng nào đó.',
      q4_h: 'Cộng đồng có đang nhận hội viên mới không?',
      q4_p: 'Có chọn lọc — qua giới thiệu hoặc đơn đăng ký. Mỗi quý Seven mở một nhóm nhỏ để giữ không gian thực sự hữu ích và các cuộc trò chuyện thẳng thắn.'
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
        <p>Công ty TNHH Seven ("Seven", "chúng tôi") là một nhóm đa ngành có trụ sở tại 145 Lê Văn Duyệt, phường Nại Hiên Đông, quận Sơn Trà, thành phố Đà Nẵng, Việt Nam. Chính sách này mô tả cách Seven xử lý thông tin cá nhân của khách truy cập, Đối tác, hội viên và khách hàng.</p>
        <p>Câu hỏi về chính sách này hoặc dữ liệu của bạn có thể gửi tới <a href="mailto:contact@sevenworld.net">contact@sevenworld.net</a>.</p>

        <h2>2. Thông tin Seven thu thập</h2>
        <p>Chúng tôi thu thập tối thiểu những thông tin cần thiết để cung cấp dịch vụ:</p>
        <ul>
          <li><strong>Thông tin liên hệ</strong> — tên, email, số điện thoại và công ty bạn cung cấp qua biểu mẫu hoặc thư từ.</li>
          <li><strong>Thông tin engagement</strong> — chi tiết dự án, yêu cầu bất động sản, hoặc đơn đăng ký hội viên bạn gửi cho Seven.</li>
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

        <h2>2. Về Seven Company</h2>
        <p>Công ty TNHH Seven là một công ty đăng ký tại thành phố Đà Nẵng, Việt Nam, cung cấp dịch vụ marketing, tư vấn bất động sản và hội viên cộng đồng. Trụ sở đăng ký tại 145 Lê Văn Duyệt, phường Nại Hiên Đông, quận Sơn Trà, thành phố Đà Nẵng.</p>

        <h2>3. Cách sử dụng Website</h2>
        <ul>
          <li>Bạn có thể sử dụng Website cho các mục đích hợp pháp, cá nhân và kinh doanh phù hợp với Điều khoản này.</li>
          <li>Bạn đồng ý không cố tình truy cập trái phép, làm gián đoạn dịch vụ, sao chép nội dung để bán lại, hay mạo danh Seven hoặc đại diện của Seven.</li>
          <li>Seven giữ quyền tạm ngừng hoặc hạn chế truy cập nếu điều khoản này bị vi phạm.</li>
        </ul>

        <h2>4. Dịch vụ &amp; hợp tác</h2>
        <p>Mọi công việc Seven thực hiện cho bạn — chiến dịch marketing, tư vấn bất động sản, hội viên cộng đồng, hay khác — được điều chỉnh bằng một engagement letter, service order, hoặc thoả thuận hội viên riêng, trong đó nêu rõ phạm vi, phí, sản phẩm bàn giao và bảo mật. Điều khoản này không tự động tạo ra nghĩa vụ dịch vụ.</p>

        <h2>5. Sở hữu trí tuệ</h2>
        <p>Toàn bộ nội dung trên Website (text, hình ảnh, logo, ảnh chụp, code và thiết kế) thuộc sở hữu của Công ty TNHH Seven hoặc được cấp phép cho Seven. Bạn không được sao chép, sửa đổi, phân phối lại hay sử dụng bất kỳ phần nào của Website cho mục đích thương mại khi chưa có sự đồng ý trước bằng văn bản.</p>
        <p>Sản phẩm bàn giao theo một engagement được điều chỉnh bởi điều khoản IP trong engagement letter đó, không phải điều khoản này.</p>

        <h2>6. Miễn trừ trách nhiệm</h2>
        <p>Website và nội dung được cung cấp "nguyên trạng" và "có sẵn". Các con số dẫn ra (ví dụ ROI chiến dịch trong quá khứ) phản ánh kết quả đã đạt được và không phải là bảo đảm cho hiệu suất tương lai. Thông tin bất động sản chỉ mang tính minh hoạ, không phải lời chào hàng hay đề nghị giao dịch.</p>

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
