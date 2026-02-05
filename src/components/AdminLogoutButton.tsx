"use client";

import { useRouter } from "next/navigation";
import { removeTokenFromStorage } from "@/src/lib/adminAuth";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    removeTokenFromStorage();
    router.replace("/admin/login");
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-lg bg-beige-50 px-4 py-2 text-sm font-medium text-brown-700 shadow-sm transition-colors hover:bg-beige-100"
    >
      Çıkış
    </button>
  );
}
