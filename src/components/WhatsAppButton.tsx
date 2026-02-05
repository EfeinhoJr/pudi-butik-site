"use client";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-60">
      <a
        href="https://wa.me/905437680643"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        title="WhatsApp ile iletişime geç"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:h-14 sm:w-14">
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M20.52 3.48A11.843 11.843 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.08 1.52 5.82L0 24l6.35-1.6A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.18-3.48-8.52zM12 21.6a9.6 9.6 0 01-5.18-1.46l-.37-.22-3.78.95.99-3.68-.24-.38A9.6 9.6 0 012.4 12c0-5.32 4.28-9.6 9.6-9.6 2.56 0 4.97.99 6.78 2.8A9.56 9.56 0 0121.6 12c0 5.32-4.28 9.6-9.6 9.6z" />
            <path d="M17.53 14.41c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.8.95-.98 1.15-.18.2-.36.22-.66.07-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.69-1.61-1.99-.17-.3-.02-.46.13-.61.13-.13.29-.33.44-.5.15-.17.19-.28.29-.47.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01-.19 0-.5.07-.76.37-.27.31-1.02.99-1.02 2.41 0 1.42 1.05 2.8 1.19 2.99.15.2 2.06 3.2 5 4.49 2.94 1.29 3.4 1.09 4 1.02.6-.07 1.73-.7 1.98-1.37.25-.67.25-1.25.18-1.37-.07-.12-.27-.19-.56-.34z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
