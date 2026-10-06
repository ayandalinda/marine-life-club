import { useEffect, useState } from 'react';
import {
  User,
  CreditCard,
  Calendar,
  Edit3,
  Check,
  BookOpen,
  GraduationCap,
  Mail,
  Printer,
  CalendarX,
} from 'lucide-react';
import Modal from './Modal';
import { useMemberAuth } from '../../contexts/MemberAuthContext';
import { useToast } from '../../contexts/ToastContext';
import { getMemberRsvps } from '../../api/members';

export default function MemberProfileModal({ open, onClose }) {
  const { member, logout, updateProfile } = useMemberAuth();
  const { showToast } = useToast();

  const [tab, setTab] = useState('card'); // 'card' | 'rsvps' | 'edit'
  const [rsvps, setRsvps] = useState([]);
  const [loadingRsvps, setLoadingRsvps] = useState(false);

  // Edit form state
  const [editForm, setEditForm] = useState({
    course: '',
    institution: '',
    year: '',
    phone: '',
    newPassword: '',
  });
  const [savingProfile, setSavingProfile] = useState(false);

  useEffect(() => {
    if (member) {
      setEditForm({
        course: member.course || '',
        institution: member.institution || '',
        year: member.year || '',
        phone: member.phone || '',
        newPassword: '',
      });
    }
  }, [member]);

  useEffect(() => {
    if (member?.email && open && tab === 'rsvps') {
      setLoadingRsvps(true);
      getMemberRsvps(member.email)
        .then((data) => setRsvps(Array.isArray(data) ? data : []))
        .catch(() => setRsvps([]))
        .finally(() => setLoadingRsvps(false));
    }
  }, [member, open, tab]);

  if (!member) return null;

  const handleLogout = () => {
    logout();
    onClose();
    showToast('You have been logged out.');
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setSavingProfile(true);
    try {
      await updateProfile(editForm);
      showToast('Profile updated successfully.');
      setTab('card');
    } catch (err) {
      showToast(err.message || 'Failed to update profile.');
    } finally {
      setSavingProfile(false);
    }
  };

  const memberId = `UMLC-2025-${String(member.id || 1).padStart(4, '0')}`;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <User size={18} style={{ color: 'var(--biolum)' }} />
          Member Portal &amp; Digital ID
        </span>
      }
      maxWidth={560}
      labelledBy="mem-profile-title"
    >
      <div className="tabs" style={{ marginBottom: '1.25rem' }}>
        <button className={`tab-btn${tab === 'card' ? ' on' : ''}`} onClick={() => setTab('card')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <CreditCard size={14} /> Membership Pass
        </button>
        <button className={`tab-btn${tab === 'rsvps' ? ' on' : ''}`} onClick={() => setTab('rsvps')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <Calendar size={14} /> My Event RSVPs
        </button>
        <button className={`tab-btn${tab === 'edit' ? ' on' : ''}`} onClick={() => setTab('edit')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <Edit3 size={14} /> Edit Details
        </button>
      </div>

      {tab === 'card' && (
        <div>
          {/* Digital Member ID Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, #04162a 0%, #0a2540 50%, #020d18 100%)',
              border: '2px solid rgba(0,245,196,0.3)',
              borderRadius: '12px',
              padding: '1.75rem',
              boxShadow: '0 10px 40px rgba(0,245,196,0.15)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,245,196,0.15), transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(0,245,196,0.2)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--biolum)', textTransform: 'uppercase' }}>
                  University of KwaZulu-Natal
                </span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: 'var(--pearl)', margin: '0.1rem 0' }}>
                  Marine Life Club
                </h3>
              </div>
              <span className="verified" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Check size={11} /> ACTIVE MEMBER
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--pearl)', marginBottom: '0.35rem' }}>
                  {member.fname} {member.lname}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--mist)', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <BookOpen size={13} style={{ color: 'var(--biolum)' }} /> {member.course}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--ghost)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <GraduationCap size={13} /> {member.institution} · {member.year}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--biolum)', marginTop: '0.35rem', fontFamily: "'DM Mono', monospace", display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Mail size={13} /> {member.email}
                </div>
              </div>

              {/* Simulated QR Code */}
              <div
                style={{
                  background: 'var(--abyss)',
                  border: '1px solid rgba(0,245,196,0.3)',
                  padding: '8px',
                  borderRadius: '6px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'repeating-conic-gradient(#00f5c4 0% 25%, #04162a 0% 50%) 50% / 16px 16px',
                    borderRadius: '4px',
                  }}
                  title={memberId}
                />
                <span style={{ display: 'block', fontSize: '0.55rem', fontFamily: "'DM Mono', monospace", color: 'var(--biolum)', marginTop: '4px' }}>
                  SCAN
                </span>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--biolum)' }}>
                ID: {memberId}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--ghost)' }}>
                Issued: {member.createdAt ? new Date(member.createdAt).getFullYear() : '2025'}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              type="button"
              className="btn-outline"
              style={{ flex: 1, padding: '0.65rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              onClick={() => window.print()}
            >
              <Printer size={14} /> Print Pass
            </button>
            <button
              type="button"
              className="del-btn"
              style={{ flex: 1, padding: '0.65rem', fontSize: '0.8rem' }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {tab === 'rsvps' && (
        <div>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--biolum)', marginBottom: '1rem', fontFamily: "'DM Mono', monospace" }}>
            Events You Have Registered For
          </h4>
          {loadingRsvps ? (
            <p style={{ color: 'var(--mist)' }}>Loading your registrations…</p>
          ) : rsvps.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', background: 'var(--deep)', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <CalendarX size={36} style={{ color: 'var(--mist)' }} />
              </div>
              <p style={{ color: 'var(--mist)', fontSize: '0.88rem' }}>
                You have not registered for any upcoming events yet.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {rsvps.map((r) => (
                <div key={r.id} className="eitem" style={{ margin: 0 }}>
                  <div className="eitem-row">
                    <strong>Event #{r.eventId}</strong>
                    <span className="badge badge-resolved">Confirmed</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ghost)', marginTop: '0.35rem' }}>
                    RSVP Date: {new Date(r.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'edit' && (
        <form onSubmit={handleSaveProfile}>
          <div className="field">
            <label>Course / Degree</label>
            <input
              type="text"
              value={editForm.course}
              onChange={(e) => setEditForm((f) => ({ ...f, course: e.target.value }))}
            />
          </div>
          <div className="field">
            <label>Campus / Institution</label>
            <input
              type="text"
              value={editForm.institution}
              onChange={(e) => setEditForm((f) => ({ ...f, institution: e.target.value }))}
            />
          </div>
          <div className="field">
            <label>Year of Study</label>
            <input
              type="text"
              value={editForm.year}
              onChange={(e) => setEditForm((f) => ({ ...f, year: e.target.value }))}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="tel"
              value={editForm.phone}
              onChange={(e) => setEditForm((f) => ({ ...f, phone: e.target.value }))}
            />
          </div>
          <div className="field">
            <label>Change Password (optional)</label>
            <input
              type="password"
              placeholder="Leave blank to keep current"
              value={editForm.newPassword}
              onChange={(e) => setEditForm((f) => ({ ...f, newPassword: e.target.value }))}
            />
          </div>
          <button type="submit" className="save-btn" disabled={savingProfile} style={{ width: '100%', marginTop: '0.5rem' }}>
            {savingProfile ? 'Saving Changes…' : 'Save Profile Changes'}
          </button>
        </form>
      )}
    </Modal>
  );
}
