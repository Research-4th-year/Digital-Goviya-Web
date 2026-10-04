import { NAV, IMG } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#031f12] py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <a href="#home" className="flex items-center gap-3">
          <img src={IMG.logo} alt="" className="h-10 w-10" />
          <span className="font-display text-lg font-semibold text-white">Digital Goviya</span>
        </a>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="hover:text-[#ffd25a]">{n.label}</a>
            </li>
          ))}
        </ul>
        <p className="text-sm">&copy; {new Date().getFullYear()} SLIIT Research. All rights reserved.</p>
      </div>
    </footer>
  );
}
