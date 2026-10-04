import { useState } from 'react';
import { Mail } from 'lucide-react';
import { ABOUT_TEXT, SUPERVISORS, TEAM, asset } from '../data/siteData';
import SectionHeading from './SectionHeading';

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const initials = (name) =>
  name
    .replace(/^(Dr|Mr|Ms|Mrs)\.?\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

function Person({ p }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#0a4a2b]/10">
      <div className="relative aspect-[4/5] bg-[#0a4a2b]">
        {!failed ? (
          <img
            src={asset(p.photo)}
            alt={p.name}
            onError={() => setFailed(true)}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full place-items-center font-display text-6xl text-[#ffd25a]">
            {initials(p.name)}
          </div>
        )}
        {p.leader && (
          <span className="absolute left-3 top-3 rounded-full bg-[#f2b01e] px-3 py-1 text-xs font-semibold text-[#05301c]">
            Group leader
          </span>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-display text-lg font-semibold leading-snug text-[#0a4a2b]">{p.name}</h4>
        <p className="text-sm text-[#14683b]">{p.role}</p>
        <div className="mt-4 space-y-2 text-sm">
          <a href={`mailto:${p.email}`} className="flex items-start gap-2 break-all text-[#10231a]/80 hover:text-[#0a4a2b]">
            <Mail size={16} className="mt-0.5 shrink-0" />
            {p.email}
          </a>
          {p.linkedin && (
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#10231a]/80 hover:text-[#0a4a2b]"
            >
              <LinkedInIcon />
              LinkedIn profile
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#f3f7ee] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Us" text={ABOUT_TEXT} />

        <h3 className="mb-6 font-display text-2xl font-semibold text-[#0a4a2b]">Supervisors</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUPERVISORS.map((p) => (
            <Person key={p.email} p={p} />
          ))}
        </div>

        <h3 className="mb-6 mt-16 font-display text-2xl font-semibold text-[#0a4a2b]">Research Team</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((p) => (
            <Person key={p.email} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
