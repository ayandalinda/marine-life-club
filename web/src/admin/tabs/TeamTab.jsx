import { useEffect, useState } from 'react';
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
  const [drafts, setDrafts] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (Array.isArray(leaders) && leaders.length > 0) {
      setDrafts((prev) => {
        const next = { ...prev };
        for (const l of leaders) {
          if (!next[l.role]) {
            next[l.role] = { ...l };
          }
        }
        return next;
      });
    }
  }, [leaders]);

  const setField = (role, key) => (e) =>
    setDrafts((d) => ({
      ...d,
      [role]: { ...(d[role] || {}), [key]: e.target.value },
    }));

  const handlePhoto = async (role, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    setDrafts((d) => ({ ...d, [role]: { ...(d[role] || {}), photo: dataUrl } }));
  };

  const clearPhoto = (role) =>
    setDrafts((d) => ({ ...d, [role]: { ...(d[role] || {}), photo: null } }));

  const saveAll = async () => {
    setSaving(true);
    try {
      await Promise.all(
        leaders.map((leader) => {
          const d = drafts[leader.role] || leader;
          return upsertLeader({
            role: leader.role,
            name: d.name !== undefined ? d.name : leader.name,
            bio: d.bio !== undefined ? d.bio : leader.bio,
            email: d.email !== undefined ? d.email : leader.email,
            photo: d.photo !== undefined ? d.photo : leader.photo,
          });
        }),
      );
      await refetchLeaders();
      showToast('Leadership details saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Leadership Executive Committee</h4>
      <p style={{ color: 'var(--mist)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Update executive officer profiles, bios, contact emails, and portrait photographs.
      </p>

      <div>
        {leaders.map((l) => {
          const d = drafts[l.role] || l;
          return (
            <div className="eitem" key={l.role}>
              <strong style={{ color: 'var(--biolum)', fontSize: '0.9rem' }}>{l.role}</strong>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
                <div className="mf">
                  <label>Name</label>
                  <input
                    type="text"
                    value={d.name || ''}
                    onChange={setField(l.role, 'name')}
                  />
                </div>
                <div className="mf">
                  <label>Contact Email</label>
                  <input
                    type="email"
                    value={d.email || ''}
                    onChange={setField(l.role, 'email')}
                  />
                </div>
              </div>
              <div className="mf">
                <label>Bio / Academic Focus</label>
                <textarea
                  rows={2}
                  value={d.bio || ''}
                  onChange={setField(l.role, 'bio')}
                />
              </div>
              <div className="mf">
                <label>Photo URL (or upload below)</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={typeof d.photo === 'string' && !d.photo.startsWith('data:') ? d.photo : ''}
                  onChange={setField(l.role, 'photo')}
                />
              </div>
              <div className="mf">
                <label>Upload Photo</label>
                {d.photo && (
                  <div style={{ marginBottom: '0.5rem' }}>
                    <img
                      className="partner-preview-thumb"
                      src={d.photo}
                      alt={d.name || l.role}
                      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                )}
                <input type="file" accept="image/*" onChange={(e) => handlePhoto(l.role, e)} />
                {d.photo && (
                  <button
                    type="button"
                    className="del-btn"
                    style={{ marginTop: '0.5rem' }}
                    onClick={() => clearPhoto(l.role)}
                  >
                    Remove Photo
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <button className="save-btn" onClick={saveAll} disabled={saving}>
        {saving ? 'Saving…' : 'Save All Leaders'}
      </button>
    </div>
  );
}
