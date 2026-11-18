'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import CartToast from '@/components/CartToast';
import { catalogProducts } from '@/lib/site-data';

const categoryFilters = [
  { key: 'all', label: 'All Bags (28)' },
  { key: 'tote', label: 'Totes (8)' },
  { key: 'crossbody', label: 'Crossbody (7)' },
  { key: 'shoulder', label: 'Shoulder Bags (6)' },
  { key: 'mini', label: 'Mini & Clutches (4)' },
  { key: 'travel', label: 'Travel & Weekenders (3)' },
];

const services = [
  {
    icon: 'draw',
    title: 'Bespoke Monogramming',
    text: 'Complimentary with every bag order. Select blind heat debossing or 22k Italian gold foil stamping applied by master artisans in Paris.',
    link: 'Customize In Cart →',
  },
  {
    icon: 'video_camera_front',
    title: 'Virtual Salon Session',
    text: 'Book a one-on-one live video styling walkthrough with our Paris leather curator to examine scale, draping, and leather grain.',
    link: 'Reserve Appointment →',
  },
  {
    icon: 'verified_user',
    title: 'Lifetime Provenance',
    text: 'Each bag contains an encrypted NFC digital passport verifying Italian hide origin, master tanner accreditation, and complimentary biennial conditioning.',
    link: 'The ATELIER Guarantee →',
  },
  {
    icon: 'inventory_2',
    title: 'Signature Packaging',
    text: 'Delivered in FSC-certified rigid archival boxes with heavy brushed cotton dust covers and scented Italian cedar sachet inserts.',
    link: 'Explore Packaging →',
  },
];

export default function ShopPage() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [price, setPrice] = useState(2450);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [wishlisted, setWishlisted] = useState({});
  const [toast, setToast] = useState({ visible: false, title: 'Added to Bag' });
  const drawerRef = useRef(null);
  const toastTimer = useRef(null);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const visibleProducts = useMemo(() => {
    const search = query.trim().toLowerCase();
    let products = catalogProducts.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesSearch =
        !search ||
        `${product.name} ${product.material} ${product.categoryLabel}`.toLowerCase().includes(search);
      return matchesCategory && matchesSearch && product.price <= price;
    });

    if (sort === 'price-asc') products = [...products].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') products = [...products].sort((a, b) => b.price - a.price);
    if (sort === 'newest') products = [...products].reverse();
    if (sort === 'bestseller') products = [...products].sort((a, b) => Number(b.rating) - Number(a.rating));

    return products;
  }, [category, query, sort, price]);

  function showCartNotification(name) {
    setToast({ visible: true, title: `${name} Added` });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 3200);
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin-desktop py-space-xl bg-surface">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-space-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">
              <span>Series 04 / Autumn-Winter</span>
              <span className="inline-block w-1 h-1 rounded-full bg-primary" />
              <span>Bologna &amp; Paris Ateliers</span>
            </div>
            <div className="hidden sm:flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              <span>Certified Tuscan Vegetable Tanned Leathers</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
            <div className="lg:col-span-8">
              <h1 className="font-display text-display uppercase tracking-tight text-primary leading-none">
                The Permanent
                <br />
                <span className="italic font-normal">Collection</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Quiet silhouettes engineered for longevity. Sculptural calfskin, raw-edge hand-burnishing, and bespoke
                palladium hardware constructed at our historic workshop in Emilia-Romagna.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-md">
            <div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs scrollbar-none" id="category-pills">
              {categoryFilters.map((item) => (
                <button
                  className={`px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider transition-all duration-200 shrink-0 ${
                    category === item.key
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                  }`}
                  key={item.key}
                  onClick={() => setCategory(item.key)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80 shrink-0">
              <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                search
              </span>
              <input
                className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm pl-11 pr-space-md py-space-sm outline-none focus:bg-surface-container transition-colors duration-200"
                id="catalog-search"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by silhouette, finish, or tint..."
                type="text"
                value={query}
              />
              {query ? (
                <button
                  aria-label="Clear search"
                  className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px] cursor-pointer hover:text-primary"
                  onClick={() => setQuery('')}
                  type="button"
                >
                  close
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md shadow-sm">
        <div className="max-w-[1600px] mx-auto px-margin-desktop py-space-md flex flex-wrap items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md flex-wrap">
            <button
              className="flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-widest text-primary hover:text-on-surface-variant transition-colors"
              id="toggle-filter-panel"
              onClick={() => setDrawerOpen((open) => !open)}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">{drawerOpen ? 'close' : 'tune'}</span>
              <span>{drawerOpen ? 'Close Filters' : 'Refine Selection'}</span>
              <span className="w-5 h-5 rounded-full bg-surface-container-highest text-primary font-label-sm text-[11px] flex items-center justify-center font-bold">
                4
              </span>
            </button>
            <div className="hidden md:flex items-center gap-space-xs pl-space-md text-on-surface-variant font-body-sm text-body-sm">
              <span>Active:</span>
              <span className="px-space-sm py-0.5 bg-surface-container-high text-primary font-label-sm uppercase">
                Full-Grain Calf
              </span>
              <span className="px-space-sm py-0.5 bg-surface-container-high text-primary font-label-sm uppercase">
                Noir
              </span>
              <span className="px-space-sm py-0.5 bg-surface-container-high text-primary font-label-sm uppercase">
                Cognac
              </span>
              <button
                className="text-on-surface-variant hover:text-primary underline text-body-sm ml-space-xs"
                onClick={() => {
                  setCategory('all');
                  setQuery('');
                  setPrice(2450);
                }}
                type="button"
              >
                Reset All
              </button>
            </div>
          </div>
          <div className="flex items-center gap-space-lg ml-auto">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Showing <span className="font-semibold text-primary">{visibleProducts.length}</span> of 28 Pieces
            </span>
            <div className="relative flex items-center gap-space-xs">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hidden sm:inline" htmlFor="sort-dropdown">
                Sort By:
              </label>
              <div className="relative">
                <select
                  className="appearance-none bg-transparent font-label-md text-label-md uppercase tracking-wider text-primary pr-7 pl-space-sm py-1 cursor-pointer outline-none hover:text-on-surface-variant transition-colors font-semibold"
                  id="sort-dropdown"
                  onChange={(event) => setSort(event.target.value)}
                  value={sort}
                >
                  <option value="featured">Featured Curations</option>
                  <option value="newest">Newest Releases</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="bestseller">House Favorites</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-primary text-[18px]">
                  keyboard_arrow_down
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-surface-container-lowest"
          id="filter-drawer"
          ref={drawerRef}
          style={{ maxHeight: drawerOpen ? `${drawerRef.current?.scrollHeight ?? 700}px` : '0px' }}
        >
          <div className="max-w-[1600px] mx-auto px-margin-desktop py-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                Architectural Form
              </h4>
              <div className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                {[
                  ['Structured Trapezoid', true],
                  ['Slouch & Ruched Soft Hobo', true],
                  ['Geometric Cylinder Bag', false],
                  ['Box Crossbody & Camera', false],
                  ['Elongated East-West Silhouette', false],
                ].map(([label, checked]) => (
                  <label className="flex items-center gap-space-sm cursor-pointer hover:text-primary" key={label}>
                    <input className="w-4 h-4 accent-primary rounded-none cursor-pointer" defaultChecked={checked} type="checkbox" />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                Hide &amp; Grain Finish
              </h4>
              <div className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                {[
                  ['Smooth Silk Box Calf', true],
                  ['Natural Grain Pebbled Leather', false],
                  ['Velveteen French Suede', false],
                  ['High-Shine Croc-Embossed', false],
                  ['Bridle Saddle Leather', false],
                ].map(([label, checked]) => (
                  <label className="flex items-center gap-space-sm cursor-pointer hover:text-primary" key={label}>
                    <input className="w-4 h-4 accent-primary rounded-none cursor-pointer" defaultChecked={checked} type="checkbox" />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                Atelier Colorway
              </h4>
              <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                {[
                  ['Noir 900', 'bg-primary'],
                  ['Chalk Ivory', 'bg-surface-container-lowest'],
                  ['Warm Cognac', 'bg-[#8c502b]'],
                  ['Lichen Olive', 'bg-[#4e5340]'],
                  ['Espresso', 'bg-[#2d1e18]'],
                  ['Warm Taupe', 'bg-[#b8977e]'],
                ].map(([label, color]) => (
                  <label className="flex items-center gap-space-xs cursor-pointer text-body-sm text-on-surface-variant hover:text-primary" key={label}>
                    <span className={`w-4 h-4 rounded-full block shrink-0 shadow-sm ${color}`} />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <div className="flex justify-between items-baseline">
                <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                  Price Bracket
                </h4>
                <span className="font-body-sm text-body-sm font-semibold text-primary" id="price-val">
                  $480 — ${price.toLocaleString()}
                </span>
              </div>
              <div className="pt-space-sm flex flex-col gap-space-sm">
                <input
                  className="w-full h-1 bg-surface-container-high rounded-none appearance-none cursor-pointer accent-primary"
                  id="price-range"
                  max="3500"
                  min="400"
                  onChange={(event) => setPrice(Number(event.target.value))}
                  type="range"
                  value={price}
                />
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>$400</span>
                  <span>$1,900</span>
                  <span>$3,500+</span>
                </div>
              </div>
              <div className="pt-space-xs flex items-center justify-between">
                <label className="flex items-center gap-space-xs cursor-pointer text-body-sm text-on-surface-variant hover:text-primary">
                  <input className="w-3.5 h-3.5 accent-primary cursor-pointer" defaultChecked type="checkbox" />
                  <span>In Stock Only</span>
                </label>
                <button
                  className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold hover:underline"
                  onClick={() => setDrawerOpen(false)}
                  type="button"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin-desktop py-space-2xl bg-surface">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-gutter-desktop gap-y-space-2xl">
            {visibleProducts.map((product) => {
              const isWishlisted = Boolean(wishlisted[product.id]);
              return (
                <article className="group flex flex-col justify-between bg-surface" key={product.id}>
                  <div>
                    <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
                      <div className="absolute top-space-md left-space-md z-10">
                        <span
                          className={`px-space-sm py-1 font-label-sm text-label-sm tracking-widest uppercase ${
                            product.badgeDark
                              ? 'bg-primary text-on-primary'
                              : 'bg-surface-container-lowest text-primary'
                          }`}
                        >
                          {product.badge}
                        </span>
                      </div>
                      <button
                        aria-label="Save to Wishlist"
                        className="absolute top-space-md right-space-md z-10 w-9 h-9 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-200"
                        onClick={() =>
                          setWishlisted((current) => ({ ...current, [product.id]: !current[product.id] }))
                        }
                        type="button"
                      >
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          favorite
                        </span>
                      </button>
                      <img
                        alt={product.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        src={product.image}
                      />
                      <div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-primary/60 via-primary/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-space-xs">
                        <button
                          className="w-full bg-surface-container-lowest hover:bg-primary hover:text-on-primary text-primary py-space-sm font-label-md text-label-md uppercase tracking-widest transition-colors duration-200 shadow-md"
                          onClick={() => showCartNotification(product.name)}
                          type="button"
                        >
                          {product.action}
                        </button>
                      </div>
                    </div>
                    <div className="pt-space-md flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                        <span>{product.material}</span>
                        <div className="flex items-center gap-0.5 text-primary">
                          <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>
                          <span className="font-body-sm text-[12px] font-semibold">{product.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-on-surface-variant transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between pt-space-xs">
                        <span className="font-body-md text-body-md font-semibold text-primary">
                          ${product.price.toLocaleString()}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {product.colors.map((color, index) => (
                            <span
                              className={`w-3.5 h-3.5 rounded-full ${color.ring ? `ring-1 ring-offset-2 ${color.ringColor || 'ring-primary'}` : ''}`}
                              key={`${product.id}-color-${index}`}
                              style={{ backgroundColor: color.value }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-sm flex items-center justify-between">
                    <Link
                      className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-0.5"
                      href="/cart"
                    >
                      <span>View Details</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{product.detail}</span>
                  </div>
                </article>
              );
            })}
          </div>
          {visibleProducts.length === 0 ? (
            <div className="py-space-3xl text-center">
              <p className="font-headline-sm text-headline-sm text-primary">No creations match this refinement.</p>
              <button
                className="mt-space-md font-label-md text-label-md uppercase tracking-widest text-primary underline"
                onClick={() => {
                  setCategory('all');
                  setQuery('');
                  setPrice(2450);
                }}
                type="button"
              >
                Reset Selection
              </button>
            </div>
          ) : null}
          <div className="mt-space-3xl pt-space-xl flex flex-col items-center gap-space-md">
            <div className="w-48 h-[2px] bg-surface-container-high relative overflow-hidden">
              <div className="w-1/3 h-full bg-primary transition-all duration-300" />
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Showing 8 of 28 creations</p>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <button aria-label="Previous Page" className="w-10 h-10 flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest hover:text-primary transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  className={`w-10 h-10 flex items-center justify-center font-label-md text-label-md ${
                    page === 1
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-low text-on-surface hover:bg-surface-container-highest transition-colors'
                  }`}
                  key={page}
                  type="button"
                >
                  {page}
                </button>
              ))}
              <button aria-label="Next Page" className="w-10 h-10 flex items-center justify-center bg-surface-container-low text-on-surface hover:bg-surface-container-highest transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest py-space-3xl shadow-sm">
        <div className="max-w-[1600px] mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
            {services.map((service) => (
              <div className="flex flex-col gap-space-sm p-space-lg bg-surface-container-low" key={service.title}>
                <div className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary">
                  <span className="material-symbols-outlined text-[20px]">{service.icon}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary">{service.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{service.text}</p>
                <Link className="font-label-sm text-label-sm uppercase tracking-widest text-primary hover:underline mt-auto pt-space-xs font-semibold" href="/contact">
                  {service.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CartToast title={toast.title} visible={toast.visible} />
    </div>
  );
}
