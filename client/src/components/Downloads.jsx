import { Download, FileText, Presentation, Smartphone } from 'lucide-react';
import { DOWNLOADS, APP, IMG, asset } from '../data/siteData';
import SectionHeading from './SectionHeading';

function FileRow({ item }) {
  const ext = item.file.split('.').pop().toLowerCase();
  const isSlides = ext === 'pptx' || ext === 'ppt';
  const Icon = isSlides ? Presentation : FileText;

  return (
    <li className="flex items-center gap-4 rounded-2xl bg-[#f3f7ee] p-4">
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
          isSlides ? 'bg-[#f2b01e] text-[#05301c]' : 'bg-[#0a4a2b] text-[#ffd25a]'
        }`}
      >
        <Icon size={22} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-[#10231a]">{item.title}</p>
        <p className="text-xs text-[#10231a]/60">{ext.toUpperCase()} file</p>
      </div>
      {item.available ? (
        <a
          href={asset(item.file)}
          download
          aria-label={`Download ${item.title}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#0a4a2b] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#14683b]"
        >
          <Download size={16} />
          Download
        </a>
      ) : (
        <span className="rounded-full bg-white px-4 py-2 text-sm text-[#10231a]/50 ring-1 ring-[#0a4a2b]/15">
          Coming soon
        </span>
      )}
    </li>
  );
}

function StoreButton({ platform, item }) {
  const ready = Boolean(item.url);
  const isFile = ready && !/^https?:\/\//i.test(item.url);
  const inner = (
    <>
      <Smartphone size={28} className="shrink-0" />
      <span className="text-left leading-tight">
        <span className="block text-xs opacity-70">{item.prefix}</span>
        <span className="block text-lg font-semibold">{item.store}</span>
      </span>
    </>
  );

  if (!ready) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex cursor-not-allowed items-center gap-3 rounded-2xl bg-white/15 px-5 py-3 text-white/80 ring-1 ring-white/20"
      >
        {inner}
        <span className="ml-1 rounded-full bg-[#f2b01e] px-2.5 py-0.5 text-xs font-semibold text-[#05301c]">
          Coming soon
        </span>
      </span>
    );
  }

  return (
    <a
      href={isFile ? asset(item.url) : item.url}
      {...(isFile ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
      aria-label={`${item.prefix} ${item.store} (${platform})`}
      className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-[#05301c] shadow-lg shadow-black/20 transition hover:bg-[#ffd25a]"
    >
      {inner}
    </a>
  );
}

function AppDownload() {
  return (
    <div
      id="app-download"
      className="relative isolate mt-20 overflow-hidden rounded-[2rem] bg-[#05301c] text-white shadow-xl"
    >
      <div className="sun-glow pointer-events-none absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full opacity-60" />
      <div className="grid items-center gap-8 px-8 pt-12 md:px-14 lg:grid-cols-[1.1fr_0.9fr] lg:pt-0">
        <div className="lg:py-14">
          <img src={IMG.logo} alt="" className="mb-5 h-16 w-16" />
          <h3 className="font-display text-3xl font-semibold leading-tight md:text-4xl">{APP.title}</h3>
          <p className="mt-4 max-w-lg leading-relaxed text-white/80">{APP.text}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {APP.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-[#f2b01e]/50 px-3 py-1 text-sm text-[#ffd25a]"
              >
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <StoreButton platform="Android" item={APP.android} />
            <StoreButton platform="iOS" item={APP.ios} />
          </div>
          <p className="mt-5 text-sm text-white/60">Digital Goviya {APP.version} · SLIIT Research 2026</p>
        </div>

        <div className="flex h-[24rem] items-start justify-center overflow-hidden lg:h-[28rem]">
          <img
            src={IMG.welcome}
            alt=""
            className="mt-16 -mr-8 w-44 drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)] sm:w-52"
          />
          <img
            src={IMG.modules}
            alt="Digital Goviya app showing its four modules"
            className="relative mt-6 w-48 drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)] sm:w-56"
          />
        </div>
      </div>
    </div>
  );
}

export default function Downloads() {
  return (
    <section id="downloads" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Downloads"
          text="Access all project-related documents, presentations, and research materials. Click on each item to download individual files."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {DOWNLOADS.map((g) => (
            <div key={g.group}>
              <h3 className="mb-4 font-display text-2xl font-semibold text-[#0a4a2b]">{g.group}</h3>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <FileRow key={it.file} item={it} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <AppDownload />
      </div>
    </section>
  );
}