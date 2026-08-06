import { useState } from 'react';
import { createEvent, deleteEvent } from '../../api/events';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';

export default function EventsTab() {
  const { events, refetchEvents } = useSiteContent();
  const { showToast } = useToast();
  const [form, setForm] = useState({ title: '', date: '', description: '' });
  const [saving, setSaving] = useState(false);

  const add = async () => {
    if (!form.title) {
      showToast('Please enter a title.');
      return;
    }
    setSaving(true);
    try {
      await createEvent(form);
      setForm({ title: '', date: '', description: '' });
      await refetchEvents();
      showToast('Event added.');
    } finally {
      setSaving(false);
    }
  };

  const remove = async (ev) => {
    if (!window.confirm('Delete this event?')) return;
    await deleteEvent(ev.id);
    refetchEvents();
  };

  return (
    <>
      <div className="edit-group">
        <h4>Add Event</h4>
        <div className="mf"><label>Title</label><input type="text" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} /></div>
        <div className="mf"><label>Date</label><input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} /></div>
        <div className="mf"><label>Description</label><textarea rows={3} value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} /></div>
        <button className="save-btn" onClick={add} disabled={saving}>Add Event</button>
      </div>
      <div className="edit-group">
        <h4>Current Events</h4>
        {events.map((ev) => (
          <div className="eitem" key={ev.id}>
            <div className="eitem-row">
              <strong>{ev.title} — {ev.date}</strong>
              <button className="del-btn" onClick={() => remove(ev)}>Remove</button>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--mist)', marginTop: '0.4rem' }}>{ev.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
