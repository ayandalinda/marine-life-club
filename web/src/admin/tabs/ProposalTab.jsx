import { useState } from 'react';
import { upsertTier } from '../../api/tiers';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';

function TiersEditor() {
  const { tiers, refetchTiers } = useSiteContent();
  const { showToast } = useToast();
  const [drafts, setDrafts] = useState(() => Object.fromEntries(tiers.map((t) => [t.slot, { ...t }])));
  const [saving, setSaving] = useState(false);

  const setField = (slot, key) => (e) => setDrafts((d) => ({ ...d, [slot]: { ...d[slot], [key]: e.target.value } }));

  const save = async () => {
    setSaving(true);
    try {
      await Promise.all(Object.values(drafts).map((t) => upsertTier(t.slot, t)));
      await refetchTiers();
      showToast('Proposal saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Edit Sponsorship Tiers</h4>
      {tiers.map((t) => {
        const d = drafts[t.slot] || {};
        return (
          <div className="eitem" key={t.slot}>
            <strong>Tier {t.slot}</strong>
            <div className="mf"><label>Icon (emoji)</label><input type="text" value={d.icon || ''} onChange={setField(t.slot, 'icon')} /></div>
            <div className="mf"><label>Name</label><input type="text" value={d.name || ''} onChange={setField(t.slot, 'name')} /></div>
            <div className="mf"><label>Price</label><input type="text" value={d.price || ''} onChange={setField(t.slot, 'price')} /></div>
            <div className="mf"><label>Perks</label><textarea rows={2} value={d.perks || ''} onChange={setField(t.slot, 'perks')} /></div>
          </div>
        );
      })}
      <button className="save-btn" onClick={save} disabled={saving}>Save Proposal</button>
    </div>
  );
}

function ContactsEditor() {
  const { siteContent, updateSiteContent } = useSiteContent();
  const { showToast } = useToast();
  const [contacts, setContacts] = useState({
    general: siteContent.contacts?.general || '',
    partnerships: siteContent.contacts?.partnerships || '',
    president: siteContent.contacts?.president || '',
  });
  const [saving, setSaving] = useState(false);
  const set = (key) => (e) => setContacts((c) => ({ ...c, [key]: e.target.value }));

  const save = async () => {
    setSaving(true);
    try {
      await updateSiteContent({ contacts });
      showToast('Contacts saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Contact Details</h4>
      <div className="mf"><label>General Email</label><input type="email" value={contacts.general} onChange={set('general')} /></div>
      <div className="mf"><label>Partnerships Email</label><input type="email" value={contacts.partnerships} onChange={set('partnerships')} /></div>
      <div className="mf"><label>President Email</label><input type="email" value={contacts.president} onChange={set('president')} /></div>
      <button className="save-btn" onClick={save} disabled={saving}>Save Contacts</button>
    </div>
  );
}

export default function ProposalTab() {
  return (
    <>
      <TiersEditor />
      <ContactsEditor />
    </>
  );
}
