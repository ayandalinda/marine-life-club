const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const supabase = require('../lib/supabaseClient');
const { authenticateToken, JWT_SECRET } = require('../middleware/auth');

const router = express.Router();

// Admin Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });

  try {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('username', username)
      .single();

    if (error || !data) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, data.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin change password
router.put('/admin/password', authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    return res.status(400).json({ error: 'Current and new password required' });
  }
  try {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('username', req.user.username)
      .single();
    if (error || !data) return res.status(404).json({ error: 'Admin not found' });

    const valid = await bcrypt.compare(currentPassword, data.password);
    if (!valid) return res.status(401).json({ error: 'Current password is incorrect' });

    const hashed = await bcrypt.hash(newPassword, 10);
    const { error: updateError } = await supabase
      .from('admins')
      .update({ password: hashed })
      .eq('username', req.user.username);
    if (updateError) throw updateError;

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
