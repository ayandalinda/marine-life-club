import { useEffect, useState } from 'react';
import { upsertTier } from '../../api/tiers';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';

function TiersEditor() {
  const { tiers, refetchTiers } = useSiteContent();
  const { showToast } = useToast();
  const [drafts, setDrafts] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (Array.isArray(tiers) && tiers.length > 0) {
      setDrafts((prev) => {
        const next = { ...prev };
        for (const t of tiers) {
          if (!next[t.slot]) {
            next[t.slot] = { ...t };
          }
        }
        return next;
      });
    }
  }, [tiers]);

  const setField = (slot, key) => (e) =>
    setDrafts((d) => ({
      ...d,
      [slot]: { ...(d[slot] || {}), [key]: e.target.value },
    }));

  const save = async () => {
    setSaving(true);
    try {
      await Promise.all(
        tiers.map((tier) => {
          const d = drafts[tier.slot] || tier;
          return upsertTier(tier.slot, {
            slot: tier.slot,
            icon: d.icon !== undefined ? d.icon : tier.icon,
            name: d.name !== undefined ? d.name : tier.name,
            price: d.price !== undefined ? d.price : tier.price,
            perks: d.perks !== undefined ? d.perks : tier.perks,
          });
        }),
      );
      await refetchTiers();
      showToast('Sponsorship proposal saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Edit Sponsorship Tiers</h4>
      {tiers.map((t) => {
        const d = drafts[t.slot] || t;
        return (
          <div className="eitem" key={t.slot}>
            <strong>Tier {t.slot}</strong>
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div className="mf">
                <label>Icon</label>
                <input type="text" value={d.icon || ''} onChange={setField(t.slot, 'icon')} />
              </div>
              <div className="mf">
                <label>Tier Name</label>
                <input type="text" value={d.name || ''} onChange={setField(t.slot, 'name')} />
              </div>
              <div className="mf">
                <label>Investment Price</label>
                <input type="text" value={d.price || ''} onChange={setField(t.slot, 'price')} />
              </div>
            </div>
            <div className="mf">
              <label>Sponsorship Benefits &amp; Perks</label>
              <textarea rows={2} value={d.perks || ''} onChange={setField(t.slot, 'perks')} />
            </div>
          </div>
        );
      })}
      <button className="save-btn" onClick={save} disabled={saving}>
        {saving ? 'Saving…' : 'Save Tiers'}
      </button>
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

  useEffect(() => {
    if (siteContent.contacts) {
      setContacts({
        general: siteContent.contacts.general || '',
        partnerships: siteContent.contacts.partnerships || '',
        president: siteContent.contacts.president || '',
      });
    }
  }, [siteContent.contacts]);

  const set = (key) => (e) => setContacts((c) => ({ ...c, [key]: e.target.value }));

  const save = async () => {
    setSaving(true);
    try {
      await updateSiteContent({ contacts });
      showToast('Contact channels saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Contact Channels</h4>
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
