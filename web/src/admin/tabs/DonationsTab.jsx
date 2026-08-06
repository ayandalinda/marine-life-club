import { useEffect, useState } from 'react';
import { listDonations, setDonationVerified, deleteDonation } from '../../api/donations';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';
import { downloadCSV } from '../../lib/downloads';

function BankDetailsForm() {
  const { siteContent, updateSiteContent } = useSiteContent();
  const { showToast } = useToast();
  const [open, setOpen] = useState(false);
  const [bank, setBank] = useState({
    bank: siteContent.bankDetails?.bank || '',
    accName: siteContent.bankDetails?.accName || '',
    accNum: siteContent.bankDetails?.accNum || '',
    branch: siteContent.bankDetails?.branch || '',
  });
  const [saving, setSaving] = useState(false);
  const set = (key) => (e) => setBank((b) => ({ ...b, [key]: e.target.value }));

  const save = async () => {
    setSaving(true);
    try {
      await updateSiteContent({ bankDetails: bank });
      showToast('Bank details saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div style={{ fontSize: '0.8rem', color: 'var(--biolum)', cursor: 'pointer' }} onClick={() => setOpen((o) => !o)}>
        ⚙ Bank Details Settings
      </div>
      {open && (
        <div style={{ background: 'var(--deep)', border: '1px solid rgba(0,245,196,0.15)', borderRadius: 6, padding: '1.25rem', margin: '1.25rem 0' }}>
          <h4 style={{ marginBottom: '0.75rem', fontSize: '0.82rem' }}>Club Bank Account Details</h4>
          <div className="mf"><label>Bank Name</label><input type="text" placeholder="e.g. FNB" value={bank.bank} onChange={set('bank')} /></div>
          <div className="mf"><label>Account Name</label><input type="text" placeholder="UKZN Marine Life Club" value={bank.accName} onChange={set('accName')} /></div>
          <div className="mf"><label>Account Number</label><input type="text" placeholder="Account number" value={bank.accNum} onChange={set('accNum')} /></div>
          <div className="mf"><label>Branch Code</label><input type="text" placeholder="Branch code" value={bank.branch} onChange={set('branch')} /></div>
          <button className="save-btn" onClick={save} disabled={saving}>Save Bank Details</button>
        </div>
      )}
    </>
  );
}

export default function DonationsTab() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  const load = async () => {
    setLoading(true);
    try {
      setDonations(await listDonations());
    } catch (err) {
      showToast(err.message || 'Failed to load donations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleVerify = async (d) => {
    await setDonationVerified(d.id, !d.verified);
    load();
  };

  const remove = async (d) => {
    if (!window.confirm('Delete this donation record?')) return;
    await deleteDonation(d.id);
    load();
  };

  const exportCSV = () => downloadCSV('umlc-donations.csv', donations, ['name', 'email', 'amount', 'date', 'verified']);

  const total = donations.reduce((sum, d) => sum + Number(d.amount || 0), 0);
  const verifiedTotal = donations.filter((d) => d.verified).reduce((sum, d) => sum + Number(d.amount || 0), 0);

  return (
    <div className="edit-group">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <h4 style={{ marginBottom: 0 }}>Donation Log</h4>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button className="save-btn" style={{ margin: 0, fontSize: '0.72rem', padding: '0.5rem 1rem' }} onClick={exportCSV}>⬇ Export CSV</button>
        </div>
      </div>
      <BankDetailsForm />
      <div style={{ display: 'flex', gap: '1rem', margin: '1.25rem 0', flexWrap: 'wrap' }}>
        <div className="setting-status status-on">Total Pledged: R{total.toLocaleString()}</div>
        <div className="setting-status status-on">Verified: R{verifiedTotal.toLocaleString()}</div>
      </div>
      {loading ? (
        <p style={{ color: 'var(--mist)' }}>Loading…</p>
      ) : donations.length === 0 ? (
        <p className="no-inbox">No donations logged yet.</p>
      ) : (
        donations.map((d) => (
          <div className="eitem" key={d.id}>
            <div className="eitem-row">
              <strong>{d.name} — R{Number(d.amount).toLocaleString()}</strong>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn-sm" onClick={() => toggleVerify(d)}>{d.verified ? '✓ Verified' : 'Mark Verified'}</button>
                <button className="del-btn" onClick={() => remove(d)}>Remove</button>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--ghost)', marginTop: '0.4rem' }}>{d.email} · {new Date(d.date).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
}
