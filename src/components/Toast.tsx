"use client";

import { useEffect, useState } from "react";

export default function Toast({
  message,
  duration = 3000,
  onClose,
}: {
  message: string;
  duration?: number;
  onClose?: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // mount -> show
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  return (
    <div
      aria-live="polite"
      role="status"
      className={`fixed left-1/2 top-4 z-60 -translate-x-1/2 transform transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      <div className="rounded-lg border border-brown-400 bg-beige-50 px-4 py-3 shadow-sm text-brown-800">
        {message}
      </div>
    </div>
  );
}
