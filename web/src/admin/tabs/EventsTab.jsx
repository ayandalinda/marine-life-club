import { useState } from 'react';
import { Calendar, MapPin, Users, ChevronUp, ChevronDown, Edit2 } from 'lucide-react';
import { createEvent, updateEvent, deleteEvent, getEventRsvps } from '../../api/events';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';

const CATEGORIES = ['Conservation', 'Academic', 'Field Trip', 'Professional', 'Social'];

export default function EventsTab() {
  const { events, refetchEvents } = useSiteContent();
  const { showToast } = useToast();

  const [form, setForm] = useState({
    title: '',
    date: '',
    location: '',
    category: 'Conservation',
    capacity: 50,
    description: '',
  });
  const [saving, setSaving] = useState(false);

  // Edit event state
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Attendees modal / expansion
  const [viewingRsvpsFor, setViewingRsvpsFor] = useState(null);
  const [rsvpsList, setRsvpsList] = useState([]);
  const [loadingRsvps, setLoadingRsvps] = useState(false);

  const add = async () => {
    if (!form.title) {
      showToast('Please enter an event title.');
      return;
    }
    setSaving(true);
    try {
      await createEvent(form);
      setForm({
        title: '',
        date: '',
        location: '',
        category: 'Conservation',
        capacity: 50,
        description: '',
      });
      await refetchEvents();
      showToast('Event added successfully.');
    } catch (err) {
      showToast(err.message || 'Failed to create event.');
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (ev) => {
    setEditingId(ev.id);
    setEditForm({
      title: ev.title || '',
      date: ev.date || '',
      location: ev.location || '',
      category: ev.category || 'Conservation',
      capacity: ev.capacity || 50,
      description: ev.description || '',
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = async (id) => {
    setSaving(true);
    try {
      await updateEvent(id, editForm);
      setEditingId(null);
      await refetchEvents();
      showToast('Event updated.');
    } catch (err) {
      showToast(err.message || 'Failed to update event.');
    } finally {
      setSaving(false);
    }
  };

  const remove = async (ev) => {
    if (!window.confirm(`Delete "${ev.title}"?`)) return;
    try {
      await deleteEvent(ev.id);
      await refetchEvents();
      showToast('Event deleted.');
    } catch (err) {
      showToast(err.message || 'Failed to delete event.');
    }
  };

  const viewAttendees = async (ev) => {
    if (viewingRsvpsFor === ev.id) {
      setViewingRsvpsFor(null);
      return;
    }
    setViewingRsvpsFor(ev.id);
    setLoadingRsvps(true);
    try {
      const list = await getEventRsvps(ev.id);
      setRsvpsList(Array.isArray(list) ? list : []);
    } catch {
      setRsvpsList([]);
    } finally {
      setLoadingRsvps(false);
    }
  };

  return (
    <>
      <div className="edit-group">
        <h4>Create New Event</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
          <div className="mf">
            <label>Event Title *</label>
            <input
              type="text"
              placeholder="e.g. Aliwal Shoal Scuba Survey"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            />
          </div>
          <div className="mf">
            <label>Date *</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }}>
          <div className="mf">
            <label>Location / Venue</label>
            <input
              type="text"
              placeholder="e.g. uShaka Beach / UKZN Howard College"
              value={form.location}
              onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
            />
          </div>
          <div className="mf">
            <label>Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="mf">
            <label>Max Capacity</label>
            <input
              type="number"
              min="1"
              value={form.capacity}
              onChange={(e) => setForm((f) => ({ ...f, capacity: Number(e.target.value) }))}
            />
          </div>
        </div>

        <div className="mf">
          <label>Description &amp; Instructions for Students</label>
          <textarea
            rows={3}
            placeholder="Details on what to bring, meet time, safety requirements..."
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          />
        </div>

        <button className="save-btn" onClick={add} disabled={saving}>
          {saving ? 'Creating…' : 'Publish Event'}
        </button>
      </div>

      <div className="edit-group">
        <h4>Current Events ({events.length})</h4>
        {events.length === 0 ? (
          <p className="no-inbox">No events created yet.</p>
        ) : (
          events.map((ev) => {
            const isEditing = editingId === ev.id;
            return (
              <div className="eitem" key={ev.id}>
                {isEditing ? (
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.75rem' }}>
                      <div className="mf">
                        <label>Title</label>
                        <input
                          type="text"
                          value={editForm.title}
                          onChange={(e) => setEditForm((f) => ({ ...f, title: e.target.value }))}
                        />
                      </div>
                      <div className="mf">
                        <label>Date</label>
                        <input
                          type="date"
                          value={editForm.date}
                          onChange={(e) => setEditForm((f) => ({ ...f, date: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.75rem' }}>
                      <div className="mf">
                        <label>Location</label>
                        <input
                          type="text"
                          value={editForm.location}
                          onChange={(e) => setEditForm((f) => ({ ...f, location: e.target.value }))}
                        />
                      </div>
                      <div className="mf">
                        <label>Category</label>
                        <select
                          value={editForm.category}
                          onChange={(e) => setEditForm((f) => ({ ...f, category: e.target.value }))}
                        >
                          {CATEGORIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mf">
                        <label>Capacity</label>
                        <input
                          type="number"
                          value={editForm.capacity}
                          onChange={(e) => setEditForm((f) => ({ ...f, capacity: Number(e.target.value) }))}
                        />
                      </div>
                    </div>
                    <div className="mf">
                      <label>Description</label>
                      <textarea
                        rows={3}
                        value={editForm.description}
                        onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <button className="save-btn" style={{ margin: 0 }} onClick={() => saveEdit(ev.id)} disabled={saving}>
                        Save
                      </button>
                      <button className="del-btn" style={{ background: 'var(--mid)', color: 'var(--pearl)' }} onClick={cancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="eitem-row">
                      <div>
                        <strong>{ev.title}</strong>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.2rem', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--biolum)', fontFamily: "'DM Mono', monospace", display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Calendar size={12} /> {ev.date}
                          </span>
                          {ev.location && (
                            <span style={{ fontSize: '0.75rem', color: 'var(--ghost)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                              <MapPin size={12} /> {ev.location}
                            </span>
                          )}
                          {ev.category && (
                            <span className="badge badge-resolved" style={{ fontSize: '0.58rem' }}>
                              {ev.category}
                            </span>
                          )}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <button className="btn-sm" onClick={() => viewAttendees(ev)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Users size={13} />
                          <span>Attendees</span>
                          {viewingRsvpsFor === ev.id ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                        </button>
                        <button className="btn-sm" onClick={() => startEdit(ev)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Edit2 size={12} />
                          <span>Edit</span>
                        </button>
                        <button className="del-btn" onClick={() => remove(ev)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--mist)', marginTop: '0.5rem', lineHeight: 1.6 }}>
                      {ev.description}
                    </p>

                    {/* Expandable Attendees Section */}
                    {viewingRsvpsFor === ev.id && (
                      <div
                        style={{
                          marginTop: '1rem',
                          padding: '1rem',
                          background: 'var(--abyss)',
                          border: '1px solid rgba(0,245,196,0.15)',
                          borderRadius: '6px',
                        }}
                      >
                        <strong style={{ fontSize: '0.8rem', color: 'var(--biolum)', display: 'block', marginBottom: '0.5rem' }}>
                          Registered Attendees ({rsvpsList.length})
                        </strong>
                        {loadingRsvps ? (
                          <p style={{ fontSize: '0.8rem', color: 'var(--mist)' }}>Loading attendee list…</p>
                        ) : rsvpsList.length === 0 ? (
                          <p style={{ fontSize: '0.8rem', color: 'var(--ghost)' }}>No students have RSVP'd yet.</p>
                        ) : (
                          <table className="members-table" style={{ fontSize: '0.8rem' }}>
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Academic Year</th>
                                <th>Time</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rsvpsList.map((r) => (
                                <tr key={r.id}>
                                  <td>{r.memberName}</td>
                                  <td>{r.memberEmail}</td>
                                  <td>{r.year}</td>
                                  <td>{new Date(r.createdAt).toLocaleDateString()}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
