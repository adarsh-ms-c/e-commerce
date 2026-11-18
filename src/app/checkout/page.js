'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { whatsappLink } from '@/lib/site-data';

const paymentOptions = [
  {
    value: 'card',
    title: 'Credit / Debit Card',
    subtitle: 'Visa, Mastercard, Amex',
  },
  {
    value: 'applepay',
    title: 'Apple Pay / Digital Wallet',
    subtitle: 'Instant one-tap biometric',
  },
  {
    value: 'paypal',
    title: 'PayPal',
    subtitle: 'Pay in 4 installments available',
  },
  {
    value: 'whatsapp_wire',
    title: 'Bank Wire / WhatsApp Concierge',
    subtitle: 'Coordinate wire or invoice with +91 9074569335',
    highlight: true,
  },
];

const trustBadges = [
  { icon: 'verified', text: 'Lifetime Authenticity Guarantee' },
  { icon: 'restart_alt', text: '30-Day Salon Return Privileges' },
  { icon: 'security', text: 'Insured International Transit' },
  { icon: 'local_florist', text: 'Tuscan Vegetable Tanning' },
];

const orderItems = [
  {
    name: 'The Le Marais Tote',
    material: 'Full-Grain French Calfskin',
    option: 'Color: Noir Intense | Hardware: Brushed Brass',
    note: 'Complimentary Monogram: "C.L." (Blind Deboss)',
    noteIcon: 'stylus_note',
    price: '$845.00',
    alt: 'Editorial close up photograph of the Le Marais luxury black full-grain leather structured tote bag with brushed brass hardware against a warm minimalist Parisian salon backdrop with soft morning sunlight casting sculptural shadows.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPanfuYEQYwjx79pEKqNO1o5V4uWLtcnRRspUyi32wYec33vuRLuRpZjwfomlZMnowitBzyRtflVhCYSorUtXOzHG9xuUsA9AN4iAKgsyxatsaXzEUgNopCtZnYxccU9wub8zbO6mAMuorZcPDdvb_MCjHhsBLbpWagDDa1bdI8UK1E0G0EfAPtLa_QaB9gO3V-FJOHpZG0O7Clj24z1uCoFd1P2R4E_kHwpG_R2Ji',
  },
  {
    name: 'The Vendôme Baguette',
    material: 'Smooth Italian Saddle Leather',
    option: 'Color: Cognac Vachetta | Hardware: Palladium',
    note: 'Includes Signature Linen Dust Bag & Certificate',
    noteIcon: 'auto_awesome',
    price: '$420.00',
    alt: 'Editorial product shot of the Vendome Baguette leather shoulder bag in smooth warm biscuit tan tone with architectural palladium turnlock clasp photographed on a travertine pedestal.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAglYtUuQXEzJJFYZu4TsCriwcTfMmKS4rdnBAEAPMSjlkGdXcietNXNz-IUxdMirPslb4lhP0Fuq2QmR9aXPy-c_nl0R_ONCv18YwGJaDbGzuqr-tRxBCHNHiAP1GipownYGctSN1v2YIFcM04GZezenAoSQyaHjXT01kuBV03CK--RjS-qCIfDFiPvyrW8i9ysujKzxQ8ENd_a2zbDiKVVLDcd_CiCaz8xi7BVSh3',
  },
];

export default function CheckoutPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('9074569335');
  const [payment, setPayment] = useState('card');

  const whatsappHref = useMemo(() => {
    const clientEmail = email.trim() || 'camille.laurent@paris.com';
    const clientPhone = phone.trim() || '9074569335';
    const message = `Hello Atelier, I'd like to place an order for The Le Marais Tote & Vendôme Baguette (Total: $1,265). Email: ${clientEmail}, Contact: +91 ${clientPhone}. Please confirm availability and shipping.`;
    return whatsappLink(message);
  }, [email, phone]);

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low py-space-sm px-margin-desktop">
        <div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
          <div className="flex items-center gap-space-md">
            <span className="text-primary font-semibold flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              01 Bag Review
            </span>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              02 Delivery &amp; Concierge
            </span>
            <span className="text-outline-variant">/</span>
            <span className="text-outline flex items-center gap-space-xs">03 Atelier Confirmation</span>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase">256-Bit Encrypted Secure Checkout</span>
          </div>
        </div>
      </section>

      <section className="w-full px-margin-desktop py-space-xl">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            <div className="bg-surface-container-lowest p-space-xl shadow-sm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-7 h-7 bg-primary text-on-primary rounded-full flex items-center justify-center font-label-sm text-label-sm font-semibold">
                    VIP
                  </span>
                  <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                    Direct Concierge Checkout
                  </span>
                </div>
                <span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-space-sm py-0.5 tracking-wider uppercase">
                  Average reply: &lt; 3 mins
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                Skip repetitive forms and connect directly with our Atelier team on WhatsApp (
                <strong className="text-on-surface font-semibold">+91 9074569335</strong>) to confirm your bag selection,
                complimentary blind or foil monogramming, and bespoke delivery instructions.
              </p>
              <a
                className="w-full bg-primary text-on-primary py-space-md px-space-lg flex items-center justify-between hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 group"
                href={whatsappHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[22px] text-tertiary-fixed group-hover:text-primary transition-colors">
                    chat
                  </span>
                  <span className="font-label-lg text-label-lg uppercase tracking-wider font-semibold">
                    Complete Order via WhatsApp (+91 9074569335)
                  </span>
                </div>
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <div className="mt-space-md p-space-md bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-[18px] text-outline shrink-0 mt-0.5">mark_chat_read</span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">
                    Automated Message Preview:
                  </span>
                  <p className="italic text-on-surface-variant">
                    &quot;Hello Atelier, I&apos;d like to place an order for The Le Marais Tote &amp; Vendôme Baguette
                    (Total: $1,265). Email: {email.trim() || 'camille.laurent@paris.com'}, Contact: +91{' '}
                    {phone.trim() || '9074569335'}. Please confirm availability and shipping.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center my-space-xs">
              <div className="w-full h-[1px] bg-surface-container-high" />
              <span className="absolute bg-surface px-space-md font-label-md text-label-md uppercase tracking-widest text-outline">
                Or Complete Standard Delivery Details
              </span>
            </div>

            <form
              className="flex flex-col gap-space-xl"
              id="atelier-checkout-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="bg-surface-container-lowest p-space-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-low px-space-md py-space-xs -mx-space-xl -mt-space-xl mb-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                    01. Customer Information
                  </span>
                  <span className="font-body-sm text-body-sm text-outline">
                    Already a client? <Link className="text-primary underline" href="/contact">Sign In</Link>
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold" htmlFor="checkout-email">
                      Email Address *
                    </label>
                    <input
                      className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner"
                      id="checkout-email"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="camille.laurent@paris.com"
                      required
                      type="email"
                      value={email}
                    />
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold" htmlFor="checkout-phone">
                      Mobile / WhatsApp Number *
                    </label>
                    <div className="flex">
                      <span className="bg-surface-container-high text-on-surface-variant font-body-md px-space-sm py-space-sm flex items-center justify-center shrink-0">
                        +91
                      </span>
                      <input
                        className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner"
                        id="checkout-phone"
                        onChange={(event) => setPhone(event.target.value)}
                        type="tel"
                        value={phone}
                      />
                    </div>
                    <span className="font-label-sm text-label-sm text-outline">
                      Used for courier delivery alerts &amp; Atelier WhatsApp updates
                    </span>
                  </div>
                </div>
                <label className="flex items-center gap-space-sm cursor-pointer mt-space-xs select-none">
                  <input className="w-4 h-4 accent-primary cursor-pointer" defaultChecked type="checkbox" />
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Send my packaging photos and live shipment tracking via WhatsApp (+91 9074569335)
                  </span>
                </label>
              </div>

              <div className="bg-surface-container-lowest p-space-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-low px-space-md py-space-xs -mx-space-xl -mt-space-xl mb-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                    02. Shipping Address
                  </span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Discreet Packaging Guaranteed
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">
                      First Name *
                    </label>
                    <input className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors" placeholder="Elena" required type="text" />
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">
                      Last Name *
                    </label>
                    <input className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors" placeholder="Vandermeer" required type="text" />
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">
                    Address Line 1 *
                  </label>
                  <input className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors" placeholder="18 Rue du Faubourg Saint-Honoré, Suite 4B" required type="text" />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">
                    Address Line 2 (Optional)
                  </label>
                  <input className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors" placeholder="Apartment, suite, unit, building, floor" type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">City *</label>
                    <input className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors" placeholder="Paris" required type="text" />
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Postal Code *</label>
                    <input className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors" placeholder="75008" required type="text" />
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Country / Territory *</label>
                    <select className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md focus:outline-none focus:bg-surface-container-lowest transition-colors cursor-pointer">
                      <option value="FR">France</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="IN">India</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="JP">Japan</option>
                      <option value="SG">Singapore</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-low px-space-md py-space-xs -mx-space-xl -mt-space-xl mb-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                    03. Delivery Method
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                    Fully Insured Transit
                  </span>
                </div>
                <label className="flex items-start justify-between p-space-md bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors group">
                  <div className="flex items-start gap-space-md">
                    <input className="mt-1 accent-primary cursor-pointer" defaultChecked name="shipping-method" type="radio" value="express" />
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        Complimentary Express Courier
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        2–4 Business Days • Carbon Neutral Air Freight • Signature Required
                      </span>
                    </div>
                  </div>
                  <span className="font-label-md text-label-md uppercase text-primary font-bold">FREE</span>
                </label>
                <label className="flex items-start justify-between p-space-md bg-surface cursor-pointer hover:bg-surface-container transition-colors group">
                  <div className="flex items-start gap-space-md">
                    <input className="mt-1 accent-primary cursor-pointer" name="shipping-method" type="radio" value="white-glove" />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-space-xs">
                        <span className="font-headline-sm text-headline-sm text-on-surface">Priority White-Glove Hand Delivery</span>
                        <span className="bg-primary text-on-primary font-label-sm text-[10px] px-1.5 py-0.2 tracking-widest uppercase">
                          Select Metro
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Same-day / Next-day scheduled private salon delivery with unboxing &amp; inspection
                      </span>
                    </div>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface font-semibold">$45.00</span>
                </label>
              </div>

              <div className="bg-surface-container-lowest p-space-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-low px-space-md py-space-xs -mx-space-xl -mt-space-xl mb-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                    04. Payment Method
                  </span>
                  <div className="flex items-center gap-space-xs text-outline font-label-sm text-label-sm">
                    <span>ENCRYPTED</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm" id="payment-selector-tabs">
                  {paymentOptions.map((option) => (
                    <label
                      className={`flex items-center gap-space-sm p-space-md cursor-pointer transition-colors ${
                        option.highlight
                          ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                          : payment === option.value
                            ? 'bg-surface-container-low'
                            : 'bg-surface hover:bg-surface-container'
                      }`}
                      key={option.value}
                    >
                      <input
                        checked={payment === option.value}
                        className="accent-primary"
                        name="payment_choice"
                        onChange={() => setPayment(option.value)}
                        type="radio"
                        value={option.value}
                      />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                          {option.title}
                        </span>
                        <span className="font-body-sm text-body-sm text-outline">{option.subtitle}</span>
                      </div>
                    </label>
                  ))}
                </div>
                <div className="flex flex-col gap-space-sm pt-space-sm" id="card-fields">
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">
                      Card Number
                    </label>
                    <div className="relative">
                      <input className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest" placeholder="4242 •••• •••• 4242" type="text" />
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-outline">credit_card</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Expiry Date</label>
                      <input className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest" placeholder="MM / YY" type="text" />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Security Code</label>
                      <input className="bg-surface-container-low text-on-surface px-space-md py-space-sm text-body-md font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest" maxLength="4" placeholder="CVV" type="password" />
                    </div>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-outline mt-space-xs">
                  By confirming your order, you authorize Atelier Paris S.A. to verify funds with your financial
                  institution and initiate bespoke preparation.
                </p>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-xl lg:sticky lg:top-32">
            <div className="bg-surface-container-lowest p-space-xl shadow-sm flex flex-col gap-space-lg">
              <div className="flex items-center justify-between pb-space-sm bg-surface-container-low px-space-md py-space-xs -mx-space-xl -mt-space-xl mb-space-xs">
                <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                  Order Review (2 Items)
                </span>
                <Link className="font-label-sm text-label-sm text-primary uppercase underline" href="/cart">Edit Bag</Link>
              </div>
              {orderItems.map((item) => (
                <div className="flex items-start gap-space-md pb-space-md" key={item.name}>
                  <div className="w-20 h-24 bg-surface-container-low shrink-0 overflow-hidden relative">
                    <img alt={item.alt} className="w-full h-full object-cover" src={item.image} />
                    <span className="absolute top-1 left-1 bg-primary text-on-primary font-label-sm text-[9px] px-1 font-semibold">QTY 1</span>
                  </div>
                  <div className="flex flex-col justify-between flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-space-xs">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">{item.name}</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">{item.material}</p>
                        <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-0.5">{item.option}</p>
                      </div>
                      <span className="font-body-md text-body-md text-on-surface font-semibold shrink-0">{item.price}</span>
                    </div>
                    <div className="mt-space-xs flex items-center gap-space-xs text-secondary font-label-sm text-[11px] uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[13px]">{item.noteIcon}</span>
                      <span>{item.note}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-surface-container-low p-space-md flex flex-col gap-space-xs">
                <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="font-body-md text-body-md text-on-surface font-medium">$1,265.00</span>
                </div>
                <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
                  <span>Express Courier Delivery</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Complimentary ($0.00)</span>
                </div>
                <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
                  <span>Import Duties &amp; Local VAT</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Included</span>
                </div>
                <div className="w-full h-[1px] bg-outline-variant/30 my-space-xs" />
                <div className="flex justify-between items-baseline pt-space-xs">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary font-semibold">Total Due</span>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">USD Currency Conversion Guaranteed</span>
                  </div>
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">$1,265.00</span>
                </div>
              </div>
              <div className="bg-surface-container-high p-space-md flex items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Have Styling or Sizing Questions?
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Direct WhatsApp Support:{' '}
                      <a className="font-semibold text-primary underline" href="https://wa.me/919074569335" rel="noopener" target="_blank">
                        +91 9074569335
                      </a>
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-primary">chat</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <a
                  className="w-full bg-primary text-on-primary text-center py-space-md px-space-lg font-label-lg text-label-lg uppercase tracking-wider font-semibold hover:bg-surface-container-highest hover:text-on-surface transition-all duration-200 flex items-center justify-center gap-space-sm shadow-md"
                  href={whatsappHref}
                  id="final-whatsapp-submit"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">send_and_archive</span>
                  <span>Place Order &amp; Connect on WhatsApp</span>
                </a>
                <p className="font-label-sm text-label-sm text-center text-outline uppercase tracking-wider">
                  Connected directly to atelier line +91 9074569335
                </p>
              </div>
              <div className="grid grid-cols-2 gap-space-md pt-space-sm bg-surface p-space-md">
                {trustBadges.map((badge) => (
                  <div className="flex items-center gap-space-xs" key={badge.text}>
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{badge.icon}</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container p-space-lg flex items-start gap-space-md">
              <span className="material-symbols-outlined text-primary text-[28px] shrink-0">mark_chat_unread</span>
              <div className="flex flex-col gap-0.5">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                  Atelier Personal Touch
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Every parcel dispatched from our rue du Faubourg workshop includes hand-tied grosgrain ribbons,
                  complimentary scenting of the inner suede lining, and a handwritten parchment note stamped by our
                  master craftsman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
