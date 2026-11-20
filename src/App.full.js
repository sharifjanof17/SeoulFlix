import React, { Suspense, lazy } from "react";
import LandingPage from "./LandingPage";

// ─────────────────────────────────────────────
// Sayt rejimi
//   true  — faqat bitta sahifa (hamma botga yo'naltiriladi). Hozirgi holat.
//   false — eski to'liq sayt qaytadi (App.full.js).
// ─────────────────────────────────────────────
const LANDING_ONLY = true;

// Eski sayt faqat kerak bo'lganda yuklanadi: LANDING_ONLY = true bo'lsa,
// uning kodi (Firebase, pleyer va h.k.) foydalanuvchiga umuman yuborilmaydi.
const FullApp = lazy(() => import("./App.full"));

export default function App() {
  if (LANDING_ONLY) return <LandingPage />;
  return (
    <Suspense fallback={null}>
      <FullApp />
    </Suspense>
  );
}