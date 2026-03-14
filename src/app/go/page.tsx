"use client";

import { useEffect } from "react";

const REDIRECT_URL = "https://vsl-minddigital.vercel.app/";

export default function GoRedirect() {
  useEffect(() => {
    // Use window.location.replace for a clean redirect
    // that doesn't add to browser history
    window.location.replace(REDIRECT_URL);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <p>Redirecionando...</p>
    </div>
  );
}
