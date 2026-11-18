'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import CartToast from '@/components/CartToast';
import { cartItems, crossSells, whatsappLink } from '@/lib/site-data';

const foilOptions = ['Gold Foil', 'Palladium', 'Blind Deboss'];

const promises = [
  {
    icon: 'verified_user',
    title: 'Lifetime Craft Warranty',
    text: 'Complimentary hardware restoration and stitch rejuvenation at our atelier.',
  },
  {
    icon: 'local_shipping',
    title: 'Discreet DHL Express',
    text: 'Signature-required delivery worldwide within 2-4 business days.',
  },
  {
    icon: 'autorenew',
    title: 'Effortless Returns',
    text: '30-day complimentary pick-up service directly from your residence or office.',
  },
];

const trustBadges = [
  { icon: 'lock', text: '256-Bit Encrypted Secure Checkout' },
  { icon: 'verified', text: 'Individually Numbered Certificate Included' },
  { icon: 'history', text: '30-Day Effortless Global Returns Guarantee' },
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(cartItems.map((item) => [item.id, 1]))
  );
  const [giftCard, setGiftCard] = useState(true);
  const [foil, setFoil] = useState('Gold Foil');
  const [promo, setPromo] = useState('');
  const [toast, setToast] = useState({ visible: false, title: 'Added to Bag' });
  const toastTimer = useRef(null);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * (quantities[item.id] || 1), 0),
    [items, quantities]
  );
  const itemCount = items.reduce((total, item) => total + (quantities[item.id] || 1), 0);
  const formattedTotal = subtotal.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const checkoutMessage = useMemo(() => {
    const itemLines = items.map((item) => {
      const quantity = quantities[item.id] || 1;
      const lineTotal = (item.price * quantity).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return `• ${item.name} x${quantity} — $${lineTotal}`;
    });

    return [
      'Hello ATELIER Paris, I would like to proceed with this order via WhatsApp.',
      '',
      ...itemLines,
      '',
      `Total: $${formattedTotal}`,
      `Monogramming: ${foil}`,
      giftCard ? 'Gift card: included' : 'Gift card: not included',
      promo.trim() ? `Privilege code: ${promo.trim().toUpperCase()}` : '',
      '',
      'Please confirm availability and share payment and delivery details.',
    ]
      .filter(Boolean)
      .join('\n');
  }, [items, quantities, formattedTotal, foil, giftCard, promo]);

  const checkoutWhatsappHref = useMemo(
    () => whatsappLink(checkoutMessage),
    [checkoutMessage]
  );

  function showCartNotification(name) {
    setToast({ visible: true, title: `${name} Added` });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 3200);
  }

  function changeQuantity(id, amount) {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(1, (current[id] || 1) + amount),
    }));
  }

  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id));
    setQuantities((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low px-margin-desktop py-space-md shadow-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
              Complimentary Courier Unlocked
            </span>
            <span className="text-on-surface-variant text-body-sm font-body-sm hidden sm:inline">
              — You qualify for Free Worldwide Express Delivery &amp; White-Glove Hand Packaging.
            </span>
          </div>
          <div className="w-full md:w-80 flex flex-col gap-1">
            <div className="flex justify-between items-center text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">
              <span>Tier: Atelier Prestige</span>
              <span className="text-primary font-semibold">$0.00 Away</span>
            </div>
            <div className="w-full h-1 bg-surface-container-highest overflow-hidden">
              <div className="h-full bg-primary w-full transition-all duration-700 ease-out" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin-desktop py-space-xl">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-space-lg mb-space-xl">
            <div className="flex items-baseline gap-space-sm">
              <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">
                Your Shopping Bag
              </h1>
              <span className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">
                ({itemCount} items)
              </span>
            </div>
            <div className="mt-space-xs sm:mt-0 flex items-center gap-space-md">
              <Link
                className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs"
                href="/shop"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Continue Browsing
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-space-xl">
              <div className="flex flex-col gap-space-lg">
                {items.map((item) => (
                  <div
                    className="bg-surface-container-lowest p-space-lg shadow-sm transition-all duration-300 flex flex-col sm:flex-row gap-space-lg"
                    id={item.id}
                    key={item.id}
                  >
                    <div className="w-full sm:w-44 aspect-[4/5] bg-surface-container shrink-0 overflow-hidden relative group">
                      <img
                        alt={item.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        src={item.image}
                      />
                      {item.badge ? (
                        <span className="absolute top-2 left-2 bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase px-2 py-0.5 tracking-wider font-semibold">
                          {item.badge}
                        </span>
                      ) : null}
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-space-md">
                          <div>
                            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">
                              {item.edition}
                            </span>
                            <h2 className="font-headline-sm text-headline-sm text-primary">{item.name}</h2>
                          </div>
                          <span className="font-body-lg text-body-lg text-primary font-semibold">
                            ${item.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="mt-space-sm space-y-1 text-body-sm font-body-sm text-on-surface-variant">
                          {item.details.map((detail, index) => (
                            <p className="flex items-center gap-2" key={`${item.id}-detail-${index}`}>
                              {detail.color ? (
                                <span
                                  className="w-2.5 h-2.5 rounded-full inline-block"
                                  style={{ backgroundColor: detail.color }}
                                />
                              ) : null}
                              <span>{detail.text}</span>
                            </p>
                          ))}
                          {item.monogram ? (
                            <div className="pt-space-xs flex items-center gap-2">
                              <span className="px-2 py-0.5 bg-surface-container font-label-sm text-label-sm uppercase tracking-widest text-primary">
                                {item.monogram}
                              </span>
                              <span className="text-label-sm font-label-sm text-on-surface-variant">
                                Front Flap (Complimentary)
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="pt-space-md mt-space-md flex flex-wrap items-center justify-between gap-space-sm">
                        <div className="flex items-center bg-surface-container-low px-2 py-1">
                          <button
                            aria-label="Decrease quantity"
                            className="w-7 h-7 flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
                            onClick={() => changeQuantity(item.id, -1)}
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">remove</span>
                          </button>
                          <span className="font-label-md text-label-md px-3 font-semibold text-primary">
                            {quantities[item.id] || 1}
                          </span>
                          <button
                            aria-label="Increase quantity"
                            className="w-7 h-7 flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
                            onClick={() => changeQuantity(item.id, 1)}
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">add</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-space-md">
                          <button
                            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
                            onClick={() => showCartNotification(`${item.name} saved`)}
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                            Save for Later
                          </button>
                          <button
                            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-error transition-colors flex items-center gap-1"
                            onClick={() => removeItem(item.id)}
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">delete_outline</span>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {items.length === 0 ? (
                  <div className="bg-surface-container-lowest p-space-xl shadow-sm text-center">
                    <p className="font-headline-sm text-headline-sm text-primary">Your bag is currently empty.</p>
                    <Link className="mt-space-md inline-block font-label-md text-label-md uppercase tracking-widest text-primary underline" href="/shop">
                      Explore the collection
                    </Link>
                  </div>
                ) : null}
              </div>

              <div className="bg-surface-container-lowest p-space-xl shadow-sm">
                <div className="flex items-center justify-between mb-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[20px] text-primary">card_giftcard</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Complimentary Atelier Finishing</h3>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                    At No Additional Charge
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Every parcel leaves our Paris workshop housed in an archival presentation case wrapped in heavy matte
                  charcoal paper, tied with grosgrain ribbon, and sealed with wax.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  <div className="bg-surface-container-low p-space-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                          Handwritten Calligraphy Card
                        </span>
                        <input
                          checked={giftCard}
                          className="w-4 h-4 accent-primary cursor-pointer"
                          id="gift-card-toggle"
                          onChange={(event) => setGiftCard(event.target.checked)}
                          type="checkbox"
                        />
                      </div>
                      <p className="text-body-sm font-body-sm text-on-surface-variant mb-space-sm">
                        Penned on 350gsm deckle-edge Italian cotton stationery.
                      </p>
                      <textarea
                        className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm p-space-sm focus:outline-none focus:ring-0 border-0 disabled:opacity-50"
                        disabled={!giftCard}
                        placeholder="Enter your personalized gift inscription..."
                        rows="3"
                      />
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase mt-space-xs block text-right">
                      Max 180 Characters
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-space-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                          Foil Stamping Palette
                        </span>
                        <span className="text-label-sm font-label-sm uppercase text-on-surface-variant">
                          Default: 24k Gold
                        </span>
                      </div>
                      <p className="text-body-sm font-body-sm text-on-surface-variant mb-space-md">
                        Selected finish applied across all monogrammed leather goods in this parcel.
                      </p>
                      <div className="grid grid-cols-3 gap-space-xs">
                        {foilOptions.map((option) => (
                          <button
                            className={`py-2.5 px-2 text-center font-label-sm text-label-sm uppercase tracking-wider transition-all shadow-sm ${
                              foil === option
                                ? 'bg-primary text-on-primary'
                                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high'
                            }`}
                            key={option}
                            onClick={() => setFoil(option)}
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-primary">eco</span>
                      <span>100% FSC-Certified recyclable unbleached shipping box.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md bg-surface-container-low p-space-lg text-center md:text-left">
                {promises.map((promise) => (
                  <div className="flex items-start gap-space-sm" key={promise.title}>
                    <span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">
                      {promise.icon}
                    </span>
                    <div>
                      <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                        {promise.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{promise.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 sticky top-28 space-y-space-lg">
              <div className="bg-surface-container-lowest p-space-xl shadow-md">
                <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-wider mb-space-lg pb-space-xs">
                  Order Summary
                </h3>
                <div className="space-y-space-md font-body-md text-body-md">
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span>Subtotal ({itemCount} items)</span>
                    <span className="font-medium text-primary">${formattedTotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      Bespoke Monogramming
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant cursor-pointer" title="Custom brass stamp hot foil application">
                        info
                      </span>
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                      Complimentary
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span>Express Worldwide Shipping</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                      Free ($0.00)
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      Import Duties &amp; Taxes
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant cursor-pointer" title="All local luxury duties and customs taxes are absorbed by ATELIER Paris">
                        help_outline
                      </span>
                    </span>
                    <span className="text-body-sm font-body-sm text-on-surface">Included (DDP)</span>
                  </div>
                  <div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-xl px-space-xl py-space-md">
                    <div className="flex justify-between items-baseline">
                      <div>
                        <span className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight block">
                          Total
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                          Taxes &amp; Insurance included
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-headline-md text-headline-md font-normal text-primary tracking-tight">
                          ${formattedTotal}
                        </span>
                        <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase">USD</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-space-lg pt-space-xs">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none text-label-md font-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors py-2">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">sell</span>
                        Privilege Or Gift Code
                      </span>
                      <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="pt-space-sm pb-space-xs">
                      <form
                        className="flex w-full"
                        onSubmit={(event) => {
                          event.preventDefault();
                          showCartNotification(promo ? 'Privilege code noted' : 'Concierge notified');
                        }}
                      >
                        <input
                          className="w-full bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm px-space-md py-space-sm border-0 focus:outline-none uppercase tracking-wider"
                          onChange={(event) => setPromo(event.target.value)}
                          placeholder="e.g. VIP-ATELIER-25"
                          type="text"
                          value={promo}
                        />
                        <button
                          className="bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md uppercase px-space-md py-space-sm transition-colors shrink-0"
                          type="submit"
                        >
                          Apply
                        </button>
                      </form>
                    </div>
                  </details>
                </div>

                <div className="mt-space-xl flex flex-col gap-space-sm">
                  <a
                    className="w-full py-4 bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-surface-container-highest hover:text-on-surface transition-all duration-200 shadow-md flex items-center justify-center gap-space-xs"
                    href={checkoutWhatsappHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Proceed To Checkout</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                  <span className="text-center font-label-sm text-label-sm text-on-surface-variant">
                    +91 9074569335 • Dedicated Personal Stylist
                  </span>
                </div>

                <div className="mt-space-xl pt-space-md bg-surface-container-low -mx-space-xl -mb-space-xl px-space-xl pb-space-lg space-y-space-sm">
                  {trustBadges.map((badge) => (
                    <div className="flex items-center gap-space-sm text-on-surface-variant" key={badge.text}>
                      <span className="material-symbols-outlined text-[18px] text-primary">{badge.icon}</span>
                      <span className="font-body-sm text-body-sm">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-lg shadow-sm flex items-start gap-space-md">
                <span className="material-symbols-outlined text-primary text-[28px]">support_agent</span>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                    Atelier Personal Client Salon
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Need size comparisons, bespoke hardware alterations, or scheduled private delivery?
                  </p>
                  <div className="mt-space-sm flex items-center gap-space-md font-label-sm text-label-sm uppercase tracking-wider">
                    <a className="text-primary underline hover:text-on-surface-variant" href="https://wa.me/919074569335" rel="noopener" target="_blank">
                      Live Chat
                    </a>
                    <span className="text-outline-variant">•</span>
                    <a className="text-primary underline hover:text-on-surface-variant" href="mailto:msa593554@gmail.com">
                      Email Concierge
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-space-3xl pt-space-2xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-xl">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">
                  Curated Companions
                </span>
                <h3 className="font-headline-md text-headline-md text-primary uppercase">
                  Frequently Paired with Your Bag
                </h3>
              </div>
              <Link
                className="mt-space-xs sm:mt-0 font-label-md text-label-md uppercase tracking-widest text-primary hover:text-on-surface-variant transition-colors flex items-center gap-space-xs"
                href="/shop"
              >
                View All Small Leather Goods
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {crossSells.map((item) => (
                <div className="bg-surface-container-lowest p-space-md shadow-sm group" key={item.name}>
                  <div className="aspect-[4/5] bg-surface-container overflow-hidden mb-space-sm relative">
                    <img
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      src={item.image}
                    />
                    <button
                      aria-label="Add to bag"
                      className="absolute bottom-3 right-3 bg-primary text-on-primary w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      onClick={() => showCartNotification(item.name)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    {item.label}
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary mt-1">{item.name}</h4>
                  <div className="flex items-center justify-between mt-space-xs">
                    <span className="font-body-md text-body-md text-primary font-medium">{item.price}</span>
                    <button
                      className="font-label-sm text-label-sm uppercase tracking-widest text-primary underline"
                      onClick={() => showCartNotification(item.name)}
                      type="button"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CartToast title={toast.title} visible={toast.visible} />
    </div>
  );
}
