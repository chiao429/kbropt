import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '常見問答',
  description:
    '凱擘大寬頻常見問答：光纖上網方案服務範圍、申辦網路流程、Wi‑Fi 6 Mesh、網路守護家資安防護、官網與專員服務差異與優惠方案，提升您諮詢效率。'
};

const faqs = [
  {
    q: '請問陳專員，你們 凱擘大寬頻 的 光纖上網方案 服務範圍涵蓋哪些地區？',
    a: '陳專員服務範圍涵蓋 凱擘大寬頻 旗下各系統台區域，包含北部（新北市/台北市）、桃園、新竹、中部與南部等地。只要您在服務範圍內，都可以向我申辦網路並享有最新優惠！'
  },
  {
    q: '申辦網路後，家裡 Wi-Fi 訊號不好，你們有什麼解決方案嗎？',
    a: '這是許多客戶的疑問。我們最新的 光纖上網方案 可以加價升級 Mesh Wi-Fi 6 設備。這個服務能讓您的家中網路訊號零死角，全戶皆通。透過我申辦，可以幫您評估最適合您格局的 Wi-Fi 神器 配置！'
  },
  {
    q: '我很擔心網路詐騙和駭客攻擊，凱擘的 申辦網路 服務有提供資安防護嗎？',
    a: '絕對有！我們的 光纖上網方案 搭配了「網路守護家」服務。這項服務是由趨勢科技合作開發，可以在網路端就為您的全家設備（手機、電腦等）進行防駭、防詐、防網路攻擊，提供您更安全的智慧生活環境。'
  },
  {
    q: '為什麼我應該直接透過這個網站的專員申辦 光纖上網，而不是直接去官網？',
    a: '透過您的專屬顧問（陳專員）申辦，能享有以下優勢：專屬方案評估：專員能根據您家中的實際需求和所在區域（例如 大安文山 或 新唐城），快速篩選並提供隱藏優惠方案。效率與速度：申辦網路流程從諮詢到安裝進度追蹤，全程由單一專員負責，效率更高。在地服務：專員熟悉不同系統台（如 北桃園、新竹振道）的在地特色和服務細節，能提供更貼切的建議。'
  }
] as const;

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-grid">
          <div className="reveal">
            <h1 className="h-title">常見問答</h1>
            <p className="h-sub">
              這裡整理凱擘大寬頻光纖上網相關常見問題，讓您在申辦前快速了解。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <div className="faq-wrap">
            {faqs.map((f, idx) => (
              <details key={idx} className="faq-item">
                <summary className="faq-q">{f.q}</summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
    </div>
  );
}
