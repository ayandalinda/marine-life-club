import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { SEARCH_INDEX } from './searchIndex';

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const results = q
    ? SEARCH_INDEX.filter((r) => r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q))
    : [];

  const goTo = (hash) => {
    onClose();
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="search-wrap show" role="search" aria-label="Site search">
      <div className="search-box">
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Search sections, programmes, content..."
          autoComplete="off"
          aria-label="Search the website"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
        />
        <div className="search-results">
          {q && results.length === 0 && (
            <div className="sr-item"><span>No results found. Try "events", "about", "leadership"...</span></div>
          )}
          {results.map((r) => (
            <div className="sr-item" key={r.title} onClick={() => goTo(r.section)}>
              <strong>{r.title}</strong><span>{r.desc}</span>
            </div>
          ))}
        </div>
        <div className="search-close">
          <button onClick={onClose} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <X size={15} /> Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
