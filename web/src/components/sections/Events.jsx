import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { useSiteContent } from '../../contexts/SiteContentContext';
import EventRsvpModal from '../modals/EventRsvpModal';

function formatDate(d) {
  if (!d) return '';
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString('en-ZA', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function Events() {
  const { events } = useSiteContent();
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="section reveal" aria-label="Events and News">
      <div className="section-label" aria-hidden="true">News &amp; Events</div>
      <h2 className="section-heading">What's<br /><em>happening.</em></h2>
      <div className="divider" aria-hidden="true"></div>

      {events.length === 0 ? (
        <div className="no-events-block">
          <div className="icon">
            <Calendar size={36} style={{ color: 'var(--mist)' }} />
          </div>
          <h3>No events scheduled yet</h3>
          <p>Check back soon, or if you're an admin, add the first event from the dashboard.</p>
          <Link to="/admin" className="btn-outline">Open Admin</Link>
        </div>
      ) : (
        <div className="timeline">
          {events.map((ev) => (
            <div className="t-event" key={ev.id}>
              <div className="t-date">
                <div>{formatDate(ev.date)}</div>
                {ev.category && (
                  <span
                    className="badge badge-resolved"
                    style={{ marginTop: '0.4rem', display: 'inline-block' }}
                  >
                    {ev.category}
                  </span>
                )}
              </div>
              <div className="t-content">
                <h3>{ev.title}</h3>
                {ev.location && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--biolum)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={13} />
                    <span>{ev.location}</span>
                  </div>
                )}
                <p>{ev.description}</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn-glow"
                    style={{ padding: '0.45rem 1.25rem', fontSize: '0.75rem' }}
                    onClick={() => setSelectedEvent(ev)}
                  >
                    RSVP / Attend
                  </button>
                  {ev.capacity && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--ghost)' }}>
                      Capacity: {ev.capacity} spots
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <EventRsvpModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}
