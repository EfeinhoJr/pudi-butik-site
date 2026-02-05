"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_TOKEN_KEY, isValidToken } from "@/src/lib/adminAuth";

export default function AdminIndexPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(ADMIN_TOKEN_KEY);
    if (isValidToken(token)) {
      router.replace("/admin/import");
    } else {
      try { sessionStorage.setItem("pudi_admin_redirected", "1"); } catch {}
      router.replace("/admin/login");
    }
  }, [router]);

  return null;
}
