// One-time / idempotent seed script.
// Run with: node server/scripts/seed.js
// Requires SUPABASE_URL and SUPABASE_KEY in .env (service role key).
//
// Seeds:
//  - the initial admin account (username "president", password "umlc2025" —
//    CHANGE THIS immediately after first login via the admin Settings tab)
//  - default programmes / partner slots / sponsorship tiers
//  - the single site_content row (hero, about, contacts, socials, etc.)
// All inserts are upserts, safe to re-run.

require('dotenv').config();
const bcrypt = require('bcryptjs');
const supabase = require('../lib/supabaseClient');

async function seedAdmin() {
  const password = await bcrypt.hash('umlc2025', 10);
  const { error } = await supabase
    .from('admins')
    .upsert({ username: 'president', password }, { onConflict: 'username' });
  if (error) throw error;
  console.log('✅ Admin seeded (username: president, password: umlc2025 — change this after first login)');
}

async function seedProgrammes() {
  const programmes = [
    {
      num: '01', icon: '📚', title: 'Academic Support', tagline: 'Your studies, amplified',
      summary: 'Peer tutoring, study groups, exam preparation workshops, and resource sharing for marine biology coursework.',
      description: "UMLC's Academic Support Programme is designed to ensure that no student falls behind. We connect senior students with first-years through structured tutoring sessions, provide access to past exam papers, facilitate study groups before major assessments, and host interactive workshops on challenging topics like marine taxonomy, oceanography, and ecological modeling.",
      activities: [
        'Weekly peer tutoring sessions for all marine biology modules',
        'Study group coordination for mid-terms and exams',
        'Shared digital resource library with past papers and notes',
        'Guest lectures from postgraduate researchers and alumni',
        'Academic writing workshops for lab reports and essays',
        'Module-specific WhatsApp groups for real-time support',
      ],
      howToJoin: 'Attend our weekly academic sessions or contact the Academic Officer via email. All registered UKZN marine biology students may participate for free.',
    },
    {
      num: '02', icon: '💼', title: 'Professional Development', tagline: 'From student to scientist',
      summary: 'CV workshops, research methodology training, conference preparation, and industry networking events.',
      description: 'Bridging the gap between academic training and professional life. We run targeted workshops on research skills, scientific communication, industry exposure, and career preparation — giving UMLC members a competitive edge when they graduate.',
      activities: [
        'CV and cover letter writing workshops',
        'Research methodology and data analysis training',
        'Conference preparation and presentation coaching',
        'Industry site visits to marine research institutions',
        'Networking evenings with ORI, SAAMBR, and alumni professionals',
        'LinkedIn profile building and personal brand sessions',
      ],
      howToJoin: 'Sign up via the Student Voice form or email the VP directly. Sessions run once a month.',
    },
    {
      num: '03', icon: '🐢', title: 'Conservation Projects', tagline: 'Hands-on, ocean-first',
      summary: 'Beach clean-ups, marine species monitoring, and collaboration with local conservation organizations.',
      description: "Conservation is at the heart of UMLC. Through hands-on field projects, we give students the experience of working directly in KwaZulu-Natal's extraordinary marine ecosystems — from rocky intertidal zones to coral reefs and estuaries.",
      activities: [
        'Monthly beach clean-ups along the Durban coastline',
        'Marine species monitoring and citizen science surveys',
        'Collaboration with Ezemvelo KZN Wildlife and SAAMBR',
        'Turtle nesting site monitoring (seasonal)',
        'Underwater debris collection with certified dive team',
        'Annual coastal health report compiled by UMLC members',
      ],
      howToJoin: 'No experience needed. Join our conservation volunteer group — open to all UKZN students. Training is provided.',
    },
    {
      num: '04', icon: '🔬', title: 'Research & Conferences', tagline: 'Publish, present, lead',
      summary: 'Funding assistance for conference attendance, research presentation coaching, and journal clubs.',
      description: 'We actively support students who want to pursue research beyond their coursework. UMLC provides funding opportunities, coaching for conference presentations, and a regular journal club where cutting-edge marine research is discussed and critically reviewed.',
      activities: [
        'Journal club meetings — fortnightly research paper discussions',
        'Conference travel bursary applications support',
        'Research poster and oral presentation coaching',
        'Honours and MSc proposal writing workshops',
        'Collaboration facilitation with UKZN supervisors',
        'UMLC Annual Research Showcase for student projects',
      ],
      howToJoin: 'Contact the Research Officer or join a journal club session. Honours and postgraduate students especially welcome.',
    },
    {
      num: '05', icon: '📅', title: 'Events Coordination', tagline: 'Building community',
      summary: 'Organising academic, social, and professional events that bring the UMLC community together throughout the year.',
      description: 'The Events Coordinator oversees all UMLC events — from intimate academic sessions to large-scale conservation drives and social gatherings. They work closely with all executive members to ensure every event runs smoothly, is well-attended, and creates lasting impact for members.',
      activities: [
        'Semester kickoff and orientation events for new members',
        'Marine Biology Quiz Nights and social mixers',
        'Annual UMLC Formal Dinner and Awards Evening',
        'Coordination with UKZN SRC for campus-wide events',
        'Logistics for field trips, workshops, and site visits',
        'Post-event feedback collection and improvement planning',
      ],
      howToJoin: 'Interested in helping run events? Volunteer with the Events Coordinator — all welcome!',
    },
  ];

  const { data: existing, error: fetchError } = await supabase.from('programmes').select('id');
  if (fetchError) throw fetchError;
  if (existing && existing.length > 0) {
    console.log('↷ Programmes already seeded, skipping');
    return;
  }
  const { error } = await supabase.from('programmes').insert(programmes);
  if (error) throw error;
  console.log('✅ Programmes seeded');
}

async function seedPartners() {
  const partners = [1, 2, 3, 4].map((slot) => ({ slot, name: '', logo: null, url: '' }));
  const { error } = await supabase.from('partners').upsert(partners, { onConflict: 'slot' });
  if (error) throw error;
  console.log('✅ Partner slots seeded');
}

async function seedTiers() {
  const tiers = [
    { slot: 1, icon: '🥉', name: 'Supporter', price: 'R5,000', perks: 'Logo on website, social media mention, annual report acknowledgment' },
    { slot: 2, icon: '🥈', name: 'Partner', price: 'R15,000', perks: 'All Supporter benefits + logo on event materials, priority recruitment access, guest lecture opportunity' },
    { slot: 3, icon: '🥇', name: 'Champion', price: 'R30,000+', perks: 'All Partner benefits + named scholarship fund, exclusive event sponsorship, research collaboration priority' },
  ];
  const { error } = await supabase.from('tiers').upsert(tiers, { onConflict: 'slot' });
  if (error) throw error;
  console.log('✅ Sponsorship tiers seeded');
}

async function seedSiteContent() {
  const update = {
    hero: {
      tagline: '"Evoke the Ocean\'s Movement and Connection"',
      sub: "The UKZN Marine Life Club — where academic excellence meets coastal conservation, student advocacy, and scientific discovery along one of Africa's most biodiverse coastlines.",
    },
    about: {
      intro: 'The UKZN Marine Life Club exists to serve every marine biology student at the University of KwaZulu-Natal — providing community, resources, and a collective voice within the School of Life Sciences.',
      mission: 'To foster a community of passionate marine biology students at UKZN, providing academic support, professional development, and hands-on conservation experience while representing student interests.',
      vision: 'To become the premier student-led marine science organization in South Africa, recognized for excellence in research support, conservation impact, and student advocacy.',
      values: '<strong>Scientific Excellence:</strong> Rigorous academic standards<br><strong>Conservation Ethics:</strong> Protecting marine ecosystems<br><strong>Inclusivity:</strong> Welcoming all students<br><strong>Transparency:</strong> Open governance<br><strong>Innovation:</strong> New methodologies',
      presidentMessage: 'Welcome to the UKZN Marine Life Club. As we launch in 2025, we stand at the threshold of something remarkable. Our coastline is not just a research subject — it is our responsibility, our passion, and our future.',
    },
    contacts: {
      general: 'info@umlc.co.za',
      partnerships: 'partnerships@umlc.co.za',
      president: 'president@umlc.co.za',
    },
    socials: { instagram: '#', tiktok: '#', facebook: '#', youtube: '#' },
    footerAddress: 'UKZN Marine Life Club<br>School of Life Sciences<br>University of KwaZulu-Natal<br>Durban, South Africa',
    partnerIntro: 'Actively seeking collaborations with marine research institutions, conservation organizations, and industry partners.',
    bankDetails: {},
    seo: {
      enabled: false,
      title: 'UMLC — UKZN Marine Life Club',
      metaDesc: 'UKZN Marine Life Club - Empowering Marine Leaders in KwaZulu-Natal',
      canonical: 'https://www.umlc.co.za/',
    },
    sections: {
      home: true, about: true, programmes: true, 'student-voice': true,
      events: true, partnerships: true, leadership: true,
    },
    settings: {
      animations: true, simpleNav: false, highContrast: false,
      sslBadge: false, loginLimit: false, cookieBanner: false,
    },
  };

  const { data: current, error: fetchError } = await supabase
    .from('site_content').select('hero').eq('id', 1).single();
  if (fetchError) throw fetchError;
  if (current && current.hero && Object.keys(current.hero).length > 0) {
    console.log('↷ site_content already seeded, skipping');
    return;
  }
  const { error } = await supabase.from('site_content').update(update).eq('id', 1);
  if (error) throw error;
  console.log('✅ site_content seeded');
}

async function main() {
  await seedAdmin();
  await seedProgrammes();
  await seedPartners();
  await seedTiers();
  await seedSiteContent();
  console.log('Done.');
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
