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
          if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
            return (window as any).gtag_report_conversion(SITE.lineUrl);
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
          if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
            return (window as any).gtag_report_conversion(SITE.phoneTel);
          }
        }}
      >
        <img className="fab-icon" src="/icon/call.png" alt="電話" loading="lazy" />
      </a>
    </div>
  );
}
