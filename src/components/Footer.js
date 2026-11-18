'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-3xl">
      <div className="w-full px-margin-desktop py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-gutter-desktop mb-space-2xl">
          <div className="lg:col-span-2 pr-space-xl">
            <span className="font-headline-md text-headline-md uppercase tracking-wider text-primary block mb-space-md">
              ATELIER
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed mb-space-lg">
              ATELIER Paris — Timeless leather goods crafted with quiet luxury, sustainable Italian craftsmanship, and
              architectural silhouettes.
            </p>
            <div className="flex items-center gap-space-md text-on-surface-variant">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                Concierge Hours
              </span>
              <span className="font-body-sm text-body-sm">Mon — Sat | 09:00 — 19:00 CET</span>
            </div>
          </div>
          <div>
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-space-lg font-semibold">
              Shop
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li><Link className="hover:text-on-surface transition-colors duration-200" href="/shop">Totes</Link></li>
              <li><Link className="hover:text-on-surface transition-colors duration-200" href="/shop">Shoulder Bags</Link></li>
              <li><Link className="hover:text-on-surface transition-colors duration-200" href="/shop">Crossbody</Link></li>
              <li><Link className="hover:text-on-surface transition-colors duration-200" href="/shop">Mini Bags</Link></li>
              <li><Link className="hover:text-on-surface transition-colors duration-200" href="/shop">Weekenders</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-space-lg font-semibold">
              Client Care
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li><a className="hover:text-on-surface transition-colors duration-200" href="#">Shipping &amp; Returns</a></li>
              <li>
                <a className="hover:text-on-surface transition-colors duration-200 flex items-center gap-space-xs" href="https://wa.me/919074569335" rel="noopener" target="_blank">
                  <span className="material-symbols-outlined text-[14px]">chat</span>WhatsApp: +91 9074569335
                </a>
              </li>
              <li><a className="hover:text-on-surface transition-colors duration-200" href="#">Care Guide</a></li>
              <li><a className="hover:text-on-surface transition-colors duration-200" href="#">Authentication</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-space-lg font-semibold">
              Company
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li><a className="hover:text-on-surface transition-colors duration-200" href="#">About Us</a></li>
              <li><a className="hover:text-on-surface transition-colors duration-200" href="#">Sustainability</a></li>
              <li><a className="hover:text-on-surface transition-colors duration-200" href="#">Journal</a></li>
              <li><a className="hover:text-on-surface transition-colors duration-200" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-space-lg font-semibold">
              Connect
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
              <li>
                <a className="hover:text-on-surface transition-colors duration-200 flex items-center gap-space-xs" href="tel:+919074569335">
                  <span className="material-symbols-outlined text-[14px]">call</span>+91 9074569335
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors duration-200 flex items-center gap-space-xs" href="https://instagram.com/_adarsh__ms" rel="noopener" target="_blank">
                  <span className="material-symbols-outlined text-[14px]">alternate_email</span>@_adarsh__ms
                </a>
              </li>
              <li>
                <a className="hover:text-on-surface transition-colors duration-200 flex items-center gap-space-xs" href="mailto:msa593554@gmail.com">
                  <span className="material-symbols-outlined text-[14px]">mail</span>msa593554@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary block mb-space-xs font-semibold">
                Newsletter
              </span>
              <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-sm font-body-sm px-space-md py-space-sm border-0 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your email address" type="email" />
                <button className="bg-primary text-on-primary font-label-md text-label-md uppercase px-space-md py-space-sm hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 shrink-0" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full pt-space-xl border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 ATELIER Paris S.A. All rights reserved.</p>
          <div className="flex items-center gap-space-lg font-body-sm text-body-sm text-on-surface-variant">
            <a className="hover:text-on-surface transition-colors duration-200" href="#">Privacy Policy</a>
            <a className="hover:text-on-surface transition-colors duration-200" href="#">Terms of Service</a>
            <a className="hover:text-on-surface transition-colors duration-200" href="#">Cookies</a>
          </div>
          <div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">
            <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant">VISA</span>
            <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant">MC</span>
            <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant">AMEX</span>
            <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
