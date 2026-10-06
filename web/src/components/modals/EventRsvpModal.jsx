import { useEffect, useState } from 'react';
import { Calendar, MapPin, Tag, CheckCircle2 } from 'lucide-react';
import Modal from './Modal';
import { useMemberAuth } from '../../contexts/MemberAuthContext';
import { useToast } from '../../contexts/ToastContext';
import { rsvpEvent, getEventRsvps } from '../../api/events';

export default function EventRsvpModal({ event, open, onClose }) {
  const { member } = useMemberAuth();
  const { showToast } = useToast();

  const [form, setForm] = useState({
    name: '',
    email: '',
    year: '1st Year',
  });
  const [submitting, setSubmitting] = useState(false);
  const [rsvps, setRsvps] = useState([]);
  const [hasRsvpd, setHasRsvpd] = useState(false);

  useEffect(() => {
    if (member) {
      setForm({
        name: `${member.fname} ${member.lname}`,
        email: member.email,
        year: member.year || '1st Year',
      });
    } else {
      setForm({ name: '', email: '', year: '1st Year' });
    }
  }, [member, open]);

  useEffect(() => {
    if (event?.id && open) {
      getEventRsvps(event.id)
        .then((list) => {
          if (Array.isArray(list)) {
            setRsvps(list);
            if (member && list.some((r) => r.memberEmail?.toLowerCase() === member.email?.toLowerCase())) {
              setHasRsvpd(true);
            } else {
              setHasRsvpd(false);
            }
          }
        })
        .catch(() => setRsvps([]));
    }
  }, [event, open, member]);

  if (!event) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      showToast('Please enter your name and student email.');
      return;
    }
    setSubmitting(true);
    try {
      await rsvpEvent(event.id, {
        memberName: form.name.trim(),
        memberEmail: form.email.trim(),
        year: form.year,
      });
      showToast(`Spot reserved! See you at ${event.title}.`);
      setHasRsvpd(true);
      const updated = await getEventRsvps(event.id);
      if (Array.isArray(updated)) setRsvps(updated);
    } catch (err) {
      showToast(err.message || 'Failed to submit RSVP. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={18} style={{ color: 'var(--biolum)' }} />
          Event Registration &amp; RSVP
        </span>
      }
      maxWidth={520}
      labelledBy="rsvp-modal-title"
    >
      <div style={{ marginBottom: '1.25rem' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: 'var(--pearl)', marginBottom: '0.4rem' }}>
          {event.title}
        </h3>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', fontSize: '0.78rem', color: 'var(--biolum)', fontFamily: "'DM Mono', monospace" }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <Calendar size={13} /> {event.date}
          </span>
          {event.location && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={13} /> {event.location}
            </span>
          )}
          {event.category && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Tag size={13} /> {event.category}
            </span>
          )}
        </div>
        {event.description && (
          <p style={{ fontSize: '0.86rem', color: 'var(--mist)', marginTop: '0.75rem', lineHeight: 1.6 }}>
            {event.description}
          </p>
        )}
      </div>

      <div
        style={{
          background: 'var(--deep)',
          border: '1px solid rgba(0,245,196,0.15)',
          borderRadius: '6px',
          padding: '0.85rem 1rem',
          marginBottom: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.82rem', color: 'var(--mist)' }}>Registered Attendees:</span>
        <span style={{ fontFamily: "'DM Mono', monospace", color: 'var(--biolum)', fontWeight: 600, fontSize: '0.9rem' }}>
          {rsvps.length} {event.capacity ? `/ ${event.capacity} max` : 'confirmed'}
        </span>
      </div>

      {hasRsvpd ? (
        <div
          style={{
            background: 'rgba(0,245,196,0.08)',
            border: '1px solid rgba(0,245,196,0.25)',
            borderRadius: '6px',
            padding: '1.25rem',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <CheckCircle2 size={36} style={{ color: 'var(--biolum)' }} />
          </div>
          <h4 style={{ color: 'var(--biolum)', marginBottom: '0.4rem' }}>You're Registered!</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--mist)' }}>
            Your spot has been reserved. Please bring your student ID and gear on the day of the event.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="rsvp-name">Full Name *</label>
            <input
              type="text"
              id="rsvp-name"
              placeholder="e.g. Sipho Ndlovu"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="rsvp-email">Student Email *</label>
            <input
              type="email"
              id="rsvp-email"
              placeholder="student@ukzn.ac.za"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="rsvp-year">Academic Level</label>
            <select
              id="rsvp-year"
              value={form.year}
              onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))}
            >
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="Postgraduate">Postgraduate (Honours / MSc / PhD)</option>
              <option value="Alumni / Guest">Alumni / External Guest</option>
            </select>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={submitting}
            style={{ marginTop: '0.75rem' }}
          >
            {submitting ? 'Confirming Spot…' : 'Confirm RSVP'}
          </button>
        </form>
      )}
    </Modal>
  );
}
