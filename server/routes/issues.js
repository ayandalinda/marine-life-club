const express = require('express');
const supabase = require('../lib/supabaseClient');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('issues').select('*').order('createdAt', { ascending: false });
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, submitterName, submitterEmail } = req.body;
    const { data, error } = await supabase
      .from('issues')
      .insert([{ title, description, submitterName, submitterEmail, status: 'under-review' }])
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
    const { status, reply } = req.body;
    const update = {};
    if (status !== undefined) update.status = status;
    if (reply !== undefined) update.reply = reply;
    if (status === 'resolved') update.resolvedAt = new Date().toISOString();
    const { data, error } = await supabase.from('issues').update(update).eq('id', req.params.id).select('*').single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = await supabase.from('issues').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Issue deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
