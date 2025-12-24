'use client';

import { SITE } from '../lib/site';

export default function HeroButtons() {
  return (
    <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <a 
        className="btn btn-primary" 
        href={SITE.phoneTel}
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
            (window as any).gtag_report_conversion(SITE.phoneTel);
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
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
            (window as any).gtag_report_conversion(SITE.lineUrl);
          }
        }}
      >
        加入LINE作諮詢
      </a>
    </div>
  );
}
