"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_TOKEN_KEY, isValidToken } from "@/src/lib/adminAuth";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // If we are on the login page, do not run protection — render immediately
    if (pathname === "/admin/login") {
      setChecked(true);
      return;
    }

    // For all other admin routes, validate token and avoid flashing admin UI
    setChecked(false);
    try {
      const token = localStorage.getItem(ADMIN_TOKEN_KEY);
      if (!isValidToken(token)) {
        // mark that we are redirecting due to missing/invalid token
        try { sessionStorage.setItem("pudi_admin_redirected", "1"); } catch {}
        router.replace("/admin/login");
      } else {
        setChecked(true);
      }
    } catch (e) {
      try { sessionStorage.setItem("pudi_admin_redirected", "1"); } catch {}
      router.replace("/admin/login");
    }
  }, [pathname, router]);

  // While checking token, avoid flashing admin UI
  if (!checked) {
    return null;
  }

  return <div>{children}</div>;
}
