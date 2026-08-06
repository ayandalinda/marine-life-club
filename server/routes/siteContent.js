const express = require('express');
const supabase = require('../lib/supabaseClient');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('site_content').select('*').eq('id', 1).single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/', authenticateToken, async (req, res) => {
  try {
    const allowed = [
      'hero', 'about', 'contacts', 'socials', 'footerAddress',
      'partnerIntro', 'bankDetails', 'seo', 'sections', 'settings',
    ];
    const update = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) update[key] = req.body[key];
    }
    update.updatedAt = new Date().toISOString();
    const { data, error } = await supabase
      .from('site_content')
      .update(update)
      .eq('id', 1)
      .select('*')
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
