const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

const INITIAL_DATA = {
  admins: [
    {
      id: 1,
      username: 'president',
      password: '$2a$10$LmQT.LzvB2y1hFO0wL8/TeT1TAOW6Sk/G.1Of2PI6Wix/cs3ZRIQK', // umlc2025
      createdAt: new Date().toISOString(),
    },
  ],
  members: [
    {
      id: 1,
      fname: 'Sipho',
      lname: 'Ndlovu',
      course: 'BSc Marine Biology',
      institution: 'UKZN Westville Campus',
      year: '3rd Year',
      email: 'sndlovu@stu.ukzn.ac.za',
      phone: '+27 82 555 1234',
      password: '$2a$10$LmQT.LzvB2y1hFO0wL8/TeT1TAOW6Sk/G.1Of2PI6Wix/cs3ZRIQK',
      createdAt: '2025-02-10T09:00:00.000Z',
    },
    {
      id: 2,
      fname: 'Priya',
      lname: 'Naidoo',
      course: 'BSc Honours Marine Science',
      institution: 'UKZN Howard College',
      year: 'Postgraduate',
      email: 'pnaidoo@stu.ukzn.ac.za',
      phone: '+27 83 444 5678',
      password: '$2a$10$LmQT.LzvB2y1hFO0wL8/TeT1TAOW6Sk/G.1Of2PI6Wix/cs3ZRIQK',
      createdAt: '2025-02-15T11:30:00.000Z',
    },
    {
      id: 3,
      fname: 'Cameron',
      lname: 'Marais',
      course: 'BSc Biological Sciences (Marine)',
      institution: 'UKZN Westville Campus',
      year: '2nd Year',
      email: 'cmarais@stu.ukzn.ac.za',
      phone: '+27 71 333 9876',
      password: '$2a$10$LmQT.LzvB2y1hFO0wL8/TeT1TAOW6Sk/G.1Of2PI6Wix/cs3ZRIQK',
      createdAt: '2025-02-20T14:15:00.000Z',
    },
  ],
  events: [
    {
      id: 1,
      title: 'Durban Coastline Beach Clean-up & Microplastics Survey',
      date: '2025-03-15',
      location: 'uShaka Beach / Point Waterfront, Durban',
      category: 'Conservation',
      description: 'Join UMLC members and ocean volunteers in our monthly coastal clean-up and citizen-science microplastics density audit along the Durban Golden Mile.',
      capacity: 50,
      createdAt: '2025-01-10T10:00:00.000Z',
    },
    {
      id: 2,
      title: 'Marine Megafauna & Shark Conservation Seminar',
      date: '2025-03-27',
      location: 'UKZN Howard College, Life Sciences Auditorium',
      category: 'Academic',
      description: 'Distinguished guest seminar presented with KwaZulu-Natal Sharks Board and ORI researchers examining ragged-tooth shark telemetry along the South African eastern seaboard.',
      capacity: 80,
      createdAt: '2025-01-15T12:00:00.000Z',
    },
    {
      id: 3,
      title: 'Aliwal Shoal Scuba & Snorkel Research Excursion',
      date: '2025-04-12',
      location: 'Umkomaas / Aliwal Shoal Marine Protected Area',
      category: 'Field Trip',
      description: 'Hands-on reef biodiversity assessment in one of the top dive sites on Earth. Student transport and chartered dive boat subsidized by UMLC.',
      capacity: 25,
      createdAt: '2025-01-20T08:00:00.000Z',
    },
    {
      id: 4,
      title: 'Annual Marine Biology Student Research Showcase & Mixer',
      date: '2025-05-08',
      location: 'School of Life Sciences Conference Hall',
      category: 'Professional',
      description: 'Postgraduate and honours presentation sessions, scientific poster competition, and networking mixer with visiting ocean scientists and marine industry recruiters.',
      capacity: 100,
      createdAt: '2025-02-01T15:00:00.000Z',
    },
  ],
  issues: [
    {
      id: 1,
      title: 'Marine Biology Lab Equipment & Dissecting Microscopes',
      description: 'Third-year lab microscopes needed stage replacement and objective calibration for intertidal taxonomy practicals.',
      status: 'resolved',
      reply: 'All 12 optical microscopes were serviced and recalibrated in collaboration with the department technician on Feb 24. New LED illuminators have been installed.',
      submitterName: 'Marine Bio Class Rep',
      submitterEmail: 'classrep@ukzn.ac.za',
      createdAt: '2025-02-12T10:30:00.000Z',
      resolvedAt: '2025-02-24T16:00:00.000Z',
    },
    {
      id: 2,
      title: 'Transport Subsidies for Field Excursions',
      description: 'Requests for university bus charter assistance to reduce individual fuel and transport expenses for Umkomaas field trips.',
      status: 'in-progress',
      reply: 'UMLC Executive has submitted a formal grant application to the School of Life Sciences executive committee. Subsidies confirmed for the April excursion.',
      submitterName: 'Anonymous',
      submitterEmail: '',
      createdAt: '2025-02-18T14:20:00.000Z',
      resolvedAt: null,
    },
    {
      id: 3,
      title: 'Access to Scientific Literature and Paywalled Marine Journals',
      description: 'Suggestions for a peer library group sharing open-access citations and university proxy tips for marine ecology research.',
      status: 'under-review',
      reply: 'The Academic Officer is compiling a curated repository of Open Science resources and Zotero shared collections for members.',
      submitterName: 'Postgraduate Member',
      submitterEmail: 'pgmarine@ukzn.ac.za',
      createdAt: '2025-02-28T09:15:00.000Z',
      resolvedAt: null,
    },
  ],
  inquiries: [
    {
      id: 1,
      name: 'Dr. Thandi Khanyile',
      email: 't.khanyile@saambr.org.za',
      subject: 'Collaboration with SAAMBR Education Team',
      message: 'Greetings UMLC team! We would like to explore partnering with your club on our winter coastal youth outreach initiative and aquarium research internships.',
      status: 'read',
      reply: 'Thank you Dr. Khanyile! We would love to collaborate. Our VP and President will reach out to schedule an introductory meeting.',
      createdAt: '2025-02-22T13:45:00.000Z',
    },
  ],
  leadership: [
    {
      id: 1,
      role: 'President',
      name: 'Siphamandla Mthembu',
      bio: 'Final year Marine Biology student passionate about estuarine ecology, shark conservation, and empowering student researchers across KwaZulu-Natal.',
      email: 'president@umlc.co.za',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      createdAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: 2,
      role: 'Vice President',
      name: 'Dr. Anika Pillay',
      bio: 'Postgraduate marine ecologist focusing on coral reef resilience, ocean acidification, and coordinating university academic mentorship.',
      email: 'vicepresident@umlc.co.za',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      createdAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: 3,
      role: 'Secretary',
      name: 'Thabo Dlamini',
      bio: 'Third-year BSc Biological Sciences. Oversees member registration, governance, meeting agendas, and executive correspondence.',
      email: 'secretary@umlc.co.za',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      createdAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: 4,
      role: 'Treasurer',
      name: 'Liam van der Merwe',
      bio: 'Marine Sciences student with experience in non-profit financial administration, managing sponsorship bursaries, and field trip budgeting.',
      email: 'treasurer@umlc.co.za',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      createdAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: 5,
      role: 'Media Officer',
      name: 'Zanele Khumalo',
      bio: 'Underwater photographer, scientific communicator, and manager of UMLC social media outreach and conservation awareness campaigns.',
      email: 'media@umlc.co.za',
      photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
      createdAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: 6,
      role: 'Event Coordinator',
      name: 'Keanu Moodley',
      bio: 'Rescue diver and field enthusiast dedicated to curating impactful beach clean-ups, academic seminars, and coastal expeditions.',
      email: 'events@umlc.co.za',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      createdAt: '2025-01-01T00:00:00.000Z',
    },
  ],
  programmes: [
    {
      id: 1,
      num: '01',
      icon: 'academic',
      title: 'Academic Support',
      tagline: 'Your studies, amplified',
      summary: 'Peer tutoring, study groups, exam preparation workshops, and resource sharing for marine biology coursework.',
      description: "UMLC's Academic Support Programme ensures that no student falls behind. We connect senior students with first-years through structured tutoring sessions, provide access to past exam papers, facilitate study groups before major assessments, and host interactive workshops on challenging topics like marine taxonomy, oceanography, and ecological modeling.",
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
      id: 2,
      num: '02',
      icon: 'career',
      title: 'Professional Development',
      tagline: 'From student to scientist',
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
      id: 3,
      num: '03',
      icon: 'conservation',
      title: 'Conservation Projects',
      tagline: 'Hands-on, ocean-first',
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
      id: 4,
      num: '04',
      icon: 'research',
      title: 'Research & Conferences',
      tagline: 'Publish, present, lead',
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
      id: 5,
      num: '05',
      icon: 'events',
      title: 'Events Coordination',
      tagline: 'Building community',
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
  ],
  partners: [
    { slot: 1, name: 'SAAMBR', logo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=200&q=80', url: 'https://www.saambr.org.za' },
    { slot: 2, name: 'Oceanographic Research Institute', logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=200&q=80', url: 'https://www.ori.org.za' },
    { slot: 3, name: 'Ezemvelo KZN Wildlife', logo: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=200&q=80', url: 'http://www.kznwildlife.com' },
    { slot: 4, name: 'WildOceans Conservation', logo: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=200&q=80', url: 'https://wildtrust.co.za' },
  ],
  tiers: [
    { slot: 1, icon: 'bronze', name: 'Supporter', price: 'R5,000', perks: 'Logo on website, social media acknowledgment, inclusion in annual club publication' },
    { slot: 2, icon: 'silver', name: 'Partner', price: 'R15,000', perks: 'All Supporter benefits + logo on event banners, priority recruitment access, guest lecture opportunity' },
    { slot: 3, icon: 'gold', name: 'Champion', price: 'R30,000+', perks: 'All Partner benefits + named student scholarship, exclusive excursion sponsorship, collaborative research showcase' },
  ],
  donations: [
    { id: 1, name: 'Ocean Guardian Foundation', email: 'grants@oceanguardian.org', amount: 5000, date: '2025-02-01', verified: true, createdAt: '2025-02-01T10:00:00.000Z' },
    { id: 2, name: 'Prof. David Henderson', email: 'd.henderson@ukzn.alumni.za', amount: 1500, date: '2025-02-14', verified: true, createdAt: '2025-02-14T15:30:00.000Z' },
    { id: 3, name: 'Durban Coastal Anglers', email: 'info@durbananglers.co.za', amount: 2500, date: '2025-02-28', verified: false, createdAt: '2025-02-28T12:00:00.000Z' },
  ],
  event_rsvps: [
    { id: 1, eventId: 1, memberName: 'Sipho Ndlovu', memberEmail: 'sndlovu@stu.ukzn.ac.za', year: '3rd Year', createdAt: '2025-02-15T10:00:00.000Z' },
    { id: 2, eventId: 1, memberName: 'Priya Naidoo', memberEmail: 'pnaidoo@stu.ukzn.ac.za', year: 'Postgraduate', createdAt: '2025-02-16T11:00:00.000Z' },
    { id: 3, eventId: 2, memberName: 'Cameron Marais', memberEmail: 'cmarais@stu.ukzn.ac.za', year: '2nd Year', createdAt: '2025-02-20T14:00:00.000Z' },
  ],
  site_content: [
    {
      id: 1,
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
      socials: {
        instagram: 'https://instagram.com/ukzn_marine_life',
        tiktok: 'https://tiktok.com/@ukznmarinelife',
        facebook: 'https://facebook.com/ukznmarinelife',
        youtube: 'https://youtube.com/@ukznmarinelife',
      },
      footerAddress: 'UKZN Marine Life Club<br>School of Life Sciences<br>University of KwaZulu-Natal<br>Durban, South Africa',
      partnerIntro: 'Actively seeking collaborations with marine research institutions, conservation organizations, and industry partners.',
      bankDetails: {
        bank: 'First National Bank (FNB)',
        accName: 'UKZN Marine Life Club',
        accNum: '62894120843',
        branch: '250655',
      },
      seo: {
        enabled: true,
        title: 'UMLC — UKZN Marine Life Club | Empowering Future Marine Leaders',
        metaDesc: 'Official website of the UKZN Marine Life Club (UMLC). Discover academic support, marine conservation field projects, research conferences, and student voice.',
        canonical: 'https://www.umlc.co.za/',
      },
      sections: {
        home: true,
        about: true,
        species: true,
        programmes: true,
        'student-voice': true,
        events: true,
        partnerships: true,
        leadership: true,
      },
      settings: {
        animations: true,
        simpleNav: false,
        highContrast: false,
        sslBadge: true,
        loginLimit: true,
        cookieBanner: true,
      },
      updatedAt: new Date().toISOString(),
    },
  ],
};

function readDb() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_DATA, null, 2), 'utf8');
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    let changed = false;
    for (const key of Object.keys(INITIAL_DATA)) {
      if (!parsed[key]) {
        parsed[key] = INITIAL_DATA[key];
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(DB_FILE, JSON.stringify(parsed, null, 2), 'utf8');
    }
    return parsed;
  } catch {
    fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_DATA, null, 2), 'utf8');
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }
}

function writeDb(data) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to write db.json:', err);
  }
}

class QueryBuilder {
  constructor(table) {
    this.table = table;
    this.filters = [];
    this.orderConfig = null;
    this.isSingle = false;
    this.selectedColumns = '*';
    this.action = 'select';
    this.payload = null;
    this.upsertConfig = null;
  }

  select(columns = '*') {
    this.selectedColumns = columns;
    return this;
  }

  eq(column, value) {
    this.filters.push({ column, value: String(value) });
    return this;
  }

  order(column, { ascending = true } = {}) {
    this.orderConfig = { column, ascending };
    return this;
  }

  single() {
    this.isSingle = true;
    return this;
  }

  insert(rows) {
    this.action = 'insert';
    this.payload = Array.isArray(rows) ? rows : [rows];
    return this;
  }

  update(patch) {
    this.action = 'update';
    this.payload = patch;
    return this;
  }

  delete() {
    this.action = 'delete';
    return this;
  }

  upsert(rows, config = {}) {
    this.action = 'upsert';
    this.payload = Array.isArray(rows) ? rows : [rows];
    this.upsertConfig = config;
    return this;
  }

  async _execute() {
    const db = readDb();
    if (!db[this.table]) {
      db[this.table] = [];
    }
    let list = db[this.table];

    if (this.action === 'insert') {
      const inserted = [];
      for (const item of this.payload) {
        const copy = { ...item };
        if (copy.id === undefined) {
          const maxId = list.reduce((m, r) => Math.max(m, Number(r.id) || 0), 0);
          copy.id = maxId + 1;
        }
        if (!copy.createdAt) {
          copy.createdAt = new Date().toISOString();
        }
        // Unique check for email or username if applicable
        if (this.table === 'members' && copy.email) {
          const exists = list.some((r) => r.email && r.email.toLowerCase() === copy.email.toLowerCase());
          if (exists) {
            return { data: null, error: { message: 'Email already exists', code: '23505' } };
          }
        }
        if (this.table === 'admins' && copy.username) {
          const exists = list.some((r) => r.username === copy.username);
          if (exists) {
            return { data: null, error: { message: 'Username already exists', code: '23505' } };
          }
        }
        list.push(copy);
        inserted.push(copy);
      }
      writeDb(db);
      const resData = this.isSingle ? inserted[0] : inserted;
      return { data: this._filterColumns(resData), error: null };
    }

    if (this.action === 'upsert') {
      const onConflict = (this.upsertConfig && this.upsertConfig.onConflict) || 'id';
      const results = [];
      for (const item of this.payload) {
        const idx = list.findIndex((r) => String(r[onConflict]) === String(item[onConflict]));
        if (idx >= 0) {
          list[idx] = { ...list[idx], ...item };
          results.push(list[idx]);
        } else {
          const copy = { ...item };
          if (copy.id === undefined && onConflict !== 'id') {
            const maxId = list.reduce((m, r) => Math.max(m, Number(r.id) || 0), 0);
            copy.id = maxId + 1;
          }
          if (!copy.createdAt) copy.createdAt = new Date().toISOString();
          list.push(copy);
          results.push(copy);
        }
      }
      writeDb(db);
      const resData = this.isSingle ? results[0] : results;
      return { data: this._filterColumns(resData), error: null };
    }

    if (this.action === 'update') {
      const updated = [];
      for (let i = 0; i < list.length; i++) {
        let matches = true;
        for (const f of this.filters) {
          if (String(list[i][f.column]) !== String(f.value)) {
            matches = false;
            break;
          }
        }
        if (matches) {
          list[i] = { ...list[i], ...this.payload };
          updated.push(list[i]);
        }
      }
      writeDb(db);
      const resData = this.isSingle ? (updated[0] || null) : updated;
      return { data: this._filterColumns(resData), error: null };
    }

    if (this.action === 'delete') {
      const beforeCount = list.length;
      list = list.filter((row) => {
        for (const f of this.filters) {
          if (String(row[f.column]) === String(f.value)) {
            return false;
          }
        }
        return true;
      });
      db[this.table] = list;
      writeDb(db);
      return { data: null, error: null };
    }

    // Default: SELECT
    let results = list.slice();
    for (const f of this.filters) {
      results = results.filter((row) => String(row[f.column]) === String(f.value));
    }

    if (this.orderConfig) {
      const { column, ascending } = this.orderConfig;
      results.sort((a, b) => {
        const valA = a[column] ?? '';
        const valB = b[column] ?? '';
        if (valA < valB) return ascending ? -1 : 1;
        if (valA > valB) return ascending ? 1 : -1;
        return 0;
      });
    }

    if (this.isSingle) {
      const row = results[0] || null;
      if (!row) {
        return { data: null, error: { message: 'Row not found', code: 'PGRST116' } };
      }
      return { data: this._filterColumns(row), error: null };
    }

    return { data: this._filterColumns(results), error: null };
  }

  _filterColumns(itemOrItems) {
    if (!itemOrItems) return itemOrItems;
    if (this.selectedColumns === '*') return itemOrItems;
    const cols = this.selectedColumns.split(',').map((c) => c.trim()).filter(Boolean);
    if (!cols.length) return itemOrItems;

    const pick = (obj) => {
      const picked = {};
      for (const col of cols) {
        if (col in obj) picked[col] = obj[col];
      }
      return picked;
    };

    if (Array.isArray(itemOrItems)) {
      return itemOrItems.map(pick);
    }
    return pick(itemOrItems);
  }

  then(resolve, reject) {
    return this._execute().then(resolve, reject);
  }
}

class LocalSupabaseAdapter {
  from(table) {
    return new QueryBuilder(table);
  }
}

const localAdapter = new LocalSupabaseAdapter();

module.exports = localAdapter;
