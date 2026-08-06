import { useState } from 'react';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';
import { upsertLeader } from '../../api/leadership';

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function TeamTab() {
  const { leaders, refetchLeaders } = useSiteContent();
  const { showToast } = useToast();
  const [drafts, setDrafts] = useState(() => Object.fromEntries(leaders.map((l) => [l.role, { ...l }])));
  const [saving, setSaving] = useState(false);

  const setField = (role, key) => (e) => setDrafts((d) => ({ ...d, [role]: { ...d[role], [key]: e.target.value } }));

  const handlePhoto = async (role, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    setDrafts((d) => ({ ...d, [role]: { ...d[role], photo: dataUrl } }));
  };

  const clearPhoto = (role) => setDrafts((d) => ({ ...d, [role]: { ...d[role], photo: null } }));

  const saveAll = async () => {
    setSaving(true);
    try {
      await Promise.all(Object.values(drafts).map((l) => upsertLeader(l)));
      await refetchLeaders();
      showToast('Leadership saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Leadership Details</h4>
      <div>
        {leaders.map((l) => {
          const d = drafts[l.role] || {};
          return (
            <div className="eitem" key={l.role}>
              <strong>{l.role}</strong>
              <div className="mf"><label>Name</label><input type="text" value={d.name || ''} onChange={setField(l.role, 'name')} /></div>
              <div className="mf"><label>Bio</label><textarea rows={2} value={d.bio || ''} onChange={setField(l.role, 'bio')} /></div>
              <div className="mf"><label>Email</label><input type="email" value={d.email || ''} onChange={setField(l.role, 'email')} /></div>
              <div className="mf">
                <label>Photo</label>
                {d.photo && <img className="partner-preview-thumb" src={d.photo} alt="" />}
                <input type="file" accept="image/*" onChange={(e) => handlePhoto(l.role, e)} />
                {d.photo && <button type="button" className="del-btn" style={{ marginTop: '0.5rem' }} onClick={() => clearPhoto(l.role)}>Remove Photo</button>}
              </div>
            </div>
          );
        })}
      </div>
      <button className="save-btn" onClick={saveAll} disabled={saving}>Save All</button>
    </div>
  );
}
