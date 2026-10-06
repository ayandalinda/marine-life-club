import { useState } from 'react';
import { Waves, Thermometer, Compass, Eye, Wind, ChevronDown, ChevronUp } from 'lucide-react';

const CONDITIONS = [
  { icon: Waves, label: 'Durban Swell', value: '1.7m ESE · 11s Period' },
  { icon: Thermometer, label: 'Sea Temp', value: '23.6°C (Subtropical Agulhas Current)' },
  { icon: Compass, label: 'Tide Status', value: 'Incoming High Tide · Peak 16:20' },
  { icon: Eye, label: 'Aliwal Shoal Diving Vis', value: '14m · Exceptional' },
  { icon: Wind, label: 'Coastal Wind', value: '9 kts NE · Light Breeze' },
];

export default function OceanTicker() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      role="complementary"
      aria-label="Live coastal conditions"
      style={{
        background: 'rgba(2, 13, 24, 0.96)',
        borderBottom: '1px solid rgba(0, 245, 196, 0.15)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 890,
        fontSize: '0.75rem',
        padding: collapsed ? '0.25rem 1rem' : '0.55rem 1.5rem',
        transition: 'all 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--biolum)',
              boxShadow: '0 0 8px var(--biolum)',
              animation: 'pulse 2s infinite',
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--biolum)',
              fontWeight: 600,
              fontSize: '0.68rem',
            }}
          >
            Live Coastal Station · Durban &amp; Aliwal Shoal
          </span>
        </div>

        {!collapsed && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              color: 'var(--mist)',
            }}
          >
            {CONDITIONS.map((c, i) => {
              const IconComp = c.icon;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <IconComp size={13} style={{ color: 'var(--biolum)' }} />
                  <span style={{ color: 'var(--pearl)', fontWeight: 500 }}>{c.label}:</span>
                  <span style={{ color: 'var(--biolum)' }}>{c.value}</span>
                </div>
              );
            })}
          </div>
        )}

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--ghost)',
            cursor: 'pointer',
            fontSize: '0.68rem',
            fontFamily: "'DM Mono', monospace",
            padding: '2px 6px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
          title={collapsed ? 'Expand live conditions' : 'Collapse live conditions'}
        >
          {collapsed ? (
            <>
              <ChevronDown size={12} />
              <span>Show Conditions</span>
            </>
          ) : (
            <>
              <ChevronUp size={12} />
              <span>Minimize</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
