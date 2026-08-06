import { useSiteContent } from '../../contexts/SiteContentContext';

export default function Leadership() {
  const { leaders, siteContent } = useSiteContent();
  const contacts = siteContent.contacts || {};

  return (
    <section id="leadership" className="section reveal" aria-label="Leadership Team">
      <div className="section-label" aria-hidden="true">Leadership Team</div>
      <h2 className="section-heading">The people<br /><em>behind UMLC.</em></h2>
      <div className="divider" aria-hidden="true"></div>
      <div className="leaders-grid" aria-label="Executive members">
        {leaders.map((l) => (
          <div className="leader-card" key={l.role}>
            <div className="photo-zone">
              {l.photo ? (
                <img src={l.photo} alt={l.name} />
              ) : (
                <div className="photo-placeholder">
                  <div className="avatar-icon">👤</div>
                  <span>No Photo</span>
                </div>
              )}
            </div>
            <div className="leader-info">
              <div className="leader-role">{l.role}</div>
              <div className="leader-name">{l.name}</div>
              <p className="leader-bio">{l.bio}</p>
              {l.email && <a className="leader-email" href={`mailto:${l.email}`}>{l.email}</a>}
            </div>
          </div>
        ))}
        <div className="contact-row">
          <p>Want to get in touch with the executive committee?</p>
          <a className="btn-outline" href={`mailto:${contacts.general || 'info@umlc.co.za'}`}>Email Us</a>
        </div>
      </div>
    </section>
  );
}
