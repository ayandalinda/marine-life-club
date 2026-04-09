require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-marine-key';
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Supabase Client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

// ═══════════════════════════════════════════
// AUTH MIDDLEWARE
// ═══════════════════════════════════════════
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// ═══════════════════════════════════════════
// API ENDPOINTS
// ═══════════════════════════════════════════

// Admin Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });

  try {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('username', username)
      .single();

    if (error || !data) return res.status(401).json({ error: 'Invalid credentials' });
    if (data.password === password) {
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Member Registration
app.post('/api/register', async (req, res) => {
  const { fname, lname, course, institution, year, email, phone, password } = req.body;
  if (!fname || !lname || !course || !institution || !year || !email || !password) {
    return res.status(400).json({ error: 'All required fields must be supplied' });
  }
  try {
    const { data, error } = await supabase
      .from('members')
      .insert([{ fname, lname, course, institution, year, email, phone, password }])
      .select('id')
      .single();

    if (error) {
      if (error.code === '23505') return res.status(400).json({ error: 'Email already exists' });
      return res.status(500).json({ error: error.message });
    }
    res.json({ success: true, memberId: data.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Member Login
app.post('/api/member-login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  try {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .single();

    if (error || !data) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ success: true, member: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all members (Admin only)
app.get('/api/members', authenticateToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('id, fname, lname, course, institution, year, email, phone, createdAt')
      .order('createdAt', { ascending: false });

    if (error) throw error;
    res.json(data.map(m => ({ ...m, joinDate: m.createdAt })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a member (Admin only)
app.delete('/api/members/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = await supabase
      .from('members')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Events
app.get('/api/events', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/events', authenticateToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .insert([req.body])
      .select('id')
      .single();
    if (error) throw error;
    res.json({ id: data.id, message: 'Event created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/events/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = await supabase.from('events').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Student Voice / Issues
app.get('/api/issues', async (req, res) => {
  try {
    const { data, error } = await supabase.from('issues').select('*').order('createdAt', { ascending: false });
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/issues', async (req, res) => {
  try {
    const { data, error } = await supabase.from('issues').insert([{ ...req.body, status: 'under-review' }]).select('id').single();
    if (error) throw error;
    res.json({ id: data.id, message: 'Issue submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/issues/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = await supabase.from('issues').update(req.body).eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Issue updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/issues/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = await supabase.from('issues').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Issue deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Contact Inquiries
app.get('/api/inquiries', authenticateToken, async (req, res) => {
  try {
    const { data, error } = await supabase.from('inquiries').select('*').order('createdAt', { ascending: false });
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/inquiries', async (req, res) => {
  try {
    const { data, error } = await supabase.from('inquiries').insert([req.body]).select('id').single();
    if (error) throw error;
    res.json({ id: data.id, message: 'Inquiry submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/inquiries/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = await supabase.from('inquiries').update(req.body).eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Inquiry updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/inquiries/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = await supabase.from('inquiries').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Inquiry deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Leadership
app.get('/api/leadership', async (req, res) => {
  try {
    const { data, error } = await supabase.from('leadership').select('*').order('id');
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/leadership', authenticateToken, async (req, res) => {
  const { role, name, bio, email, photo } = req.body;
  try {
    const { error } = await supabase
      .from('leadership')
      .upsert({ role, name, bio, email, photo }, { onConflict: 'role' });
    if (error) throw error;
    res.json({ message: 'Leadership updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running (Supabase API Mode)', timestamp: new Date() });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
