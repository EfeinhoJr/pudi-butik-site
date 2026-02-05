"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkCredentials, generateToken, setTokenToStorage } from "@/src/lib/adminAuth";
import Toast from "@/src/components/Toast";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showRedirectToast, setShowRedirectToast] = useState(false);
  const router = useRouter();

  // Show toast only if redirected from admin layout/page
  useEffect(() => {
    try {
      if (sessionStorage.getItem("pudi_admin_redirected")) {
        sessionStorage.removeItem("pudi_admin_redirected");
        setShowRedirectToast(true);
      }
    } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (checkCredentials(username.trim(), password.trim())) {
      const token = generateToken();
      try {
        setTokenToStorage(token);
      } catch {}
      router.push("/admin/import");
    } else {
      setError("Kullanıcı adı veya şifre hatalı");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-beige-50/30 flex items-center justify-center px-4 py-12">
      {showRedirectToast && (
        <Toast
          message="Admin paneline erişmek için giriş yapmanız gerekiyor."
          duration={3000}
          onClose={() => setShowRedirectToast(false)}
        />
      )}

      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm sm:p-8">
        <h1 className="mb-2 text-center font-serif text-2xl font-semibold text-brown-800">Admin Paneli Giriş</h1>
        <p className="mb-6 text-center text-sm text-brown-600">Lütfen kimlik bilgilerinizi girin.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-brown-700">Kullanıcı adı</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-beige-200/80 px-4 py-3 text-brown-800 placeholder-brown-400 focus:border-brown-400 focus:outline-none"
              autoComplete="username"
              aria-label="Kullanıcı adı"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-brown-700">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-beige-200/80 px-4 py-3 text-brown-800 placeholder-brown-400 focus:border-brown-400 focus:outline-none"
              autoComplete="current-password"
              aria-label="Şifre"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-brown-700 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-brown-800 disabled:opacity-60"
              disabled={loading}
            >
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
