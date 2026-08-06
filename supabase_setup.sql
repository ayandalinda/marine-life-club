-- RUN THIS IN YOUR SUPABASE SQL EDITOR --

-- Admins Table
CREATE TABLE IF NOT EXISTS admins (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Members Table
CREATE TABLE IF NOT EXISTS members (
  id SERIAL PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL,
  course TEXT NOT NULL,
  institution TEXT NOT NULL,
  year TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  password TEXT NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date TEXT,
  location TEXT,
  category TEXT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Issues Table
CREATE TABLE IF NOT EXISTS issues (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'open',
  reply TEXT,
  "submitterName" TEXT,
  "submitterEmail" TEXT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "resolvedAt" TIMESTAMP
);

-- Inquiries Table
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT,
  status TEXT DEFAULT 'unread',
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Leadership Table
CREATE TABLE IF NOT EXISTS leadership (
  id SERIAL PRIMARY KEY,
  role TEXT UNIQUE NOT NULL,
  name TEXT,
  bio TEXT,
  email TEXT,
  photo TEXT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Programmes
CREATE TABLE IF NOT EXISTS programmes (
  id SERIAL PRIMARY KEY,
  num TEXT,
  icon TEXT,
  title TEXT NOT NULL,
  tagline TEXT,
  summary TEXT,
  description TEXT,
  activities JSONB DEFAULT '[]',
  "howToJoin" TEXT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Partners (4 fixed slots, admin-editable)
CREATE TABLE IF NOT EXISTS partners (
  id SERIAL PRIMARY KEY,
  slot INT UNIQUE NOT NULL,
  name TEXT,
  logo TEXT,
  url TEXT
);

-- Sponsorship tiers (3 fixed slots, admin-editable)
CREATE TABLE IF NOT EXISTS tiers (
  id SERIAL PRIMARY KEY,
  slot INT UNIQUE NOT NULL,
  icon TEXT,
  name TEXT,
  price TEXT,
  perks TEXT
);

-- Donations
CREATE TABLE IF NOT EXISTS donations (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  amount NUMERIC,
  date TEXT,
  verified BOOLEAN DEFAULT FALSE,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Single-row table for all remaining admin-authored site content
CREATE TABLE IF NOT EXISTS site_content (
  id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  hero JSONB DEFAULT '{}',
  about JSONB DEFAULT '{}',
  contacts JSONB DEFAULT '{}',
  socials JSONB DEFAULT '{}',
  "footerAddress" TEXT,
  "partnerIntro" TEXT,
  "bankDetails" JSONB DEFAULT '{}',
  seo JSONB DEFAULT '{}',
  sections JSONB DEFAULT '{}',
  settings JSONB DEFAULT '{}',
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO site_content (id) VALUES (1) ON CONFLICT (id) DO NOTHING;

-- Fix dead default: POST /api/issues always inserts 'under-review', not 'open'
ALTER TABLE issues ALTER COLUMN status SET DEFAULT 'under-review';

-- SEED DATA --

-- Seed Admin
-- Passwords are bcrypt-hashed at runtime, so the admin account (and the
-- programmes/partners/tiers/site_content default content) is seeded by
-- running `node server/scripts/seed.js` (see that file) instead of raw SQL here.

-- Seed Leadership
INSERT INTO leadership (role, name, bio, email) VALUES 
('President', '[President Name]', 'Final year Marine Biology student.', 'president@umlc.co.za'),
('Vice President', '[VP Name]', 'Supports presidential duties.', 'vicepresident@umlc.co.za'),
('Secretary', '[Secretary Name]', 'Manages records.', 'secretary@umlc.co.za'),
('Treasurer', '[Treasurer Name]', 'Oversees finance.', 'treasurer@umlc.co.za'),
('Media Officer', '[Media Officer Name]', 'Manages social media.', 'media@umlc.co.za'),
('Event Coordinator', '[Event Coordinator Name]', 'Plans events.', 'events@umlc.co.za')
ON CONFLICT (role) DO NOTHING;
