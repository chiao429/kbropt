'use client';

import { useMemo } from 'react';

type Props = {
  className?: string;
  /** 控制進場動畫用的 className，預設會直接渲染 */
  animate?: boolean;
  /** 進場延遲（毫秒），會套到 style --d */
  delayMs?: number;
};

export default function NetworkPlansPanel({ className, animate = false, delayMs = 0 }: Props) {
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

  return (
    <section
      className={`${className ?? ''} ${animate ? 'plans-panel anim' : ''}`.trim()}
      aria-label="網路方案建議"
      style={animate ? ({ ['--d' as any]: `${delayMs}ms` } as any) : undefined}
    >
      <h2 className="plans-panel-title">網路</h2>
      <p className="plans-panel-sub">挑選您適合的網速</p>

      <div className="speed-grid">
        {speedCards.map((c, idx) => (
          <div
            key={c.badge}
            className={`${animate ? 'speed-card anim' : 'speed-card'} ${animate ? 'is-visible' : ''}`.trim()}
            style={
              animate
                ? ({
                    ['--d' as any]: `${160 + idx * 90}ms`
                  } as any)
                : undefined
            }
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
        <img className="plans-bonus-img" src="/images/product.jpg" alt="產品展示" loading="lazy" />
      </div>

      <div className="plans-tip" style={{ marginTop: 18 }}>
        <strong>升級小秘訣</strong>：搭配 Mesh Wi-Fi 6，更快更穩更享受
      </div>

      <div className="plans-media">
        <img className="plans-media-img" src="/images/wifi.jpg" alt="Wi‑Fi 示意圖" loading="lazy" />
      </div>
    </section>
  );
}
