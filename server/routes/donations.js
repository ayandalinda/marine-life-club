const express = require('express');
const supabase = require('../lib/supabaseClient');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
  try {
    const { data, error } = await supabase.from('donations').select('*').order('createdAt', { ascending: false });
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, amount, date } = req.body;
    const { data, error } = await supabase
      .from('donations')
      .insert([{ name, email, amount, date, verified: false }])
      .select('*')
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { verified } = req.body;
    const { data, error } = await supabase
      .from('donations')
      .update({ verified })
      .eq('id', req.params.id)
      .select('*')
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = await supabase.from('donations').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Donation deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
