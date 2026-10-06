const express = require('express');
const bcrypt = require('bcryptjs');
const supabase = require('../lib/supabaseClient');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Member Registration
router.post('/register', async (req, res) => {
  const { fname, lname, course, institution, year, email, phone, password } = req.body;
  if (!fname || !lname || !course || !institution || !year || !email || !password) {
    return res.status(400).json({ error: 'All required fields must be supplied' });
  }
  try {
    const hashed = await bcrypt.hash(password, 10);
    const { data, error } = await supabase
      .from('members')
      .insert([{ fname, lname, course, institution, year, email, phone, password: hashed }])
      .select('id, fname, lname, course, institution, year, email, phone, createdAt')
      .single();

    if (error) {
      if (error.code === '23505') return res.status(400).json({ error: 'Email already exists' });
      return res.status(500).json({ error: error.message });
    }
    res.json({ success: true, member: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Member Login
router.post('/member-login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  try {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !data) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, data.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const { password: _pw, ...member } = data;
    res.json({ success: true, member });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Member Profile
router.put('/members/:id', async (req, res) => {
  const { fname, lname, course, institution, year, phone, newPassword } = req.body;
  try {
    const update = {};
    if (fname !== undefined) update.fname = fname;
    if (lname !== undefined) update.lname = lname;
    if (course !== undefined) update.course = course;
    if (institution !== undefined) update.institution = institution;
    if (year !== undefined) update.year = year;
    if (phone !== undefined) update.phone = phone;
    if (newPassword) {
      update.password = await bcrypt.hash(newPassword, 10);
    }

    const { data, error } = await supabase
      .from('members')
      .update(update)
      .eq('id', req.params.id)
      .select('id, fname, lname, course, institution, year, email, phone, createdAt')
      .single();

    if (error) throw error;
    res.json({ success: true, member: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET member's RSVPs
router.get('/members/:email/rsvps', async (req, res) => {
  try {
    const email = req.params.email;
    const { data, error } = await supabase
      .from('event_rsvps')
      .select('*')
      .eq('memberEmail', email)
      .order('createdAt', { ascending: false });
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all members (Admin only)
router.get('/members', authenticateToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('id, fname, lname, course, institution, year, email, phone, createdAt')
      .order('createdAt', { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a member (Admin only)
router.delete('/members/:id', authenticateToken, async (req, res) => {
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

module.exports = router;
