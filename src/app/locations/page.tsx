import type { Metadata } from 'next';

import LocationsGrid from '../../components/LocationsGrid';

export const metadata: Metadata = {
  title: '服務據點查詢',
  description:
    '凱擘大寬頻服務據點查詢：依縣市瀏覽服務據點地址、電話與服務時間，地址可一鍵開啟 Google 地圖，快速找到最近據點並確認申辦與服務資訊。'
};

export default function LocationsPage() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-grid">
          <div className="reveal" style={{ ['--d' as any]: '0ms' }}>
            <h1 className="h-title">服務據點</h1>
            <p className="h-sub">依照縣市列出凱擘服務據點資訊（地址、電話、服務時間）。</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '40px 0' }}>
        <div className="reveal" style={{ ['--d' as any]: '80ms' }}>
          <LocationsGrid />
        </div>
      </section>
    </div>
  );
}
