import { useState } from 'react';
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
  const [drafts, setDrafts] = useState(() =>
    Object.fromEntries([1, 2, 3, 4].map((slot) => [slot, partners.find((p) => p.slot === slot) || { slot, name: '', logo: null, url: '' }])),
  );
  const [saving, setSaving] = useState(false);

  const setField = (slot, key) => (e) => setDrafts((d) => ({ ...d, [slot]: { ...d[slot], [key]: e.target.value } }));

  const handleLogo = async (slot, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    setDrafts((d) => ({ ...d, [slot]: { ...d[slot], logo: dataUrl } }));
  };

  const clearLogo = (slot) => setDrafts((d) => ({ ...d, [slot]: { ...d[slot], logo: null } }));

  const saveAll = async () => {
    setSaving(true);
    try {
      await Promise.all([1, 2, 3, 4].map((slot) => upsertPartner(slot, drafts[slot])));
      await refetchPartners();
      showToast('Partners saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Partner Tiles — Upload Logos &amp; Set Names</h4>
      <p style={{ color: 'var(--mist)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Upload a logo image and set the partner's name and website link for each tile.
      </p>
      {[1, 2, 3, 4].map((slot) => {
        const d = drafts[slot];
        return (
          <div className="partner-edit-card" key={slot}>
            <strong>Slot {slot}</strong>
            <div className="mf"><label>Name</label><input type="text" value={d.name || ''} onChange={setField(slot, 'name')} /></div>
            <div className="mf"><label>Website URL</label><input type="url" value={d.url || ''} onChange={setField(slot, 'url')} /></div>
            <div className="mf">
              <label>Logo</label>
              {d.logo && <img className="partner-preview-thumb" src={d.logo} alt="" />}
              <input type="file" accept="image/*" onChange={(e) => handleLogo(slot, e)} />
              {d.logo && <button type="button" className="del-btn" style={{ marginTop: '0.5rem' }} onClick={() => clearLogo(slot)}>Remove Logo</button>}
            </div>
          </div>
        );
      })}
      <button className="save-btn" onClick={saveAll} disabled={saving}>Save Partners</button>
    </div>
  );
}
