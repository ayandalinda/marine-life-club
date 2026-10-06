import { useEffect, useState } from 'react';
import { Plus, FileEdit, Users, Settings } from 'lucide-react';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { listMembers } from '../../api/members';
import { listInquiries } from '../../api/inquiries';
import { listDonations } from '../../api/donations';
import { ProgramIcon } from '../../components/common/ProgramIcon';

export default function OverviewTab({ onSwitchTab }) {
  const { events, issues, programmes } = useSiteContent();

  const [membersCount, setMembersCount] = useState(0);
  const [unreadInquiries, setUnreadInquiries] = useState(0);
  const [donationsTotal, setDonationsTotal] = useState({ pledged: 0, verified: 0 });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      listMembers().then((m) => setMembersCount(Array.isArray(m) ? m.length : 0)),
      listInquiries().then((inq) => {
        if (Array.isArray(inq)) {
          const unread = inq.filter((i) => i.status === 'unread').length;
          setUnreadInquiries(unread);
        }
      }),
      listDonations().then((dons) => {
        if (Array.isArray(dons)) {
          const pledged = dons.reduce((s, d) => s + Number(d.amount || 0), 0);
          const verified = dons.filter((d) => d.verified).reduce((s, d) => s + Number(d.amount || 0), 0);
          setDonationsTotal({ pledged, verified });
        }
      }),
    ]).finally(() => setLoadingStats(false));
  }, []);

  const pendingIssues = issues.filter((i) => i.status !== 'resolved').length;
  const resolvedIssues = issues.filter((i) => i.status === 'resolved').length;

  return (
    <div>
      <div style={{ marginBottom: '1.75rem' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: 'var(--pearl)', marginBottom: '0.35rem' }}>
          Executive Command Center
        </h3>
        <p style={{ color: 'var(--mist)', fontSize: '0.88rem' }}>
          Welcome back, President. Here is the operational status of the UKZN Marine Life Club.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div className="eitem" style={{ margin: 0, borderLeft: '3px solid var(--biolum)' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--biolum)', textTransform: 'uppercase' }}>
            Registered Members
          </span>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--pearl)', margin: '0.3rem 0' }}>
            {loadingStats ? '…' : membersCount}
          </div>
          <button
            type="button"
            className="btn-sm"
            onClick={() => onSwitchTab('t-members')}
            style={{ fontSize: '0.7rem', marginTop: '0.4rem' }}
          >
            View Directory →
          </button>
        </div>

        <div className="eitem" style={{ margin: 0, borderLeft: '3px solid var(--coral)' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--coral)', textTransform: 'uppercase' }}>
            Student Voice Issues
          </span>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--pearl)', margin: '0.3rem 0' }}>
            {pendingIssues} <span style={{ fontSize: '0.9rem', color: 'var(--ghost)', fontWeight: 400 }}>active ({resolvedIssues} resolved)</span>
          </div>
          <button
            type="button"
            className="btn-sm"
            onClick={() => onSwitchTab('t-issues')}
            style={{ fontSize: '0.7rem', marginTop: '0.4rem' }}
          >
            Review Issues →
          </button>
        </div>

        <div className="eitem" style={{ margin: 0, borderLeft: '3px solid #ffc107' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#ffc107', textTransform: 'uppercase' }}>
            Inbox Messages
          </span>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--pearl)', margin: '0.3rem 0' }}>
            {loadingStats ? '…' : unreadInquiries} <span style={{ fontSize: '0.9rem', color: 'var(--ghost)', fontWeight: 400 }}>unread</span>
          </div>
          <button
            type="button"
            className="btn-sm"
            onClick={() => onSwitchTab('t-inbox')}
            style={{ fontSize: '0.7rem', marginTop: '0.4rem' }}
          >
            Open Inbox →
          </button>
        </div>

        <div className="eitem" style={{ margin: 0, borderLeft: '3px solid #a78bfa' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#a78bfa', textTransform: 'uppercase' }}>
            Upcoming Events
          </span>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--pearl)', margin: '0.3rem 0' }}>
            {events.length}
          </div>
          <button
            type="button"
            className="btn-sm"
            onClick={() => onSwitchTab('t-events')}
            style={{ fontSize: '0.7rem', marginTop: '0.4rem' }}
          >
            Manage Events →
          </button>
        </div>

        <div className="eitem" style={{ margin: 0, borderLeft: '3px solid #00f5c4' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--biolum)', textTransform: 'uppercase' }}>
            Donations Pledged
          </span>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--pearl)', margin: '0.3rem 0' }}>
            R{donationsTotal.pledged.toLocaleString()}
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--ghost)' }}>
            R{donationsTotal.verified.toLocaleString()} verified
          </span>
        </div>
      </div>

      {/* Quick Action Bar */}
      <div className="edit-group">
        <h4>Executive Quick Actions</h4>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="save-btn"
            style={{ margin: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            onClick={() => onSwitchTab('t-events')}
          >
            <Plus size={14} /> Post New Event
          </button>
          <button
            type="button"
            className="btn-outline"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            onClick={() => onSwitchTab('t-content')}
          >
            <FileEdit size={14} /> Edit Website Content
          </button>
          <button
            type="button"
            className="btn-outline"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            onClick={() => onSwitchTab('t-members')}
          >
            <Users size={14} /> Export Members CSV
          </button>
          <button
            type="button"
            className="btn-outline"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            onClick={() => onSwitchTab('t-settings')}
          >
            <Settings size={14} /> Security &amp; Settings
          </button>
        </div>
      </div>

      {/* Active Club Programmes Summary */}
      <div className="edit-group">
        <h4>Active Club Pillars ({programmes.length})</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
          {programmes.map((p) => (
            <div key={p.id} className="eitem" style={{ margin: 0, padding: '0.85rem' }}>
              <div style={{ marginBottom: '0.4rem' }}>
                <ProgramIcon icon={p.icon} size={22} />
              </div>
              <strong style={{ fontSize: '0.85rem' }}>{p.title}</strong>
              <p style={{ fontSize: '0.75rem', color: 'var(--mist)', marginTop: '0.2rem' }}>{p.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
