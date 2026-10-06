import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { SPECIES_CATEGORIES, SPECIES_DATA } from '../species/speciesData';

function StatusBadge({ status, code }) {
  let styleClass = 'badge-pending';
  if (code === 'CR') styleClass = 'badge-review';
  else if (code === 'EN' || code === 'VU') styleClass = 'badge-progress';
  else if (code === 'LC') styleClass = 'badge-resolved';

  return <span className={`badge ${styleClass}`}>{status}</span>;
}

export default function SpeciesGuide() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? SPECIES_DATA
      : SPECIES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="species" className="section reveal" aria-label="Marine Species Guide">
      <div className="section-label" aria-hidden="true">Biodiversity Explorer</div>
      <h2 className="section-heading">
        KwaZulu-Natal<br />
        <em>Marine Species Field Guide</em>
      </h2>
      <p style={{ color: 'var(--mist)', fontSize: '0.95rem', maxWidth: '680px', marginBottom: '1.75rem', lineHeight: 1.8 }}>
        Explore the extraordinary marine fauna encountered during our club diving expeditions, intertidal surveys,
        and coastal clean-ups along South Africa's biodiverse eastern seaboard.
      </p>

      {/* Filter Category Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {SPECIES_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`tab-btn${activeCategory === cat ? ' on' : ''}`}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '20px',
              border: activeCategory === cat ? '1px solid var(--biolum)' : '1px solid rgba(255,255,255,0.08)',
              background: activeCategory === cat ? 'var(--biolum-dim)' : 'var(--abyss)',
              color: activeCategory === cat ? 'var(--biolum)' : 'var(--mist)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Species Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {filtered.map((item) => (
          <div
            key={item.id}
            className="eitem"
            style={{
              background: 'var(--abyss)',
              border: '1px solid rgba(0,245,196,0.12)',
              borderRadius: '8px',
              overflow: 'hidden',
              padding: 0,
              cursor: 'pointer',
              transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
            }}
            onClick={() => setSelectedSpecies(item)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--biolum)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,245,196,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'rgba(0,245,196,0.12)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={item.image}
                alt={item.commonName}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                }}
              >
                <StatusBadge status={item.status} code={item.statusCode} />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(4,22,42,0.95), transparent)',
                  padding: '1.5rem 1rem 0.5rem',
                }}
              >
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--biolum)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {item.category}
                </span>
              </div>
            </div>

            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: 'var(--pearl)', marginBottom: '0.2rem' }}>
                {item.commonName}
              </h3>
              <p style={{ fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--mist)', marginBottom: '0.75rem' }}>
                {item.scientificName}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--mist)', lineHeight: 1.6, marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {item.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--ghost)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={12} style={{ color: 'var(--biolum)' }} />
                  {item.kznHotspots.split(',')[0]}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--biolum)', fontFamily: "'DM Mono', monospace", display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  Learn More <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Species Detail Modal */}
      {selectedSpecies && (
        <div
          className="prog-modal-overlay show"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedSpecies(null);
          }}
        >
          <div className="prog-modal" style={{ maxWidth: '680px' }}>
            <div style={{ position: 'relative', height: '240px' }}>
              <img
                src={selectedSpecies.image}
                alt={selectedSpecies.commonName}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                className="prog-modal-close"
                onClick={() => setSelectedSpecies(null)}
                aria-label="Close"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(2,13,24,0.7)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                &times;
              </button>
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.5rem',
                  background: 'rgba(2,13,24,0.85)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(0,245,196,0.3)',
                }}
              >
                <StatusBadge status={selectedSpecies.status} code={selectedSpecies.statusCode} />
              </div>
            </div>

            <div className="prog-modal-body" style={{ padding: '2rem' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: 'var(--pearl)', marginBottom: '0.2rem' }}>
                {selectedSpecies.commonName}
              </h2>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--biolum)', marginBottom: '1.25rem' }}>
                {selectedSpecies.scientificName}
              </p>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--mist)', marginBottom: '1.5rem' }}>
                {selectedSpecies.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'var(--deep)', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: "'DM Mono', monospace", color: 'var(--biolum)', textTransform: 'uppercase' }}>Habitat</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--pearl)' }}>{selectedSpecies.habitat}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: "'DM Mono', monospace", color: 'var(--biolum)', textTransform: 'uppercase' }}>Typical Depth</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--pearl)' }}>{selectedSpecies.depth}</span>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: "'DM Mono', monospace", color: 'var(--biolum)', textTransform: 'uppercase' }}>KZN Hotspots</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--pearl)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={13} style={{ color: 'var(--biolum)' }} />
                    {selectedSpecies.kznHotspots}
                  </span>
                </div>
              </div>

              <div className="prog-detail-section">
                <h4>Fascinating Biological Facts</h4>
                <div className="prog-activities">
                  {selectedSpecies.facts.map((fact, idx) => (
                    <div className="prog-activity" key={idx}>
                      <div className="prog-activity-dot" />
                      <p>{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(255,107,71,0.08)', border: '1px solid rgba(255,107,71,0.2)', borderRadius: '6px', padding: '1rem 1.25rem', marginTop: '1.25rem' }}>
                <span style={{ display: 'block', fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--coral)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Conservation &amp; Club Ethics
                </span>
                <p style={{ fontSize: '0.84rem', color: 'var(--mist)', lineHeight: 1.6 }}>
                  {selectedSpecies.conservationNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
