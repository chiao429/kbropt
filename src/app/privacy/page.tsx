import type { Metadata } from 'next';

import { SITE } from '../../lib/site';

export const metadata: Metadata = {
  title: `隱私權與個資｜${SITE.name}`,
  description:
    '本頁提供凱擘大寬頻隱私權政策與個人資料保護法相關連結，協助您了解個資與隱私權說明；實際政策內容以凱擘大寬頻官方公告為準。'
};

export default function PrivacyPage() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-grid">
          <div className="reveal">
            <h1 className="h-title">隱私權與個資相關資訊</h1>
            <p className="h-sub">以下連結依照提供資訊保留，供您查閱。</p>
            <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href={SITE.privacyPolicyUrl} rel="noopener" target="_blank">
                隱私權政策
              </a>
              <a className="btn" href={SITE.personalDataProtectionUrl} rel="noopener" target="_blank">
                個人資料保護法
              </a>
            </div>
          </div>

          <aside className="card card-pad reveal">
            <div className="card-title">聯絡方式</div>
            <div className="cta-stack">
              <a className="btn btn-primary" href={SITE.phoneTel}>
                新申辦：{SITE.phoneDisplay}
              </a>
              <a className="btn" href={SITE.lineUrl} rel="noopener" target="_blank">
                LINE 聯絡我
              </a>
            </div>
            <p className="small" style={{ margin: '12px 0 0' }}>
              維修/續約相關請以官方客服專線為主：{SITE.officialSupportDisplay}
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <h2>注意事項</h2>
          <p>
            本網站為靜態導覽頁，不主動蒐集敏感個資；若你透過電話或 LINE 主動提供資訊，請依官方政策與法規規範為準。
          </p>
        </div>
      </section>
    </div>
  );
}
