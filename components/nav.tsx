"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, type Content, type Locale } from "@/data/content";

type NavProps = {
  locale: Locale;
  copy: Content;
};

export function Nav({ locale, copy }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: copy.nav.work },
    { href: "#trajectory", label: copy.nav.experience },
    { href: site.cv, label: copy.nav.cv, download: true },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <nav className="site-nav" data-scrolled={scrolled}>
      <div className="shell nav-inner">
        <Link href={locale === "tr" ? "/tr" : "/"}>{site.name}</Link>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-nav-link={link.download ? undefined : true}
              download={link.download ? true : undefined}
            >
              {link.label}
            </a>
          ))}
          <LangSwitch locale={locale} />
        </div>

        <div className="nav-right">
          <span className="lang-switch-mobile">
            <LangSwitch locale={locale} />
          </span>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-panel"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{copy.nav.menu}</span>
            <svg viewBox="0 0 22 14" width="22" height="14" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="1.6">
                <line x1="0" y1="2" x2="22" y2="2" />
                <line x1="0" y1="12" x2="22" y2="12" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="shell">
        <div className="mobile-panel" id="mobile-panel" data-open={open}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              download={link.download ? true : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function LangSwitch({ locale }: { locale: Locale }) {
  return (
    <span className="lang-switch">
      <Link href="/" aria-current={locale === "en" ? "page" : undefined} hrefLang="en">
        EN
      </Link>
      <i aria-hidden="true">/</i>
      <Link href="/tr" aria-current={locale === "tr" ? "page" : undefined} hrefLang="tr">
        TR
      </Link>
    </span>
  );
}
