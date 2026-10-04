export default function SectionHeading({ title, text, light = false }) {
  return (
    <header className="mb-10 max-w-2xl">
      <h2
        className={`font-display text-4xl font-semibold leading-tight md:text-5xl ${
          light ? 'text-white' : 'text-[#0a4a2b]'
        }`}
      >
        {title}
      </h2>
      <span className="mt-4 block h-1 w-16 rounded-full bg-[#f2b01e]" aria-hidden="true" />
      {text && (
        <p className={`mt-5 leading-relaxed ${light ? 'text-white/80' : 'text-[#10231a]/75'}`}>
          {text}
        </p>
      )}
    </header>
  );
}
