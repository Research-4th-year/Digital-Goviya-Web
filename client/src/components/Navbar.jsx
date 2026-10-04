import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV, IMG } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-[#05301c]/95 shadow-lg shadow-black/20 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" aria-label="Main">
        <a href="#home" className="flex items-center gap-3">
          <img src={IMG.logo} alt="Digital Goviya logo" className="h-10 w-10" />
          <span className="font-display text-lg font-semibold text-white">Digital Goviya</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === n.id ? 'text-[#ffd25a]' : 'text-white/80 hover:text-white'
                }`}
              >
                {n.label}
                {active === n.id && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-[#f2b01e]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-white lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 px-6 pb-4 lg:hidden">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`block py-3 text-base ${active === n.id ? 'text-[#ffd25a]' : 'text-white/85'}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
