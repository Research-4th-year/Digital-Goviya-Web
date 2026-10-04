import { Download, FileText, Presentation } from 'lucide-react';
import { DOWNLOADS, asset } from '../data/siteData';
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
      </div>
    </section>
  );
}
