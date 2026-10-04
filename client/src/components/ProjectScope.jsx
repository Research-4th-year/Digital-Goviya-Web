import { useState } from 'react';
import { GAP, PROBLEM, COMPONENTS, OBJECTIVES, METHOD } from '../data/siteData';
import { COMPONENT_ICONS, NFR_ICONS } from './icons';
import { GrainBullet } from './PaddyDecor';
import SectionHeading from './SectionHeading';

const TABS = [
  { id: 'gap', label: 'Research Gap' },
  { id: 'problem', label: 'Problem & Solution' },
  { id: 'objectives', label: 'Research Objectives' },
  { id: 'method', label: 'Methodology' },
];

/* ---------------- Research Gap ---------------- */
function GapPanel() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h3 className="font-display text-3xl font-semibold text-[#0a4a2b]">Research Gap</h3>
        <p className="mt-4 text-lg leading-relaxed">{GAP.statement}</p>
        <h4 className="mt-8 font-display text-xl font-semibold text-[#0a4a2b]">
          Existing tools are fragmented
        </h4>
        <ul className="mt-4 space-y-3">
          {GAP.existing.map((t) => (
            <li key={t} className="flex gap-3 leading-relaxed text-[#10231a]/80">
              <GrainBullet />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl bg-[#0a4a2b] p-8 text-white">
        <h4 className="font-display text-2xl font-semibold text-[#ffd25a]">
          No prior work combines the following for Sri Lanka's paddy supply chain
        </h4>
        <ul className="mt-6 space-y-4">
          {GAP.noPriorWork.map((t) => (
            <li key={t} className="flex gap-3 leading-relaxed text-white/90">
              <GrainBullet />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- Problem & Solution ---------------- */
function ProblemPanel() {
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="rounded-3xl bg-[#0a4a2b] p-8 text-white lg:col-span-2">
        <h3 className="font-display text-3xl font-semibold">Research Problem</h3>
        <p className="mt-4 leading-relaxed text-white/85">{PROBLEM.text}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {PROBLEM.effects.map((e) => (
            <li key={e} className="rounded-full border border-[#f2b01e]/60 px-3 py-1 text-sm text-[#ffd25a]">
              {e}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-3">
        <h3 className="font-display text-3xl font-semibold text-[#0a4a2b]">Proposed Solution</h3>
        <p className="mt-3 text-[#10231a]/75">
          An AI-driven, privacy-preserving digital ecosystem with four components:
        </p>
        <ul className="mt-6 space-y-4">
          {COMPONENTS.map((c) => {
            const Icon = COMPONENT_ICONS[c.id];
            return (
              <li key={c.id} className="flex gap-4 rounded-2xl bg-[#f3f7ee] p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f2b01e] text-[#05301c]">
                  <Icon size={22} />
                </span>
                <div>
                  <h4 className="font-semibold text-[#0a4a2b]">{c.short}</h4>
                  <p className="mt-1 leading-relaxed text-[#10231a]/75">{c.blurb}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- Research Objectives ---------------- */
function ObjectivesPanel() {
  const [id, setId] = useState(OBJECTIVES[0].id);
  const o = OBJECTIVES.find((x) => x.id === id);

  return (
    <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
      <div role="tablist" aria-label="Components" className="flex gap-2 overflow-x-auto lg:flex-col">
        {OBJECTIVES.map((x) => {
          const on = x.id === id;
          return (
            <button
              key={x.id}
              role="tab"
              aria-selected={on}
              onClick={() => setId(x.id)}
              className={`shrink-0 rounded-2xl border px-5 py-4 text-left transition lg:shrink ${
                on
                  ? 'border-[#0a4a2b] bg-[#0a4a2b] text-white'
                  : 'border-[#0a4a2b]/15 bg-white hover:border-[#0a4a2b]/40'
              }`}
            >
              <span className={`block text-xs font-medium ${on ? 'text-[#ffd25a]' : 'text-[#14683b]'}`}>
                {x.label}
              </span>
              <span className="mt-1 block max-w-[15rem] text-sm font-semibold leading-snug lg:max-w-none">
                {x.name}
              </span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="rounded-3xl bg-[#f3f7ee] p-8">
        <h3 className="font-display text-3xl font-semibold text-[#0a4a2b]">
          {o.label}: {o.name}
        </h3>

        <div className="mt-6 border-l-4 border-[#f2b01e] bg-white p-5">
          <h4 className="font-semibold text-[#0a4a2b]">Novelty</h4>
          <p className="mt-1 leading-relaxed text-[#10231a]/80">{o.novelty}</p>
        </div>

        <h4 className="mt-8 font-display text-xl font-semibold text-[#0a4a2b]">Main Objective</h4>
        <p className="mt-2 text-lg leading-relaxed">{o.main}</p>

        <h4 className="mt-8 font-display text-xl font-semibold text-[#0a4a2b]">Sub Objectives</h4>
        <ul className="mt-3 space-y-3">
          {o.subs.map((s) => (
            <li key={s} className="flex gap-3 leading-relaxed text-[#10231a]/85">
              <GrainBullet />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- Methodology ---------------- */
function MethodPanel() {
  return (
    <div>
      <h3 className="font-display text-3xl font-semibold text-[#0a4a2b]">Methodology</h3>
      <p className="mt-3 max-w-3xl text-lg leading-relaxed">
        <span className="font-semibold">Overall approach:</span> {METHOD.overall}
      </p>

      <h4 className="mt-12 font-display text-2xl font-semibold text-[#0a4a2b]">
        How It Works (Functional Requirements)
      </h4>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {METHOD.functional.map((f) => {
          const Icon = COMPONENT_ICONS[f.id];
          return (
            <div key={f.id} className="rounded-3xl bg-[#f3f7ee] p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0a4a2b] text-[#ffd25a]">
                  <Icon size={20} />
                </span>
                <h5 className="font-semibold leading-snug text-[#0a4a2b]">{f.title}</h5>
              </div>
              <ul className="mt-4 space-y-2.5">
                {f.items.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-[#10231a]/85">
                    <GrainBullet />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <h4 className="mt-12 font-display text-2xl font-semibold text-[#0a4a2b]">
        Non-Functional Requirements
      </h4>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METHOD.nonFunctional.map((n) => {
          const Icon = NFR_ICONS[n.icon];
          return (
            <div key={n.title} className="rounded-2xl border border-[#0a4a2b]/15 p-5">
              <Icon size={22} className="text-[#14683b]" />
              <h5 className="mt-3 font-semibold text-[#0a4a2b]">{n.title}</h5>
              <p className="mt-1 text-sm leading-relaxed text-[#10231a]/75">{n.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Section ---------------- */
export default function ProjectScope() {
  const [tab, setTab] = useState('gap');

  return (
    <section id="scope" className="bg-white pb-24 pt-10">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Project Scope"
          text="Where the research starts, what it sets out to do, and how it will be built."
        />

        <div
          role="tablist"
          aria-label="Project scope sections"
          className="sticky top-[4.25rem] z-30 mb-10 flex gap-2 overflow-x-auto rounded-full bg-[#f3f7ee]/95 p-2 backdrop-blur"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                tab === t.id ? 'bg-[#0a4a2b] text-white' : 'text-[#0a4a2b] hover:bg-[#0a4a2b]/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div role="tabpanel">
          {tab === 'gap' && <GapPanel />}
          {tab === 'problem' && <ProblemPanel />}
          {tab === 'objectives' && <ObjectivesPanel />}
          {tab === 'method' && <MethodPanel />}
        </div>
      </div>
    </section>
  );
}
