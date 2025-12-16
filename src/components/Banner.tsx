'use client';

import { useEffect, useMemo, useState } from 'react';

type Slide =
  | {
      type: 'image';
      desktopSrc: string;
      mobileSrc?: string;
      alt: string;
      overlay?: {
        title: string;
        text: string;
        variant?: 'default' | 'network' | 'tv';
      };
    }
  | {
      type: 'empty';
    };

export default function Banner() {
  const slides: Slide[] = useMemo(
    () => [
      {
        type: 'image',
        desktopSrc: '/banner/banner_1.jpg',
        alt: '光纖上網與有線電視服務',
        overlay: { title: '光纖上網 · 有線電視', text: '新申辦相關諮詢，由專員協助評估方案並說明申辦流程' }
      },
      {
        type: 'image',
        desktopSrc: '/banner/banner_2.jpg',
        alt: '優質服務體驗',
        overlay: { title: '專人服務體驗', text: '不用排隊等客服，由專員協助說明申辦流程與相關事項，提供清楚、即時的諮詢協助' }
      },
      {
        type: 'image',
        desktopSrc: '/banner/電視_1.jpg',
        mobileSrc: '/banner/電視_1_mobile.jpg',
        alt: '有線電視服務'
      }
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 10000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const go = (idx: number) => setCurrent((idx + slides.length) % slides.length);

  return (
    <section className="banner-section">
      <div className="banner-container">
        {slides.map((slide, idx) => {
          if (slide.type === 'empty') return null;
          const isActive = idx === current;

          const overlayClass =
            slide.overlay?.variant === 'network'
              ? 'banner-overlay banner-overlay-network'
              : slide.overlay?.variant === 'tv'
                ? 'banner-overlay banner-overlay-tv'
                : 'banner-overlay';

          return (
            <div key={idx} className={`banner-slide ${isActive ? 'active' : ''}`}>
              {slide.mobileSrc ? (
                <picture>
                  <source media="(max-width: 920px)" srcSet={slide.mobileSrc} />
                  <img src={slide.desktopSrc} alt={slide.alt} loading={idx === 0 ? 'eager' : 'lazy'} />
                </picture>
              ) : (
                <img src={slide.desktopSrc} alt={slide.alt} loading={idx === 0 ? 'eager' : 'lazy'} />
              )}

              {slide.overlay ? (
                <div className={overlayClass}>
                  <div className="container">
                    <div className="banner-content">
                      <h2 className="banner-title">{slide.overlay.title}</h2>
                      <p className="banner-text">{slide.overlay.text}</p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}

        <button className="banner-nav banner-prev" aria-label="上一張" onClick={() => go(current - 1)}>
          ‹
        </button>
        <button className="banner-nav banner-next" aria-label="下一張" onClick={() => go(current + 1)}>
          ›
        </button>

        <div className="banner-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`banner-dot ${idx === current ? 'active' : ''}`}
              aria-label={`第 ${idx + 1} 張`}
              onClick={() => go(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
