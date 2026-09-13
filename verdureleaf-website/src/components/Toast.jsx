import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast } = useCart();

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center gap-3 bg-primary text-on-primary px-5 py-3.5 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.25)] border border-primary-fixed/20 backdrop-blur-md">
        <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-on-tertiary">
          <span className="material-symbols-outlined text-[18px]">
            {toast.type === 'success' ? 'check' : 'info'}
          </span>
        </div>
        <div className="font-body text-sm font-semibold tracking-wide">
          {toast.message}
        </div>
      </div>
    </div>
  );
}
