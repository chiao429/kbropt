import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '客服與支援',
  description:
    '凱擘大寬頻客服與支援常見項目：網路品質疑慮、權益/意見反映、預約與合約相關問題等，提供官方客服專線資訊，協助您快速取得支援。'
};

export default function SupportPage() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <h1 className="h-title">客服與支援</h1>
            <p className="h-sub">
              以下項目屬於客服/支援範圍，建議直接聯繫官方客服協助處理。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="support-grid">
          <div className="support-card">
            <div className="support-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12.5c4.7-4.7 9.3-4.7 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 15.5c3.1-3.1 5.9-3.1 9 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M11.5 19.2h1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="support-card-title">網路品質疑慮</div>
              <div className="support-card-text">速度不穩、延遲高、斷線等狀況，請由客服協助檢測與排除。</div>
            </div>
          </div>

          <div className="support-card">
            <div className="support-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 6.5h11v7.2c0 2.2-1.8 4-4 4H10.5L7 20.2V17.7c-0.3 0-0.5 0-0.5 0-1.1 0-2-0.9-2-2V8.5c0-1.1 0.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M8.5 10h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8.5 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="support-card-title">權益或意見反映</div>
              <div className="support-card-text">帳務、權益、申訴或建議，請由客服受理與追蹤。</div>
            </div>
          </div>

          <div className="support-card">
            <div className="support-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.5h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 4.5v15h10v-15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M9 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 12.5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="support-card-title">預約 / 合約相關問題</div>
              <div className="support-card-text">預約裝機、合約、續約或條款疑問，建議由客服協助確認。</div>
            </div>
          </div>
        </div>

        <div className="support-footer" style={{ marginTop: 24 }}>
          官方客服專線：{' '}
          <a href="tel:0809006899" className="support-phone">
            0809-006-899
          </a>
        </div>
      </section>
    </div>
  );
}
