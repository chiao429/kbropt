import type { Metadata } from 'next';
import Link from 'next/link';
import '../styles/global.css';
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

              <button className="mobile-menu-btn" aria-label="開啟選單" aria-expanded="false">
                <span className="menu-icon" />
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

        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', () => {
                const menuBtn = document.querySelector('.mobile-menu-btn');
                const mobileNav = document.querySelector('.mobile-nav');

                if (menuBtn && mobileNav) {
                  menuBtn.addEventListener('click', () => {
                    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
                    menuBtn.setAttribute('aria-expanded', String(!isExpanded));
                    mobileNav.classList.toggle('is-open');

                    if (!isExpanded) {
                      menuBtn.setAttribute('aria-label', '關閉選單');
                    } else {
                      menuBtn.setAttribute('aria-label', '開啟選單');
                    }
                  });

                  const mobileLinks = mobileNav.querySelectorAll('a');
                  mobileLinks.forEach((link) => {
                    link.addEventListener('click', () => {
                      menuBtn.setAttribute('aria-expanded', 'false');
                      menuBtn.setAttribute('aria-label', '開啟選單');
                      mobileNav.classList.remove('is-open');
                    });
                  });
                }
              });
            `
          }}
        />

        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', () => {
                const toTopBtn = document.querySelector('.to-top');
                if (!toTopBtn) return;

                const update = () => {
                  const y = window.scrollY || document.documentElement.scrollTop || 0;
                  if (y > 420) {
                    toTopBtn.classList.add('is-show');
                  } else {
                    toTopBtn.classList.remove('is-show');
                  }
                };

                window.addEventListener('scroll', update, { passive: true });
                update();

                toTopBtn.addEventListener('click', () => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                });
              });
            `
          }}
        />
      </body>
    </html>
  );
}
