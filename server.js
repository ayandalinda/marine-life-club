const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-marine-key';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Database initialization
const dbPath = path.join(__dirname, 'data.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  db.serialize(() => {
    // Events table
    db.run(`
      CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        date TEXT,
        location TEXT,
        category TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Student Voice / Issues table
    db.run(`
      CREATE TABLE IF NOT EXISTS issues (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        status TEXT DEFAULT 'open',
        reply TEXT,
        submitterName TEXT,
        submitterEmail TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        resolvedAt DATETIME
      )
    `);

    // Contact inquiries table
    db.run(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT,
        message TEXT,
        status TEXT DEFAULT 'unread',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Leadership table
    db.run(`
      CREATE TABLE IF NOT EXISTS leadership (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role TEXT NOT NULL,
        name TEXT,
        bio TEXT,
        email TEXT,
        photo TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Database tables initialized');
  });
}

// ═══════════════════════════════════════════
// API ENDPOINTS
// ═══════════════════════════════════════════

// Auth middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// POST login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'marine2026') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// GET all events
app.get('/api/events', (req, res) => {
  db.all('SELECT * FROM events ORDER BY date DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows || []);
  });
});

// POST new event
app.post('/api/events', authenticateToken, (req, res) => {
  const { title, description, date, location, category } = req.body;
  db.run(
    'INSERT INTO events (title, description, date, location, category) VALUES (?, ?, ?, ?, ?)',
    [title, description, date, location, category],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Event created successfully' });
    }
  );
});

// DELETE event
app.delete('/api/events/:id', authenticateToken, (req, res) => {
  db.run('DELETE FROM events WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Event deleted successfully' });
  });
});

// GET all student voice issues
app.get('/api/issues', (req, res) => {
  db.all('SELECT * FROM issues ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows || []);
  });
});

// POST new issue
app.post('/api/issues', (req, res) => {
  const { title, description, submitterName, submitterEmail } = req.body;
  db.run(
    'INSERT INTO issues (title, description, submitterName, submitterEmail, status) VALUES (?, ?, ?, ?, ?)',
    [title, description, submitterName, submitterEmail, 'under-review'],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Issue submitted successfully' });
    }
  );
});

// UPDATE issue status and reply
app.put('/api/issues/:id', authenticateToken, (req, res) => {
  const { status, reply } = req.body;
  db.run(
    'UPDATE issues SET status = ?, reply = ? WHERE id = ?',
    [status, reply, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Issue updated successfully' });
    }
  );
});

// DELETE issue
app.delete('/api/issues/:id', authenticateToken, (req, res) => {
  db.run('DELETE FROM issues WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Issue deleted successfully' });
  });
});

// GET all contact inquiries
app.get('/api/inquiries', (req, res) => {
  db.all('SELECT * FROM inquiries ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows || []);
  });
});

// POST new inquiry
app.post('/api/inquiries', (req, res) => {
  const { name, email, subject, message } = req.body;
  db.run(
    'INSERT INTO inquiries (name, email, subject, message) VALUES (?, ?, ?, ?)',
    [name, email, subject, message],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Inquiry submitted successfully' });
    }
  );
});

// UPDATE inquiry status
app.put('/api/inquiries/:id', authenticateToken, (req, res) => {
  const { status } = req.body;
  db.run(
    'UPDATE inquiries SET status = ? WHERE id = ?',
    [status, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Inquiry updated successfully' });
    }
  );
});

// DELETE inquiry
app.delete('/api/inquiries/:id', authenticateToken, (req, res) => {
  db.run('DELETE FROM inquiries WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Inquiry deleted successfully' });
  });
});

// GET leadership
app.get('/api/leadership', (req, res) => {
  db.all('SELECT * FROM leadership ORDER BY id', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows || []);
  });
});

// UPDATE leadership
app.post('/api/leadership', authenticateToken, (req, res) => {
  const { role, name, bio, email, photo } = req.body;
  db.run(
    'INSERT OR REPLACE INTO leadership (role, name, bio, email, photo) VALUES (?, ?, ?, ?, ?)',
    [role, name, bio, email, photo],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Leadership updated successfully' });
    }
  );
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running', timestamp: new Date() });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API endpoints available at http://localhost:${PORT}/api/`);
  });
}

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Database connection closed');
    process.exit(0);
  });
});

module.exports = app;
