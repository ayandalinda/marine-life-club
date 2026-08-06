import { Link } from 'react-router-dom';
import { useSiteContent } from '../../contexts/SiteContentContext';

function formatDate(d) {
  if (!d) return '';
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString('en-ZA', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function Events() {
  const { events } = useSiteContent();

  return (
    <section id="events" className="section reveal" aria-label="Events and News">
      <div className="section-label" aria-hidden="true">News &amp; Events</div>
      <h2 className="section-heading">What's<br /><em>happening.</em></h2>
      <div className="divider" aria-hidden="true"></div>
      {events.length === 0 ? (
        <div className="no-events-block">
          <div className="icon">📅</div>
          <h3>No events scheduled yet</h3>
          <p>Check back soon, or if you're an admin, add the first event from the dashboard.</p>
          <Link to="/admin" className="btn-outline">Open Admin</Link>
        </div>
      ) : (
        <div className="timeline">
          {events.map((ev) => (
            <div className="t-event" key={ev.id}>
              <div className="t-date">{formatDate(ev.date)}</div>
              <div className="t-content">
                <h3>{ev.title}</h3>
                <p>{ev.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
