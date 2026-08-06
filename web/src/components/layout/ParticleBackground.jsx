import { useMemo } from 'react';

export default function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${2 + Math.random() * 3}px`,
        dur: `${6 + Math.random() * 8}s`,
        delay: `${Math.random() * 8}s`,
      })),
    [],
  );

  return (
    <>
      <div className="ocean-bg">
        <svg className="wave-svg" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" fill="#00f5c4" aria-hidden="true">
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,120 L0,120 Z" />
        </svg>
        <svg className="wave-svg2" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" fill="#00c9a7" aria-hidden="true">
          <path d="M0,50 C200,90 400,10 600,50 C800,90 1000,10 1200,50 C1350,80 1440,30 1440,50 L1440,120 L0,120 Z" />
        </svg>
      </div>
      <div className="particles" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              bottom: 0,
              '--dur': p.dur,
              '--delay': p.delay,
            }}
          />
        ))}
      </div>
    </>
  );
}
