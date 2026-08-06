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

module.exports = router;
