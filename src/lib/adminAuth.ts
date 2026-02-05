export const ADMIN_TOKEN_KEY = "pudi_admin_token";

// Encoded credentials (Base64) - not visible plaintext in JSX
const ENC_USERNAME = "cHVkaQ=="; // 'pudi'
const ENC_PASSWORD = "ZWZlMDY0M2VmZQ=="; // 'efe0643efe'

export function decodeCred(encoded: string) {
  try {
    return atob(encoded);
  } catch {
    return "";
  }
}

export function checkCredentials(username: string, password: string) {
  return username === decodeCred(ENC_USERNAME) && password === decodeCred(ENC_PASSWORD);
}

export function generateToken() {
  const payload = { t: Date.now(), admin: true };
  return btoa(JSON.stringify(payload));
}

export function isValidToken(token: string | null) {
  if (!token) return false;
  try {
    const decoded = atob(token);
    const obj = JSON.parse(decoded);
    if (!obj || obj.admin !== true || typeof obj.t !== "number") return false;
    // Optionally check expiry: 30 days
    const age = Date.now() - obj.t;
    const maxAge = 1000 * 60 * 60 * 24 * 30; // 30 days
    return age < maxAge;
  } catch (e) {
    return false;
  }
}

export function setTokenToStorage(token: string) {
  try {
    localStorage.setItem(ADMIN_TOKEN_KEY, token);
  } catch (e) {
    // ignore
  }
}

export function removeTokenFromStorage() {
  try {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
  } catch {}
}
