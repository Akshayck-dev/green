export default function FloatingWhatsApp() {
  const whatsappNumber = '918075931749';
  const defaultText = encodeURIComponent(
    'Hello Caeris Greens! I would like to inquire about your fresh organic microgreens and subscriptions.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultText}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 text-white p-3.5 md:p-4 rounded-full shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group"
      title="Chat on WhatsApp (+91 8075931749)"
      aria-label="Chat on WhatsApp"
    >
      <span className="material-symbols-outlined text-[24px]">chat</span>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap text-xs font-bold font-body pr-1 hidden sm:inline-block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
