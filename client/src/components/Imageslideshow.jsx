import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { SLIDESHOW, asset } from '../data/siteData';
import SectionHeading from './SectionHeading';

const { count, folder, extensions, captions, title } = SLIDESHOW;
const INTERVAL = 5000;

export default function ImageSlideshow() {
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [hover, setHover] = useState(false);
  const [extIdx, setExtIdx] = useState({}); // which extension each photo is currently trying
  const [failed, setFailed] = useState({});
  const thumbs = useRef(null);
  const touchX = useRef(null);

  const go = (i) => setIndex((i + count) % count);
  const src = (i) => asset(`${folder}/${i + 1}.${extensions[extIdx[i] || 0]}`);

  const onError = (i) => () => {
    const next = (extIdx[i] || 0) + 1;
    if (next < extensions.length) setExtIdx((s) => ({ ...s, [i]: next }));
    else setFailed((s) => ({ ...s, [i]: true }));
  };

  // autoplay
  useEffect(() => {
    if (!playing || hover) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(t);
  }, [playing, hover]);

  // keep the active thumbnail in view (scrolls the strip only, never the page)
  useEffect(() => {
    const box = thumbs.current;
    const el = box && box.children[index];
    if (box && el) box.scrollTo({ left: el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' });
  }, [index]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') go(index - 1);
    if (e.key === 'ArrowRight') go(index + 1);
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <div className="bg-[#f3f7ee] pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={SLIDESHOW.title} text={SLIDESHOW.text} />

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label={title}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="overflow-hidden rounded-[2rem] bg-[#05301c] shadow-xl ring-1 ring-[#0a4a2b]/20"
        >
          <div
            className="relative aspect-[4/3] sm:aspect-video"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={onTouchEnd}
            aria-live={playing ? 'off' : 'polite'}
          >
            {Array.from({ length: count }, (_, i) => (
              <div
                key={i}
                aria-hidden={i !== index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                {failed[i] ? (
                  <div className="grid h-full place-items-center px-6 text-center text-sm text-white/70">
                    Add photo {i + 1} to public/{folder}/ (for example {i + 1}.jpeg)
                  </div>
                ) : (
                  <>
                    <img
                      src={src(i)}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
                    />
                    <img
                      src={src(i)}
                      alt={`${title}, photo ${i + 1} of ${count}`}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      onError={onError(i)}
                      className="relative h-full w-full object-contain"
                    />
                  </>
                )}
              </div>
            ))}

            {captions[index] && (
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-5 pt-12 text-center text-sm text-white sm:text-base">
                {captions[index]}
              </p>
            )}

            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-[#f2b01e] hover:text-[#05301c]"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-[#f2b01e] hover:text-[#05301c]"
            >
              <ChevronRight size={22} />
            </button>

            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-[#f2b01e] hover:text-[#05301c]"
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <span className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {index + 1} / {count}
            </span>
          </div>

          <div ref={thumbs} className="flex gap-2 overflow-x-auto bg-[#031f12] p-3">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-[#0a4a2b] transition ${
                  i === index ? 'ring-2 ring-[#f2b01e]' : 'opacity-60 hover:opacity-100'
                }`}
              >
                {!failed[i] && (
                  <img
                    src={src(i)}
                    alt=""
                    loading="lazy"
                    onError={onError(i)}
                    className="h-full w-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}