import { Check } from 'lucide-react';
import { MILESTONES } from '../data/siteData';
import SectionHeading from './SectionHeading';

function statusOf(m, now) {
  if (m.status) return m.status;
  const [y, mo] = m.date.split('-').map(Number);
  const start = new Date(y, mo - 1, 1);
  const end = new Date(y, mo, 0, 23, 59, 59);
  if (end < now) return 'done';
  if (start <= now) return 'current';
  return 'upcoming';
}

const LABEL = { done: 'Completed', current: 'In progress', upcoming: 'Upcoming' };

export default function Milestones() {
  const now = new Date();
  const items = MILESTONES.map((m) => ({ ...m, s: statusOf(m, now) }));
  const done = items.filter((m) => m.s === 'done').length;

  return (
    <section id="milestones" className="bg-[#f3f7ee] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Milestones"
          text="Track our journey from conception to completion with key milestones and deliverables throughout the research project."
        />
        <p className="-mt-4 mb-10 font-medium text-[#14683b]">
          {done} of {items.length} milestones completed
        </p>

        <ol className="relative max-w-3xl border-l-2 border-[#0a4a2b]/20 pl-8">
          {items.map((m, i) => (
            <li key={`${m.title}-${i}`} className="relative pb-10 last:pb-0">
              <span
                className="absolute top-0.5 grid h-8 w-8 place-items-center"
                style={{ left: 'calc(-2rem - 1rem - 1px)' }}
              >
                {m.s === 'current' && (
                  <span className="absolute h-8 w-8 animate-ping rounded-full bg-[#f2b01e]/50" />
                )}
                <span
                  className={`relative grid h-8 w-8 place-items-center rounded-full ring-4 ring-[#f3f7ee] ${
                    m.s === 'done'
                      ? 'bg-[#f2b01e] text-[#05301c]'
                      : m.s === 'current'
                      ? 'bg-[#0a4a2b] text-[#ffd25a]'
                      : 'border-2 border-[#0a4a2b]/30 bg-white'
                  }`}
                >
                  {m.s === 'done' && <Check size={16} strokeWidth={3} />}
                  {m.s === 'current' && <span className="h-2.5 w-2.5 rounded-full bg-[#ffd25a]" />}
                </span>
              </span>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-display text-lg font-semibold text-[#14683b]">{m.label}</p>
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-medium ${
                    m.s === 'done'
                      ? 'bg-[#0a4a2b] text-white'
                      : m.s === 'current'
                      ? 'bg-[#f2b01e] text-[#05301c]'
                      : 'bg-white text-[#0a4a2b]/70 ring-1 ring-[#0a4a2b]/20'
                  }`}
                >
                  {LABEL[m.s]}
                </span>
              </div>
              <h3 className="mt-1 text-xl font-semibold text-[#10231a]">{m.title}</h3>
              <p className="mt-1 leading-relaxed text-[#10231a]/75">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
