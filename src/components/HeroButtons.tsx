'use client';

import { SITE } from '../lib/site';

export default function HeroButtons() {
  return (
    <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <a 
        className="btn btn-primary" 
        href={SITE.phoneTel}
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
        立即撥打 {SITE.phoneDisplay} 陳專員
      </a>
      <a 
        className="btn" 
        href={SITE.lineUrl} 
        rel="noopener" 
        target="_blank"
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
        加入LINE作諮詢
      </a>
    </div>
  );
}
