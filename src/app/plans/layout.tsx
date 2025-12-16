import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '方案內容｜凱擘大寬頻光纖上網與有線電視',
  description:
    '凱擘大寬頻方案內容整理：電視收費項目與公告連結、光纖上網 300M/500M/1G 網速建議，並提供 Mesh Wi‑Fi 6 升級小秘訣與申辦諮詢入口，協助您快速比較與選擇適合的上網方案。'
};

export default function PlansLayout({ children }: { children: React.ReactNode }) {
  return children;
}
