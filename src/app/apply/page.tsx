import type { Metadata } from 'next';

import { SITE } from '../../lib/site';
import ServiceAreaTable from '../../components/ServiceAreaTable';

export const metadata: Metadata = {
  title: `新申辦諮詢｜${SITE.name}`,
  description:
    '凱擘大寬頻新申辦諮詢。服務內容：光纖上網、第四台有線電視、數位機上盒、Wi‑Fi 6 升級。服務區域：觀昇、南天、豐盟、新台北。由陳專員提供電話與 LINE 一對一即時諮詢，並可查詢服務區域（有線電視系統台（第四台））與可申辦範圍。'
};

export default function ApplyPage() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-grid">
          <div className="reveal">
            <h1 className="h-title">新申辦專線與線上諮詢</h1>
            <p className="h-sub">想了解家中適合的方案嗎？直接撥打新申辦專線或加入LINE詢問！</p>
            <div className="kpis">
              <div className="kpi">新申辦專線：{SITE.phoneDisplay}</div>
              <div className="kpi">LINE：點按即可加入</div>
            </div>
            <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href={SITE.phoneTel}>
                立即撥打
              </a>
              <a className="btn" href={SITE.lineUrl} rel="noopener" target="_blank">
                加入 LINE 諮詢
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <h2>您可以先提供的資訊（加快協助速度）</h2>
          <div className="grid-3">
            <div className="feature">
              <h3>地區/社區</h3>
              <p>你所在的縣市、區域或社區名稱，方便快速確認可用資源。</p>
            </div>
            <div className="feature">
              <h3>使用情境</h3>
              <p>居家上班、遠距學習、遊戲、追劇或多裝置同時上網等。</p>
            </div>
            <div className="feature">
              <h3>希望的聯絡方式</h3>
              <p>電話快速確認，或先用 LINE 文字/圖片說明狀況。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="服務區域">
        <div className="reveal">
          <div className="apply-area-panel">
            <div className="apply-area-head">
              <h2 className="apply-area-title">服務區域</h2>
              <p className="apply-area-sub">以下為凱擘各有線電視系統台（第四台）服務範圍（以實際可申辦狀況為準）</p>
            </div>
            <div className="apply-area-media">
              <ServiceAreaTable />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
