"use client";

import { useEffect } from "react";

export function MotionObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        '.desktop-nav a[href^="#"], .mobile-nav-panel a[href^="#"]',
      ),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const setActiveLink = (sectionId: string) => {
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === "#" + sectionId;

        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    setActiveLink("home");

    let revealObserver: IntersectionObserver | undefined;
    let sectionObserver: IntersectionObserver | undefined;

    if (!reducedMotion && "IntersectionObserver" in window) {
      revealElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
          element.classList.add("is-visible");
        }
      });

      root.classList.add("motion-ready");

      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.12,
        },
      );

      revealElements.forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          revealObserver?.observe(element);
        }
      });
    } else {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }

    if ("IntersectionObserver" in window) {
      const trackedSections = Array.from(
        document.querySelectorAll<HTMLElement>("main section[id]"),
      ).filter((section) =>
        navLinks.some(
          (link) => link.getAttribute("href") === "#" + section.id,
        ),
      );

      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLink(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0,
        },
      );

      trackedSections.forEach((section) => sectionObserver?.observe(section));
    }

    return () => {
      revealObserver?.disconnect();
      sectionObserver?.disconnect();
      root.classList.remove("motion-ready");
      navLinks.forEach((link) => link.removeAttribute("aria-current"));
    };
  }, []);

  return null;
}
