import React, { Suspense, lazy } from "react";
import LandingPage from "./LandingPage";

// true — faqat tanishtiruv sahifasi, false — eski to'liq sayt
const LANDING_ONLY = true;

const FullApp = lazy(() => import("./App.full"));

export default function App() {
    if (LANDING_ONLY) return <LandingPage />;
    return (
        <Suspense fallback={null}>
            <FullApp />
        </Suspense>
    );
}