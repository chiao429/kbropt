'use client';

export default function ApplyButton() {
  return (
    <div className="home-actions">
      <a 
        className="btn btn-lg" 
        href="/apply"
        onClick={(e) => {
          e.preventDefault();
          if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
            console.log('Sending conversion event, then navigating to apply page...');
            (window as any).gtag_report_conversion();
            setTimeout(() => {
              window.location.href = '/apply';
            }, 300);
          } else {
            console.log('gtag_report_conversion not available, navigating directly');
            window.location.href = '/apply';
          }
        }}
      >
        新申辦
      </a>
    </div>
  );
}
