# UKZN Marine Life Club (UMLC) — Full-Stack React Web Application

Welcome to the official web application for the **University of KwaZulu-Natal Marine Life Club (UMLC)**, situated in the School of Life Sciences in Durban, South Africa.

This application is a modern, responsive, full-stack React web platform designed to empower marine biology students, coordinate coastal conservation initiatives, represent student voices, track club events, and interface with ocean research institutions.

---

## 🌟 Key Features

### 1. 🌊 Interactive Public Experience (React 19)
- **Hero & Mission Statement:** Dynamic bioluminescent particle backgrounds, institutional branding, and typography.
- **Live Coastal Ocean Ticker:** Real-time Durban and Aliwal Shoal conditions ticker displaying sea surface temperatures, swell height, incoming/outgoing tide times, and underwater scuba visibility.
- **KZN Marine Species Field Guide:** Comprehensive interactive guide to iconic KwaZulu-Natal marine fauna (Ragged-Tooth Sharks, Green Sea Turtles, Humpback Whales, Bottlenose Dolphins, African Penguins, and coral nudibranchs) with IUCN status badges, habitat, depth, and ecological facts.
- **5 Core Club Programmes:** Academic Support, Professional Development, Conservation Projects, Research & Conferences, and Events Coordination with dedicated modal detail views.
- **Student Voice Live Tracker:** Transparent issue submission and live progress tracking with multi-stage progress bars and executive responses.
- **Upcoming Events & News:** Excursion announcements with category badges, capacity limits, and one-click RSVP registration.
- **Partnerships & Sponsorship Tiers:** Supporter, Partner, and Champion sponsorship slots and downloadable constitution and proposal documents.
- **Executive Leadership Showcase:** Committee profiles with high-resolution portraits, academic focus, and direct contact emails.
- **Multilingual Support & Theme System:** Built-in Google Translate integration and 5 themes (Ocean, Light, Forest, Crimson, Slate) with High Contrast accessibility mode.

### 2. 🪪 Student & Member Portal
- **Member Registration & Authentication:** Secure registration for UKZN marine biology students with bcrypt hashing.
- **Digital UMLC Membership Pass:** Authentic digital member ID card complete with member identifier (`UMLC-2025-XXXX`), study year, academic degree, active verification badge, and printable format.
- **Event RSVP Tracking:** Members can view all events they have reserved a spot for directly from their profile.
- **Profile Self-Service:** Ability to update phone number, academic degree, campus, or change password.

### 3. ⚙️ Executive Command Center (Admin Panel)
- **Analytics Overview Dashboard:** Real-time statistics on registered members, active student voice issues, unread inbox inquiries, upcoming events, and total verified donations.
- **Event Management:** Create, edit, schedule, delete events, set venue and attendee capacity, and view live RSVP lists.
- **Issues Resolution Tracker:** Review submitted student concerns, update public status (*Under Review*, *In Progress*, *Resolved*), and publish official responses.
- **Submission Inbox:** Read and reply to student messages, with one-click promotion of messages into public issues.
- **Membership Directory:** Search, view, and export all registered student members as CSV.
- **Content Management:** In-browser editing for Hero tagline, About statements, President's message, Club programmes, Partner tiles, and Social media links.
- **Donation & Bank Manager:** Log donations, verify EFT payments, configure bank account details, and export donations CSV.
- **Backups & Security:** Download full JSON data backups, restore from backup files, update admin passwords, and toggle POPIA/GDPR cookie banners.

---

## 🏗️ Architecture

```
marine-life-club/
├── api/
│   └── index.js              # Serverless API entrypoint (Vercel)
├── netlify/
│   └── functions/api.js      # Serverless API entrypoint (Netlify)
├── server/
│   ├── data/
│   │   └── db.json           # Local fallback database (auto-created & persistent)
│   ├── lib/
│   │   ├── localStore.js     # Supabase-compatible local database adapter
│   │   └── supabaseClient.js # Intelligent DB router (Supabase cloud or Local fallback)
│   ├── middleware/
│   │   └── auth.js           # JWT authentication middleware
│   ├── routes/               # Express REST API routes
│   │   ├── auth.js           # Admin login & password change
│   │   ├── donations.js      # Donation logging & verification
│   │   ├── events.js         # Events CRUD & attendee RSVPs
│   │   ├── inquiries.js      # Contact messages & replies
│   │   ├── issues.js         # Student voice live tracking
│   │   ├── leadership.js     # Executive committee profiles
│   │   ├── members.js        # Member registration, login, profile & RSVPs
│   │   ├── partners.js       # Partner tiles
│   │   ├── programmes.js     # Club programmes
│   │   ├── siteContent.js    # Global site settings & text
│   │   └── tiers.js          # Sponsorship tiers
│   ├── scripts/
│   │   └── seed.js           # Database seeder
│   ├── app.js                # Express app configuration & React SPA static server
│   └── index.js              # HTTP server entrypoint (Port 5000)
├── web/                      # React Frontend Application (Vite 8 + React 19)
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── admin/            # Executive administration panel & tabs
│   │   ├── api/              # Frontend API client modules
│   │   ├── assets/           # Logo and images
│   │   ├── components/       # Layout, sections, species guide, and modals
│   │   ├── contexts/         # Theme, Toast, AdminAuth, MemberAuth, SiteContent
│   │   ├── lib/              # Default fallbacks, downloads, issue statuses
│   │   ├── styles/           # Global styles and design system variables
│   │   ├── App.jsx           # Root React router
│   │   ├── main.jsx          # React DOM entrypoint
│   │   └── PublicSite.jsx    # Main public-facing page
│   └── vite.config.js        # Vite bundler with API proxy to port 5000
├── package.json              # Root unified scripts and dependencies
└── supabase_setup.sql        # Supabase SQL schema (for cloud deployment)
```

---

## 🚀 Quickstart & How to Run

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation
Clone or navigate to the repository folder:
```bash
npm install
npm install --prefix web
```

### Running the App

#### Option 1: Production Mode (Recommended single-port mode)
Builds the React client and launches the unified server:
```bash
npm run build
npm start
```
Open **[http://localhost:5000](http://localhost:5000)** in your browser. Both the React SPA and the backend API are served seamlessly on port 5000.

#### Option 2: Full Development Mode (Hot Reload)
Runs both the Vite React dev server (with fast HMR) and the Express backend concurrently:
```bash
npm run dev
```
- React Frontend with Hot Reload: **[http://localhost:5173](http://localhost:5173)** (automatically proxies `/api` requests to port 5000)
- Express API Server: **[http://localhost:5000](http://localhost:5000)**

---

## 🔑 Default Credentials

### Administrator Access
- **URL:** [http://localhost:5000/admin](http://localhost:5000/admin) (or click **⚙ Admin** in the navigation bar)
- **Username:** `president`
- **Password:** `umlc2025`
*(You can change this password at any time via the Settings tab in the Admin panel).*

### Sample Student Member
- **Email:** `sndlovu@stu.ukzn.ac.za`
- **Password:** `umlc2025`
*(Or register any new student account via the **Join UMLC** button).*

---

## 🗄️ Database Configuration

### Zero-Configuration Local Mode (Default)
The application includes an embedded, Supabase-compatible local database adapter (`server/lib/localStore.js`).
- If no `.env` file or Supabase keys are provided, the app **automatically and transparently runs in local persistent mode**.
- All data (members, events, RSVPs, issues, donations, site content) is safely stored in `server/data/db.json`.
- The system is fully operational out of the box with zero external setup required.

### Supabase Cloud Database (Optional)
To connect to an external Supabase PostgreSQL database:
1. Create a project at [supabase.com](https://supabase.com).
2. Run the SQL schema in `supabase_setup.sql` in the Supabase SQL Editor.
3. Create a `.env` file at the root:
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your_supabase_service_role_key
JWT_SECRET=your_custom_jwt_secret_key
PORT=5000
```
4. Run the seed script:
```bash
npm run seed
```
5. Restart the server with `npm start`.

---

## 🚢 Deployment

- **Node.js / VPS / Heroku:** The project is configured to serve the built `web/dist` SPA directly through Express. Set `PORT` environment variable and run `npm run build && npm start`.
- **Vercel:** Configured via `vercel.json` and `api/index.js`.
- **Netlify:** Configured via `netlify.toml` and `netlify/functions/api.js`.

---

## 📄 License
MIT License. Created for the UKZN Marine Life Club.
