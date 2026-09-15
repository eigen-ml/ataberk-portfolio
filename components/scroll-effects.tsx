"use client";

import { useEffect } from "react";

/**
 * Drives everything that depends on scroll position:
 * section reveals, the active navigation link, and the slow parallax
 * on the hero lattice. Everything here is skipped when the visitor
 * asks for reduced motion.
 */
export function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[data-nav-link]'),
    );
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );
    const lattice = document.querySelector<SVGElement>("[data-parallax]");

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    revealElements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
        element.classList.add("is-visible");
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            if (link.getAttribute("href") === "#" + id) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    let frame = 0;

    const onScroll = () => {
      if (frame || !lattice) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const offset = Math.min(window.scrollY, window.innerHeight);
        lattice.style.transform =
          "translate3d(" +
          -offset * 0.05 +
          "px, " +
          -offset * 0.12 +
          "px, 0) scale(" +
          (1 + offset * 0.00008) +
          ")";
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
