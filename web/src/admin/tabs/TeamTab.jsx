import { useEffect, useState } from 'react';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';
import { deleteLeader, upsertLeader } from '../../api/leadership';

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
  const [newLeader, setNewLeader] = useState({ role: '', name: '', email: '', bio: '', photo: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (Array.isArray(leaders)) {
      setDrafts((prev) => {
        const next = {};
        for (const leader of leaders) next[leader.role] = prev[leader.role] || { ...leader };
        return next;
      });
    }
  }, [leaders]);

  const setField = (role, key) => (e) =>
    setDrafts((draft) => ({ ...draft, [role]: { ...(draft[role] || {}), [key]: e.target.value } }));

  const handlePhoto = async (role, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const photo = await readFileAsDataUrl(file);
    setDrafts((draft) => ({ ...draft, [role]: { ...(draft[role] || {}), photo } }));
  };

  const saveAll = async () => {
    setSaving(true);
    try {
      await Promise.all(leaders.map((leader) => upsertLeader({ ...leader, ...drafts[leader.role] })));
      await refetchLeaders();
      showToast('Leadership details saved.');
    } finally {
      setSaving(false);
    }
  };

  const addLeader = async () => {
    const role = newLeader.role.trim();
    if (!role || !newLeader.name.trim()) return showToast('Enter the executive role and name.');
    if (leaders.some((leader) => leader.role.toLowerCase() === role.toLowerCase())) {
      return showToast('That role already exists. Edit its current profile instead.');
    }
    setSaving(true);
    try {
      await upsertLeader({ ...newLeader, role });
      setNewLeader({ role: '', name: '', email: '', bio: '', photo: '' });
      await refetchLeaders();
      showToast('Executive added.');
    } finally {
      setSaving(false);
    }
  };

  const removeLeader = async (leader) => {
    if (!window.confirm(`Remove ${leader.role} from the leadership roster?`)) return;
    setSaving(true);
    try {
      await deleteLeader(leader.role);
      await refetchLeaders();
      showToast(`${leader.role} removed.`);
    } finally {
      setSaving(false);
    }
  };

  const renderFields = (role, data, isNew = false) => {
    const update = (key, value) => isNew
      ? setNewLeader((current) => ({ ...current, [key]: value }))
      : null;
    const field = (key) => isNew ? (e) => update(key, e.target.value) : setField(role, key);
    return <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
        {isNew && <div className="mf"><label>Executive Role</label><input value={data.role} onChange={field('role')} placeholder="e.g. Academic Officer" /></div>}
        <div className="mf"><label>Name</label><input value={data.name || ''} onChange={field('name')} /></div>
        <div className="mf"><label>Contact Email</label><input type="email" value={data.email || ''} onChange={field('email')} /></div>
      </div>
      <div className="mf"><label>Bio / Academic Focus</label><textarea rows={2} value={data.bio || ''} onChange={field('bio')} /></div>
      <div className="mf"><label>Photo URL</label><input type="url" placeholder="https://..." value={typeof data.photo === 'string' && !data.photo.startsWith('data:') ? data.photo : ''} onChange={field('photo')} /></div>
      {data.photo && <div style={{ marginBottom: '0.5rem' }}><img className="partner-preview-thumb" src={data.photo} alt={data.name || role || 'New executive'} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: '50%' }} /></div>}
      <div className="mf"><label>Upload Photo</label><input type="file" accept="image/*" onChange={async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const photo = await readFileAsDataUrl(file);
        if (isNew) setNewLeader((current) => ({ ...current, photo }));
        else setDrafts((draft) => ({ ...draft, [role]: { ...draft[role], photo } }));
      }} /></div>
    </>;
  };

  return (
    <div className="edit-group">
      <h4>Leadership Executive Committee</h4>
      <p style={{ color: 'var(--mist)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Add executive roles, update profiles, and remove former officers.
      </p>

      {leaders.map((leader) => {
        const data = drafts[leader.role] || leader;
        return (
          <div className="eitem" key={leader.role}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <strong style={{ color: 'var(--biolum)', fontSize: '0.9rem' }}>{leader.role}</strong>
              <button type="button" className="del-btn" disabled={saving} onClick={() => removeLeader(leader)}>Remove Executive</button>
            </div>
            {renderFields(leader.role, data)}
          </div>
        );
      })}

      <div className="eitem" style={{ marginTop: '1.5rem' }}>
        <strong style={{ color: 'var(--biolum)', fontSize: '0.9rem' }}>Add Executive</strong>
        {renderFields('', newLeader, true)}
        <button className="save-btn" onClick={addLeader} disabled={saving}>Add Executive</button>
      </div>
      {leaders.length > 0 && <button className="save-btn" onClick={saveAll} disabled={saving}>
        {saving ? 'Saving…' : 'Save All Leaders'}
      </button>}
    </div>
  );
}
