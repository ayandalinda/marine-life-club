// ══════════════════════════════════════════════
//  DEFAULT DATA
// ══════════════════════════════════════════════
const DEFAULT = {
  hero:{tagline:'"Evoke the Ocean\'s Movement and Connection"',sub:"The UKZN Marine Life Club — where academic excellence meets coastal conservation, student advocacy, and scientific discovery along one of Africa's most biodiverse coastlines."},
  about:{intro:"The UKZN Marine Life Club exists to serve every marine biology student at the University of KwaZulu-Natal — providing community, resources, and a collective voice within the School of Life Sciences.",mission:"To foster a community of passionate marine biology students at UKZN, providing academic support, professional development, and hands-on conservation experience while representing student interests.",vision:"To become the premier student-led marine science organization in South Africa, recognized for excellence in research support, conservation impact, and student advocacy.",values:"<strong>Scientific Excellence:</strong> Rigorous academic standards<br><strong>Conservation Ethics:</strong> Protecting marine ecosystems<br><strong>Inclusivity:</strong> Welcoming all students<br><strong>Transparency:</strong> Open governance<br><strong>Innovation:</strong> New methodologies",presidentMessage:"Welcome to the UKZN Marine Life Club. As we launch in 2025, we stand at the threshold of something remarkable. Our coastline is not just a research subject — it is our responsibility, our passion, and our future."},
  programmes:[
    {id:"p1",num:"01",icon:"📚",title:"Academic Support",tagline:"Your studies, amplified",summary:"Peer tutoring, study groups, exam preparation workshops, and resource sharing for marine biology coursework.",description:"UMLC's Academic Support Programme is designed to ensure that no student falls behind. We connect senior students with first-years through structured tutoring sessions, provide access to past exam papers, facilitate study groups before major assessments, and host interactive workshops on challenging topics like marine taxonomy, oceanography, and ecological modeling.",activities:["Weekly peer tutoring sessions for all marine biology modules","Study group coordination for mid-terms and exams","Shared digital resource library with past papers and notes","Guest lectures from postgraduate researchers and alumni","Academic writing workshops for lab reports and essays","Module-specific WhatsApp groups for real-time support"],howToJoin:"Attend our weekly academic sessions or contact the Academic Officer via email. All registered UKZN marine biology students may participate for free."},
    {id:"p2",num:"02",icon:"💼",title:"Professional Development",tagline:"From student to scientist",summary:"CV workshops, research methodology training, conference preparation, and industry networking events.",description:"Bridging the gap between academic training and professional life. We run targeted workshops on research skills, scientific communication, industry exposure, and career preparation — giving UMLC members a competitive edge when they graduate.",activities:["CV and cover letter writing workshops","Research methodology and data analysis training","Conference preparation and presentation coaching","Industry site visits to marine research institutions","Networking evenings with ORI, SAAMBR, and alumni professionals","LinkedIn profile building and personal brand sessions"],howToJoin:"Sign up via the Student Voice form or email the VP directly. Sessions run once a month."},
    {id:"p3",num:"03",icon:"🐢",title:"Conservation Projects",tagline:"Hands-on, ocean-first",summary:"Beach clean-ups, marine species monitoring, and collaboration with local conservation organizations.",description:"Conservation is at the heart of UMLC. Through hands-on field projects, we give students the experience of working directly in KwaZulu-Natal's extraordinary marine ecosystems — from rocky intertidal zones to coral reefs and estuaries.",activities:["Monthly beach clean-ups along the Durban coastline","Marine species monitoring and citizen science surveys","Collaboration with Ezemvelo KZN Wildlife and SAAMBR","Turtle nesting site monitoring (seasonal)","Underwater debris collection with certified dive team","Annual coastal health report compiled by UMLC members"],howToJoin:"No experience needed. Join our conservation volunteer group — open to all UKZN students. Training is provided."},
    {id:"p4",num:"04",icon:"🔬",title:"Research & Conferences",tagline:"Publish, present, lead",summary:"Funding assistance for conference attendance, research presentation coaching, and journal clubs.",description:"We actively support students who want to pursue research beyond their coursework. UMLC provides funding opportunities, coaching for conference presentations, and a regular journal club where cutting-edge marine research is discussed and critically reviewed.",activities:["Journal club meetings — fortnightly research paper discussions","Conference travel bursary applications support","Research poster and oral presentation coaching","Honours and MSc proposal writing workshops","Collaboration facilitation with UKZN supervisors","UMLC Annual Research Showcase for student projects"],howToJoin:"Contact the Research Officer or join a journal club session. Honours and postgraduate students especially welcome."},
    {id:"p5",num:"05",icon:"📅",title:"Events Coordination",tagline:"Building community",summary:"Organising academic, social, and professional events that bring the UMLC community together throughout the year.",description:"The Events Coordinator oversees all UMLC events — from intimate academic sessions to large-scale conservation drives and social gatherings. They work closely with all executive members to ensure every event runs smoothly, is well-attended, and creates lasting impact for members.",activities:["Semester kickoff and orientation events for new members","Marine Biology Quiz Nights and social mixers","Annual UMLC Formal Dinner and Awards Evening","Coordination with UKZN SRC for campus-wide events","Logistics for field trips, workshops, and site visits","Post-event feedback collection and improvement planning"],howToJoin:"Interested in helping run events? Volunteer with the Events Coordinator — all welcome!"}
  ],
  leaders:[
    {role:"President",name:"[President Name]",bio:"Final year Marine Biology student with research interests in coastal ecology and student governance.",email:"president@umlc.co.za",photo:null},
    {role:"Vice President",name:"[VP Name]",bio:"Supports presidential duties and oversees internal operations. Focuses on academic support and member engagement.",email:"vicepresident@umlc.co.za",photo:null},
    {role:"Secretary",name:"[Secretary Name]",bio:"Manages administrative records, meeting minutes, and official correspondence.",email:"secretary@umlc.co.za",photo:null},
    {role:"Treasurer",name:"[Treasurer Name]",bio:"Oversees financial management, budgeting, and funding applications.",email:"treasurer@umlc.co.za",photo:null},
    {role:"Media Officer",name:"[Media Officer Name]",bio:"Manages social media, website content, and public relations. Documents all club activities.",email:"media@umlc.co.za",photo:null},
    {role:"Event Coordinator",name:"[Event Coordinator Name]",bio:"Plans and coordinates all UMLC events — academic, social, and conservation. Ensures logistics run smoothly.",email:"events@umlc.co.za",photo:null}
  ],
  events:[],
  contacts:{general:"info@umlc.co.za",partnerships:"partnerships@umlc.co.za",president:"president@umlc.co.za"},
  socials:{instagram:"#",linkedin:"#",ukzn:"#"},
  partnerIntro:"Actively seeking collaborations with marine research institutions, conservation organizations, and industry partners.",
  footerAddress:"UKZN Marine Life Club<br>School of Life Sciences<br>University of KwaZulu-Natal<br>Durban, South Africa",
  partners:[
    {name:"",logo:null,url:""},
    {name:"",logo:null,url:""},
    {name:"",logo:null,url:""},
    {name:"",logo:null,url:""}
  ],
  tiers:[
    {icon:"🥉",name:"Supporter",price:"R5,000",perks:"Logo on website, social media mention, annual report acknowledgment"},
    {icon:"🥈",name:"Partner",price:"R15,000",perks:"All Supporter benefits + logo on event materials, priority recruitment access, guest lecture opportunity"},
    {icon:"🥇",name:"Champion",price:"R30,000+",perks:"All Partner benefits + named scholarship fund, exclusive event sponsorship, research collaboration priority"}
  ],
  issues:[
    {id:"i1",title:"Establishment of Club Library",desc:"Request for shared textbook and journal access",status:"under-review",reply:"",source:"manual",submitterName:"",submitterEmail:""},
    {id:"i2",title:"Field Trip Transport",desc:"Coordinating shared transport for shoreline surveys",status:"resolved",reply:"Transport has been arranged with Campus Transport. Details shared via email.",source:"manual",submitterName:"",submitterEmail:""}
  ],
  inbox:[],
  seo:{enabled:false,title:"UMLC — UKZN Marine Life Club",metaDesc:"UKZN Marine Life Club - Empowering Marine Leaders in KwaZulu-Natal",canonical:"https://www.umlc.co.za/"},
  settings:{animations:true,simpleNav:false,highContrast:false,sslBadge:false,twoFA:false,twoFApin:"",loginLimit:false,cookieBanner:false,anonymize:false},
  theme:"ocean",
  sections:{home:true,about:true,programmes:true,"student-voice":true,events:true,partnerships:true,leadership:true},
  nextId:100
};

let D = JSON.parse(JSON.stringify(DEFAULT));
let creds = {u:"president",p:"umlc2025"};
let loggedIn = false;
let loginAttempts = 0;
let loginLocked = false;

// ══════════════════════════════════════════════
//  API CONFIGURATION
// ══════════════════════════════════════════════
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api'
  : 'https://marine-life-club.onrender.com/api';

// ══════════════════════════════════════════════
//  GOOGLE SHEETS BACKEND
// ══════════════════════════════════════════════
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbwBHnvVIaj7yEKtswKiA1Y_KzDbdWy7Eo3KgqeQ1krawvvR-UqIQqdiRD4yKuQ-Iy0a/exec";

// ══════════════════════════════════════════════
//  FIREBASE INITIALIZATION (Modular SDK)
// ══════════════════════════════════════════════
let firebaseApp = null;
let firebasedb = null;
let firebaseStorage = null;

async function initializeFirebase(){
  try{
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js");
    const { getStorage } = await import("https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js");
    
    const firebaseConfig = {
      apiKey: "AIzaSyD8LeX6TFURVw6AlGfanDDuk3jhUXIYEKU",
      authDomain: "umlc-7e851.firebaseapp.com",
      projectId: "umlc-7e851",
      storageBucket: "umlc-7e851.firebasestorage.app",
      messagingSenderId: "284361290170",
      appId: "1:284361290170:web:a50665622aa4d217052d83",
      measurementId: "G-Y3RZMXLQ9J"
    };
    
    firebaseApp = initializeApp(firebaseConfig);
    firebasedb = getFirestore(firebaseApp);
    firebaseStorage = getStorage(firebaseApp);
    console.log('Firebase initialized successfully');
    return true;
  }catch(e){
    console.error('Firebase initialization error:', e);
    return false;
  }
}

async function fetchLeadersFromFirebase(){
  if(!firebasedb){
    console.warn('Firebase not initialized, using local data');
    return false;
  }
  
  try{
    const { collection, getDocs, query, orderBy } = await import("https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js");
    const { ref, getBytes } = await import("https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js");
    
    const q = query(collection(firebasedb, 'leaders'), orderBy('order','asc'));
    const snapshot = await getDocs(q);
    const leaders = [];
    
    for(const doc of snapshot.docs){
      const leader = doc.data();
      leader.id = doc.id;
      
      // Fetch photo URL from Storage if available
      if(leader.photoPath){
        try{
          const { getDownloadURL } = await import("https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js");
          leader.photo = await getDownloadURL(ref(firebaseStorage, leader.photoPath));
        }catch(photoErr){
          console.warn('Could not fetch photo for ' + leader.name);
          leader.photo = null;
        }
      }
      
      leaders.push(leader);
    }
    
    if(leaders.length>0){
      D.leaders = leaders;
      localStorage.setItem('umlc_leaders_cache', JSON.stringify(leaders));
      renderLeaders();
      console.log('Leaders fetched from Firebase:', leaders.length);
    }
    return true;
  }catch(error){
    console.error('Error fetching leaders from Firebase:', error);
    // Try to load from cache
    const cached = localStorage.getItem('umlc_leaders_cache');
    if(cached){
      D.leaders = JSON.parse(cached);
      renderLeaders();
      console.log('Loaded leaders from cache');
    }
    return false;
  }
}

async function uploadPhotoToFirebase(file, leaderId, leaderRole){
  if(!firebaseStorage){
    toast('Firebase not initialized', 'err');
    return null;
  }
  
  if(file.size > 5*1024*1024){
    toast('Photo must be under 5MB', 'err');
    return null;
  }
  
  try{
    const { ref, uploadBytes, getDownloadURL } = await import("https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js");
    
    const timestamp = Date.now();
    const ext = file.name.split('.').pop();
    const photoPath = 'leaders/' + leaderId + '_' + timestamp + '.' + ext;
    
    const fileRef = ref(firebaseStorage, photoPath);
    await uploadBytes(fileRef, file);
    const photoUrl = await getDownloadURL(fileRef);
    
    console.log('Photo uploaded successfully:', photoUrl);
    return {url: photoUrl, path: photoPath};
  }catch(error){
    console.error('Photo upload error:', error);
    toast('Failed to upload photo', 'err');
    return null;
  }
}

function save(){
  try{
    const stringifiedD = JSON.stringify(D);
    const stringifiedCreds = JSON.stringify(creds);
    localStorage.setItem('umlc_v5', stringifiedD);
    localStorage.setItem('umlc_creds5', stringifiedCreds);
    
    // Sync to Google Sheets
    if (typeof SHEETS_URL !== 'undefined') {
      const payload = Object.assign({}, D, { _creds: creds });
      fetch(SHEETS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ data: JSON.stringify(payload) })
      }).catch(err => console.error("Sheets save error:", err));
    }

    const ts = new Date().toLocaleString('en-ZA');
    const el = document.getElementById('last-saved-time');
    if(el) el.textContent = 'Last saved: '+ts;
  }catch(e){}
}

function load(){
  try{
    const d=localStorage.getItem('umlc_v5');
    const c=localStorage.getItem('umlc_creds5');
    if(d){
      const parsed=JSON.parse(d);
      D = Object.assign(JSON.parse(JSON.stringify(DEFAULT)), parsed);
      D.programmes = D.programmes.map((p,i)=>{
        const def = DEFAULT.programmes[i]||DEFAULT.programmes[0];
        return Object.assign({},def,p);
      });
    }
    if(c) creds=JSON.parse(c);
  }catch(e){}
}

async function loadFromSheets() {
  try {
    const response = await fetch(SHEETS_URL);
    const result = await response.json();
    
    if (result.success && result.data) {
      const sheetsData = result.data;
      
      const cachedLeaders = D.leaders; // Pre-store leaders so they aren't overridden permanently
      
      // Parse rawState which contains settings, creds, hero, about
      if (sheetsData.rawState && sheetsData.rawState !== "{}" && sheetsData.rawState !== "") {
        const rawState = JSON.parse(sheetsData.rawState);
        D = Object.assign(JSON.parse(JSON.stringify(DEFAULT)), rawState);
        
        if (rawState._creds) {
          creds = rawState._creds;
          delete D._creds;
        }
      }
      
      // Merge arrays back into D
      if (sheetsData.members && sheetsData.members.length > 0) D.members = sheetsData.members;
      if (sheetsData.donations && sheetsData.donations.length > 0) D.donations = sheetsData.donations;
      if (sheetsData.inbox && sheetsData.inbox.length > 0) D.inbox = sheetsData.inbox;
      if (sheetsData.issues && sheetsData.issues.length > 0) D.issues = sheetsData.issues;
      if (sheetsData.events && sheetsData.events.length > 0) D.events = sheetsData.events;
      
      if(cachedLeaders) D.leaders = cachedLeaders;
      
      // Ensure programmes exist
      if(D.programmes){
        D.programmes = D.programmes.map((p, i) => {
          const def = DEFAULT.programmes[i] || DEFAULT.programmes[0];
          return Object.assign({}, def, p);
        });
      }

      localStorage.setItem('umlc_v5', JSON.stringify(D));
      localStorage.setItem('umlc_creds5', JSON.stringify(creds));
      
      // Re-render UI with Sheets data
      render();
      if (typeof renderIssuesAdmin === 'function' && document.getElementById('admin-view') && document.getElementById('admin-view').style.display === 'block') {
         fillAdminForms();
      }
  // ══════════════════════════════════════════════
//  BACKEND API FUNCTIONS
// ══════════════════════════════════════════════
async function fetchIssuesFromBackend(){
  try{
    const response = await fetch(API_BASE_URL + '/issues');
    if(!response.ok) throw new Error('Failed to fetch issues');
    const issues = await response.json();
    // Convert backend format to local format
    D.issues = issues.map(issue => ({
      id: 'i' + issue.id,
      title: issue.title,
      desc: issue.description || '',
      status: issue.status || 'under-review',
      reply: issue.reply || '',
      source: 'backend',
      submitterName: issue.submitterName || '',
      submitterEmail: issue.submitterEmail || '',
      backendId: issue.id
    }));
    console.log('✅ Issues loaded from backend:', D.issues.length);
    return true;
  }catch(error){
    console.warn('Backend issues unavailable, using local data:', error);
    return false;
  }
}

async function fetchEventsFromBackend(){
  try{
    const response = await fetch(API_BASE_URL + '/events');
    if(!response.ok) throw new Error('Failed to fetch events');
    const events = await response.json();
    D.events = events;
    console.log('✅ Events loaded from backend:', D.events.length);
    return true;
  }catch(error){
    console.warn('Backend events unavailable:', error);
    return false;
  }
}

async function fetchInquiriesFromBackend(){
  try{
    const response = await fetch(API_BASE_URL + '/inquiries');
    if(!response.ok) throw new Error('Failed to fetch inquiries');
    const inquiries = await response.json();
    D.inbox = inquiries.map(inq => ({
      id: 'm' + inq.id,
      name: inq.name,
      email: inq.email,
      category: inq.subject || 'Inquiry',
      message: inq.message,
      time: inq.createdAt,
      read: inq.status !== 'unread',
      reply: '',
      backendId: inq.id
    }));
    console.log('✅ Inquiries loaded from backend:', D.inbox.length);
    return true;
  }catch(error){
    console.warn('Backend inquiries unavailable:', error);
    return false;
  }
}

async function initializeBackendData(){
  console.log('🔄 Loading data from backend...');
  const results = await Promise.all([
    fetchIssuesFromBackend(),
    fetchEventsFromBackend(),
    fetchInquiriesFromBackend()
  ]);
  render();
  updateInboxBadge();
  console.log('✅ Backend data initialization complete');
  return true;
}

// ══════════════════════════════════════════════
//  RENDER MAIN
// ══════════════════════════════════════════════
function render(){
  const htag=document.getElementById('hero-tagline-el');if(htag)htag.textContent=D.hero.tagline;
  const hsub=document.getElementById('hero-sub-el');if(hsub)hsub.textContent=D.hero.sub;
  const ai=document.getElementById('about-intro-p');if(ai)ai.textContent=D.about.intro;
  const mt=document.getElementById('mission-text');if(mt)mt.innerHTML=D.about.mission;
  const vt=document.getElementById('vision-text');if(vt)vt.innerHTML=D.about.vision;
  const val=document.getElementById('values-text');if(val)val.innerHTML=D.about.values;
  const pm=document.getElementById('president-message-text');if(pm)pm.textContent=D.about.presidentMessage;
  renderProgrammes();
  renderLeaders();
  renderEvents();
  renderIssuesPublic();
  renderPartners();
  const ga=document.getElementById('footer-general-email');if(ga){ga.href='mailto:'+D.contacts.general;ga.textContent=D.contacts.general;}
  const pa=document.getElementById('partner-email-a');if(pa)pa.href='mailto:'+D.contacts.partnerships;
  const fa=document.getElementById('footer-address-el');if(fa)fa.innerHTML=D.footerAddress;
  const pi=document.getElementById('partnerships-intro-text');if(pi)pi.textContent=D.partnerIntro;
  const ig=document.getElementById('ft-instagram');if(ig)ig.href=D.socials.instagram||'#';
  const tk=document.getElementById('ft-tiktok');if(tk)tk.href=D.socials.tiktok||'#';
  const fb=document.getElementById('ft-facebook');if(fb)fb.href=D.socials.facebook||'#';
  const yt=document.getElementById('ft-youtube');if(yt)yt.href=D.socials.youtube||'#';
  document.body.setAttribute('data-theme',D.theme||'ocean');
  applySectionVisibility();
  applySettings();
  updateInboxBadge();
  applySEO();
}

// ══════════════════════════════════════════════
//  PROGRAMMES
// ══════════════════════════════════════════════
function renderProgrammes(){
  const pg=document.getElementById('prog-grid-el');if(!pg)return;
  pg.innerHTML=D.programmes.map((p,i)=>`
    <div class="prog-item" onclick="openProgModal(${i})" role="button" tabindex="0" aria-label="Open ${p.title} programme details" onkeydown="if(event.key==='Enter')openProgModal(${i})">
      <span class="prog-num">${p.num||'0'+(i+1)}</span>
      <div class="prog-icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <span class="prog-learn-more">Explore Programme</span>
    </div>`).join('');
}

function openProgModal(i){
  const p=D.programmes[i];
  document.getElementById('pm-icon').textContent=p.icon;
  document.getElementById('prog-modal-title-el').textContent=p.title;
  document.getElementById('pm-num').textContent=p.tagline||'';
  const body=document.getElementById('pm-body');
  body.innerHTML=`
    <div class="prog-detail-section">
      <h4>Overview</h4>
      <p>${p.description}</p>
    </div>
    <div class="prog-detail-section">
      <h4>What We Do — Activities</h4>
      <div class="prog-activities">
        ${(p.activities||[]).map(a=>`<div class="prog-activity"><div class="prog-activity-dot"></div><p>${a}</p></div>`).join('')}
      </div>
    </div>
    <div class="prog-how-to-join">
      <h4>How to Get Involved</h4>
      <p>${p.howToJoin||'Contact us via the Student Voice form or email the relevant officer.'}</p>
      <a href="#student-voice" class="btn-glow" onclick="closeProgModal()" style="font-size:0.82rem;padding:0.75rem 1.75rem;">Get Involved Now</a>
    </div>`;
  document.getElementById('progModalOverlay').classList.add('show');
  document.body.style.overflow='hidden';
}
function closeProgModal(){
  document.getElementById('progModalOverlay').classList.remove('show');
  document.body.style.overflow='';
}
document.getElementById('progModalOverlay').addEventListener('click',e=>{if(e.target.id==='progModalOverlay')closeProgModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProgModal();closeSearch();}});

// ══════════════════════════════════════════════
//  PARTNERS
// ══════════════════════════════════════════════
function renderPartners(){
  const pg=document.getElementById('partner-grid-el');if(!pg)return;
  pg.innerHTML=D.partners.map((p,i)=>{
    if(p.logo||p.name){
      return `<div class="partner-tile">
        ${p.logo?`<img src="${p.logo}" alt="${p.name} logo" class="partner-tile-img">`:''}
        <span class="partner-tile-name">${p.name}</span>
        ${p.url&&p.url!='#'?`<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="pt-url" aria-label="Visit ${p.name} website">Visit →</a>`:''}
      </div>`;
    }
    return `<div class="partner-tile"><div class="partner-tile-empty"><span class="add-icon">+</span><span>Partner ${i+1}</span></div></div>`;
  }).join('');
}

// ══════════════════════════════════════════════
//  LEADERS
// ══════════════════════════════════════════════
function renderLeaders(){
  const lg=document.getElementById('leaders-grid');if(!lg)return;
  lg.innerHTML=D.leaders.map((l,i)=>`
    <div class="leader-card">
      <div class="photo-zone" onclick="triggerPhoto(${i})" title="Click to upload photo" role="button" aria-label="Upload photo for ${l.role}" tabindex="0" onkeydown="if(event.key==='Enter')triggerPhoto(${i})">
        ${l.photo?`<img src="${l.photo}" alt="${l.name}, ${l.role}">`:`<div class="photo-placeholder"><div class="avatar-icon">👤</div><span>Click to upload</span></div>`}
        <div class="photo-upload-overlay"><span>📷 Change Photo</span></div>
        <input type="file" class="photo-input" id="pi-${i}" accept="image/*" onchange="handlePhoto(event,${i})">
      </div>
      <div class="leader-info">
        <div class="leader-role">${l.role}</div>
        <div class="leader-name">${l.name}</div>
        <p class="leader-bio">${l.bio}</p>
        <a href="mailto:${l.email}" class="leader-email" aria-label="Email ${l.name}">${l.email}</a>
      </div>
    </div>`).join('')+`
    <div class="contact-row">
      <p>General inquiries about UMLC membership and activities</p>
      <a href="mailto:${D.contacts.general}" class="btn-outline" style="font-size:0.83rem;padding:0.55rem 1.3rem;" aria-label="Send general email">${D.contacts.general}</a>
    </div>`;
}
function triggerPhoto(i){document.getElementById('pi-'+i).click();}

async function handlePhoto(e,i){
  const f=e.target.files[0];if(!f)return;
  if(f.size>5*1024*1024){toast('Photo must be under 5MB','err');return;}
  
  const leader = D.leaders[i];
  
  // Try Firebase upload first
  if(firebaseStorage && leader.id){
    const result = await uploadPhotoToFirebase(f, leader.id, leader.role);
    if(result){
      D.leaders[i].photo = result.url;
      D.leaders[i].photoPath = result.path;
      save();
      renderLeaders();
      toast('Photo uploaded for ' + D.leaders[i].role + '!');
      
      // Update in Firebase
      if(firebasedb && leader.id){
        try{
          const { doc, updateDoc } = await import("https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js");
          await updateDoc(doc(firebasedb, 'leaders', leader.id), {
            photo: result.url,
            photoPath: result.path
          });
        }catch(err){
          console.warn('Could not update Firebase:', err);
        }
      }
      return;
    }
  }
  
  // Fallback: use localStorage
  const reader = new FileReader();
  reader.onload = (ev) => {
    D.leaders[i].photo = ev.target.result;
    save();
    renderLeaders();
    toast('Photo uploaded locally for ' + D.leaders[i].role + '!');
  };
  reader.readAsDataURL(f);
}

// ══════════════════════════════════════════════
//  EVENTS
// ══════════════════════════════════════════════
function renderEvents(){
  const ec=document.getElementById('events-container');if(!ec)return;
  if(D.events.length===0){ec.innerHTML=`<div class="no-events-block"><div class="icon">🌊</div><h3>No Events Yet</h3><p>UMLC was established in 2025. Our first events will be announced soon.</p><button class="btn-outline" style="margin-top:1.5rem;" onclick="openAdmin()">+ Add Event (Admin Only)</button></div>`;}
  else{ec.innerHTML='<div class="timeline">'+D.events.map(ev=>`<div class="t-event"><div class="t-date">${new Date(ev.date).toLocaleDateString('en-ZA',{year:'numeric',month:'long',day:'numeric'})}</div><div class="t-content"><h3>${ev.title}</h3><p>${ev.description}</p></div></div>`).join('')+'</div>';}
}

// ══════════════════════════════════════════════
//  ISSUES
// ══════════════════════════════════════════════
const STATUS_MAP={
  'pending':{label:'Pending',badge:'badge-pending',bar:'p-pending',steps:[false,false,false,false]},
  'under-review':{label:'Under Review',badge:'badge-review',bar:'p-review',steps:[true,false,false,false]},
  'in-progress':{label:'In Progress',badge:'badge-progress',bar:'p-progress',steps:[true,true,false,false]},
  'resolved':{label:'Resolved',badge:'badge-resolved',bar:'p-resolved',steps:[true,true,true,true]}
};
const STEPS=['Received','Under Review','In Progress','Resolved'];

function renderIssuesPublic(){
  const el=document.getElementById('issues-list-public');if(!el)return;
  if(D.issues.length===0){el.innerHTML='<p style="color:var(--ghost);font-size:0.85rem;">No issues currently tracked.</p>';return;}
  el.innerHTML=D.issues.map(issue=>{
    const s=STATUS_MAP[issue.status]||STATUS_MAP['pending'];
    return `<div class="issue-item status-${issue.status}">
      <div class="issue-top"><h4>${issue.title}</h4><span class="badge ${s.badge}">${s.label}</span></div>
      <p class="issue-desc">${issue.desc}</p>
      <div class="progress-track"><div class="progress-fill ${s.bar}"></div></div>
      <div class="progress-steps">${STEPS.map((lbl,i)=>`<span class="${s.steps[i]?'active':''}">${lbl}</span>`).join('')}</div>
      ${issue.reply?`<div class="issue-reply"><div class="issue-reply-label">💬 Leadership Response</div><p>${issue.reply}</p></div>`:''}
    </div>`;
  }).join('');
}

function renderIssuesAdmin(){
  const el=document.getElementById('issues-admin-list');if(!el)return;
  if(D.issues.length===0){el.innerHTML='<p style="color:var(--ghost);font-size:0.85rem;">No issues yet.</p>';return;}
  el.innerHTML=D.issues.map((issue,i)=>{
    const s=STATUS_MAP[issue.status]||STATUS_MAP['pending'];
    return `<div class="eitem">
      <div class="eitem-row" style="margin-bottom:0.75rem;"><div><strong>${issue.title}</strong><br><span style="font-size:0.78rem;color:var(--ghost);">${issue.desc}</span></div><span class="badge ${s.badge}">${s.label}</span></div>
      <div class="mf" style="margin-bottom:0.6rem;"><label>Update Status</label><select onchange="updateIssueStatus(${i},this.value)"><option value="pending" ${issue.status==='pending'?'selected':''}>Pending</option><option value="under-review" ${issue.status==='under-review'?'selected':''}>Under Review</option><option value="in-progress" ${issue.status==='in-progress'?'selected':''}>In Progress</option><option value="resolved" ${issue.status==='resolved'?'selected':''}>Resolved</option></select></div>
      <div class="mf" style="margin-bottom:0.6rem;"><label>Official Reply (public)</label><textarea rows="2" onchange="updateIssueReply(${i},this.value)">${issue.reply||''}</textarea></div>
      <button class="del-btn" onclick="removeIssue(${i})">Remove</button>
    </div>`;
  }).join('');
}

function addIssue(){
  const t=document.getElementById('ni-title').value.trim();
  const d2=document.getElementById('ni-desc').value.trim();
  const s=document.getElementById('ni-status').value;
  if(!t){toast('Enter a title','err');return;}
  
  // Add to backend
  fetch(API_BASE_URL + '/issues', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: t,
      description: d2,
      status: s
    })
  }).then(r => r.json()).then(result => {
    console.log('Issue created on backend:', result);
    // Add locally for immediate display
    D.issues.push({id:'i'+(D.nextId++),title:t,desc:d2||'',status:s,reply:'',source:'admin',submitterName:'',submitterEmail:'',backendId:result.id});
    save();render();renderIssuesAdmin();
    document.getElementById('ni-title').value='';
    document.getElementById('ni-desc').value='';
    toast('Issue added to database!');
  }).catch(err => {
    console.error('Error creating issue:', err);
    // Fallback to local
    D.issues.push({id:'i'+(D.nextId++),title:t,desc:d2||'',status:s,reply:'',source:'admin',submitterName:'',submitterEmail:''});
    save();render();renderIssuesAdmin();
    document.getElementById('ni-title').value='';
    document.getElementById('ni-desc').value='';
    toast('Issue added locally (backend unavailable)');
  });
}

function updateIssueStatus(i,val){
  D.issues[i].status=val;
  // Sync to backend if backendId exists
  if(D.issues[i].backendId){
    fetch(API_BASE_URL + '/issues/' + D.issues[i].backendId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: val, reply: D.issues[i].reply })
    }).catch(err => console.log('Backend sync (status) failed:', err));
  }
  save();render();renderIssuesAdmin();toast('Status updated');}

function updateIssueReply(i,val){
  D.issues[i].reply=val;
  // Sync to backend if backendId exists
  if(D.issues[i].backendId){
    fetch(API_BASE_URL + '/issues/' + D.issues[i].backendId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: D.issues[i].status, reply: val })
    }).catch(err => console.log('Backend sync (reply) failed:', err));
  }
  save();render();
}

function removeIssue(i){if(confirm('Remove this issue?')){D.issues.splice(i,1);save();render();renderIssuesAdmin();toast('Removed.');}}

// ══════════════════════════════════════════════
//  STUDENT VOICE / INBOX
// ══════════════════════════════════════════════
async function handleVoice(e){
  e.preventDefault();
  const name=document.getElementById('vf-name').value.trim()||'Anonymous';
  const email=document.getElementById('vf-email').value.trim()||'';
  const cat=document.getElementById('vf-cat').value;
  const msg=document.getElementById('vf-msg').value.trim();
  
  // Send to backend API
  try{
    const response = await fetch(API_BASE_URL + '/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: cat,
        description: msg,
        submitterName: name,
        submitterEmail: email
      })
    });
    
    if(response.ok){
      const result = await response.json();
      // Also store locally for immediate display
      D.inbox.push({id:'m'+(D.nextId++),name,email,category:cat,message:msg,time:new Date().toISOString(),read:false,reply:''});
      save();updateInboxBadge();
      toast('Thank you '+name+'! Your message has been received and stored in our database.'+(email?' We may reply to '+email:''));
      document.getElementById('voice-form').reset();
      // Refresh from backend
      await fetchIssuesFromBackend();
    }else{
      toast('Error submitting form. Please try again.','err');
    }
  }catch(error){
    console.error('Error submitting voice form:', error);
    // Fallback to local storage
    D.inbox.push({id:'m'+(D.nextId++),name,email,category:cat,message:msg,time:new Date().toISOString(),read:false,reply:''});
    save();updateInboxBadge();
    toast('Message saved locally (backend unavailable)');
    document.getElementById('voice-form').reset();
  }
}

function updateInboxBadge(){
  const unread=D.inbox.filter(m=>!m.read).length;
  const nb=document.getElementById('nav-badge');const cb=document.getElementById('inbox-count-badge');
  if(nb){nb.style.display=unread>0?'':'none';nb.textContent=unread;}
  if(cb){cb.style.display=unread>0?'':'none';cb.textContent=unread;}
}

function renderInbox(){
  const el=document.getElementById('inbox-list');if(!el)return;
  if(D.inbox.length===0){el.innerHTML='<div class="no-inbox">📭 No messages yet. Student voice submissions will appear here.</div>';return;}
  el.innerHTML=[...D.inbox].reverse().map((m,ri)=>{
    const i=D.inbox.length-1-ri;
    return `<div class="inbox-item ${m.read?'':'unread'}">
      <div class="inbox-meta"><span class="inbox-cat">${m.category}</span><span style="font-weight:600;font-size:0.83rem;color:var(--pearl);">${m.name}</span><span class="inbox-time">${new Date(m.time).toLocaleString('en-ZA',{dateStyle:'short',timeStyle:'short'})}</span></div>
      ${m.email?`<div class="inbox-sender">📧 ${m.email}</div>`:'<div class="inbox-sender" style="color:var(--ghost);">No email provided</div>'}
      <p class="inbox-msg">${m.message}</p>
      ${m.reply?`<div class="issue-reply"><div class="issue-reply-label">✅ Reply Sent</div><p>${m.reply}</p></div>`:
      `<div class="reply-form"><input type="text" id="ri-${m.id}" placeholder="${m.email?'Type reply for '+m.email+'...':'No email — reply will be noted internally'}"><button onclick="sendReply(${i},'${m.id}')">Send Reply</button></div>`}
      <div class="inbox-actions">
        ${!m.read?`<button class="btn-sm" onclick="markRead(${i})">✓ Mark Read</button>`:''}
        <button class="btn-sm" onclick="promoteToIssue(${i})">📋 Add to Board</button>
        <button class="del-btn" onclick="deleteMsg(${i})">Delete</button>
      </div>
    </div>`;
  }).join('');
}

function sendReply(i,id){const inp=document.getElementById('ri-'+id);if(!inp)return;const txt=inp.value.trim();if(!txt){toast('Enter a reply','err');return;}D.inbox[i].reply=txt;D.inbox[i].read=true;save();renderInbox();updateInboxBadge();toast(D.inbox[i].email?'Reply noted! Email: '+D.inbox[i].email:'Reply noted (no email provided).');}

function markRead(i){D.inbox[i].read=true;save();renderInbox();updateInboxBadge();}

function promoteToIssue(i){const m=D.inbox[i];D.issues.push({id:'i'+(D.nextId++),title:m.category+': '+m.message.substring(0,55)+'...',desc:'Submitted by: '+m.name+(m.email?' ('+m.email+')':''),status:'under-review',reply:'',source:'inbox',submitterName:m.name,submitterEmail:m.email});D.inbox[i].read=true;save();render();renderIssuesAdmin();renderInbox();updateInboxBadge();toast('Added to Issues Board!');}

function deleteMsg(i){if(confirm('Delete this message?')){D.inbox.splice(i,1);save();renderInbox();updateInboxBadge();toast('Deleted.');}}

// ══════════════════════════════════════════════
//  ADMIN CONTENT SAVES
// ══════════════════════════════════════════════
function openAdmin(){
  console.log('🔐 Opening admin panel...');
  try{
    const overlay = document.getElementById('adminOverlay');
    if(!overlay) throw new Error('adminOverlay element not found');
    overlay.classList.add('show');
    if(loggedIn) showPanel();
    console.log('✅ Admin panel opened');
  }catch(e){
    console.error('❌ Error opening admin panel:', e);
  }
}

function closeAdmin(){
  console.log('🔒 Closing admin panel...');
  try{
    const overlay = document.getElementById('adminOverlay');
    if(overlay) overlay.classList.remove('show');
    console.log('✅ Admin panel closed');
  }catch(e){
    console.error('❌ Error closing admin panel:', e);
  }
}

// Safely add event listener for admin overlay
try{
  const adminOverlay = document.getElementById('adminOverlay');
  if(adminOverlay){
    adminOverlay.addEventListener('click', e=>{
      if(e.target.id==='adminOverlay') closeAdmin();
    });
  }else{
    console.warn('⚠️ adminOverlay element not found for event listener');
  }
}catch(e){
  console.error('❌ Error adding admin overlay listener:', e);
}

function doLogin(){
  if(loginLocked){toast('Too many attempts. Wait 10 minutes.','err');return;}
  const u=document.getElementById('a-user').value.trim(),p=document.getElementById('a-pass').value;
  if(u===creds.u&&p===creds.p){
    if(D.settings.twoFA&&D.settings.twoFApin){
      const pin=prompt('Enter your 6-digit admin PIN:');
      if(pin!==String(D.settings.twoFApin)){toast('Incorrect PIN','err');return;}
    }
    loggedIn=true;loginAttempts=0;showPanel();document.getElementById('login-err').style.display='none';
  }else{
    loginAttempts++;
    document.getElementById('login-err').style.display='block';
    if(D.settings.loginLimit&&loginAttempts>=5){loginLocked=true;toast('Login locked for 10 minutes.','err');setTimeout(()=>{loginLocked=false;loginAttempts=0;},600000);}
  }
}

function showPanel(){
  document.getElementById('login-view').style.display='none';
  document.getElementById('admin-view').style.display='block';
  fillAdminForms();
}

function doLogout(){loggedIn=false;document.getElementById('login-view').style.display='block';document.getElementById('admin-view').style.display='none';document.getElementById('a-user').value='';document.getElementById('a-pass').value='';closeAdmin();}

function switchTab(id,btn){
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('on'));
  document.getElementById(id).classList.add('on');btn.classList.add('on');
  if(id==='t-inbox')renderInbox();
  if(id==='t-issues')renderIssuesAdmin();
  if(id==='t-partners')renderPartnersEdit();
  if(id==='t-proposal')renderTiersEdit();
  if(id==='t-settings'){renderSectionToggles();renderSettingsToggles();}
}

function fillAdminForms(){
  document.getElementById('e-hero-tagline').value=D.hero.tagline;
  document.getElementById('e-hero-sub').value=D.hero.sub;
  const eai=document.getElementById('e-about-intro');if(eai)eai.value=D.about.intro;
  document.getElementById('e-mission').value=D.about.mission;
  document.getElementById('e-vision').value=D.about.vision;
  document.getElementById('e-values').value=D.about.values;
  document.getElementById('e-pres-msg').value=D.about.presidentMessage;
  const epi=document.getElementById('e-partner-intro');if(epi)epi.value=D.partnerIntro;
  const efa=document.getElementById('e-footer-addr');if(efa)efa.value=D.footerAddress.replace(/<br>/g,'\n');
  document.getElementById('e-instagram').value=D.socials.instagram||'';
  document.getElementById('e-tiktok').value=D.socials.tiktok||'';
  document.getElementById('e-facebook').value=D.socials.facebook||'';
  document.getElementById('e-youtube').value=D.socials.youtube||'';
  document.getElementById('s-gen-email').value=D.contacts.general;
  document.getElementById('s-part-email').value=D.contacts.partnerships;
  document.getElementById('s-pres-email').value=D.contacts.president;
  // SEO
  const st=document.getElementById('s-site-title');if(st)st.value=D.seo.title||'';
  const smd=document.getElementById('s-meta-desc');if(smd)smd.value=D.seo.metaDesc||'';
  const sc=document.getElementById('s-canonical');if(sc)sc.value=D.seo.canonical||'';
  // 2FA pin
  const pin=document.getElementById('s-2fa-pin');if(pin)pin.value=D.settings.twoFApin||'';
  // Programmes edit
  renderProgsEdit();
  renderLeadersEdit();
  renderEventsAdmin();
  renderInbox();updateInboxBadge();
}

function renderProgsEdit(){
  const el=document.getElementById('progs-edit-list');if(!el)return;
  el.innerHTML=D.programmes.map((p,i)=>`
    <div class="eitem">
      <strong style="color:var(--biolum);">${p.icon} ${p.title}</strong>
      <div class="mf" style="margin-top:0.75rem;"><label>Icon (emoji)</label><input type="text" id="pe-icon-${i}" value="${p.icon}" style="width:60px;"></div>
      <div class="mf"><label>Title</label><input type="text" id="pe-title-${i}" value="${p.title}"></div>
      <div class="mf"><label>Tagline</label><input type="text" id="pe-tagline-${i}" value="${p.tagline||''}"></div>
      <div class="mf"><label>Summary (card view)</label><textarea id="pe-summary-${i}" rows="2">${p.summary}</textarea></div>
      <div class="mf"><label>Full Description (modal)</label><textarea id="pe-desc-${i}" rows="4">${p.description}</textarea></div>
      <div class="mf"><label>Activities (one per line)</label><textarea id="pe-acts-${i}" rows="5">${(p.activities||[]).join('\n')}</textarea></div>
      <div class="mf"><label>How to Join</label><textarea id="pe-join-${i}" rows="2">${p.howToJoin||''}</textarea></div>
    </div>`).join('');
}

function saveProgs(){
  D.programmes.forEach((p,i)=>{
    p.icon=document.getElementById('pe-icon-'+i).value;
    p.title=document.getElementById('pe-title-'+i).value;
    p.tagline=document.getElementById('pe-tagline-'+i).value;
    p.summary=document.getElementById('pe-summary-'+i).value;
    p.description=document.getElementById('pe-desc-'+i).value;
    p.activities=document.getElementById('pe-acts-'+i).value.split('\n').filter(a=>a.trim());
    p.howToJoin=document.getElementById('pe-join-'+i).value;
  });
  save();render();toast('Programmes saved!');
}

function renderPartnersEdit(){
  const el=document.getElementById('partners-edit-list');if(!el)return;
  el.innerHTML=D.partners.map((p,i)=>`
    <div class="partner-edit-card">
      <strong>Partner Slot ${i+1}</strong>
      <div class="mf"><label>Organisation Name</label><input type="text" id="pt-name-${i}" value="${p.name||''}"></div>
      <div class="mf"><label>Website URL</label><input type="url" id="pt-url-${i}" value="${p.url||''}" placeholder="https://..."></div>
      <div style="display:flex;align-items:center;gap:1rem;margin-top:0.5rem;">
        <div>
          <label style="font-family:'DM Mono',monospace;font-size:0.63rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--biolum);display:block;margin-bottom:0.35rem;">Logo Image</label>
          <input type="file" id="pt-logo-${i}" accept="image/*" onchange="handlePartnerLogo(event,${i})" style="display:none;">
          <button class="save-btn" style="margin-top:0;font-size:0.72rem;padding:0.5rem 1rem;" onclick="document.getElementById('pt-logo-${i}').click()">Upload Logo</button>
        </div>
        ${p.logo?`<img src="${p.logo}" alt="Partner ${i+1} logo" class="partner-preview-thumb">`:'<span style="font-size:0.78rem;color:var(--ghost);">No logo yet</span>'}
      </div>
      ${p.logo?`<button class="del-btn" style="margin-top:0.5rem;" onclick="clearPartnerLogo(${i})">Remove Logo</button>`:''}
    </div>`).join('');
}

function handlePartnerLogo(e,i){
  const f=e.target.files[0];if(!f)return;
  if(f.size>3*1024*1024){toast('Logo must be under 3MB','err');return;}
  const r=new FileReader();r.onload=ev=>{D.partners[i].logo=ev.target.result;renderPartnersEdit();toast('Logo uploaded for Partner '+(i+1));};r.readAsDataURL(f);
}

function clearPartnerLogo(i){D.partners[i].logo=null;renderPartnersEdit();toast('Logo removed.');}

function savePartners(){
  D.partners.forEach((p,i)=>{p.name=document.getElementById('pt-name-'+i).value.trim();p.url=document.getElementById('pt-url-'+i).value.trim();});
  save();render();toast('Partners saved!');
}

function renderLeadersEdit(){
  const ll=document.getElementById('leaders-edit-list');if(!ll)return;
  ll.innerHTML=D.leaders.map((l,i)=>`
    <div class="eitem">
      <strong style="color:var(--biolum);">${l.role}</strong>
      <div class="mf" style="margin-top:0.75rem;"><label>Role Title</label><input type="text" id="le-role-${i}" value="${l.role}"></div>
      <div class="mf"><label>Name</label><input type="text" id="le-name-${i}" value="${l.name}"></div>
      <div class="mf"><label>Bio</label><textarea id="le-bio-${i}" rows="2">${l.bio}</textarea></div>
      <div class="mf"><label>Email</label><input type="email" id="le-email-${i}" value="${l.email}"></div>
    </div>`).join('');
}

function saveLeaders(){
  D.leaders.forEach((l,i)=>{
    l.role=document.getElementById('le-role-'+i).value;
    l.name=document.getElementById('le-name-'+i).value;
    l.bio=document.getElementById('le-bio-'+i).value;
    l.email=document.getElementById('le-email-'+i).value;
  });
  save();render();toast('Leadership updated!');
}

function saveHero(){D.hero.tagline=document.getElementById('e-hero-tagline').value;D.hero.sub=document.getElementById('e-hero-sub').value;save();render();toast('Hero saved!');}

function saveAbout(){D.about.intro=document.getElementById('e-about-intro').value;D.about.mission=document.getElementById('e-mission').value;D.about.vision=document.getElementById('e-vision').value;D.about.values=document.getElementById('e-values').value;D.about.presidentMessage=document.getElementById('e-pres-msg').value;save();render();toast('About saved!');}

function savePartnerSection(){D.partnerIntro=document.getElementById('e-partner-intro').value;D.footerAddress=document.getElementById('e-footer-addr').value.replace(/\n/g,'<br>');save();render();toast('Saved!');}

function saveSocials(){D.socials.instagram=document.getElementById('e-instagram').value;D.socials.tiktok=document.getElementById('e-tiktok').value;D.socials.facebook=document.getElementById('e-facebook').value;D.socials.youtube=document.getElementById('e-youtube').value;save();render();toast('Socials saved!');}

function saveContacts(){D.contacts.general=document.getElementById('s-gen-email').value;D.contacts.partnerships=document.getElementById('s-part-email').value;D.contacts.president=document.getElementById('s-pres-email').value;save();render();toast('Contacts updated!');}

function addEvent(){
  const t=document.getElementById('e-ev-title').value.trim(),
        d=document.getElementById('e-ev-date').value,
        desc=document.getElementById('e-ev-desc').value.trim();
  if(!t||!d||!desc){toast('Fill all event fields','err');return;}
  
  // Send to backend
  fetch(API_BASE_URL + '/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: t,
      date: d,
      description: desc,
      category: 'general'
    })
  }).then(r => r.json()).then(result => {
    console.log('Event created on backend:', result);
    D.events.push({title:t,date:d,description:desc,backendId:result.id});
    D.events.sort((a,b)=>new Date(a.date)-new Date(b.date));
    save();render();renderEventsAdmin();
    document.getElementById('e-ev-title').value='';
    document.getElementById('e-ev-date').value='';
    document.getElementById('e-ev-desc').value='';
    toast('Event added to database!');
  }).catch(err => {
    console.error('Error creating event:', err);
    // Fallback to local
    D.events.push({title:t,date:d,description:desc});
    D.events.sort((a,b)=>new Date(a.date)-new Date(b.date));
    save();render();renderEventsAdmin();
    document.getElementById('e-ev-title').value='';
    document.getElementById('e-ev-date').value='';
    document.getElementById('e-ev-desc').value='';
    toast('Event added locally (backend unavailable)');
  });
}

function renderEventsAdmin(){const el=document.getElementById('events-edit-list');if(!el)return;if(D.events.length===0){el.innerHTML='<p style="color:var(--ghost);font-size:0.85rem;">No events yet.</p>';return;}el.innerHTML=D.events.map((ev,i)=>`<div class="eitem"><div class="eitem-row"><div><strong style="font-size:0.88rem;">${ev.title}</strong><br><span style="font-size:0.75rem;color:var(--ghost);">${new Date(ev.date).toLocaleDateString()}</span></div><button class="del-btn" onclick="delEvent(${i})">Delete</button></div></div>`).join('');}

function delEvent(i){if(confirm('Delete?')){D.events.splice(i,1);save();render();renderEventsAdmin();toast('Event deleted.');}}

function renderTiersEdit(){
  const el=document.getElementById('tiers-edit-list');if(!el)return;
  el.innerHTML=D.tiers.map((t,i)=>`
    <div class="eitem">
      <strong style="color:var(--biolum);">${t.icon} ${t.name}</strong>
      <div class="mf" style="margin-top:0.75rem;"><label>Icon</label><input type="text" id="te-icon-${i}" value="${t.icon}" style="width:60px;"></div>
      <div class="mf"><label>Name</label><input type="text" id="te-name-${i}" value="${t.name}"></div>
      <div class="mf"><label>Price</label><input type="text" id="te-price-${i}" value="${t.price}"></div>
      <div class="mf"><label>Benefits</label><textarea id="te-perks-${i}" rows="2">${t.perks}</textarea></div>
    </div>`).join('');
}

function saveTiers(){D.tiers.forEach((t,i)=>{t.icon=document.getElementById('te-icon-'+i).value;t.name=document.getElementById('te-name-'+i).value;t.price=document.getElementById('te-price-'+i).value;t.perks=document.getElementById('te-perks-'+i).value;});save();toast('Proposal saved!');}

function changePass(){
  const cur=document.getElementById('s-cur-pass').value,np=document.getElementById('s-new-pass').value,cp=document.getElementById('s-conf-pass').value;
  document.getElementById('pass-ok').style.display='none';document.getElementById('pass-err').style.display='none';
  if(cur===creds.p&&np===cp&&np.length>0){creds.p=np;save();document.getElementById('pass-ok').style.display='block';['s-cur-pass','s-new-pass','s-conf-pass'].forEach(id=>document.getElementById(id).value='');}
  else document.getElementById('pass-err').style.display='block';
}

function resetSite(){if(confirm('Reset ALL content to defaults? This cannot be undone.')){localStorage.removeItem('umlc_v5');location.reload();}}

// ══════════════════════════════════════════════
//  SETTINGS
// ══════════════════════════════════════════════
function toggleSetting(key,btn){
  D.settings[key]=!D.settings[key];
  if(btn)btn.classList.toggle('on',D.settings[key]);
  save();applySettings();
  if(key==='twoFA'){const r=document.getElementById('twofa-pin-row');if(r)r.style.display=D.settings.twoFA?'block':'none';}
  toast(key+' '+(D.settings[key]?'enabled':'disabled'));
}

function renderSettingsToggles(){
  const keys=['animations','simpleNav','highContrast','sslBadge','twoFA','loginLimit','cookieBanner','anonymize'];
  keys.forEach(k=>{
    const el=document.getElementById('tog-'+k.toLowerCase().replace(/[A-Z]/g,m=>m.toLowerCase()))||document.getElementById('tog-'+k);
    if(el)el.classList.toggle('on',!!D.settings[k]);
  });
  const tfa=document.getElementById('twofa-pin-row');if(tfa)tfa.style.display=D.settings.twoFA?'block':'none';
  const pinEl=document.getElementById('s-2fa-pin');if(pinEl)pinEl.value=D.settings.twoFApin||'';
}

function save2FA(){const p=document.getElementById('s-2fa-pin').value;if(p.length!==6||!/^\d+$/.test(p)){toast('PIN must be exactly 6 digits','err');return;}D.settings.twoFApin=p;save();toast('2FA PIN saved!');}

function applySettings(){
  document.body.classList.toggle('high-contrast',!!D.settings.highContrast);
  const nl=document.querySelectorAll('.nav-links li');nl.forEach((li,i)=>{if(D.settings.simpleNav&&i>4&&i<nl.length-2)li.style.display='none';else li.style.display='';});
  const ssl=document.getElementById('ssl-indicator');if(ssl)ssl.style.display=D.settings.sslBadge?'':'none';
  const cb=document.getElementById('cookie-banner');
  if(cb&&D.settings.cookieBanner&&!localStorage.getItem('umlc_cookies_ok'))cb.style.display='flex';
  else if(cb)cb.style.display='none';
  if(!D.settings.animations)document.documentElement.style.setProperty('--ease','none');
  else document.documentElement.style.removeProperty('--ease');
  const seotog=document.getElementById('tog-seo');if(seotog)seotog.classList.toggle('on',!!D.seo.enabled);
}

function toggleSetting_SEO(){D.seo.enabled=!D.seo.enabled;save();applySEO();const el=document.getElementById('tog-seo');if(el)el.classList.toggle('on',D.seo.enabled);toast('Search Engine Visibility '+(D.seo.enabled?'ON — Google can now index your site':'OFF — Site hidden from search engines'));}

document.getElementById('tog-seo')&&document.getElementById('tog-seo').addEventListener('click',function(){toggleSetting_SEO();});

function applySEO(){
  const robots=document.getElementById('meta-robots');
  if(robots)robots.content=D.seo.enabled?'index,follow':'noindex,nofollow';
  const titleEl=document.getElementById('site-title');
  if(titleEl&&D.seo.title)titleEl.textContent=D.seo.title;
  const metaEl=document.getElementById('site-meta-desc');
  if(metaEl&&D.seo.metaDesc)metaEl.content=D.seo.metaDesc;
  const canonical=document.getElementById('canonical-link');
  if(canonical&&D.seo.canonical)canonical.href=D.seo.canonical;
}

function saveSEO(){
  D.seo.title=document.getElementById('s-site-title').value;
  D.seo.metaDesc=document.getElementById('s-meta-desc').value;
  D.seo.canonical=document.getElementById('s-canonical').value;
  save();applySEO();toast('SEO settings saved!');
}

const SECTION_NAMES={home:'Home/Hero',about:'About UMLC',programmes:'Programmes','student-voice':'Student Voice',events:'Events',partnerships:'Partnerships',leadership:'Leadership'};

function renderSectionToggles(){
  const el=document.getElementById('section-toggles');if(!el)return;
  el.innerHTML=Object.keys(SECTION_NAMES).map(k=>`
    <div class="toggle-row">
      <span>${SECTION_NAMES[k]}</span>
      <button class="toggle ${D.sections[k]!==false?'on':''}" onclick="toggleSection('${k}',this)"></button>
    </div>`).join('');
}

function toggleSection(k,btn){D.sections[k]=D.sections[k]===false?true:false;btn.classList.toggle('on',D.sections[k]!==false);save();applySectionVisibility();}

function applySectionVisibility(){Object.keys(SECTION_NAMES).forEach(k=>{const el=document.getElementById(k);if(el)el.style.display=D.sections[k]===false?'none':'';});}

function applyTheme(t){D.theme=t;document.body.setAttribute('data-theme',t);save();updateThemeSwatches();toast('Theme: '+t);}

function updateThemeSwatches(){['ocean','light','forest','crimson','slate'].forEach(t=>{const el=document.getElementById('sw-'+t);if(el)el.classList.toggle('active',D.theme===t);});}

// ══════════════════════════════════════════════
//  BACKUP / RESTORE
// ══════════════════════════════════════════════
function downloadBackup(){
  const backup={data:D,creds:{u:creds.u,pHint:'[password not exported for security]'},exportedAt:new Date().toISOString(),version:'umlc_v5'};
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}));a.download='UMLC_Backup_'+new Date().toISOString().split('T')[0]+'.json';a.click();toast('Backup downloaded!');}

function restoreBackup(e){
  const f=e.target.files[0];if(!f)return;
  const r=new FileReader();r.onload=ev=>{
    try{const b=JSON.parse(ev.target.result);if(!b.data){toast('Invalid backup file','err');return;}D=Object.assign(JSON.parse(JSON.stringify(DEFAULT)),b.data);save();render();toast('Backup restored successfully!');}
    catch(err){toast('Could not parse backup file','err');}
  };r.readAsText(f);e.target.value='';
}

// ══════════════════════════════════════════════
//  PRIVACY POLICY
// ══════════════════════════════════════════════
function showPrivacy(){
  document.getElementById('privacy-content').innerHTML=`
    <h3 style="color:var(--pearl);font-family:'Cormorant Garamond',serif;font-size:1.4rem;margin-bottom:1rem;">Privacy Policy — UKZN Marine Life Club</h3>
    <p style="margin-bottom:0.5rem;"><strong>Effective Date:</strong> 2025</p>
    <p style="margin-bottom:1.5rem;">This policy governs how UMLC collects, uses, and protects personal information, in compliance with South Africa's <strong>Protection of Personal Information Act (POPIA)</strong> and the EU <strong>General Data Protection Regulation (GDPR)</strong>.</p>
    <h4 style="color:var(--biolum);font-size:0.9rem;margin-bottom:0.5rem;margin-top:1rem;">1. Information We Collect</h4>
    <p>We may collect names, email addresses, and messages submitted through the Student Voice form. Submissions may be anonymous.</p>
    <h4 style="color:var(--biolum);font-size:0.9rem;margin-bottom:0.5rem;margin-top:1rem;">2. How We Use Your Information</h4>
    <p>Information is used solely to respond to student concerns, improve club operations, and manage membership. We do not sell or share personal data with third parties.</p>
    <h4 style="color:var(--biolum);font-size:0.9rem;margin-bottom:0.5rem;margin-top:1rem;">3. Data Storage</h4>
    <p>All data is stored locally in your browser (localStorage) or on our hosting server. No data is transmitted to external servers without your knowledge.</p>
    <h4 style="color:var(--biolum);font-size:0.9rem;margin-bottom:0.5rem;margin-top:1rem;">4. Your Rights (POPIA / GDPR)</h4>
    <p>You have the right to: access your personal information, request correction or deletion, withdraw consent at any time, and lodge a complaint with the Information Regulator (South Africa) or relevant supervisory authority.</p>
    <h4 style="color:var(--biolum);font-size:0.9rem;margin-bottom:0.5rem;margin-top:1rem;">5. Contact</h4>
    <p>For privacy inquiries: <a href="mailto:${D.contacts.general}" style="color:var(--biolum);">${D.contacts.general}</a></p>
    <h4 style="color:var(--biolum);font-size:0.9rem;margin-bottom:0.5rem;margin-top:1rem;">6. Cookies</h4>
    <p>This website uses browser localStorage to save your preferences. No third-party tracking cookies are used.</p>
    <h4 style="color:var(--biolum);font-size:0.9rem;margin-bottom:0.5rem;margin-top:1rem;">7. Changes to This Policy</h4>
    <p>This policy may be updated by club leadership. The most current version is always available on this website.</p>`;
  document.getElementById('privacyOverlay').classList.add('show');
}

function acceptCookies(){localStorage.setItem('umlc_cookies_ok','1');document.getElementById('cookie-banner').style.display='none';}

// ══════════════════════════════════════════════
//  SITEMAP DOWNLOAD
// ══════════════════════════════════════════════
function dlSitemap(){
  const base=D.seo.canonical||'https://www.umlc.co.za/';
  const sections=['','#about','#programmes','#student-voice','#events','#partnerships','#leadership'];
  const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sections.map(s=>`  <url>\n    <loc>${base}${s}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${s===''?'1.0':'0.8'}</priority>\n  </url>`).join('\n')}\n</urlset>`;
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([xml],{type:'application/xml'}));a.download='sitemap.xml';a.click();toast('sitemap.xml downloaded!');}

// ══════════════════════════════════════════════
//  SITE SEARCH
// ══════════════════════════════════════════════
const SEARCHINDEX=[
  {title:'Home',section:'#home',desc:'UMLC landing page and mission overview'},
  {title:'About UMLC',section:'#about',desc:'Mission, vision, values and president\'s message'},
  {title:'Academic Support',section:'#programmes',desc:'Peer tutoring, study groups, exam prep'},
  {title:'Professional Development',section:'#programmes',desc:'CV workshops, research training, networking'},
  {title:'Conservation Projects',section:'#programmes',desc:'Beach clean-ups, species monitoring, field work'},
  {title:'Research & Conferences',section:'#programmes',desc:'Journal clubs, conference coaching, bursaries'},
  {title:'Events Coordination',section:'#programmes',desc:'Club events, socials, field trips, logistics'},
  {title:'Student Voice',section:'#student-voice',desc:'Submit anonymous concerns and track issue status'},
  {title:'Events',section:'#events',desc:'Upcoming UMLC events and announcements'},
  {title:'Partnerships',section:'#partnerships',desc:'Sponsorship, collaborators, download proposal'},
  {title:'Leadership',section:'#leadership',desc:'Executive team — President, VP, Secretary, Treasurer, Media Officer, Event Coordinator'},
  {title:'Contact Us',section:'#leadership',desc:'General email and leadership contacts'},
];

function openSearch(){
  console.log('🔎 Opening search...');
  try{
    const wrap = document.getElementById('searchWrap');
    const input = document.getElementById('searchInput');
    if(!wrap) throw new Error('searchWrap element not found');
    if(!input) throw new Error('searchInput element not found');
    wrap.classList.add('show');
    input.focus();
    console.log('✅ Search opened');
  }catch(e){
    console.error('❌ Error opening search:', e);
  }
}

function closeSearch(){
  console.log('🔍 Closing search...');
  try{
    const wrap = document.getElementById('searchWrap');
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    if(!wrap) throw new Error('searchWrap element not found');
    wrap.classList.remove('show');
    if(input) input.value='';
    if(results) results.innerHTML='';
    console.log('✅ Search closed');
  }catch(e){
    console.error('❌ Error closing search:', e);
  }
}

function doSearch(q){
  const el=document.getElementById('searchResults');if(!q.trim()){el.innerHTML='';return;}
  const results=SEARCHINDEX.filter(i=>i.title.toLowerCase().includes(q.toLowerCase())||i.desc.toLowerCase().includes(q.toLowerCase()));
  if(results.length===0){el.innerHTML='<div class="sr-item"><span>No results found. Try "events", "about", "leadership"...</span></div>';return;}
  el.innerHTML=results.map(r=>`<div class="sr-item" onclick="goTo('${r.section}')"><strong>${r.title}</strong><span>${r.desc}</span></div>`).join('');
}

function handleSearchKey(e){if(e.key==='Escape')closeSearch();}

function goTo(hash){closeSearch();const t=document.querySelector(hash);if(t)t.scrollIntoView({behavior:'smooth',block:'start'});}

// ══════════════════════════════════════════════
//  DOWNLOADS
// ══════════════════════════════════════════════
function dlProposal(){let c=`UKZN MARINE LIFE CLUB\nSPONSORSHIP PROPOSAL 2025\n\n`;D.tiers.forEach(t=>{c+=`${t.icon} ${t.name.toUpperCase()} (${t.price})\n${t.perks}\n\n`;});c+=`Contact: ${D.contacts.partnerships}`;dl(c,'UMLC_Sponsorship_Proposal_2025.txt');}

function dlConstitution(){const c=`UKZN MARINE LIFE CLUB CONSTITUTION 2025\n\nArticle 1: Name — UKZN Marine Life Club (UMLC), est. 2025\nArticle 2: Objectives — Advance marine knowledge, represent student interests, conservation\nArticle 3: Governance — President, VP, Secretary, Treasurer, Media Officer, Event Coordinator\n\nContact: ${D.contacts.president}`;dl(c,'UMLC_Constitution_2025.txt');}

function dl(content,filename){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([content],{type:'text/plain'}));a.download=filename;a.click();}

// ══════════════════════════════════════════════
//  UI HELPERS
// ══════════════════════════════════════════════
let toastT;
function toast(msg,type){const t=document.getElementById('toast');t.textContent=msg;t.style.borderLeftColor=type==='err'?'var(--coral)':'var(--biolum)';t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),3500);}

function toggleMenu(){const mn=document.getElementById('mobileNav'),h=document.getElementById('ham');mn.classList.toggle('open');h.classList.toggle('open');h.setAttribute('aria-expanded',mn.classList.contains('open'));}

function closeMenu(){document.getElementById('mobileNav').classList.remove('open');document.getElementById('ham').classList.remove('open');document.getElementById('ham').setAttribute('aria-expanded','false');}

window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);},{passive:true});

const ro=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');});},{threshold:0.08});

document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

function spawnParticles(){const c=document.getElementById('particles');for(let i=0;i<28;i++){const p=document.createElement('div');p.className='particle';p.style.cssText=`left:${Math.random()*100}%;bottom:${Math.random()*20}%;--dur:${6+Math.random()*10}s;--delay:${Math.random()*8}s;width:${1+Math.random()*2.5}px;height:${1+Math.random()*2.5}px;`;c.appendChild(p);}}

addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth',block:'start'});});

// ══════════════════════════════════════════════
//  DEFAULT DATA EXTENSIONS
// ══════════════════════════════════════════════
DEFAULT.members = [];
DEFAULT.donations = [];
DEFAULT.bankDetails = {bank:'FNB (First National Bank)',accName:'UKZN Marine Life Club',accNum:'',branch:'250655'};
DEFAULT.lang = 'en';

const _origLoad = load;
load = function() {
  _origLoad();
  if(!D.members) D.members = [];
  if(!D.donations) D.donations = [];
  if(!D.bankDetails) D.bankDetails = {bank:'FNB (First National Bank)',accName:'UKZN Marine Life Club',accNum:'',branch:'250655'};
  if(!D.lang) D.lang = 'en';
  if(!D.socials.tiktok) D.socials.tiktok = '#';
  if(!D.socials.facebook) D.socials.facebook = '#';
  if(!D.socials.youtube) D.socials.youtube = '#';
};

// ══════════════════════════════════════════════
//  DONATE MODAL
// ══════════════════════════════════════════════
let currentDonateAmt = 0;
let _resetCode = null;

function openDonate(){
  console.log('💰 Opening donate modal...');
  try{
    const bd = D.bankDetails||{};
    const bel = document.getElementById('d-bank'); if(bel) bel.textContent = bd.bank||'FNB (First National Bank)';
    const an = document.getElementById('d-accname'); if(an) an.textContent = bd.accName||'UKZN Marine Life Club';
    const ac = document.getElementById('d-accnum'); if(ac) ac.textContent = bd.accNum||'Contact admin to set account number';
    const br = document.getElementById('d-branch'); if(br) br.textContent = bd.branch||'250655';
    const de = document.getElementById('d-email-lnk'); if(de){de.href='mailto:'+D.contacts.general;de.textContent=D.contacts.general;}
    const overlay = document.getElementById('donateOverlay');
    if(!overlay) throw new Error('donateOverlay element not found');
    overlay.classList.add('show');
    console.log('✅ Donate modal opened');
  }catch(e){
    console.error('❌ Error opening donate modal:', e);
  }
}

function closeDonate(){ 
  console.log('💳 Closing donate modal...');
  try{
    const overlay = document.getElementById('donateOverlay');
    if(overlay) overlay.classList.remove('show'); 
    console.log('✅ Donate modal closed');
  }catch(e){
    console.error('❌ Error closing donate modal:', e);
  }
}

// Safely add event listener for donate overlay
try{
  const donateOverlay = document.getElementById('donateOverlay');
  if(donateOverlay){
    donateOverlay.addEventListener('click', e=>{ 
      if(e.target.id==='donateOverlay') closeDonate(); 
    });
  }else{
    console.warn('⚠️ donateOverlay element not found for event listener');
  }
}catch(e){
  console.error('❌ Error adding donate overlay listener:', e);
}

function setDonateAmt(amt){
  currentDonateAmt = amt;
  document.getElementById('donate-amount').value = amt;
  document.querySelectorAll('.donate-preset').forEach(b=>{
    b.style.background = parseInt(b.textContent.replace(/[R,]/g,''))===amt ? 'var(--biolum)' : 'var(--abyss)';
    b.style.color = parseInt(b.textContent.replace(/[R,]/g,''))===amt ? 'var(--deep)' : 'var(--pearl)';
  });
}

function clearDonatePresets(){
  currentDonateAmt = 0;
  document.querySelectorAll('.donate-preset').forEach(b=>{ b.style.background='var(--abyss)'; b.style.color='var(--pearl)'; });
}

function logDonation(){
  const amt = parseInt(document.getElementById('donate-amount').value)||currentDonateAmt;
  const name = document.getElementById('donate-name').value.trim();
  const email = document.getElementById('donate-email-input').value.trim();
  if(!amt||amt<1){toast('Please enter a donation amount','err');return;}
  if(!name){toast('Please enter your name','err');return;}
  D.donations.push({
    id:'d'+(D.nextId++),
    name, email, amount:amt,
    date: new Date().toISOString(),
    verified: false
  });
  save();
  toast('Thank you '+name+'! Please complete your EFT of R'+amt+' to the account above.');
  closeDonate();
  document.getElementById('donate-name').value='';
  document.getElementById('donate-email-input').value='';
  document.getElementById('donate-amount').value='';
  clearDonatePresets();
}

// ══════════════════════════════════════════════
//  DONATIONS ADMIN
// ══════════════════════════════════════════════
function renderDonationsAdmin(){
  const el = document.getElementById('donations-list'); if(!el) return;
  if(!D.donations||D.donations.length===0){
    el.innerHTML='<p style="color:var(--ghost);font-size:0.85rem;">No donations logged yet.</p>';return;
  }
  const total = D.donations.reduce((s,d)=>s+d.amount,0);
  const verified = D.donations.filter(d=>d.verified).reduce((s,d)=>s+d.amount,0);
  el.innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem;">
    <div style="background:var(--deep);border:1px solid rgba(0,245,196,0.15);border-radius:6px;padding:1rem;text-align:center;">
      <div style="font-family:'DM Mono',monospace;font-size:0.62rem;color:var(--biolum);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:0.4rem;">Total Pledged</div>
      <div style="font-size:1.4rem;font-weight:700;color:var(--pearl);">R${total.toLocaleString()}</div>
    </div>
    <div style="background:var(--deep);border:1px solid rgba(0,245,196,0.15);border-radius:6px;padding:1rem;text-align:center;">
      <div style="font-family:'DM Mono',monospace;font-size:0.62rem;color:var(--biolum);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:0.4rem;">Verified Received</div>
      <div style="font-size:1.4rem;font-weight:700;color:var(--biolum);">R${verified.toLocaleString()}</div>
    </div>
  </div>`+
  D.donations.slice().reverse().map((d,ri)=>{
    const i = D.donations.length-1-ri;
    return `<div class="eitem" style="margin-bottom:0.75rem;">
      <div class="eitem-row">
        <div>
          <strong style="color:var(--pearl);">${d.name}</strong> — <strong style="color:var(--biolum);">R${d.amount.toLocaleString()}</strong>
          <br><span style="font-size:0.75rem;color:var(--ghost);">${d.email||'No email'} &bull; ${new Date(d.date).toLocaleDateString('en-ZA')}</span>
        </div>
        <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
          <span class="badge ${d.verified?'badge-resolved':'badge-pending'}">${d.verified?'✓ Verified':'Pending'}</span>
          <button class="btn-sm" onclick="toggleDonationVerify(${i})">${d.verified?'Unverify':'✓ Verify'}</button>
          <button class="del-btn" onclick="deleteDonation(${i})">Delete</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleDonationVerify(i){ D.donations[i].verified=!D.donations[i].verified; save(); renderDonationsAdmin(); toast(D.donations[i].verified?'Donation verified!':'Verification removed.'); }

function deleteDonation(i){ if(confirm('Delete this donation record?')){ D.donations.splice(i,1); save(); renderDonationsAdmin(); toast('Deleted.'); } }

function exportDonationsCSV(){
  const rows=[['Name','Email','Amount (R)','Date','Verified'],...D.donations.map(d=>[d.name,d.email||'',d.amount,new Date(d.date).toLocaleDateString('en-ZA'),d.verified?'Yes':'No'])];
  const csv=rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='UMLC_Donations_'+new Date().toISOString().split('T')[0]+'.csv';a.click();toast('CSV downloaded!');
}

function toggleDonationSettings(){
  const el=document.getElementById('donation-bank-settings');
  if(!el)return;
  const showing = el.style.display==='none'||!el.style.display;
  el.style.display = showing?'block':'none';
  if(showing){
    const bd=D.bankDetails||{};
    const dbBank=document.getElementById('db-bank');if(dbBank)dbBank.value=bd.bank||'';
    const dbAcc=document.getElementById('db-accname');if(dbAcc)dbAcc.value=bd.accName||'';
    const dbNum=document.getElementById('db-accnum');if(dbNum)dbNum.value=bd.accNum||'';
    const dbBr=document.getElementById('db-branch');if(dbBr)dbBr.value=bd.branch||'';
  }
}

function saveBankDetails(){
  if(!D.bankDetails) D.bankDetails={};
  const dbBank=document.getElementById('db-bank');if(dbBank)D.bankDetails.bank=dbBank.value;
  const dbAcc=document.getElementById('db-accname');if(dbAcc)D.bankDetails.accName=dbAcc.value;
  const dbNum=document.getElementById('db-accnum');if(dbNum)D.bankDetails.accNum=dbNum.value;
  const dbBr=document.getElementById('db-branch');if(dbBr)D.bankDetails.branch=dbBr.value;
  save(); toast('Bank details saved!');
}

// ══════════════════════════════════════════════
//  JOIN / REGISTER / LOGIN (MEMBERS)
// ══════════════════════════════════════════════
let currentMember = null;

function openJoinModal(){
  console.log('👥 Opening join modal...');
  try{
    const overlay = document.getElementById('joinOverlay');
    if(!overlay) throw new Error('joinOverlay element not found');
    overlay.classList.add('show');
    if(currentMember){ switchJoinTab('login'); }
    console.log('✅ Join modal opened');
  }catch(e){
    console.error('❌ Error opening join modal:', e);
  }
}

function closeJoinModal(){ 
  console.log('📋 Closing join modal...');
  try{
    const overlay = document.getElementById('joinOverlay');
    if(overlay) overlay.classList.remove('show'); 
    console.log('✅ Join modal closed');
  }catch(e){
    console.error('❌ Error closing join modal:', e);
  }
}

// Safely add event listener for join overlay
try{
  const joinOverlay = document.getElementById('joinOverlay');
  if(joinOverlay){
    joinOverlay.addEventListener('click', e=>{
      if(e.target.id==='joinOverlay') closeJoinModal();
    });
  }else{
    console.warn('⚠️ joinOverlay element not found for event listener');
  }
}catch(e){
  console.error('❌ Error adding join overlay listener:', e);
}

function switchJoinTab(tab){
  document.getElementById('join-register-view').style.display='none';
  document.getElementById('join-login-view').style.display='none';
  document.getElementById('join-reset-view').style.display='none';
  document.getElementById('join-tab-reg').classList.remove('on');
  document.getElementById('join-tab-login').classList.remove('on');
  document.getElementById('join-tab-reset').classList.remove('on');
  document.getElementById('join-tab-reset').style.display='none';
  if(tab==='register'){
    document.getElementById('join-register-view').style.display='block';
    document.getElementById('join-tab-reg').classList.add('on');
  } else if(tab==='login'){
    document.getElementById('join-login-view').style.display='block';
    document.getElementById('join-tab-login').classList.add('on');
  } else if(tab==='reset'){
    document.getElementById('join-reset-view').style.display='block';
    document.getElementById('join-tab-reset').style.display='block';
    document.getElementById('join-tab-reset').classList.add('on');
    document.getElementById('reset-step-1').style.display='block';
    document.getElementById('reset-step-2').style.display='none';
    document.getElementById('reset-step-3').style.display='none';
  }
}

document.getElementById('reg-year').addEventListener('change',function(){
  const w=document.getElementById('reg-year-other-wrap');
  if(w) w.style.display=this.value==='Other'?'block':'none';
});

function doRegister(){
  const fname=document.getElementById('reg-fname').value.trim();
  const lname=document.getElementById('reg-lname').value.trim();
  const course=document.getElementById('reg-course').value.trim();
  const institution=document.getElementById('reg-institution').value.trim();
  const year=document.getElementById('reg-year').value;
  const yearOther=document.getElementById('reg-year-other').value.trim();
  const email=document.getElementById('reg-email').value.trim().toLowerCase();
  const phone=document.getElementById('reg-phone').value.trim();
  const pass=document.getElementById('reg-pass').value;
  const pass2=document.getElementById('reg-pass2').value;
  const errEl=document.getElementById('reg-err');

  if(!fname||!lname||!course||!institution||!year||!email||!phone||!pass){
    errEl.style.display='block'; errEl.textContent='Please fill in all required fields.'; return;
  }
  if(pass.length<8){ errEl.style.display='block'; errEl.textContent='Password must be at least 8 characters.'; return; }
  if(pass!==pass2){ errEl.style.display='block'; errEl.textContent='Passwords do not match.'; return; }
  const existing=D.members&&D.members.find(m=>m.email===email);
  if(existing){ errEl.style.display='block'; errEl.textContent='An account with this email already exists.'; return; }

  if(!D.members) D.members=[];
  const member = {
    id:'mem'+(D.nextId++),
    fname, lname, course, institution,
    year: year==='Other'?(yearOther||year):year,
    email, phone,
    passHash: btoa(pass),
    joinDate: new Date().toISOString(),
    photo: null
  };
  D.members.push(member);
  save();
  errEl.style.display='none';
  currentMember = member;
  toast('Welcome to UMLC, '+fname+'! Your account has been created.');
  closeJoinModal();
  updateMemberNavBtn();
}

function doMemberLogin(){
  const email=document.getElementById('mem-email').value.trim().toLowerCase();
  const pass=document.getElementById('mem-pass').value;
  const errEl=document.getElementById('mem-login-err');
  if(!D.members){errEl.style.display='block';return;}
  const member=D.members.find(m=>m.email===email&&m.passHash===btoa(pass));
  if(!member){errEl.style.display='block';return;}
  errEl.style.display='none';
  currentMember=member;
  closeJoinModal();
  toast('Welcome back, '+member.fname+'!');
  updateMemberNavBtn();
}

function doMemberLogout(){
  currentMember=null;
  document.getElementById('memberProfileOverlay').classList.remove('show');
  updateMemberNavBtn();
  toast('Logged out successfully.');
}

function updateMemberNavBtn(){
  const joinBtns = document.querySelectorAll('button[onclick*="openJoinModal"]');
  joinBtns.forEach(btn=>{
    if(currentMember){
      btn.textContent='👤 '+currentMember.fname;
      btn.onclick=function(){ showMemberProfile(); };
    } else {
      btn.textContent='Join UMLC';
      btn.onclick=openJoinModal;
    }
  });
}

function showMemberProfile(){
  const m=currentMember; if(!m)return;
  const info=document.getElementById('member-profile-info');
  if(info) info.innerHTML=`
    <div style="text-align:center;padding:1rem 0 1.5rem;">
      <div style="width:80px;height:80px;border-radius:50%;background:var(--surface);border:2px solid var(--biolum);display:inline-flex;align-items:center;justify-content:center;font-size:2rem;margin-bottom:0.75rem;">👤</div>
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:var(--pearl);margin-bottom:0.25rem;">${m.fname} ${m.lname}</h3>
      <div style="font-family:'DM Mono',monospace;font-size:0.7rem;letter-spacing:0.12em;color:var(--biolum);text-transform:uppercase;">UMLC Member</div>
    </div>
    <div style="display:grid;gap:0.5rem;font-size:0.88rem;">
      <div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:var(--ghost);">Course</span><span>${m.course}</span></div>
      <div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:var(--ghost);">Institution</span><span>${m.institution}</span></div>
      <div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:var(--ghost);">Year</span><span>${m.year}</span></div>
      <div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:var(--ghost);">Email</span><span>${m.email}</span></div>
      <div style="display:flex;justify-content:space-between;padding:0.5rem 0;"><span style="color:var(--ghost);">Member since</span><span>${new Date(m.joinDate).toLocaleDateString('en-ZA')}</span></div>
    </div>`;
  document.getElementById('memberProfileOverlay').classList.add('show');
}

document.getElementById('memberProfileOverlay').addEventListener('click',e=>{if(e.target.id==='memberProfileOverlay')document.getElementById('memberProfileOverlay').classList.remove('show');});

// ══════════════════════════════════════════════
//  PASSWORD RESET (3-step)
// ══════════════════════════════════════════════
let _resetEmail='';

function sendResetCode(){
  const email=document.getElementById('reset-email').value.trim().toLowerCase();
  if(!email){toast('Enter your email','err');return;}
  const member=D.members&&D.members.find(m=>m.email===email);
  if(!member){toast('No account found with that email.','err');return;}
  _resetEmail=email;
  _resetCode=String(Math.floor(100000+Math.random()*900000));
  document.getElementById('reset-step-1').style.display='none';
  document.getElementById('reset-step-2').style.display='block';
  const codeDisplay=document.getElementById('reset-code-display');
  if(codeDisplay){
    codeDisplay.style.display='block';
    codeDisplay.textContent='Demo mode: Your code is '+_resetCode+' (in production this would be emailed to '+email+')';
  }
  toast('Reset code generated (shown above for demo)');
}

function verifyResetCode(){
  const entered=document.getElementById('reset-code-input').value.trim();
  if(entered!==_resetCode){toast('Incorrect code','err');return;}
  document.getElementById('reset-step-2').style.display='none';
  document.getElementById('reset-step-3').style.display='block';
}

function doPasswordReset(){
  const np=document.getElementById('reset-new-pass').value;
  const np2=document.getElementById('reset-new-pass2').value;
  if(np.length<8){toast('Password must be at least 8 characters','err');return;}
  if(np!==np2){toast('Passwords do not match','err');return;}
  const idx=D.members&&D.members.findIndex(m=>m.email===_resetEmail);
  if(idx<0){toast('Member not found','err');return;}
  D.members[idx].passHash=btoa(np);
  save();
  _resetCode=null;_resetEmail='';
  toast('Password updated successfully!');
  switchJoinTab('login');
}

// ══════════════════════════════════════════════
//  MEMBERS ADMIN
// ══════════════════════════════════════════════
function renderMembersAdmin(){
  const el=document.getElementById('members-admin-list'); if(!el)return;
  const search=(document.getElementById('member-search')||{}).value||'';
  const q=search.toLowerCase();
  const members=(D.members||[]).filter(m=>!q||
    (m.fname+' '+m.lname).toLowerCase().includes(q)||
    m.email.toLowerCase().includes(q)||
    m.course.toLowerCase().includes(q)||
    m.institution.toLowerCase().includes(q)
  );
  if(members.length===0){
    el.innerHTML='<p style="color:var(--ghost);font-size:0.85rem);">'+(search?'No members match your search.':'No members registered yet.')+'</p>';return;
  }
  el.innerHTML=`<table style="width:100%;border-collapse:collapse;font-size:0.82rem;">
    <thead><tr style="background:var(--deep);">
      <th style="padding:0.6rem 0.75rem;text-align:left;color:var(--biolum);font-family:'DM Mono',monospace;font-size:0.63rem;letter-spacing:0.1em;text-transform:uppercase;">Name</th>
      <th style="padding:0.6rem 0.75rem;text-align:left;color:var(--biolum);font-family:'DM Mono',monospace;font-size:0.63rem;letter-spacing:0.1em;text-transform:uppercase;">Course</th>
      <th style="padding:0.6rem 0.75rem;text-align:left;color:var(--biolum);font-family:'DM Mono',monospace;font-size:0.63rem;letter-spacing:0.1em;text-transform:uppercase;">Year</th>
      <th style="padding:0.6rem 0.75rem;text-align:left;color:var(--biolum);font-family:'DM Mono',monospace;font-size:0.63rem;letter-spacing:0.1em;text-transform:uppercase;">Institution</th>
      <th style="padding:0.6rem 0.75rem;text-align:left;color:var(--biolum);font-family:'DM Mono',monospace;font-size:0.63rem;letter-spacing:0.1em;text-transform:uppercase;">Contact</th>
      <th style="padding:0.6rem 0.75rem;text-align:left;color:var(--biolum);font-family:'DM Mono',monospace;font-size:0.63rem;letter-spacing:0.1em;text-transform:uppercase;">Joined</th>
      <th style="padding:0.6rem 0.75rem;"></th>
    </tr></thead>
    <tbody>${members.map(m=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
      <td style="padding:0.6rem 0.75rem;color:var(--pearl);font-weight:500;">${m.fname} ${m.lname}</td>
      <td style="padding:0.6rem 0.75rem;color:var(--mist);">${m.course}</td>
      <td style="padding:0.6rem 0.75rem;color:var(--mist);">${m.year}</td>
      <td style="padding:0.6rem 0.75rem;color:var(--mist);">${m.institution}</td>
      <td style="padding:0.6rem 0.75rem;"><a href="mailto:${m.email}" style="color:var(--biolum);font-size:0.78rem;">${m.email}</a><br><span style="color:var(--ghost);font-size:0.75rem;">${m.phone||''}</span></td>
      <td style="padding:0.6rem 0.75rem;color:var(--ghost);font-family:'DM Mono',monospace;font-size:0.75rem;">${new Date(m.joinDate).toLocaleDateString('en-ZA')}</td>
      <td style="padding:0.6rem 0.75rem;"><button class="del-btn" onclick="deleteMember('${m.id}')">Remove</button></td>
    </tr>`).join('')}</tbody>
  </table>
  <div style="margin-top:0.75rem;font-size:0.78rem;color:var(--ghost);">${members.length} member${members.length!==1?'s':''} shown</div>`;
}

function deleteMember(id){
  if(confirm('Remove this member?')){
    D.members=D.members.filter(m=>m.id!==id);save();renderMembersAdmin();toast('Member removed.');
  }
}

function exportMembersCSV(){
  const rows=[['First Name','Last Name','Email','Phone','Course','Institution','Year','Join Date'],
    ...(D.members||[]).map(m=>[m.fname,m.lname,m.email,m.phone||'',m.course,m.institution,m.year,new Date(m.joinDate).toLocaleDateString('en-ZA')])];
  const csv=rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='UMLC_Members_'+new Date().toISOString().split('T')[0]+'.csv';a.click();toast('Members CSV downloaded!');
}

// ══════════════════════════════════════════════
//  LANGUAGE SWITCHER (via Google Translate)
// ══════════════════════════════════════════════
function showGoogleTranslate(){
  const w=document.getElementById('settings-translate-widget');
  if(!w)return;
  w.style.display=w.style.display==='none'?'block':'none';
  const gw=document.getElementById('google-translate-settings');
  if(gw&&!gw.innerHTML){
    try{new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'af,zu,xh,st,en,fr,pt,de,es,ar,zh-CN'},gw.id);}catch(e){}
  }
}

function initGoogleTranslate(){
  if(typeof google!=='undefined'&&google.translate)return;
  const s=document.createElement('script');
  s.src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(s);
  window.googleTranslateElementInit=function(){
    new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'af,zu,xh,st,en,fr,pt,de,es,ar,zh-CN',layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google-translate-el');
  };
}

// ══════════════════════════════════════════════
//  ADMIN switchTab EXTENSION
// ══════════════════════════════════════════════
const _origSwitchTab = switchTab;
switchTab = function(id, btn){
  _origSwitchTab(id, btn);
  if(id==='t-members') renderMembersAdmin();
  if(id==='t-donations') renderDonationsAdmin();
};

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
load();
loadFromSheets();
initializeFirebase().then((success) => {
  if (success) {
    fetchLeadersFromFirebase().catch(err => console.log('Firebase leaders fetch completed'));
  }
});

// Load data from backend (will merge with local data)
load();

// Initialize page
window.addEventListener('DOMContentLoaded', async function(){
  initGoogleTranslate();
  try{
    await initializeBackendData();
  }catch(err){
    console.log('Backend not available, using local data only', err);
    render();
  }
});

// Fallback initialization if DOMContentLoaded already fired
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', function(){});
}else{
  initGoogleTranslate();
  initializeBackendData().catch(err => {
    console.log('Backend not available, using local data only');
    render();
  });
}

updateThemeSwatches();
spawnParticles();
try{
  const ms=sessionStorage.getItem('umlc_member');
  if(ms){ currentMember=JSON.parse(ms); updateMemberNavBtn(); }
}catch(e){}
window.addEventListener('load',function(){
  initGoogleTranslate();
});
