import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT } from '../data/siteData';
import SectionHeading from './SectionHeading';
import { WaveDivider } from './PaddyDecor';

const EMPTY = { name: '', email: '', subject: '', message: '' };

const field =
  'mt-1.5 w-full rounded-xl border border-[#0a4a2b]/20 bg-white px-4 py-3 text-[#10231a] outline-none transition placeholder:text-[#10231a]/40 focus:border-[#14683b] focus:ring-2 focus:ring-[#f2b01e]/60';

export default function ContactUs() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();

    // No form service set up: open the visitor's email app with the message ready to send.
    if (!CONTACT.formEndpoint) {
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus({ type: 'info', text: 'Your email app should open with the message ready to send.' });
      return;
    }

    setStatus({ type: 'sending', text: 'Sending your message...' });
    try {
      const res = await fetch(CONTACT.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setForm(EMPTY);
      setStatus({ type: 'success', text: "Message sent. We'll reply to your email soon." });
    } catch {
      setStatus({
        type: 'error',
        text: `We couldn't send your message. Please email us directly at ${CONTACT.email}.`,
      });
    }
  }

  return (
    <section id="contact">
      <WaveDivider from="#f3f7ee" to="#05301c" />
      <div className="bg-[#05301c] pb-24 pt-6 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading light title="Contact Us" text={CONTACT.intro} />
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f2b01e] text-[#05301c]">
                  <Mail size={20} />
                </span>
                <a href={`mailto:${CONTACT.email}`} className="pt-2 hover:text-[#ffd25a]">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f2b01e] text-[#05301c]">
                  <Phone size={20} />
                </span>
                <a href={`tel:${CONTACT.phoneLink}`} className="pt-2 hover:text-[#ffd25a]">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f2b01e] text-[#05301c]">
                  <MapPin size={20} />
                </span>
                <a
                  href={CONTACT.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-2 hover:text-[#ffd25a]"
                >
                  {CONTACT.location}
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-white p-7 text-[#10231a] shadow-2xl shadow-black/30 md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Name
                <input required type="text" value={form.name} onChange={update('name')} placeholder="Your full name" className={field} autoComplete="name" />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input required type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" className={field} autoComplete="email" />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium">
              Subject
              <input required type="text" value={form.subject} onChange={update('subject')} placeholder="What is your message about?" className={field} />
            </label>
            <label className="mt-5 block text-sm font-medium">
              Message
              <textarea required rows={6} value={form.message} onChange={update('message')} placeholder="Write your message here" className={`${field} resize-y`} />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status.type === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-[#f2b01e] px-7 py-3 font-semibold text-[#05301c] transition hover:bg-[#ffd25a] disabled:opacity-60"
              >
                <Send size={18} />
                Send message
              </button>
              {status.text && (
                <p
                  role="status"
                  className={`text-sm ${status.type === 'error' ? 'text-red-700' : 'text-[#14683b]'}`}
                >
                  {status.text}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
