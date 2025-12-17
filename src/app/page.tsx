import type { Metadata } from 'next';

import { SITE } from '../lib/site';
import Banner from '../components/Banner';

export const metadata: Metadata = {
  title: SITE.name,
  description:
    '凱擘大寬頻光纖上網方案與第四台有線電視新申辦諮詢。服務內容：光纖上網、第四台有線電視、數位機上盒、Wi‑Fi 6 升級。服務區域：觀昇、南天、豐盟、新台北。由陳專員一對一協助評估方案、說明申辦流程，提供電話與 LINE 諮詢服務，快速確認服務範圍與最新優惠。'
};

export default function HomePage() {
  return (
    <>
      <Banner />

      <div className="container">
        <section className="hero">
          <div className="reveal" style={{ ['--d' as any]: '0ms' }}>
            <h1 className="h-title">光纖上網 ｜ 有線電視</h1>
            <p className="h-sub">
              一家人的網路與電視需求，先諮詢再申辦
              <br />
              交給凱擘大寬頻陳玉婷為您服務！
            </p>

            <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href={SITE.phoneTel}>
                立即撥打 {SITE.phoneDisplay} 陳專員
              </a>
              <a className="btn" href={SITE.lineUrl} rel="noopener" target="_blank">
                加入LINE作諮詢
              </a>
            </div>

            <p className="small" style={{ marginTop: 12 }}>
              專人一對一諮詢服務，不用排隊等待客服
            </p>
          </div>
        </section>

        {/* 電視區塊 */}
        <section className="section service-section" aria-label="有線電視服務">
          <div className="service-block">
            <div className="service-block-head">
              <h2 className="service-block-title">數位有線電視</h2>
              <p className="service-block-sub">智慧科技 極致娛樂</p>
            </div>

            <div className="service-grid-2">
              <div className="service-card">
                <div className="service-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="service-card-title">多元頻道</div>
                  <div className="service-card-subtitle">精彩隨你選</div>
                  <ul className="service-card-list">
                    <li>電影、新聞、綜藝、親子，超過200台頻道盡情挑選</li>
                    <li>搭配A1 Box智慧電視盒，OTT影音服務，體驗再升級</li>
                    <li>全新頻道編排，同類型節目一鍵直達，觀影更省時！</li>
                  </ul>
                </div>
              </div>

              <div className="service-card">
                <div className="service-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="service-card-title">貼心服務超有感</div>
                  <div className="service-card-subtitle">專業服務快速到府</div>
                  <ul className="service-card-list">
                    <li>多年在地深耕經營</li>
                    <li>提供數位服務、有線電視、光纖上網等多元加值服務</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 網路區塊 */}
        <section className="section service-section" aria-label="光纖上網服務">
          <div className="service-block">
            <div className="service-block-head">
              <h2 className="service-block-title">光纖網路</h2>
              <p className="service-block-sub">連結未來，駕馭科技</p>
            </div>

            <div className="service-grid-3">
              <div className="service-card">
                <div className="service-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="service-card-title">安全可靠</div>
                  <ul className="service-card-list">
                    <li>全臺骨幹多迴路路由</li>
                    <li>全天候數位化監控</li>
                    <li>網路品質安全可靠</li>
                  </ul>
                </div>
              </div>

              <div className="service-card">
                <div className="service-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="service-card-title">費用單純</div>
                  <ul className="service-card-list">
                    <li>無需繳交額外電路費</li>
                    <li>負擔小、費率單純</li>
                    <li>物超所值的網路體驗</li>
                  </ul>
                </div>
              </div>

              <div className="service-card">
                <div className="service-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="service-card-title">貼心服務</div>
                  <ul className="service-card-list">
                    <li>一通電話到府安裝</li>
                    <li>專業人員全程服務</li>
                    <li>安裝時間快速彈性</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="快速入口">
          <div className="home-actions">
            <a className="btn btn-lg" href="/apply">
              新申辦方案說明
            </a>
            <a className="btn btn-lg" href="/locations">
              查詢服務據點
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
