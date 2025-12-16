'use client';

import { useEffect, useMemo, useState } from 'react';

type ServiceAreaItem = {
  county: string;
  operator: string;
  areas: string[];
};

function isValidItem(x: any): x is ServiceAreaItem {
  return (
    x &&
    typeof x === 'object' &&
    typeof x.county === 'string' &&
    typeof x.operator === 'string' &&
    Array.isArray(x.areas) &&
    x.areas.every((a: any) => typeof a === 'string')
  );
}

export default function ServiceAreaTable() {
  const [items, setItems] = useState<ServiceAreaItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch('/serviceArea.JSON', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('JSON 格式錯誤：根節點需為陣列');

        const normalized = data.filter(isValidItem);
        if (normalized.length === 0) throw new Error('JSON 內容格式不符合（需含 county/operator/areas）');

        if (!cancelled) {
          setItems(normalized);
          setError(null);
        }
      } catch (e: any) {
        if (!cancelled) {
          setItems(null);
          setError(e?.message || '載入失敗');
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const rows = useMemo(() => {
    if (!items) return [];
    return items.map((it) => ({
      key: `${it.county}-${it.operator}`,
      county: it.county,
      operator: it.operator,
      areas: it.areas.join('、')
    }));
  }, [items]);

  if (error) {
    return (
      <div className="apply-area-note">
        無法載入服務區域資料：{error}
        <div className="small" style={{ marginTop: 8 }}>
          請確認 <code>public/serviceArea.JSON</code> 是合法 JSON 且結構為：
          <code style={{ display: 'block', marginTop: 6 }}>
            [{'{'}"county":"…","operator":"…","areas":["…"]{'}'}]
          </code>
        </div>
      </div>
    );
  }

  if (!rows.length) {
    return <div className="apply-area-note">載入中…</div>;
  }

  return (
    <div className="apply-area-table-wrap" role="region" aria-label="服務區域表格" tabIndex={0}>
      <table className="apply-area-table">
        <thead>
          <tr>
            <th style={{ width: '18%' }}>縣市</th>
            <th style={{ width: '18%' }}>有線電視系統台（第四台）</th>
            <th>服務範圍</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key}>
              <td>{r.county}</td>
              <td>{r.operator}</td>
              <td>{r.areas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
