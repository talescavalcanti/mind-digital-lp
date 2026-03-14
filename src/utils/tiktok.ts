const TARGET_URL = "https://vsl-minddigital.vercel.app/";

/**
 * Detects if the current browser is TikTok's in-app webview.
 */
export function isTikTokBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  return (
    ua.includes("tiktok") ||
    ua.includes("bytedancewebview") ||
    ua.includes("musical_ly")
  );
}

/**
 * Copies the target URL to clipboard and shows a toast notification.
 * Used as a fallback when TikTok blocks direct link navigation.
 */
export async function copyLinkAndNotify(): Promise<void> {
  try {
    await navigator.clipboard.writeText(TARGET_URL);
  } catch {
    // Fallback for browsers that don't support clipboard API
    const textarea = document.createElement("textarea");
    textarea.value = TARGET_URL;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  // Show toast notification
  const existing = document.getElementById("tiktok-copy-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "tiktok-copy-toast";
  toast.innerHTML = `
    <span style="font-size:18px">📋</span>
    <div>
      <strong style="display:block;margin-bottom:2px">Link copiado!</strong>
      <span style="opacity:0.8;font-size:13px">Cole no navegador para continuar</span>
    </div>
  `;
  toast.className = "tiktok-copy-toast";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("tiktok-copy-toast--hide");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/**
 * Click handler for CTA links. Intercepts navigation in TikTok browser.
 * Returns true if the click was intercepted (TikTok), false otherwise.
 */
export function handleCTAClick(e: React.MouseEvent): boolean {
  if (isTikTokBrowser()) {
    e.preventDefault();
    e.stopPropagation();
    copyLinkAndNotify();
    return true;
  }
  return false;
}
