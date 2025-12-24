'use client';

import { SITE } from '../lib/site';

export default function FloatingActionButtons() {
  return (
    <div className="fab" aria-label="快速聯絡">
      <button className="to-top fab-btn fab-btn-top" type="button" aria-label="回到最上">
        ↑
      </button>
      <div className="fab-label" aria-hidden="true">聯繫專員</div>
      <a 
        className="fab-btn" 
        href={SITE.lineUrl} 
        rel="noopener" 
        target="_blank" 
        aria-label="LINE 諮詢"
        onClick={(e) => {
          e.preventDefault();
          if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_line) {
            console.log('Sending LINE conversion event...');
            (window as any).gtag_report_conversion_line(SITE.lineUrl);
          } else {
            console.log('gtag_report_conversion_line not available, opening LINE directly');
            window.open(SITE.lineUrl, '_blank');
          }
        }}
      >
        <img className="fab-icon" src="/icon/line.png" alt="LINE" loading="lazy" />
      </a>
      <a 
        className="fab-btn" 
        href={SITE.phoneTel} 
        aria-label="立即撥打"
        onClick={(e) => {
          e.preventDefault();
          if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_phone) {
            console.log('Sending phone conversion event, then redirecting...');
            (window as any).gtag_report_conversion_phone();
            setTimeout(() => {
              window.location.href = SITE.phoneTel;
            }, 300);
          } else {
            console.log('gtag_report_conversion_phone not available, redirecting directly');
            window.location.href = SITE.phoneTel;
          }
        }}
      >
        <img className="fab-icon" src="/icon/call.png" alt="電話" loading="lazy" />
      </a>
    </div>
  );
}
