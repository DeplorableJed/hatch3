export type PrototypeId = 'summit' | 'harbor' | 'kinetic'

export type Service = {
  name: string
  shortLabel: string
  image: string
  summary: string
  details: string[]
  focus: string
}

export type VerticalSpecialty = {
  slug: string
  title: string
  audience: string
  headline: string
  summary: string
  differentiators: string[]
  heroAngle: string
  cta: string
  imagePrompt: string
  placeholderPalette: string[]
}

export type TeamMember = {
  name: string
  role: string
  bio: string
}

export type Testimonial = {
  author: string
  quote: string
}

export const hatchContent = {
  company: {
    name: 'Hatch Insurance Agency',
    shortName: 'Hatch',
    logo: 'https://hatchinsurance.com/wp-content/uploads/2017/06/logo.png',
    phoneDisplay: '1-877-995-5692',
    phoneHref: 'tel:18779955692',
    localPhoneDisplay: '602-995-5692',
    localPhoneHref: 'tel:6029955692',
    fax: '602-995-5693',
    email: 'info@hatchinsurance.com',
    emailHref: 'mailto:info@hatchinsurance.com',
    addressLines: ['2222 W Parkside Lane Ste 117', 'Phoenix, AZ 85027'],
    hours:
      'Monday through Friday, 7:30 AM to 4:30 PM MST, with after-hours support available by appointment.',
    coverage:
      'Arizona-based and licensed in 44 states, with satellite offices in Texas and Michigan.',
  },
  hero: {
    eyebrow: 'Independent agency. National reach. Specialty expertise.',
    headline: 'A modern Hatch Insurance presence built around trust, responsiveness, and high-value commercial expertise.',
    summary:
      'These prototypes use Hatch’s real positioning: over 50 years of experience, an independent-agency model, boutique service, and deep strength in towing, repossession, auto transport, commercial coverage, personal lines, and life insurance.',
    crestInspiredNote:
      'Borrowing from Crest’s polished structure, each concept emphasizes premium presentation, strong service pathways, and clearer conversion moments.',
  },
  metrics: [
    { label: 'Years of experience', value: '50+' },
    { label: 'States licensed', value: '44' },
    { label: 'Specialty verticals', value: '6' },
    { label: 'Client-first access', value: '24/7' },
  ],
  differentiators: [
    {
      title: 'Independent market access',
      body: 'Hatch positions itself as a truly independent agency presenting proposals from top-rated carriers rather than forcing clients into a single market.',
    },
    {
      title: 'Commercial depth',
      body: 'The agency highlights specialty experience in collateral recovery, auto transport, towing, aviation, workers compensation, restaurants, and broader business insurance.',
    },
    {
      title: 'High-touch service',
      body: 'The current site emphasizes personalized guidance, producer accessibility, and comprehensive packaging that reduces billing friction and coverage gaps.',
    },
    {
      title: 'National capability',
      body: 'The Arizona headquarters anchors the brand, while the licensed footprint supports multi-state operators that need consistent insurance guidance.',
    },
  ],
  operatingPrinciples: [
    'Present the best of many proposals from top-rated insurance companies.',
    'Pre-qualify clients so coverage matches the real exposure, not just the lowest price.',
    'Package policies where possible to reduce gaps and improve service continuity.',
    'Maintain boutique-style relationships while serving businesses with national operations.',
  ],
  coverageSnapshotAdditions: [
    'Automotive Service & Repair',
    'Body Shops',
    'Classic Car Remodelers',
    'Non-Franchise Auto Dealers',
    'Pest Control Companies',
  ],
  services: [
    {
      shortLabel: 'Towing',
      name: 'Towing, Auto Transport, and Repossession',
      image:
        'https://hatchinsurance.com/wp-content/uploads/2017/06/repossession1_new2.jpg',
      summary:
        'One of Hatch’s strongest verticals, built around competitive A-rated carriers and experience with operations that keep America moving.',
      details: [
        'Built for towing operators, collateral recovery firms, and auto transport businesses.',
        'Focused on comprehensive coverage, competitive rates, and hands-on service.',
        'Especially strong fit for operators working across state lines or with unique equipment risk.',
      ],
      focus: 'National specialty practice',
    },
    {
      shortLabel: 'Commercial',
      name: 'Commercial Small to Middle Market Property and Casualty',
      image:
        'https://hatchinsurance.com/wp-content/uploads/2017/06/perosnal1.jpg',
      summary:
        'Commercial property and casualty protection for owners who need broader advice than a one-size-fits-all quote engine can provide.',
      details: [
        'Coverage guidance for general business risk, workers compensation, and business owner programs.',
        'Positioned around tailored proposals instead of copy-paste policy comparisons.',
        'Strong emphasis on reducing blind spots and protecting continuity after a claim.',
      ],
      focus: 'Business owner protection',
    },
    {
      shortLabel: 'Hospitality',
      name: 'Restaurant, Bar, and Tavern Insurance',
      image:
        'https://hatchinsurance.com/wp-content/uploads/2017/06/restaurant1.jpg',
      summary:
        'A hospitality-focused package built around the operational realities of venues where liability, payroll, and liquor exposure all intersect.',
      details: [
        'Highlights business owner coverage, loss of income, liquor liability, umbrella coverage, and workers compensation.',
        'Designed to make complicated risk stacks easier for owners to understand.',
        'A strong candidate for more prominent conversion treatment in the redesign.',
      ],
      focus: 'Hospitality package design',
    },
    {
      shortLabel: 'Personal',
      name: 'Affluent Personal Lines',
      image:
        'https://hatchinsurance.com/wp-content/uploads/2017/06/perosnal3.jpg',
      summary:
        'Home, auto, umbrella, boat, RV, and classic-car guidance for clients who want personal attention and stronger portfolio protection.',
      details: [
        'Framed as protection against financial disruption rather than just a price-shopping exercise.',
        'Works well as a cross-sell opportunity for business-owner households.',
        'Opportunity in the redesign: present this as a premium advisory relationship.',
      ],
      focus: 'Portfolio-style coverage',
    },
    {
      shortLabel: 'Life',
      name: 'Life Insurance',
      image: 'https://hatchinsurance.com/wp-content/uploads/2017/08/life.jpg',
      summary:
        'Life insurance guidance rooted in real financial obligations, family needs, and long-term planning rather than generic calculators.',
      details: [
        'The site speaks directly to debt, mortgage, income replacement, and education planning.',
        'Useful for family-oriented trust messaging and softer lead capture moments.',
        'Creates a more complete full-service-agency story when paired with business and personal lines.',
      ],
      focus: 'Family and continuity planning',
    },
  ] as Service[],
  specialtyVerticals: [
    {
      slug: 'towing',
      title: 'Towing and Recovery',
      audience: 'Towing operators, recovery firms, wrecker services, and transport-heavy operators.',
      headline: 'Built for operators whose risk moves every hour of the day.',
      summary:
        'This example turns Hatch’s towing and recovery strength into a clear specialty-brand story with a faster path to specialist contact and stronger operational credibility.',
      differentiators: [
        'Position Hatch as a known operator-side advisor, not a generic insurance seller.',
        'Lean into national reach, equipment exposure, driver exposure, and time-sensitive service response.',
        'Use language that feels grounded in the realities of dispatch, fleet movement, and claims pressure.',
      ],
      heroAngle:
        'A performance-driven landing experience centered on uptime, fleet protection, and confident specialist access.',
      cta: 'Talk to a towing specialist',
      imagePrompt:
        'Use case: photorealistic-natural. Asset type: website hero image for towing insurance vertical. Primary request: a premium cinematic image of a modern heavy-duty tow truck operator at sunrise on a clean urban roadside, polished truck details, reflective safety gear, strong sense of motion and professionalism, wide composition with negative space for headline copy. Style/medium: high-end commercial photography. Lighting/mood: warm sunrise with crisp contrast and metallic reflections. Constraints: no text, no logos, no watermark, no accident scene, no visible brand marks.',
      placeholderPalette: ['#0f2742', '#1f4f7c', '#f08f44'],
    },
    {
      slug: 'hospitality',
      title: 'Neighborhood Bar, Tavern, and Restaurant',
      audience: 'Independent restaurants, bars, taverns, hospitality groups, and owner-operators.',
      headline: 'Coverage that understands service floors, liquor exposure, and busy nights.',
      summary:
        'This example treats hospitality as a full operating environment rather than a generic small-business category, which makes the agency feel more expert and more valuable.',
      differentiators: [
        'Call out liquor liability, business income, umbrella, workers compensation, and owner protection in one narrative.',
        'Use polished hospitality imagery that feels upscale rather than stock and generic.',
        'Make quote capture feel like a business conversation, not a commodity form.',
      ],
      heroAngle:
        'An elevated hospitality page with warm editorial presentation and a premium risk-advisory tone.',
      cta: 'Protect my restaurant',
      imagePrompt:
        'Use case: photorealistic-natural. Asset type: website hero image for bar tavern restaurant insurance vertical. Primary request: elegant evening interior of a lively upscale neighborhood restaurant and bar, bartender in motion, warm ambient light, polished wood, glassware sparkle, guests softly blurred, wide composition with clear negative space for headline copy. Style/medium: luxury hospitality photography. Lighting/mood: warm, cinematic, inviting, professional. Constraints: no text, no logos, no watermark, avoid messy tables, avoid nightclub chaos.',
      placeholderPalette: ['#341d1a', '#8f5b3b', '#e0b07b'],
    },
    {
      slug: 'affluent-personal',
      title: 'Affluent Personal Lines',
      audience: 'High-net-worth households, executives, business owners, and families with complex personal portfolios.',
      headline: 'Personal insurance presented like private advisory work.',
      summary:
        'This example reframes personal lines as a white-glove portfolio conversation around homes, autos, umbrellas, and lifestyle assets.',
      differentiators: [
        'Shift the tone from mass-market quote shopping to curated risk planning.',
        'Speak to umbrella coverage, multiple properties, collector vehicles, boats, and lifestyle complexity.',
        'Use restrained luxury and calm confidence rather than loud sales language.',
      ],
      heroAngle:
        'A refined, high-touch landing page that feels closer to a wealth-adjacent advisory brand.',
      cta: 'Review my personal portfolio',
      imagePrompt:
        'Use case: photorealistic-natural. Asset type: website hero image for affluent personal lines insurance vertical. Primary request: sophisticated luxury residential scene with a modern high-end home exterior, premium vehicle in driveway, calm Arizona morning light, tasteful landscaping, editorial composition with generous negative space for headline copy. Style/medium: polished architectural lifestyle photography. Lighting/mood: serene, refined, reassuring. Constraints: no text, no logos, no watermark, avoid ostentatious excess, avoid visible brand marks on vehicles.',
      placeholderPalette: ['#d9d1c5', '#73808f', '#f7f4ef'],
    },
    {
      slug: 'commercial-pc',
      title: 'Commercial Small to Middle Market P&C',
      audience: 'Growing businesses that need property, liability, workers compensation, and broader casualty planning.',
      headline: 'A sharper commercial story for owners who have outgrown basic quoting.',
      summary:
        'This example brings Hatch’s broader commercial property and casualty capabilities into a clearer growth-stage business message that feels capable and modern.',
      differentiators: [
        'Position Hatch as a risk partner for real operating complexity, not a transactional broker.',
        'Highlight packaging strategy, coverage design, and multi-line account stewardship.',
        'Use business visuals that feel established and credible without becoming cold corporate filler.',
      ],
      heroAngle:
        'A confident commercial page built around growth-stage leadership, asset protection, and continuity planning.',
      cta: 'Get a commercial review',
      imagePrompt:
        'Use case: photorealistic-natural. Asset type: website hero image for commercial small to middle market property and casualty insurance vertical. Primary request: premium business campus or light industrial office exterior with professionals walking in early morning light, clean architecture, subtle logistics and operations cues, wide composition with strong negative space for headline copy. Style/medium: modern corporate editorial photography. Lighting/mood: crisp, confident, forward-looking. Constraints: no text, no logos, no watermark, avoid generic handshake scenes.',
      placeholderPalette: ['#16273f', '#59708c', '#d8b077'],
    },
    {
      slug: 'artisan-contractors',
      title: 'Artisan Contractors',
      audience: 'General contractors, specialty trades, subcontractors, remodelers, service contractors, and field-based crews.',
      headline: 'Coverage built for crews, job sites, tools, vehicles, and real construction risk.',
      summary:
        'This example gives Hatch a clear contractor-focused story for artisan trades that need practical property, liability, auto, workers compensation, and job-driven advisory support.',
      differentiators: [
        'Speak directly to trade-specific operators instead of burying them inside general commercial insurance language.',
        'Highlight equipment, vehicles, certificates, payroll exposure, and field liability in a more credible contractor narrative.',
        'Create a stronger specialist path for plumbing, electrical, HVAC, roofing, framing, and similar artisan trades.',
      ],
      heroAngle:
        'A no-nonsense contractor landing page that feels capable, field-aware, and built for business owners managing active crews.',
      cta: 'Talk to a contractor specialist',
      imagePrompt:
        'Use case: photorealistic-natural. Asset type: website hero image for artisan contractors insurance vertical. Primary request: polished commercial construction or contractor job-site scene with skilled trades professionals, clean equipment, work truck presence, partially completed modern project, wide composition with negative space for headline copy. Style/medium: premium editorial business photography. Lighting/mood: confident, active, professional. Constraints: no text, no logos, no watermark, avoid unsafe scenes, avoid cluttered demolition chaos.',
      placeholderPalette: ['#2a3037', '#7a8794', '#cf8d43'],
    },
  ] as VerticalSpecialty[],
  team: [
    {
      name: 'Garet Hatch',
      role: 'President / Producer',
      bio: 'Leads the agency’s client relationships and sets the tone for Hatch’s high-touch commercial and personal insurance advisory work.',
    },
    {
      name: 'Jessica Lerner',
      role: 'Commercial Account Manager',
      bio: 'Helps keep commercial accounts organized, responsive, and closely aligned with the operating realities of Hatch clients.',
    },
    {
      name: 'Taylre Chowning',
      role: 'Personal Lines Account Manager',
      bio: 'Supports households and personal-lines clients with the attentive, relationship-driven service style the agency wants the site to reflect.',
    },
    {
      name: 'Janette Reneau',
      role: 'Producer',
      bio: 'Brings deep experience to specialty and commercial business with a practical, coverage-first perspective.',
    },
    {
      name: 'Emilie Hatch',
      role: 'Accounting',
      bio: 'Supports the financial and back-office side of the agency so service remains consistent and dependable.',
    },
    {
      name: 'Laura Babcock',
      role: 'Bookkeeper / Controller',
      bio: 'Oversees bookkeeping and financial controls that support the agency’s day-to-day continuity.',
    },
  ] as TeamMember[],
  testimonials: [
    {
      author: 'Patti Z',
      quote:
        'Thank you for always being so kind and helpful. You always go that extra step and I really appreciate everything you do for us.',
    },
    {
      author: 'Joe and Kylee F',
      quote:
        'HIA has proven that they have the best rates and best coverage and amazing customer service year after year.',
    },
    {
      author: 'Allison S',
      quote:
        'You go above and beyond for us. Awesome, super quick customer service.',
    },
    {
      author: 'Amber G',
      quote:
        'I just love you guys so much. You are on your A game all the time. I can’t tell you how much I appreciate you.',
    },
  ] as Testimonial[],
  contactPrompts: [
    'Request a free consultation',
    'Talk to a protection specialist',
    'Package your commercial and personal coverage',
  ],
  prototypeDirections: [
    {
      id: 'summit' as PrototypeId,
      name: 'Prototype 1',
      title: 'Summit Executive',
      summary:
        'A premium corporate direction with stronger trust signals, executive typography, and a polished multi-section flow inspired by national broker sites.',
    },
    {
      id: 'harbor' as PrototypeId,
      name: 'Prototype 2',
      title: 'Harbor Advisory',
      summary:
        'A warmer advisory-led concept that feels personal and high-touch, with editorial spacing, story-driven copy blocks, and service depth.',
    },
    {
      id: 'kinetic' as PrototypeId,
      name: 'Prototype 3',
      title: 'Kinetic Specialty',
      summary:
        'A bold, operations-focused direction that leans into Hatch’s transport and commercial strengths with more motion, contrast, and decisive calls to action.',
    },
  ],
}
