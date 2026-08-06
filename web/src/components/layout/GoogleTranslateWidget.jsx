import { useEffect, useRef } from 'react';

// Google Translate mutates the DOM directly (injects nodes/scripts outside
// React's tree), so this subtree is intentionally never re-rendered by React
// after the initial mount — it's treated as an uncontrolled portal.
export default function GoogleTranslateWidget() {
  const ref = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate && ref.current) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          ref.current.id,
        );
      }
    };

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div id="google-translate-el" ref={ref} style={{ display: 'none' }} />;
}
