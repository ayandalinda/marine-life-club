const express = require('express');
const supabase = require('../lib/supabaseClient');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('tiers').select('*').order('slot');
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:slot', authenticateToken, async (req, res) => {
  try {
    const { icon, name, price, perks } = req.body;
    const slot = Number(req.params.slot);
    const { data, error } = await supabase
      .from('tiers')
      .upsert({ slot, icon, name, price, perks }, { onConflict: 'slot' })
      .select('*')
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
