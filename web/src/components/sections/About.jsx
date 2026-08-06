import { useSiteContent } from '../../contexts/SiteContentContext';

export default function About() {
  const { siteContent } = useSiteContent();
  const about = siteContent.about || {};

  return (
    <section id="about" className="section reveal" aria-label="About UMLC">
      <div className="section-label" aria-hidden="true">About UMLC</div>
      <h2 className="section-heading">Built on <em>purpose</em>,<br />driven by the ocean.</h2>
      <div className="divider" aria-hidden="true"></div>
      <div style={{ maxWidth: 700, marginBottom: '4rem' }}>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9, color: 'var(--mist)' }}>{about.intro}</p>
      </div>
      <div className="pillars">
        <div className="pillar reveal reveal-delay-1">
          <div className="pillar-icon">🎯</div><h3>Mission</h3><p>{about.mission}</p>
        </div>
        <div className="pillar reveal reveal-delay-2">
          <div className="pillar-icon">👁️</div><h3>Vision</h3><p>{about.vision}</p>
        </div>
        <div className="pillar reveal reveal-delay-3">
          <div className="pillar-icon">⚓</div><h3>Core Values</h3>
          {/* about.values is admin-authored rich text (contains <strong>/<br>), not visitor-submitted */}
          <p dangerouslySetInnerHTML={{ __html: about.values || '' }} />
        </div>
      </div>
      <div className="president-card reveal">
        <p>{about.presidentMessage}</p>
        <div className="president-sig">— President, UMLC 2025</div>
      </div>
    </section>
  );
}
