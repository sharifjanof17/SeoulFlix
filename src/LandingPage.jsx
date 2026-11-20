import React, { useEffect } from "react";
import "./LandingPage.css";

// Eski saytdagi posterlar (src/Kdramas papkasidan)
import nefritPoster from "./Kdramas/nefritortidan.jpeg";
import sevgiolamiPoster from "./Kdramas/sevgiolami.jpg";
import niqobPoster from "./Kdramas/niqob.jpg";

// ─────────────────────────────────────────────
// SOZLAMALAR — havolalarni shu yerda o'zgartiring
// ─────────────────────────────────────────────
const LINKS = {
    bot: { url: "https://t.me/seoulflixorg_bot", handle: "SeoulFlix Bot" }, // ← bot
    channel: { url: "https://t.me/seoulflixorg", handle: "@seoulflixorg" }, // ← Telegram kanal
    instagram: { url: "https://instagram.com/seoul_flix", handle: "SeoulFlix" }, // ← Instagram
};

const DRAMAS = [
    { title: "Nefrit ortidan", poster: nefritPoster },
    { title: "Sevgi olami", poster: sevgiolamiPoster },
    { title: "Niqob ortidagi haqiqat", poster: niqobPoster },
];

const ABOUT = [
    {
        title: "O'zimiz tarjima qilamiz",
        text: "Har bir qismni o'zbek tiliga o'zimiz tarjima qilamiz va ovoz beramiz.",
    },
    {
        title: "Xitoy va Koreya dramalari",
        text: "Tarixiy, romantik va zamonaviy dramalar — eng sevimlilarini tanlab dublyaj qilamiz.",
    },
    {
        title: "Bepul tomosha",
        text: "Barcha qismlar Telegram botimizda bepul. Yangi qism chiqishi bilan bot o'zi xabar beradi.",
    },
];

function TelegramIcon() {
    return (
        <svg className="sfi-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M21.94 4.3 18.7 19.6c-.24 1.08-.88 1.35-1.78.84l-4.93-3.63-2.38 2.29c-.26.26-.48.48-.99.48l.35-5.02 9.14-8.26c.4-.35-.09-.55-.62-.2L6.2 13.2l-4.86-1.52c-1.06-.33-1.08-1.06.22-1.57L20.56 2.8c.88-.32 1.65.2 1.38 1.5Z"
            />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg className="sfi-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 4.86a4.94 4.94 0 1 0 0 9.88 4.94 4.94 0 0 0 0-9.88Zm0 8.15a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42Zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z"
            />
        </svg>
    );
}

function LinkRow({ href, icon, title, handle, primary }) {
    return (
        <a
            className={primary ? "sfi-link sfi-link-primary" : "sfi-link"}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="sfi-link-icon">{icon}</span>
            <span className="sfi-link-text">
                <span className="sfi-link-title">{title}</span>
                <span className="sfi-link-handle">{handle}</span>
            </span>
        </a>
    );
}

export default function LandingPage() {
    const publicUrl = process.env.PUBLIC_URL || "";

    useEffect(() => {
        document.title = "SeoulFlix — o'zbek tilidagi dramalar";
    }, []);

    return (
        <div className="sfi-page">
            <header className="sfi-header">
                <img src={`${publicUrl}/seoulflix.png`} alt="SeoulFlix" className="sfi-logo" />
            </header>

            <main>
                <section className="sfi-hero" aria-labelledby="sfi-title">
                    <div className="sfi-hero-text">
                        <h1 id="sfi-title">Xitoy va Koreya dramalari o'zbek tilida</h1>
                        <p className="sfi-lead">
                            SeoulFlix — Xitoy va Koreya dramalarini o'zbek tiliga tarjima qilib, ovoz
                            beradigan jamoa. Barcha dramalarimizni Telegram botimizda tomosha qilasiz.
                        </p>
                        <a className="sfi-btn" href={LINKS.bot.url} target="_blank" rel="noopener noreferrer">
                            <TelegramIcon />
                            Botda tomosha qilish
                        </a>
                    </div>

                    <ul className="sfi-posters" aria-label="Dramalarimizdan">
                        {DRAMAS.map((d) => (
                            <li key={d.title} className="sfi-poster">
                                <img src={d.poster} alt="" loading="lazy" />
                                <span className="sfi-poster-title">{d.title}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="sfi-section" aria-labelledby="sfi-about">
                    <h2 id="sfi-about" className="sfi-heading">Biz haqimizda</h2>
                    <div className="sfi-about">
                        {ABOUT.map((a) => (
                            <div key={a.title} className="sfi-about-item">
                                <h3>{a.title}</h3>
                                <p>{a.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="sfi-section" aria-labelledby="sfi-follow">
                    <h2 id="sfi-follow" className="sfi-heading">Bizni kuzating</h2>
                    <div className="sfi-links">
                        <LinkRow
                            primary
                            href={LINKS.bot.url}
                            icon={<TelegramIcon />}
                            title="Telegram bot"
                            handle={`${LINKS.bot.handle} — dramalarni shu yerda ko'rasiz`}
                        />
                        <LinkRow
                            href={LINKS.channel.url}
                            icon={<TelegramIcon />}
                            title="Telegram kanal"
                            handle={`${LINKS.channel.handle} — yangiliklar va yangi qismlar`}
                        />
                        <LinkRow
                            href={LINKS.instagram.url}
                            icon={<InstagramIcon />}
                            title="Instagram"
                            handle={`${LINKS.instagram.handle} — parchalar va e'lonlar`}
                        />
                    </div>
                </section>
            </main>

            <footer className="sfi-footer">
                <p>© {new Date().getFullYear()} SeoulFlix</p>
            </footer>
        </div>
    );
}