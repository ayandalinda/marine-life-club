import { useState } from 'react';
import { Heart } from 'lucide-react';
import Modal from './Modal';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';
import { createDonation } from '../../api/donations';

const PRESETS = [50, 100, 250, 500, 1000];

export default function DonateModal({ open, onClose }) {
  const { siteContent } = useSiteContent();
  const { showToast } = useToast();
  const bank = siteContent.bankDetails || {};
  const [amount, setAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const selectPreset = (a) => {
    setAmount(a);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };

  const handleConfirm = async () => {
    const finalAmount = amount || Number(customAmount);
    if (!finalAmount || finalAmount <= 0) {
      showToast('Please select or enter an amount.');
      return;
    }
    if (!name.trim()) {
      showToast('Please enter your name.');
      return;
    }
    setSubmitting(true);
    try {
      await createDonation({ name, email, amount: finalAmount, date: new Date().toISOString() });
      showToast('Thank you! Your donation intention has been logged.');
      setAmount(null);
      setCustomAmount('');
      setName('');
      setEmail('');
      onClose();
    } catch (err) {
      showToast(err.message || 'Something went wrong, please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Heart size={18} style={{ color: 'var(--coral)', fill: 'rgba(255,107,71,0.2)' }} />
          Donate to UMLC
        </span>
      }
      maxWidth={520}
      labelledBy="donate-title"
    >
      <p style={{ color: 'var(--mist)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Your donation directly supports UKZN Marine Life Club's academic programmes, conservation projects, and
        student events. Every contribution makes a difference.
      </p>
      <div className="field">
        <label>Select Amount</label>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              className={`donate-preset${amount === p ? ' active' : ''}`}
              onClick={() => selectPreset(p)}
            >
              R{p.toLocaleString()}
            </button>
          ))}
        </div>
        <input
          type="number"
          placeholder="Or enter custom amount (R)"
          min="1"
          value={customAmount}
          onChange={handleCustomChange}
          style={{
            padding: '0.85rem 1rem', background: 'var(--deep)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 4, color: 'var(--pearl)', fontSize: '0.9rem', width: '100%', outline: 'none',
          }}
        />
      </div>
      <div style={{ background: 'var(--abyss)', border: '1px solid rgba(0,245,196,0.15)', borderRadius: 8, padding: '1.25rem', margin: '1.5rem 0' }}>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--biolum)', marginBottom: '0.75rem' }}>
          Bank Account Details
        </div>
        <div style={{ fontSize: '0.88rem', lineHeight: 2, color: 'var(--pearl)' }}>
          <strong>Bank:</strong> {bank.bank || 'FNB (First National Bank)'}<br />
          <strong>Account Name:</strong> {bank.accName || 'UKZN Marine Life Club'}<br />
          <strong>Account Number:</strong> {bank.accNum || '••••••••••'}<br />
          <strong>Branch Code:</strong> {bank.branch || '250655'}<br />
          <strong>Reference:</strong> DONATION-[Your Name]
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--ghost)', marginTop: '0.75rem' }}>
          Please use your full name as reference. Screenshot your proof of payment and email it to{' '}
          <a href={`mailto:${siteContent.contacts?.general || 'info@umlc.co.za'}`} style={{ color: 'var(--biolum)' }}>
            {siteContent.contacts?.general || 'info@umlc.co.za'}
          </a>
        </p>
      </div>
      <div className="field"><label>Your Name</label><input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} /></div>
      <div className="field"><label>Email (optional, for receipt)</label><input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
      <button
        className="submit-btn"
        style={{ background: 'var(--coral)', boxShadow: '0 4px 20px rgba(255,107,71,0.2)' }}
        onClick={handleConfirm}
        disabled={submitting}
      >
        {submitting ? 'Submitting…' : 'Confirm Donation Intention'}
      </button>
      <p style={{ fontSize: '0.75rem', color: 'var(--ghost)', textAlign: 'center', marginTop: '0.75rem' }}>
        This logs your intended donation. Please complete payment via EFT to the account above.
      </p>
    </Modal>
  );
}
