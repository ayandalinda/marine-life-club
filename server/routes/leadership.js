const express = require('express');
const supabase = require('../lib/supabaseClient');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('leadership').select('*').order('id');
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', authenticateToken, async (req, res) => {
  const { role, name, bio, email, photo } = req.body;
  if (!role || !role.trim()) return res.status(400).json({ error: 'Role is required' });
  try {
    const { data, error } = await supabase
      .from('leadership')
      .upsert({ role, name, bio, email, photo }, { onConflict: 'role' })
      .select('*')
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:role', authenticateToken, async (req, res) => {
  const role = (req.params.role || '').trim();
  if (!role) return res.status(400).json({ error: 'Role is required' });
  try {
    const { error } = await supabase.from('leadership').delete().eq('role', role);
    if (error) throw error;
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
