'use client';

import { useEffect, useState } from 'react';

type ServiceHours = Record<string, string>;

type LocationItem = {
  city?: string;
  address?: string;
  phone?: string;
  fax?: string;
  service_hours?: ServiceHours;
};

type AddressData = {
  service_locations?: LocationItem[];
};

function escapeHtml(str: string) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatServiceHours(serviceHours?: ServiceHours) {
  if (!serviceHours) return null;

  const order = ['weekday', 'saturday', 'sunday', 'weekend', 'holiday'];
  const labels: Record<string, string> = {
    weekday: '平日',
    saturday: '週六',
    sunday: '週日',
    weekend: '週末',
    holiday: '國定假日'
  };

  const entries = order
    .filter((k) => serviceHours[k] !== undefined)
    .map((k) => ({ k, v: serviceHours[k] }));

  if (entries.length === 0) return null;

  return (
    <div style={{ marginTop: 14 }} className="small">
      {entries.map((e) => (
        <div key={e.k}>
          <strong>{labels[e.k] ?? e.k}</strong>：{e.v}
        </div>
      ))}
    </div>
  );
}

function stripFloorFromAddress(address: string) {
  if (!address) return '';
  const floorIndex = address.indexOf('樓');
  if (floorIndex === -1) return address;

  const beforeFloor = address.slice(0, floorIndex);
  const lastNoIndex = beforeFloor.lastIndexOf('號');

  if (lastNoIndex !== -1) return beforeFloor.slice(0, lastNoIndex + 1).trim();
  return beforeFloor.trim();
}

export default function LocationsGrid() {
  const [items, setItems] = useState<LocationItem[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch('/address.JSON', { cache: 'no-store' });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as AddressData;
        const list = Array.isArray(data?.service_locations) ? data.service_locations : [];
        if (!cancelled) setItems(list);
      } catch {
        if (!cancelled) setError(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="grid-3" aria-live="polite">
        <div className="feature">
          <h3>載入失敗</h3>
          <p>無法載入服務據點資料，請稍後再試。</p>
        </div>
      </div>
    );
  }

  if (items === null) {
    return (
      <div className="grid-3" aria-live="polite">
        <div className="feature">
          <h3>載入中</h3>
          <p>正在載入服務據點資料…</p>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="grid-3" aria-live="polite">
        <div className="feature">
          <h3>目前沒有資料</h3>
          <p>找不到可顯示的服務據點。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid-3" aria-live="polite">
      {items.map((item, idx) => {
        const city = item.city ?? '';
        const address = item.address ?? '';
        const phone = item.phone ?? '';
        const fax = item.fax ?? '';
        const mapQuery = `${city} ${stripFloorFromAddress(address)}`.trim();
        const mapHref = mapQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}` : '';
        const phoneDigits = phone.replace(/[^0-9+]/g, '');
        const phoneHref = phoneDigits ? `tel:${phoneDigits}` : '';

        return (
          <div key={idx} className="feature">
            <h3>{city || '服務據點'}</h3>
            <p>
              {mapHref ? (
                <a href={mapHref} rel="noopener" target="_blank">
                  {address}
                </a>
              ) : (
                address
              )}
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>電話</strong>：{' '}
              {phoneHref ? <a href={phoneHref}>{escapeHtml(phone)}</a> : escapeHtml(phone)}
            </p>
            {fax ? (
              <p style={{ marginTop: 6 }}>
                <strong>傳真</strong>：{fax}
              </p>
            ) : null}
            {formatServiceHours(item.service_hours)}
          </div>
        );
      })}
    </div>
  );
}
