import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import '../styles/global.css';
import ClientInteractions from '../components/ClientInteractions';
import { NAV, SITE } from '../lib/site';
import ContactCTA from '../components/ContactCTA';
import FloatingActionButtons from '../components/FloatingActionButtons';

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <a className="skip-link" href="#main">
          跳到主要內容
        </a>

        <header className="header">
          <div className="container">
            <div className="nav">
              <Link className="brand" href="/">
                <img src="/logo-kbro.svg" alt="凱擘 kbro" className="brand-logo" />
                <span className="brand-subtitle">陳玉婷 電銷服務網站</span>
              </Link>

              <nav className="navlinks" aria-label="網站導覽">
                {NAV.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>

              <button className="mobile-menu-btn" type="button" aria-label="開啟選單" aria-expanded="false">
                <span className="hamburger-icon" aria-hidden="true">
                  <svg className="icon-open" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg className="icon-close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 6l12 12M18 6l-12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <nav className="mobile-nav" aria-label="行動版導覽">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main id="main" className="main">
          {children}
          <ContactCTA />
        </main>

        <FloatingActionButtons />

        <footer className="footer">
          <div className="container footer__row footer__row--stacked">
            <div className="footer__lines">
              <div className="footer__line">
                凱擘大寬頻 {(SITE as any).footerName ?? SITE.name} 新申辦專線 {SITE.phoneDisplay}
              </div>
              <div className="footer__line footer__line--phone">
                24小時官方客服專線：{SITE.officialSupportDisplay}
              </div>
              <div className="footer__links footer__links--center">
                <div className="inline-links footer__links-row">
                  <a href={SITE.personalDataProtectionUrl} rel="noopener" target="_blank">
                    個人資料保護法
                  </a>
                  <a href={SITE.privacyPolicyUrl} rel="noopener" target="_blank">
                    隱私權政策
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="copyright-bar">
          <span className="footer__credit">2025 © Designed by JO YANG</span>
        </div>

        <ClientInteractions />
        
        {/* Google Ads 轉換追蹤代碼 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10969580722"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10969580722');
          `}
        </Script>
        
        {/* 轉換追蹤事件函數 */}
        <Script id="conversion-tracking" strategy="afterInteractive">
          {`
            // 電話轉換追蹤函數
            function gtag_report_conversion_phone() {
              console.log('gtag_report_conversion_phone called');
              
              if (typeof gtag === 'undefined') {
                console.error('gtag is not defined');
                return false;
              }
              
              console.log('Sending phone conversion event to Google Ads');
              gtag('event', 'conversion', {
                'send_to': 'AW-10969580722/qM0ICPqP7YoYELKJ2u4o'
              });
              
              return true;
            }
            
            // LINE 轉換追蹤函數
            function gtag_report_conversion_line(url) {
              console.log('gtag_report_conversion_line called with URL:', url);
              
              if (typeof gtag === 'undefined') {
                console.error('gtag is not defined');
                return false;
              }
              
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              
              console.log('Sending LINE conversion event to Google Ads');
              gtag('event', 'conversion', {
                'send_to': 'AW-10969580722/zCMUCP-O7YoYELKJ2u4o',
                'event_callback': callback
              });
              
              return false;
            }
            
            // 向後兼容的通用函數（使用電話轉換）
            function gtag_report_conversion() {
              return gtag_report_conversion_phone();
            }
            
            // 檢查 gtag 是否已載入
            window.addEventListener('load', function() {
              console.log('Window loaded. gtag available:', typeof gtag !== 'undefined');
              console.log('gtag_report_conversion_phone available:', typeof gtag_report_conversion_phone !== 'undefined');
              console.log('gtag_report_conversion_line available:', typeof gtag_report_conversion_line !== 'undefined');
            });
          `}
        </Script>
      </body>
    </html>
  );
}
