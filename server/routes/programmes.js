const express = require('express');
const supabase = require('../lib/supabaseClient');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('programmes').select('*').order('num');
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', authenticateToken, async (req, res) => {
  try {
    const { num, icon, title, tagline, summary, description, activities, howToJoin } = req.body;
    const { data, error } = await supabase
      .from('programmes')
      .insert([{ num, icon, title, tagline, summary, description, activities, howToJoin }])
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
    const { num, icon, title, tagline, summary, description, activities, howToJoin } = req.body;
    const { data, error } = await supabase
      .from('programmes')
      .update({ num, icon, title, tagline, summary, description, activities, howToJoin })
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
    const { error } = await supabase.from('programmes').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Programme deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
