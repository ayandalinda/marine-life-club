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

-- SEED DATA --

-- Seed Admin
INSERT INTO admins (username, password) 
VALUES ('president', 'umlc2025')
ON CONFLICT (username) DO NOTHING;

-- Seed Leadership
INSERT INTO leadership (role, name, bio, email) VALUES 
('President', '[President Name]', 'Final year Marine Biology student.', 'president@umlc.co.za'),
('Vice President', '[VP Name]', 'Supports presidential duties.', 'vicepresident@umlc.co.za'),
('Secretary', '[Secretary Name]', 'Manages records.', 'secretary@umlc.co.za'),
('Treasurer', '[Treasurer Name]', 'Oversees finance.', 'treasurer@umlc.co.za'),
('Media Officer', '[Media Officer Name]', 'Manages social media.', 'media@umlc.co.za'),
('Event Coordinator', '[Event Coordinator Name]', 'Plans events.', 'events@umlc.co.za')
ON CONFLICT (role) DO NOTHING;
