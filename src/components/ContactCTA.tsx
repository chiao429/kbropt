'use client';

import { SITE } from '../lib/site';

export default function ContactCTA() {
  return (
    <section className="contact-cta" aria-label="聯繫專員">
      <div className="contact-cta__bg" aria-hidden="true" />
      <div className="container contact-cta__container">
        <div className="contact-cta__card">
          <p className="contact-cta__title">Contact Us｜專人諮詢服務</p>
          <p className="contact-cta__body">還在煩惱該如何選擇最適合的網路方案嗎？</p>
          <p className="contact-cta__body">
            市面方案琳瑯滿目，即使比較過規格與價格，實際使用的網速與穩定度卻未必符合需求。
          </p>
          <p className="contact-cta__body">
            我們的專業專員將依據您的使用情境與環境條件，提供一對一、真人諮詢服務，協助您快速釐清需求，並提出最
            合適、最實際的網路方案建議，讓選擇更安心、使用更順暢。
          </p>
          <div className="contact-cta__actions">
            <a 
              className="btn contact-cta__btn primary" 
              href={SITE.lineUrl} 
              target="_blank" 
              rel="noopener"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  console.log('Sending conversion event, then opening LINE...');
                  (window as any).gtag_report_conversion();
                  setTimeout(() => {
                    window.open(SITE.lineUrl, '_blank');
                  }, 300);
                } else {
                  console.log('gtag_report_conversion not available, opening LINE directly');
                  window.open(SITE.lineUrl, '_blank');
                }
              }}
            >
              線上諮詢
            </a>
            <a 
              className="btn contact-cta__btn" 
              href={SITE.phoneTel}
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  console.log('Sending conversion event, then redirecting...');
                  (window as any).gtag_report_conversion();
                  setTimeout(() => {
                    window.location.href = SITE.phoneTel;
                  }, 300);
                } else {
                  console.log('gtag_report_conversion not available, redirecting directly');
                  window.location.href = SITE.phoneTel;
                }
              }}
            >
              電話專線
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

