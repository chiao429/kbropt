import type { Metadata } from 'next';

import { SITE } from '../lib/site';
import Banner from '../components/Banner';
import ServiceAreaTable from '../components/ServiceAreaTable';
import HeroButtons from '../components/HeroButtons';
import ApplyButton from '../components/ApplyButton';

export const metadata: Metadata = {
  title: SITE.name,
  description:
    '凱擘大寬頻光纖上網新申辦諮詢。服務內容：光纖上網、Wi‑Fi 6 升級。服務區域：觀昇、南天、豐盟、新台北。由陳專員一對一協助評估方案、說明申辦流程，提供電話與 LINE 諮詢服務，快速確認服務範圍與最新優惠。'
};

export default function HomePage() {
  return (
    <>
      <Banner />

      <div className="container">
        <section className="hero">
          <div className="reveal" style={{ ['--d' as any]: '0ms' }}>
            <h1 className="h-title">光纖上網</h1>

            <HeroButtons />

            <p className="small" style={{ marginTop: 12 }}>
              專人一對一諮詢服務，不用排隊等待客服
            </p>
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

        <section className="section" aria-label="服務區域">
          <div className="reveal">
            <div className="apply-area-panel">
              <div className="apply-area-head">
                <h2 className="apply-area-title">服務區域</h2>
                <p className="apply-area-sub">以下為凱擘各系統台服務範圍（以實際可申辦狀況為準）</p>
              </div>
              <div className="apply-area-media">
                <ServiceAreaTable />
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="新申辦">
          <div className="reveal">
            <ApplyButton />
          </div>
        </section>
      </div>
    </>
  );
}
