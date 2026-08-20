"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Primary navigation">
        <a
          className="wordmark"
          href="#home"
          aria-label="Ata Berk Öztürk, home"
          onClick={() => setIsOpen(false)}
        >
          {portfolioData.person.initials}
          <span className="wordmark-dot" aria-hidden="true" />
        </a>

        <div className="desktop-nav">
          {portfolioData.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <X size={20} strokeWidth={1.7} aria-hidden="true" />
          ) : (
            <Menu size={20} strokeWidth={1.7} aria-hidden="true" />
          )}
        </button>

        <div
          id="mobile-navigation"
          className={"mobile-nav-panel " + (isOpen ? "is-open" : "")}
          aria-hidden={!isOpen}
        >
          <span className="mobile-nav-label">
            Navigate / {String(portfolioData.navigation.length).padStart(2, "0")}
          </span>
          {portfolioData.navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </div>

        {isOpen ? (
          <button
            type="button"
            className="mobile-menu-backdrop"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
          />
        ) : null}
      </nav>
    </header>
  );
}
