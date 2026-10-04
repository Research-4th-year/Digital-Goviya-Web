import { SITE, COMPONENTS, APP_SCREENS, IMG } from '../data/siteData';
import { COMPONENT_ICONS } from './icons';
import { PaddyField, GrainDrift, WaveDivider } from './PaddyDecor';
import SectionHeading from './SectionHeading';

function Hero() {
  return (
    <div className="hero-bg relative isolate overflow-hidden text-white">
      <div className="sun-glow pointer-events-none absolute -right-28 top-8 -z-10 h-[34rem] w-[34rem] rounded-full" />
      <GrainDrift />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-60 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pb-64 lg:pt-36">
        <div>
          <img src={IMG.logo} alt="" className="mb-6 h-24 w-24 drop-shadow-[0_8px_24px_rgba(242,176,30,0.35)]" />
          <h1 className="font-display text-4xl font-semibold leading-[1.12] md:text-5xl lg:text-[3.25rem]">
            {SITE.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{SITE.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#scope"
              className="rounded-full bg-[#f2b01e] px-7 py-3 font-semibold text-[#05301c] shadow-lg shadow-black/20 transition hover:bg-[#ffd25a]"
            >
              Explore the research
            </a>
            <a
              href="#downloads"
              className="rounded-full border border-white/40 px-7 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Download documents
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={IMG.modules}
            alt="Digital Goviya app showing its four modules"
            className="floaty w-[min(22rem,80%)] drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>

      {/* Paddy field grows out of the next section */}
      <div className="absolute inset-x-0 bottom-0 z-[5]">
        <PaddyField />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20">
        <WaveDivider from="transparent" to="#f3f7ee" />
      </div>
    </div>
  );
}

function Components() {
  return (
    <div className="bg-[#f3f7ee] pb-20 pt-10">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Four components, one ecosystem"
          text="Each component is built and tested on its own, then linked through shared APIs."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {COMPONENTS.map((c) => {
            const Icon = COMPONENT_ICONS[c.id];
            return (
              <a
                key={c.id}
                href="#scope"
                className="group flex gap-5 rounded-3xl border-l-4 border-[#f2b01e] bg-white p-7 shadow-sm ring-1 ring-[#0a4a2b]/10 transition hover:shadow-lg"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#0a4a2b] text-[#ffd25a]">
                  <Icon size={26} />
                </span>
                <span>
                  <h3 className="font-display text-xl font-semibold text-[#0a4a2b]">{c.name}</h3>
                  <p className="mt-2 leading-relaxed text-[#10231a]/75">{c.blurb}</p>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AppShowcase() {
  return (
    <>
      <WaveDivider from="#f3f7ee" to="#05301c" />
      <div className="bg-[#05301c] pb-16 pt-6 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            light
            title="Digital Goviya, in your pocket"
            text="The released mobile app brings all four modules together in English and Sinhala. It runs on both Android and iOS."
          />
          <div className="grid items-end gap-8 md:grid-cols-3">
            {APP_SCREENS.map((s, i) => (
              <figure key={s.img} className={i === 1 ? 'md:-translate-y-8' : ''}>
                <img
                  src={IMG[s.img]}
                  alt={`Digital Goviya ${s.title.toLowerCase()} screen`}
                  className="mx-auto w-full max-w-[300px] drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)]"
                  loading="lazy"
                />
                <figcaption className="mx-auto mt-4 max-w-[17rem] text-center">
                  <span className="font-display text-lg font-semibold text-[#ffd25a]">{s.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-white/75">{s.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <WaveDivider from="#05301c" to="#ffffff" />
    </>
  );
}

export default function Home() {
  return (
    <section id="home">
      <Hero />
      <Components />
      <AppShowcase />
    </section>
  );
}
