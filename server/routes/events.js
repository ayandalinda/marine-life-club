const express = require('express');
const supabase = require('../lib/supabaseClient');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// GET all events
router.get('/', async (req, res) => {
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

// CREATE event (Admin only)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, description, date, location, category, capacity } = req.body;
    const { data, error } = await supabase
      .from('events')
      .insert([{ title, description, date, location, category, capacity }])
      .select('*')
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE event (Admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { title, description, date, location, category, capacity } = req.body;
    const update = {};
    if (title !== undefined) update.title = title;
    if (description !== undefined) update.description = description;
    if (date !== undefined) update.date = date;
    if (location !== undefined) update.location = location;
    if (category !== undefined) update.category = category;
    if (capacity !== undefined) update.capacity = capacity;

    const { data, error } = await supabase
      .from('events')
      .update(update)
      .eq('id', req.params.id)
      .select('*')
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE event (Admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = await supabase.from('events').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// RSVP to an event
router.post('/:id/rsvp', async (req, res) => {
  try {
    const eventId = Number(req.params.id);
    const { memberName, memberEmail, year } = req.body;
    if (!memberName || !memberEmail) {
      return res.status(400).json({ error: 'Name and email are required to RSVP' });
    }
    const { data, error } = await supabase
      .from('event_rsvps')
      .insert([{ eventId, memberName, memberEmail, year: year || 'Student' }])
      .select('*')
      .single();
    if (error) throw error;
    res.json({ success: true, rsvp: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all RSVPs for an event (or all RSVPs if query param all=true)
router.get('/:id/rsvps', async (req, res) => {
  try {
    const eventId = Number(req.params.id);
    const { data, error } = await supabase
      .from('event_rsvps')
      .select('*')
      .eq('eventId', eventId)
      .order('createdAt', { ascending: false });
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
