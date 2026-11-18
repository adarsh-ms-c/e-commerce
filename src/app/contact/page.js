'use client';

import { useEffect, useRef, useState } from 'react';
import { contact, whatsappLink } from '@/lib/site-data';

const metrics = [
  ['Response Window', '< 15 Minutes', 'Via VIP WhatsApp Desk'],
  ['Private Salon', 'Place Vendôme', 'By Scheduled Appointment'],
  ['Artisanal Workshop', 'Tuscany & Paris', 'Full-Grain Master Tannery'],
  ['Complimentary Service', 'Foil & Blind Stamp', 'Curated Monogram Studio'],
];

const faqs = [
  {
    question: 'How does WhatsApp ordering work?',
    answer:
      'Our direct WhatsApp portal (+91 9074569335) connects you directly to a senior client director. You can request high-resolution video walk-throughs of specific pieces, receive real-time shade comparisons under natural light, and finalize orders via a secure private checkout link.',
    note: 'Orders initiated on WhatsApp receive priority tracking numbers and complimentary hand-embossed initials.',
  },
  {
    question: 'What leather grades do you use?',
    answer:
      'We exclusively utilize certified Grade-A full-grain French calfskin and vegetable-tanned Tuscan hides sourced from tanneries recognized by the Leather Working Group (LWG Gold Medal certified).',
    note: 'Our hides are minimally corrected, allowing the organic grain, subtle grain marks, and natural luster to develop an irreplaceable patina across decades of wear.',
  },
  {
    question: 'How long does bespoke monogramming take?',
    answer:
      'Personalized monogram stamping (1 to 3 Roman initials in 24k Matte Gold, Silver Palladium, or Blind Deboss) adds approximately 48 hours to order dispatch.',
    note: 'Each piece is prepared individually on an authentic heated brass press by our Paris workshop artisans.',
  },
  {
    question: 'What is your international return policy?',
    answer:
      'We offer complimentary worldwide 30-day returns and exchanges on all standard catalogue creations in unworn, flawless condition with original seals intact.',
    note: 'Please note: Custom monogrammed pieces and special bespoke hide orders are created specifically for the client and represent final sales, covered under our 5-year structural warranty.',
  },
];

const assurances = [
  {
    icon: 'verified',
    title: 'Direct Verification',
    text: 'Every piece carries an NFC micro-chip sewn into the internal leather seam. Our concierge provides immediate authenticity validation for heirlooms and resale acquisitions.',
  },
  {
    icon: 'flight_takeoff',
    title: 'White-Glove Courier',
    text: 'Dispatched via insured carbon-neutral international air courier in our signature double-walled linen presentation cases with personalized dust bags.',
  },
  {
    icon: 'spa',
    title: 'Lifetime Care Clinic',
    text: 'Complimentary leather conditioning, hardware polishing, and edge-paint refurbishing is provided to all registered patrons every two seasons upon request.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Order Inquiry / WhatsApp Purchase');
  const [subject, setSubject] = useState('');
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  function handleFormSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);

    timer.current = setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      if (whatsappOptIn) {
        const directText = `Hello Atelier Concierge, my name is ${name} (${phone}). Inquiry: ${inquiryType} - ${subject}`;
        const confirmRedirect = window.confirm(
          `Would you like to open WhatsApp now to speak with Concierge Adarsh directly (${contact.phone})?`
        );
        if (confirmRedirect) {
          window.open(whatsappLink(directText), '_blank', 'noopener,noreferrer');
        }
      }
    }, 700);
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl pb-space-2xl">
        <div className="max-w-5xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
              Atelier Client Services · Paris
            </span>
          </div>
          <h1 className="font-display text-display text-primary uppercase tracking-tight mb-space-lg">
            Private Client Concierge &amp; Contact
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            We are here to assist with bespoke orders, styling guidance, and aftercare. Our dedicated private client
            liaisons orchestrate tailored leathercraft consultations, custom monogramming requests, and immediate
            worldwide ordering.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-2xl pt-space-xl bg-surface-container-low p-space-lg shadow-sm">
          {metrics.map(([label, value, detail]) => (
            <div key={label}>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-space-xs">{label}</p>
              <p className="font-headline-sm text-headline-sm text-primary font-medium">{value}</p>
              <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">{detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <div className="lg:col-span-5 flex flex-col space-y-space-xl">
            <div className="bg-surface-container-lowest p-space-xl shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-surface-container -mr-8 -mt-8 rotate-45 pointer-events-none" />
              <div className="flex items-center justify-between mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest bg-primary text-on-primary px-space-sm py-1 font-semibold">
                  Priority Channel
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Available Live
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary mb-space-sm">Atelier Concierge</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                Connect directly with our master stylists and concierge executives for swift catalog selections, leather
                authentication, and private acquisitions.
              </p>
              <div className="bg-surface p-space-md mb-space-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      Phone / WhatsApp Direct
                    </p>
                    <a className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors font-medium mt-1 block" href={`tel:${contact.phone}`}>
                      {contact.phone}
                    </a>
                  </div>
                  <span className="material-symbols-outlined text-[28px] text-primary">phone_in_talk</span>
                </div>
                <div className="mt-space-md pt-space-sm">
                  <a
                    className="w-full flex items-center justify-center gap-space-sm bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-space-sm px-space-md hover:bg-surface-container-highest hover:text-on-surface transition-all duration-200 shadow-sm"
                    href={whatsappLink('Hello Atelier Paris, I would like to inquire about a private order.')}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    Direct WhatsApp Chat
                  </a>
                </div>
              </div>
              <div className="bg-surface p-space-md mb-space-md">
                <div className="flex items-center justify-between mb-space-xs">
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Official Client Mail</p>
                  <span className="material-symbols-outlined text-[20px] text-secondary">mail</span>
                </div>
                <p className="font-body-md text-body-md text-primary font-medium select-all">{contact.email}</p>
                <div className="mt-space-sm">
                  <a
                    className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold hover:text-secondary transition-colors group"
                    href={`mailto:${contact.email}?subject=Inquiry%20from%20Atelier%20Client`}
                  >
                    Open Dedicated Mail Client
                    <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
              <div className="bg-surface p-space-md mb-space-md">
                <div className="flex items-center justify-between mb-space-xs">
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Editorial &amp; Social</p>
                  <span className="material-symbols-outlined text-[20px] text-secondary">photo_camera</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body-md text-body-md text-primary font-medium">@_adarsh__ms</span>
                  <a
                    className="inline-flex items-center gap-1 bg-surface-container-high text-primary px-space-sm py-1 font-label-sm text-label-sm tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-colors"
                    href={contact.instagram}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Follow Feed <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
              <div className="pt-space-md space-y-space-md">
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1">Flagship Presence</p>
                  <p className="font-body-md text-body-md text-primary font-medium">
                    Place Vendôme, Paris &amp; Worldwide Client Services
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Private viewings curated at Parisian salon or international partner suites.
                  </p>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1">
                    Concierge Operating Hours
                  </p>
                  <p className="font-body-md text-body-md text-primary">Monday – Saturday: 9:00 AM – 8:00 PM CET</p>
                  <p className="font-body-sm text-body-sm text-secondary font-medium">WhatsApp Support: 24/7 Available globally</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-high p-space-xl relative shadow-sm">
              <div className="flex items-start gap-space-md">
                <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5">draw</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">VIP Bespoke &amp; Monogramming</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    Every creation at ATELIER Paris can be stamped with your personal cipher. Book a virtual consultation
                    with our Florentine debossing artisan to preview custom font matrices, 24k gold leaf, or quiet blind
                    indentations.
                  </p>
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                      Lead Time: 48 Hours
                    </span>
                    <span className="text-outline">·</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Complimentary Service</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-surface-container overflow-hidden shadow-sm">
              <img
                alt="A refined close-up still life of artisanal leatherworking tools, natural waxed stitching thread, full-grain French calfskin leather swatch in deep obsidian, and golden hot-foil monogramming stamps laid out on an antique stone work surface in a sunlit Parisian atelier with soft shadows."
                className="w-full h-56 object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_YOECC3vJuEtQnw1URCbKHM7LaqD1TsVD2gpHbpiS-9-cL2SgK2HS8NKwTtnni7D9-kPxFU_GniZhjW1nX_zUiFl3ZUYKNccCnBjSivJ2ITWULwxhV36LTTr5ZT1h1pcNKu4PEmfxY15_wP0kdnk-WHyBFxE8uzFim8h-RQuVKOsui89dAo_zMheY_uZIEyJjXu_CNzdT4UnGS26iRm020oOgZX4CU70ArDrDj3si"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-space-md">
                <p className="font-label-sm text-label-sm text-on-primary uppercase tracking-widest">
                  Handcrafted in Limited Annual Editions
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl lg:p-space-2xl shadow-xl relative">
            <div className="mb-space-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-1">
                Direct Transmission
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Inquire with the Maison</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Please submit your inquiry below. Our personal concierges will respond within the hour during salon
                hours, or instantaneously via WhatsApp.
              </p>
            </div>
            <form className="space-y-space-lg" id="conciergeForm" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold mb-space-xs" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    className="w-full bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md px-space-md py-space-sm border-0 focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                    id="fullName"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="e.g. Madeleine Laurent"
                    required
                    type="text"
                    value={name}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold mb-space-xs" htmlFor="emailAddress">
                    Email Address *
                  </label>
                  <input
                    className="w-full bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md px-space-md py-space-sm border-0 focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                    id="emailAddress"
                    placeholder="name@domain.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold mb-space-xs" htmlFor="contactPhone">
                    Contact Phone / WhatsApp *
                  </label>
                  <input
                    className="w-full bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md px-space-md py-space-sm border-0 focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                    id="contactPhone"
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+1 (555) 000-0000"
                    required
                    type="tel"
                    value={phone}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold mb-space-xs" htmlFor="inquiryType">
                    Inquiry Type *
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-space-md py-space-sm border-0 focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary appearance-none cursor-pointer pr-10"
                      id="inquiryType"
                      onChange={(event) => setInquiryType(event.target.value)}
                      required
                      value={inquiryType}
                    >
                      <option value="Order Inquiry / WhatsApp Purchase">Order Inquiry / WhatsApp Purchase</option>
                      <option value="Bespoke Monogramming">Bespoke Monogramming</option>
                      <option value="Product Sizing & Leather Care">Product Sizing &amp; Leather Care</option>
                      <option value="Press & Wholesale">Press &amp; Wholesale</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold mb-space-xs" htmlFor="subject">
                  Subject *
                </label>
                <input
                  className="w-full bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md px-space-md py-space-sm border-0 focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                  id="subject"
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="e.g. Inquiring regarding The Le Marais Tote in Noir"
                  required
                  type="text"
                  value={subject}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold mb-space-xs" htmlFor="message">
                  Client Note or Requirements *
                </label>
                <textarea
                  className="w-full bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md px-space-md py-space-sm border-0 focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all resize-none"
                  id="message"
                  placeholder="Provide details regarding delivery timelines, leather specifications, custom stamping characters, or appointment preferences..."
                  required
                  rows="5"
                />
              </div>
              <div className="bg-surface-container-low p-space-md">
                <label className="flex items-start gap-space-sm cursor-pointer select-none">
                  <input
                    checked={whatsappOptIn}
                    className="mt-1 w-4 h-4 text-primary bg-surface border-0 focus:ring-0 rounded-none accent-black cursor-pointer"
                    id="whatsappOptIn"
                    onChange={(event) => setWhatsappOptIn(event.target.checked)}
                    type="checkbox"
                  />
                  <span className="font-body-sm text-body-sm text-on-surface leading-snug">
                    Connect with me on WhatsApp (
                    <span className="font-semibold text-primary">{contact.phone}</span>) for instant replies and visual
                    leather swatch video previews.
                  </span>
                </label>
              </div>
              <div className="pt-space-sm">
                <button
                  className="w-full md:w-auto min-w-[260px] bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-space-md px-space-xl hover:bg-surface-container-highest hover:text-on-surface transition-all duration-300 flex items-center justify-center gap-space-sm shadow-md disabled:opacity-70"
                  id="submitBtn"
                  type="submit"
                  disabled={submitting}
                >
                  <span>{submitting ? 'Processing Dispatch...' : submitted ? 'Inquiry Registered' : 'Send Inquiry to Concierge'}</span>
                  <span className="material-symbols-outlined text-[18px]">{submitted ? 'done' : 'send'}</span>
                </button>
              </div>
              <div className={`p-space-md bg-surface-container-highest text-primary font-body-sm text-body-sm ${submitted ? '' : 'hidden'}`} id="formSuccess">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>
                    Thank you. Your dispatch has been transmitted to our Paris desk. A liaison has received your file.
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {assurances.map((item) => (
            <div className="bg-surface-container-lowest p-space-lg shadow-sm" key={item.title}>
              <span className="material-symbols-outlined text-primary text-[32px] mb-space-sm">{item.icon}</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">{item.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-3xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-space-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-space-xs">
              Client Protocols &amp; Inquiries
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase">Frequently Addressed Inquiries</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mt-2">
              Transparent guidelines surrounding bespoke acquisition, materials pedigree, and international salon
              logistics.
            </p>
          </div>
          <div className="space-y-space-md" id="accordionContainer">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index + 1;
              return (
                <div className="bg-surface-container-lowest shadow-sm overflow-hidden transition-all duration-200" key={faq.question}>
                  <button
                    aria-expanded={isOpen}
                    className="w-full px-space-lg py-space-md text-left flex items-center justify-between gap-space-md focus:outline-none cursor-pointer"
                    onClick={() => setOpenFaq(isOpen ? 0 : index + 1)}
                    type="button"
                  >
                    <span className="font-headline-sm text-headline-sm text-primary font-medium">{faq.question}</span>
                    <span
                      className={`material-symbols-outlined text-primary text-[24px] transform transition-transform duration-300 ${
                        isOpen ? '' : 'rotate-180'
                      }`}
                    >
                      expand_less
                    </span>
                  </button>
                  <div className={`px-space-lg pb-space-lg text-on-surface-variant font-body-md text-body-md ${isOpen ? '' : 'hidden'}`}>
                    <p className="leading-relaxed mb-space-xs">{faq.answer}</p>
                    <p className="font-body-sm text-body-sm text-secondary">{faq.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-space-2xl">
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
              Have an unlisted technical inquiry or bespoke architectural request?
            </p>
            <a
              className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary uppercase tracking-widest font-semibold border-b border-primary pb-0.5 hover:text-secondary hover:border-secondary transition-colors"
              href="https://wa.me/919074569335"
              rel="noopener noreferrer"
              target="_blank"
            >
              Connect with Head of Client Relations on WhatsApp
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
