import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { CONTACT } from '../data/siteData';
import SectionHeading from './SectionHeading';
import { WaveDivider } from './PaddyDecor';

// ============================================================
// EMAILJS CONFIGURATION
// ============================================================

// Add your EmailJS Public Key here
emailjs.init('OgKKg94Ljz3s3RtuS');

// Add your EmailJS Service ID and Template ID below
const EMAILJS_SERVICE_ID = 'service_1bjqy0b';
const EMAILJS_TEMPLATE_ID = 'template_td71q8v';

// ============================================================
// FORM
// ============================================================

const EMPTY = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const field =
  'mt-1.5 w-full rounded-xl border border-[#0a4a2b]/20 bg-white px-4 py-3 text-[#10231a] outline-none transition placeholder:text-[#10231a]/40 focus:border-[#14683b] focus:ring-2 focus:ring-[#f2b01e]/60';

export default function ContactUs() {
  const [form, setForm] = useState(EMPTY);

  const [status, setStatus] = useState({
    type: 'idle',
    text: '',
  });

  // ============================================================
  // HANDLE INPUT CHANGES
  // ============================================================

  const update = (key) => (e) => {
    setForm((currentForm) => ({
      ...currentForm,
      [key]: e.target.value,
    }));
  };

  // ============================================================
  // HANDLE FORM SUBMISSION
  // ============================================================

  async function onSubmit(e) {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status.type === 'sending') {
      return;
    }

    // Show sending state
    setStatus({
      type: 'sending',
      text: 'Sending your message...',
    });

    try {
      // ========================================================
      // EMAILJS TEMPLATE PARAMETERS
      // ========================================================

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,

        // Email address that receives the message
        to_email: CONTACT.email,

        // Optional name used by your EmailJS template
        to_name: 'Digital Goviya Team',
      };

      // ========================================================
      // SEND EMAIL THROUGH EMAILJS
      // ========================================================

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);

      // ========================================================
      // SUCCESS
      // ========================================================

      setForm(EMPTY);

      setStatus({
        type: 'success',
        text: "Message sent successfully. We'll reply to your email soon.",
      });

      // Remove success message after 5 seconds
      setTimeout(() => {
        setStatus({
          type: 'idle',
          text: '',
        });
      }, 5000);
    } catch (error) {
      // ========================================================
      // ERROR
      // ========================================================

      console.error('Email sending failed:', error);

      setStatus({
        type: 'error',
        text: `We couldn't send your message. Please email us directly at ${CONTACT.email}.`,
      });

      // Remove error message after 5 seconds
      setTimeout(() => {
        setStatus({
          type: 'idle',
          text: '',
        });
      }, 5000);
    }
  }

  return (
    <section id="contact">
      <WaveDivider from="#f3f7ee" to="#05301c" />

      <div className="bg-[#05301c] pb-24 pt-6 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ==================================================
              LEFT SIDE - CONTACT INFORMATION
          ================================================== */}

          <div>
            <SectionHeading
              light
              title="Contact Us"
              text={CONTACT.intro}
            />

            <ul className="space-y-5">

              {/* Email */}
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f2b01e] text-[#05301c]">
                  <Mail size={20} />
                </span>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="pt-2 hover:text-[#ffd25a]"
                >
                  {CONTACT.email}
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f2b01e] text-[#05301c]">
                  <Phone size={20} />
                </span>

                <a
                  href={`tel:${CONTACT.phoneLink}`}
                  className="pt-2 hover:text-[#ffd25a]"
                >
                  {CONTACT.phone}
                </a>
              </li>

              {/* Location */}
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

          {/* ==================================================
              RIGHT SIDE - CONTACT FORM
          ================================================== */}

          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-white p-7 text-[#10231a] shadow-2xl shadow-black/30 md:p-9"
          >

            {/* ==================================================
                STATUS MESSAGE
            ================================================== */}

            {status.text && (
              <div
                role="status"
                className={`mb-6 flex items-start gap-3 rounded-xl border p-4 ${
                  status.type === 'success'
                    ? 'border-green-200 bg-green-50 text-green-700'
                    : status.type === 'error'
                    ? 'border-red-200 bg-red-50 text-red-700'
                    : 'border-[#f2b01e]/30 bg-[#fff8df] text-[#14683b]'
                }`}
              >

                {/* Success Icon */}
                {status.type === 'success' && (
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-green-600"
                  />
                )}

                {/* Error Icon */}
                {status.type === 'error' && (
                  <AlertCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-red-600"
                  />
                )}

                {/* Sending Icon */}
                {status.type === 'sending' && (
                  <Loader
                    size={20}
                    className="mt-0.5 shrink-0 animate-spin text-[#14683b]"
                  />
                )}

                <p className="text-sm font-medium">
                  {status.text}
                </p>
              </div>
            )}

            {/* ==================================================
                NAME + EMAIL
            ================================================== */}

            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <label className="block text-sm font-medium">
                Name

                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your full name"
                  className={field}
                  autoComplete="name"
                  disabled={status.type === 'sending'}
                />
              </label>

              {/* Email */}
              <label className="block text-sm font-medium">
                Email

                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className={field}
                  autoComplete="email"
                  disabled={status.type === 'sending'}
                />
              </label>

            </div>

            {/* ==================================================
                SUBJECT
            ================================================== */}

            <label className="mt-5 block text-sm font-medium">
              Subject

              <input
                required
                type="text"
                value={form.subject}
                onChange={update('subject')}
                placeholder="What is your message about?"
                className={field}
                disabled={status.type === 'sending'}
              />
            </label>

            {/* ==================================================
                MESSAGE
            ================================================== */}

            <label className="mt-5 block text-sm font-medium">
              Message

              <textarea
                required
                rows={6}
                value={form.message}
                onChange={update('message')}
                placeholder="Write your message here"
                className={`${field} resize-y`}
                disabled={status.type === 'sending'}
              />
            </label>

            {/* ==================================================
                SUBMIT BUTTON + STATUS
            ================================================== */}

            <div className="mt-6 flex flex-wrap items-center gap-4">

              <button
                type="submit"
                disabled={status.type === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-[#f2b01e] px-7 py-3 font-semibold text-[#05301c] transition hover:bg-[#ffd25a] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {status.type === 'sending' ? (
                  <>
                    <Loader
                      size={18}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send message
                  </>
                )}

              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}