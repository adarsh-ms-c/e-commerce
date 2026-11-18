'use client';

export default function CartToast({ title, visible }) {
  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none bg-primary text-on-primary px-space-lg py-space-md shadow-xl flex items-center gap-space-md ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <span className="material-symbols-outlined text-[20px] text-on-primary">check_circle</span>
      <div>
        <p className="font-label-md text-label-md uppercase tracking-wider font-semibold">{title}</p>
        <p className="font-body-sm text-body-sm text-primary-fixed-dim">Complimentary Express Shipping applied.</p>
      </div>
    </div>
  );
}
