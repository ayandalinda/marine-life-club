import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { useSiteContent } from '../../contexts/SiteContentContext';

const STORAGE_KEY = 'umlc_cookies_ok';

export default function CookieBanner({ onOpenPrivacy }) {
  const { siteContent } = useSiteContent();
  const [accepted, setAccepted] = useState(() => localStorage.getItem(STORAGE_KEY) === '1');

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === '1') setAccepted(true);
  }, []);

  if (!siteContent.settings?.cookieBanner || accepted) return null;

  return (
    <div className="cookie-banner">
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Cookie size={18} style={{ color: 'var(--biolum)', flexShrink: 0 }} />
        <span>
          This website uses browser storage to save your preferences and anonymous statistics. By continuing, you
          agree to our{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }} style={{ color: 'var(--biolum)' }}>
            Privacy Policy
          </a>{' '}
          (POPIA compliant).
        </span>
      </p>
      <button
        className="save-btn"
        style={{ marginTop: 0 }}
        onClick={() => {
          localStorage.setItem(STORAGE_KEY, '1');
          setAccepted(true);
        }}
      >
        Accept &amp; Continue
      </button>
    </div>
  );
}
