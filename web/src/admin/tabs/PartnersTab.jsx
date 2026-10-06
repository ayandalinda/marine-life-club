import { useEffect, useState } from 'react';
import { upsertPartner } from '../../api/partners';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function PartnersTab() {
  const { partners, refetchPartners } = useSiteContent();
  const { showToast } = useToast();
  const [drafts, setDrafts] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (Array.isArray(partners) && partners.length > 0) {
      setDrafts((prev) => {
        const next = { ...prev };
        for (const slot of [1, 2, 3, 4]) {
          const found = partners.find((p) => p.slot === slot);
          if (!next[slot]) {
            next[slot] = found ? { ...found } : { slot, name: '', logo: null, url: '' };
          }
        }
        return next;
      });
    }
  }, [partners]);

  const setField = (slot, key) => (e) =>
    setDrafts((d) => ({
      ...d,
      [slot]: { ...(d[slot] || { slot, name: '', logo: null, url: '' }), [key]: e.target.value },
    }));

  const handleLogo = async (slot, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    setDrafts((d) => ({
      ...d,
      [slot]: { ...(d[slot] || { slot, name: '', logo: null, url: '' }), logo: dataUrl },
    }));
  };

  const clearLogo = (slot) =>
    setDrafts((d) => ({
      ...d,
      [slot]: { ...(d[slot] || { slot, name: '', logo: null, url: '' }), logo: null },
    }));

  const saveAll = async () => {
    setSaving(true);
    try {
      await Promise.all(
        [1, 2, 3, 4].map((slot) => {
          const p = drafts[slot] || partners.find((item) => item.slot === slot) || { slot, name: '', logo: null, url: '' };
          return upsertPartner(slot, p);
        }),
      );
      await refetchPartners();
      showToast('Partners saved successfully.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Partner Tiles — Upload Logos &amp; Set Links</h4>
      <p style={{ color: 'var(--mist)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Showcase institutional collaborations, research partners, and conservation sponsors.
      </p>
      {[1, 2, 3, 4].map((slot) => {
        const d = drafts[slot] || partners.find((p) => p.slot === slot) || { slot, name: '', logo: null, url: '' };
        return (
          <div className="partner-edit-card" key={slot}>
            <strong>Partner Tile Slot #{slot}</strong>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="mf">
                <label>Partner Name</label>
                <input
                  type="text"
                  placeholder="e.g. SAAMBR"
                  value={d.name || ''}
                  onChange={setField(slot, 'name')}
                />
              </div>
              <div className="mf">
                <label>Website URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={d.url || ''}
                  onChange={setField(slot, 'url')}
                />
              </div>
            </div>
            <div className="mf">
              <label>Logo URL (direct web link)</label>
              <input
                type="url"
                placeholder="https://... (or upload image below)"
                value={typeof d.logo === 'string' && !d.logo.startsWith('data:') ? d.logo : ''}
                onChange={setField(slot, 'logo')}
              />
            </div>
            <div className="mf">
              <label>Or Upload Logo Image</label>
              {d.logo && (
                <div style={{ marginBottom: '0.5rem' }}>
                  <img className="partner-preview-thumb" src={d.logo} alt={d.name || `Slot ${slot}`} />
                </div>
              )}
              <input type="file" accept="image/*" onChange={(e) => handleLogo(slot, e)} />
              {d.logo && (
                <button
                  type="button"
                  className="del-btn"
                  style={{ marginTop: '0.5rem' }}
                  onClick={() => clearLogo(slot)}
                >
                  Remove Logo
                </button>
              )}
            </div>
          </div>
        );
      })}
      <button className="save-btn" onClick={saveAll} disabled={saving}>
        {saving ? 'Saving…' : 'Save Partners'}
      </button>
    </div>
  );
}
