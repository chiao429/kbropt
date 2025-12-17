import type { Metadata } from 'next';
import Link from 'next/link';
import '../styles/global.css';
import ClientInteractions from '../components/ClientInteractions';
import { NAV, SITE } from '../lib/site';

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  icons: {
    icon: '/favicon.ico'
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
        </main>

        <div className="fab" aria-label="快速聯絡">
          <button className="to-top fab-btn fab-btn-top" type="button" aria-label="回到最上">
            ↑
          </button>
          <div className="fab-label" aria-hidden="true">聯繫專員</div>
          <a className="fab-btn" href={SITE.lineUrl} rel="noopener" target="_blank" aria-label="LINE 諮詢">
            <img className="fab-icon" src="/icon/line.png" alt="LINE" loading="lazy" />
          </a>
          <a className="fab-btn" href={SITE.phoneTel} aria-label="立即撥打">
            <img className="fab-icon" src="/icon/call.png" alt="電話" loading="lazy" />
          </a>
        </div>

        <footer className="footer">
          <div className="container">
            <div>
              <strong>{(SITE as any).footerName ?? SITE.name}</strong>
              <div className="small">
                新申辦專線：<a href={SITE.phoneTel}>{SITE.phoneDisplay}</a> ｜ 24 小時官方客服：
                {SITE.officialSupportDisplay}
              </div>
              <div className="inline-links">
                <a href={SITE.lineUrl} rel="noopener" target="_blank">
                  LINE 聯絡我
                </a>
                <a href={SITE.privacyPolicyUrl} rel="noopener" target="_blank">
                  隱私權政策
                </a>
                <a href={SITE.personalDataProtectionUrl} rel="noopener" target="_blank">
                  個人資料保護法
                </a>
              </div>
              <hr className="sep" />
              <div className="small">本網站為陳專員個人諮詢服務頁，實際方案內容、資費與合約細節，請以凱擘大寬頻官方網站或簽約文件為準</div>
            </div>
          </div>
        </footer>

        <ClientInteractions />
      </body>
    </html>
  );
}
