'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { SITE } from '../../lib/site';

type AnimItem = {
  id: string;
  delayMs?: number;
};

function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { root: null, threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

export default function PlansPage() {
  const tvRows = useMemo(
    () => [
      { item: '收視費', fee: '月繳/季繳' },
      { item: '半年繳/年繳', fee: '依各地公告費率收費' },
      { item: '安裝費(單機)', fee: '裝機費/分機費' },
      { item: '移機費/復機費', fee: '依各地公告費率收費' },
      { item: '低收入戶優惠', fee: '依各地公告費率收費' },
      { item: '數位頻道組優惠', fee: '依各地公告費率收費' }
    ],
    []
  );

  const speedCards: Array<{
    badge: string;
    title: string;
    desc: string;
    bullets: string[];
  }> = useMemo(
    () => [
      {
        badge: '300M',
        title: '日常上網不卡卡，300M剛剛好！',
        desc: '適合小資族、小家庭、樂齡生活日常使用需求',
        bullets: ['日常網頁瀏覽', '追劇、社群媒體、網路購物', '線上課程、高畫質影片、視訊通話']
      },
      {
        badge: '500M',
        title: '工作娛樂兩不誤，500M全家滿足！',
        desc: '適合居家工作者或一般家庭',
        bullets: ['穩定線上視訊會議', '串流高畫質影片', '線上遊戲不延遲']
      },
      {
        badge: '1G',
        title: '極速1G，體驗暢快網路！',
        desc: '適合多成員家庭、多裝置用戶，或重度網路需求者',
        bullets: [
          '支援4K高清影音、大量下載、VR/多人線上遊戲',
          '影音內容創作、智慧家電/遠端監控',
          '大坪數/室內死角/隔間環境，傳輸更遠快速'
        ]
      }
    ],
    []
  );

  const sections: AnimItem[] = useMemo(
    () => [
      { id: 'tv', delayMs: 0 },
      { id: 'net', delayMs: 80 }
    ],
    []
  );

  const { ref: wrapRef, visible } = useInView();

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <h1 className="h-title">方案內容</h1>
            <p className="h-sub">電視收費項目與網路方案建議，方便您快速了解並比較。</p>
          </div>
        </div>
      </section>

      <div ref={wrapRef} className="plans-wrap">
        <section
          className={`plans-panel anim ${visible ? 'is-visible' : ''}`}
          style={{ ['--d' as any]: `${sections[0].delayMs ?? 0}ms` }}
          aria-label="電視收費說明"
        >
          <h2 className="plans-panel-title">電視</h2>
          <p className="plans-panel-sub">收費項目與收費標準（實際以各地公告費率為準）</p>

          <table className="plans-table">
            <thead>
              <tr>
                <th style={{ width: '50%' }}>收費項目</th>
                <th>收費標準</th>
              </tr>
            </thead>
            <tbody>
              {tvRows.map((r) => (
                <tr key={r.item}>
                  <td>{r.item}</td>
                  <td>{r.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <a
            className="plans-link"
            href="https://www.kbro.com.tw/K01/content_18_2683_3425.html#target=1"
            target="_blank"
            rel="noopener"
          >
            詳見凱擘大寬頻官方公告
          </a>
        </section>

        <section
          className={`plans-panel anim ${visible ? 'is-visible' : ''}`}
          style={{ ['--d' as any]: `${sections[1].delayMs ?? 0}ms` }}
          aria-label="網路方案建議"
        >
          <h2 className="plans-panel-title">網路</h2>
          <p className="plans-panel-sub">挑選您適合的網速</p>

          <div className="speed-grid">
            {speedCards.map((c, idx) => (
              <div
                key={c.badge}
                className={`speed-card anim ${visible ? 'is-visible' : ''}`}
                style={{ ['--d' as any]: `${160 + idx * 90}ms` }}
              >
                <div className="speed-badge">{c.badge}</div>
                <div className="speed-title">{c.title}</div>
                <div className="speed-desc">{c.desc}</div>
                <ul className="speed-list">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="plans-bonus">
            <img className="plans-bonus-img" src="/images/好禮多選.png" alt="好禮多選" loading="lazy" />
          </div>

          <div className="plans-tip" style={{ marginTop: 18 }}>
            <strong>升級小秘訣</strong>：搭配 Mesh Wi-Fi 6，更快更穩更享受
          </div>

          <div className="plans-media">
            <img className="plans-media-img" src="/images/Mesh Wi-Fi 6.jpg" alt="Mesh Wi-Fi 6" loading="lazy" />
          </div>
        </section>

        <section className={`anim ${visible ? 'is-visible' : ''}`} style={{ ['--d' as any]: '420ms' }} aria-label="立即聯絡">
          <div className="home-actions">
            <a className="btn btn-lg" href="/apply">
              新申辦諮詢
            </a>
            <a className="btn btn-lg" href="/locations">
              服務據點查詢
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
