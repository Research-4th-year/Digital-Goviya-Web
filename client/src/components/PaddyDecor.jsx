import { useMemo } from 'react';

// Small seeded random generator so the field looks the same on every load.
function rng(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function Stalk({ x, h, lean, stem, leaf, grain, opacity, dur, delay }) {
  const base = 240;
  const dir = lean >= 0 ? 1 : -1;
  const topX = x + lean;
  const topY = base - h;

  const kernels = Array.from({ length: 7 }, (_, i) => {
    const t = i / 6;
    const cx = topX + dir * Math.sin(t * 1.4) * 14 + (i % 2 ? 2.4 : -2.4);
    const cy = topY + t * 30;
    const rot = -dir * (15 + t * 55);
    return { cx, cy, rot };
  });

  return (
    <g className="stalk" style={{ '--d': `${dur}s`, '--delay': `${delay}s` }} opacity={opacity}>
      <path
        d={`M${x} ${base} C ${x} ${base - h * 0.5}, ${x + lean * 0.15} ${base - h * 0.8}, ${topX} ${topY}`}
        stroke={stem} strokeWidth="2.4" fill="none" strokeLinecap="round"
      />
      <path
        d={`M${x} ${base - h * 0.22} Q ${x + 20 * dir} ${base - h * 0.5}, ${x + 40 * dir} ${base - h * 0.45}`}
        stroke={leaf} strokeWidth="2" fill="none" strokeLinecap="round"
      />
      <path
        d={`M${x} ${base - h * 0.4} Q ${x - 16 * dir} ${base - h * 0.62}, ${x - 30 * dir} ${base - h * 0.6}`}
        stroke={leaf} strokeWidth="1.8" fill="none" strokeLinecap="round"
      />
      {kernels.map((k, i) => (
        <ellipse
          key={i} cx={k.cx} cy={k.cy} rx="3.1" ry="6.4" fill={grain}
          transform={`rotate(${k.rot} ${k.cx} ${k.cy})`}
        />
      ))}
    </g>
  );
}

const LAYERS = [
  { n: 44, seed: 11, hMin: 90,  hMax: 140, stem: '#14683b', leaf: '#14683b', grain: '#9c7a14', opacity: 0.7 },
  { n: 36, seed: 23, hMin: 110, hMax: 170, stem: '#2e8b57', leaf: '#2e8b57', grain: '#d99a12', opacity: 0.9 },
  { n: 26, seed: 37, hMin: 130, hMax: 200, stem: '#43a566', leaf: '#5bb77a', grain: '#ffd25a', opacity: 1 },
];

export function PaddyField({ className = '' }) {
  const stalks = useMemo(
    () =>
      LAYERS.flatMap((L) => {
        const r = rng(L.seed);
        return Array.from({ length: L.n }, (_, i) => ({
          ...L,
          key: `${L.seed}-${i}`,
          x: (i + 0.5) * (1440 / L.n) + (r() - 0.5) * 30,
          h: L.hMin + r() * (L.hMax - L.hMin),
          lean: (r() - 0.5) * 40,
          dur: 4 + r() * 3,
          delay: -r() * 6,
        }));
      }),
    []
  );

  return (
    <svg
      viewBox="0 0 1440 240"
      preserveAspectRatio="xMidYMax slice"
      className={`h-[15rem] w-full ${className}`}
      aria-hidden="true"
    >
      {stalks.map(({ key, ...s }) => (
        <Stalk key={key} {...s} />
      ))}
    </svg>
  );
}

// Golden grains floating up through the hero.
export function GrainDrift({ count = 18 }) {
  const items = useMemo(() => {
    const r = rng(7);
    return Array.from({ length: count }, () => ({
      left: r() * 100,
      dur: 12 + r() * 14,
      delay: -r() * 20,
      dx: (r() - 0.5) * 160,
      size: 5 + r() * 5,
    }));
  }, [count]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((g, i) => (
        <span
          key={i}
          className="grain"
          style={{
            left: `${g.left}%`,
            width: g.size,
            height: g.size * 1.9,
            '--dur': `${g.dur}s`,
            '--delay': `${g.delay}s`,
            '--dx': `${g.dx}px`,
          }}
        />
      ))}
    </div>
  );
}

export function WaveDivider({ from, to, className = '' }) {
  return (
    <div style={{ background: from }} className={className} aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-14 w-full md:h-20">
        <path
          d="M0 46 C 180 90 360 4 600 38 C 840 72 1080 8 1440 50 L1440 90 L0 90 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}

// Grain-shaped list marker
export function GrainBullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-[0.5rem] inline-block h-3 w-1.5 shrink-0 rotate-[20deg] rounded-[50%] bg-[#f2b01e]"
    />
  );
}
