'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import BackgroundImage from '@/components/BackgroundImage';
import CartToast from '@/components/CartToast';
import { bestSellers, categories, featuredProducts, images, press } from '@/lib/site-data';

const craftImages = [
  {
    alt: 'Extreme macro closeup of aged craftsman hands using two bone awls and waxed linen thread to saddle-stitch dark leather, natural dust motes in sunbeam, artisanal Tuscan workshop atmosphere.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt6qwvz55oUqgTeGZE0gD8PCrh7y--G9CF8_U0M664ytCONU5SodjSZppSituxxFMG9FcB-2ZDcVu25zvYLdncMn9Oc0dW6oZ5FRSmBUWA_KJeXSeI28mtmcFnTW33ebDXEQGMJW1aw9mjlNmc7jkU3_f-_Oj-rhOyj879GO62GtyT28yW5M0MxI2_54R8ZjNDRHx03X91d-5sy3OZDPSTuaPN_avLCzj_nFIZFfLK',
  },
  {
    alt: 'Artisanal leather edge finishing, master artisan applying dark burnishing lacquer with a brass heated roller to the edge of an alabaster handbag strap, fine craft details.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpacTerPh09yqgJrRFNFxW3Qvc2e_I9YM620h9kVuqlREtD0GXVqL6mgmv6ol4kdTFj5MZeom-wAxVHI2r-DQKkx5ab-URDRKJhUGwsE5poHcMsepjbHAWtAOBqNQKQgGuWfU0GhAkE6mnc66ykG59xEAZtdJ3Mdbm3BO1zsdKwg-5vjKe04BIpPGSlrDdxQ9bmevBCbADlisVjQhTXj-42LXRklKovZcXbYDCEQJm',
  },
];

const metrics = [
  ['100%', 'Handcrafted Tuscany'],
  ['Lifetime', 'Leather Guarantee'],
  ['0.0 CO₂', 'Carbon Neutral Craft'],
  ['Grade A', 'Vegetable Tanned'],
];

const filters = ['All Archetypes', 'Totes', 'Crossbody', 'Limited Batches'];

export default function HomePage() {
  const [wishlisted, setWishlisted] = useState({});
  const [selectedColors, setSelectedColors] = useState(() =>
    Object.fromEntries(featuredProducts.map((product) => [product.id, 0]))
  );
  const [activeFilter, setActiveFilter] = useState(0);
  const [toast, setToast] = useState({ visible: false, title: 'Added to Bag' });
  const toastTimer = useRef(null);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  function showCartNotification(itemName) {
    setToast({ visible: true, title: `${itemName} Added` });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 3200);
  }

  function scrollToCraft() {
    document.getElementById('craft-heritage')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-surface-container-low">
        <div className="relative w-full h-[901px] min-h-[640px] max-h-[920px]">
          <BackgroundImage
            src={images.hero}
            alt="Editorial fashion campaign photo of a Parisian high-fashion muse holding a sculptural minimalist black leather tote bag, soft dramatic morning light, architectural stone gallery background, neutral monochromatic tones, quiet luxury aesthetic, film grain, hyper-detailed craftsmanship."
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end px-margin lg:px-margin-desktop pb-space-2xl max-w-[1600px] mx-auto w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-space-sm mb-space-sm">
                <span className="w-8 h-[1px] bg-on-primary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary">
                  Collection Printemps 2025
                </span>
              </div>
              <h1 className="font-display text-display text-on-primary font-light tracking-tight leading-[1.05] mb-space-md">
                Sculpted in Leather,
                <br />
                <span className="italic font-light">Defined by Simplicity.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-inverse-on-surface font-light max-w-xl mb-space-xl">
                Edition 2025: Architectural silhouettes in full-grain Italian calfskin, crafted in our Tuscan atelier
                with zero-waste precision.
              </p>
              <div className="flex flex-wrap items-center gap-space-md">
                <Link
                  className="inline-flex items-center justify-center px-space-xl py-space-md bg-on-primary text-primary font-label-md text-label-md uppercase tracking-widest transition-transform duration-300 hover:scale-[1.02] shadow-sm"
                  href="#featured-collection"
                >
                  Explore Collection
                </Link>
                <button
                  className="inline-flex items-center justify-center px-space-xl py-space-md bg-transparent text-on-primary font-label-md text-label-md uppercase tracking-widest transition-colors duration-200 hover:bg-on-primary/10"
                  onClick={scrollToCraft}
                  type="button"
                >
                  Discover Lookbook
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-space-2xl pt-space-md bg-primary/40 backdrop-blur-md px-space-lg py-space-md">
              {metrics.map(([value, label]) => (
                <div className="flex flex-col" key={label}>
                  <span className="font-headline-sm text-headline-sm text-on-primary font-light">{value}</span>
                  <span className="font-label-sm text-label-sm uppercase text-inverse-on-surface tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin lg:px-margin-desktop py-space-3xl max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-space-xs">
              The Silhouette Library
            </span>
            <h2 className="font-display text-headline-lg font-light text-primary">Curated Archetypes</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
            Four primary forms calibrated for ergonomic balance and unadorned structural clarity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {categories.map((category) => (
            <Link
              className="group block relative bg-surface-container-low overflow-hidden transition-all duration-300"
              href="/shop"
              key={category.name}
            >
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <BackgroundImage
                  src={category.image}
                  alt={category.alt}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-space-lg flex flex-col justify-between bg-surface-container-low">
                <div className="flex items-center justify-between mb-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-primary font-light">{category.name}</h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{category.count}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full px-margin lg:px-margin-desktop py-space-3xl bg-surface-container-lowest" id="featured-collection">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-space-2xl">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-space-xs">
                Edition No. 12
              </span>
              <h2 className="font-display text-headline-lg font-light text-primary">Permanent Icons</h2>
            </div>
            <div className="flex items-center gap-space-sm mt-space-md lg:mt-0 overflow-x-auto pb-space-xs">
              {filters.map((filter, index) => (
                <button
                  className={`px-space-md py-space-xs font-label-sm text-label-sm uppercase tracking-wider ${
                    activeFilter === index
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors'
                  }`}
                  key={filter}
                  onClick={() => setActiveFilter(index)}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
            {featuredProducts.map((product) => {
              const isWishlisted = Boolean(wishlisted[product.id]);
              const activeColor = selectedColors[product.id] ?? 0;

              return (
                <div className="group flex flex-col relative" data-product-id={product.id} key={product.id}>
                  <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden mb-space-md">
                    <BackgroundImage
                      src={product.image}
                      alt={product.alt}
                      className="transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {product.badge ? (
                      <span className="absolute top-space-sm left-space-sm px-space-sm py-0.5 bg-surface text-primary font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
                        {product.badge}
                      </span>
                    ) : null}
                    <button
                      aria-label="Save to Wishlist"
                      className="absolute top-space-sm right-space-sm w-9 h-9 bg-surface/90 hover:bg-surface flex items-center justify-center text-primary transition-all duration-200"
                      onClick={() =>
                        setWishlisted((current) => ({ ...current, [product.id]: !current[product.id] }))
                      }
                      type="button"
                    >
                      <span
                        className={`material-symbols-outlined text-[18px] ${isWishlisted ? 'text-primary' : ''}`}
                        style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        favorite
                      </span>
                    </button>
                    <div className="absolute inset-x-0 bottom-0 p-space-md translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-surface/95 backdrop-blur-sm flex items-center justify-between">
                      <button
                        className="w-full py-space-sm bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest text-center hover:bg-primary-container transition-colors"
                        onClick={() => showCartNotification(product.name)}
                        type="button"
                      >
                        {product.reserve}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-light">{product.name}</h3>
                    <span className="font-body-md text-body-md text-primary font-semibold">{product.price}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">{product.description}</p>
                  <div className="flex items-center justify-between pt-space-xs">
                    <div aria-label="Color options" className="flex items-center gap-space-xs" role="radiogroup">
                      {product.colors.map((color, index) => (
                        <button
                          aria-label={color.name}
                          className={`w-4 h-4 rounded-full hover:scale-110 transition-transform ${
                            activeColor === index
                              ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface'
                              : ''
                          }`}
                          key={color.name}
                          onClick={() =>
                            setSelectedColors((current) => ({ ...current, [product.id]: index }))
                          }
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                          type="button"
                        />
                      ))}
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{product.stitching}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-3xl" id="craft-heritage">
        <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-6 flex flex-col pr-0 lg:pr-space-xl">
              <div className="flex items-center gap-space-sm mb-space-sm">
                <span className="w-6 h-[1px] bg-primary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Atelier San Casciano • Tuscany
                </span>
              </div>
              <h2 className="font-display text-display text-primary font-light leading-[1.1] mb-space-lg">
                Artisanal Heritage — 48 hours of hand-stitching per piece.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed mb-space-xl">
                In our family workshop south of Florence, master leatherworkers carry forward a saddle-stitch tradition
                dating back four generations. Each seam is bound with two needles traversing a single waxed linen
                thread: should one loop ever yield, the seam remains structurally impervious.
              </p>
              <div className="p-space-lg bg-surface-container-lowest shadow-sm mb-space-xl">
                <p className="font-headline-sm text-headline-sm italic text-primary font-light mb-space-sm">
                  &quot;We do not cut leather to disguise imperfections; we select each hide so that its grain tells the
                  quiet story of time, salt, and sun.&quot;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-primary uppercase font-semibold">Marco Bellini</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Master Saddle-Maker, 34 Years Atelier Service
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-md">
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">verified</span>
                  <div>
                    <span className="font-label-md text-label-md text-primary block font-medium">
                      Vegetable Pit Tanning
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Chestnut and mimosa barks only.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">brush</span>
                  <div>
                    <span className="font-label-md text-label-md text-primary block font-medium">
                      Beeswax Edge Painting
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Applied in six successive coats.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-gutter">
              <div className="space-y-gutter">
                <div className="aspect-[3/4] bg-surface-container overflow-hidden shadow-sm">
                  <BackgroundImage
                    src={craftImages[0].src}
                    alt={craftImages[0].alt}
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-space-md bg-surface-container-lowest">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary block font-semibold mb-1">
                    01 / The Awl &amp; Thread
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Double-needle saddle technique preventing mechanical unraveling.
                  </p>
                </div>
              </div>
              <div className="space-y-gutter pt-space-xl">
                <div className="aspect-[3/4] bg-surface-container overflow-hidden shadow-sm">
                  <BackgroundImage
                    src={craftImages[1].src}
                    alt={craftImages[1].alt}
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-space-md bg-surface-container-lowest">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary block font-semibold mb-1">
                    02 / Edge Finishing
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Hand-ironed sealing with natural organic carnauba wax.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin lg:px-margin-desktop py-space-3xl max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-space-xs">
              Client Repertoire
            </span>
            <h2 className="font-display text-headline-lg font-light text-primary">Acclaimed Pieces</h2>
          </div>
          <Link
            className="font-label-md text-label-md uppercase tracking-wider text-primary hover:text-on-surface-variant transition-colors flex items-center gap-space-xs mt-space-sm md:mt-0"
            href="/shop"
          >
            View Entire Catalog <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {bestSellers.map((item) => (
            <div className="flex flex-col bg-surface-container-low p-space-lg" key={item.name}>
              <div className="relative aspect-square bg-surface-container-lowest overflow-hidden mb-space-lg">
                <BackgroundImage src={item.image} alt={item.alt} />
                <span className="absolute top-space-sm left-space-sm px-space-sm py-0.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider">
                  Bestseller
                </span>
              </div>
              <div className="flex items-center gap-1 text-primary mb-space-xs">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    className="material-symbols-outlined text-[16px]"
                    key={index}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                <span className="font-body-sm text-body-sm text-on-surface-variant ml-2">{item.rating}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-light mb-space-xs">{item.name}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md italic">&quot;{item.quote}&quot;</p>
              <div className="mt-auto pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-body-md text-body-md text-primary font-semibold">{item.price}</span>
                <button
                  className="font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-on-surface-variant transition-colors"
                  onClick={() => showCartNotification(item.name)}
                  type="button"
                >
                  Add to Bag →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest py-space-2xl border-t border-outline-variant/20">
        <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
          <div className="text-center mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Critical Praise
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
            {press.map((item) => (
              <div className="flex flex-col items-center p-space-md" key={item.name}>
                <span
                  className={`font-headline-md text-headline-md tracking-wider text-primary ${item.className} uppercase mb-space-sm`}
                >
                  {item.name}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs italic">&quot;{item.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-on-primary py-space-2xl">
        <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-xl">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-inverse-primary block mb-space-xs">
              Complimentary Service
            </span>
            <h3 className="font-display text-headline-lg font-light text-on-primary mb-space-xs">
              Atelier Foil &amp; Blind Monogramming
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed-dim">
              Personalize your selection with up to three hand-pressed letters in 24k gold leaf, pure palladium foil, or
              subtle blind deboss at no additional charge.
            </p>
          </div>
          <button
            className="shrink-0 px-space-xl py-space-md bg-on-primary text-primary font-label-md text-label-md uppercase tracking-widest hover:bg-surface transition-colors"
            onClick={() =>
              window.alert('Monogram customizer can be configured upon selecting any bag in checkout.')
            }
            type="button"
          >
            Learn More
          </button>
        </div>
      </section>

      <CartToast title={toast.title} visible={toast.visible} />
    </div>
  );
}
