/**
 * Robustly detects if the user is browsing within the TikTok in-app browser.
 * Also includes a testing bypass via URL parameters.
 */
export function isTikTokBrowser(): boolean {
  if (typeof window === "undefined") return false;

  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  const isUA = ua.toLowerCase().indexOf("tiktok") > -1 || 
               ua.toLowerCase().indexOf("musical_ly") > -1 ||
               ua.toLowerCase().indexOf("musically") > -1;

  const urlParams = new URLSearchParams(window.location.search);
  const isTest = urlParams.get("test") === "tiktok";

  return isUA || isTest;
}
