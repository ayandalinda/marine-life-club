import { useSiteContent } from '../../contexts/SiteContentContext';

export default function Programmes({ onOpenDetail }) {
  const { programmes } = useSiteContent();

  return (
    <section id="programmes" className="section reveal" aria-label="Programmes and Initiatives">
      <div className="section-label" aria-hidden="true">What We Do</div>
      <h2 className="section-heading">Programmes &amp;<br /><em>Initiatives</em></h2>
      <p style={{ color: 'var(--mist)', fontSize: '0.92rem', marginBottom: '0.5rem' }}>Click any programme to explore it fully.</p>
      <div className="divider" aria-hidden="true"></div>
      <div className="prog-grid" aria-label="Programme list">
        {programmes.map((p) => (
          <div className="prog-item" key={p.id} onClick={() => onOpenDetail(p)}>
            <span className="prog-num">{p.num}</span>
            <div className="prog-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <div className="prog-learn-more">Learn more</div>
          </div>
        ))}
      </div>
    </section>
  );
}
