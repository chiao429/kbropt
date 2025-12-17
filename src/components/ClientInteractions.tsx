'use client';

import { useEffect } from 'react';

export default function ClientInteractions() {
  useEffect(() => {
    const menuBtn = document.querySelector<HTMLButtonElement>('.mobile-menu-btn');
    const mobileNav = document.querySelector<HTMLElement>('.mobile-nav');

    const onMenuClick = () => {
      if (!menuBtn || !mobileNav) return;
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-label', !isExpanded ? '關閉選單' : '開啟選單');
    };

    const closeMenu = () => {
      if (!menuBtn || !mobileNav) return;
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', '開啟選單');
      mobileNav.classList.remove('is-open');
    };

    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', onMenuClick, { passive: true } as AddEventListenerOptions);
      const mobileLinks = mobileNav.querySelectorAll('a');
      mobileLinks.forEach((link) => {
        link.addEventListener('click', closeMenu, { passive: true } as AddEventListenerOptions);
      });

      return () => {
        menuBtn.removeEventListener('click', onMenuClick as EventListener);
        mobileLinks.forEach((link) => {
          link.removeEventListener('click', closeMenu as EventListener);
        });
      };
    }

    return;
  }, []);

  useEffect(() => {
    const toTopBtn = document.querySelector<HTMLButtonElement>('.to-top');
    if (!toTopBtn) return;

    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      if (y > 420) {
        toTopBtn.classList.add('is-show');
      } else {
        toTopBtn.classList.remove('is-show');
      }
    };

    const onClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    toTopBtn.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('scroll', update);
      toTopBtn.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}
