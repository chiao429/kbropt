'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE } from '../../lib/site';
import NetworkPlansPanel from '../../components/NetworkPlansPanel';

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
  const sections: AnimItem[] = [{ id: 'net', delayMs: 0 }];

  const { ref: wrapRef, visible } = useInView();

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <h1 className="h-title">方案內容</h1>
            <p className="h-sub">網路方案建議，方便您快速了解並比較。</p>
          </div>
        </div>
      </section>

      <div ref={wrapRef} className="plans-wrap">
        <NetworkPlansPanel
          className="plans-panel"
          animate
          delayMs={sections[0].delayMs ?? 0}
        />

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
