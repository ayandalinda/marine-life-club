import { useEffect, useState } from 'react';
import { listInquiries, updateInquiry, deleteInquiry } from '../../api/inquiries';
import { createIssue } from '../../api/issues';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';

function timeAgo(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleString('en-ZA', { dateStyle: 'medium', timeStyle: 'short' });
}

export default function InboxTab() {
  const [inbox, setInbox] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyDrafts, setReplyDrafts] = useState({});
  const { refetchIssues } = useSiteContent();
  const { showToast } = useToast();

  const load = async () => {
    setLoading(true);
    try {
      setInbox(await listInquiries());
    } catch (err) {
      showToast(err.message || 'Failed to load inbox');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const markRead = async (item) => {
    await updateInquiry(item.id, { status: 'read' });
    load();
  };

  const sendReply = async (item) => {
    const reply = replyDrafts[item.id];
    if (!reply) return;
    await updateInquiry(item.id, { reply, status: 'read' });
    setReplyDrafts((d) => ({ ...d, [item.id]: '' }));
    showToast('Reply saved.');
    load();
  };

  const promote = async (item) => {
    await createIssue({
      title: item.subject || 'Contact submission',
      description: item.message,
      submitterName: item.name,
      submitterEmail: item.email,
    });
    await refetchIssues();
    showToast('Promoted to Issues.');
  };

  const remove = async (item) => {
    if (!window.confirm('Delete this message?')) return;
    await deleteInquiry(item.id);
    load();
  };

  if (loading) return <p style={{ color: 'var(--mist)' }}>Loading…</p>;

  return (
    <div className="edit-group">
      <h4>Student Submissions — Inbox</h4>
      {inbox.length === 0 && <p className="no-inbox">No messages yet.</p>}
      {inbox.map((item) => (
        <div className={`inbox-item${item.status === 'unread' ? ' unread' : ''}`} key={item.id}>
          <div className="inbox-meta">
            {item.subject && <span className="inbox-cat">{item.subject}</span>}
            <span className="inbox-time">{timeAgo(item.createdAt)}</span>
          </div>
          <div className="inbox-sender">{item.name} — {item.email}</div>
          <div className="inbox-msg">{item.message}</div>
          {item.reply && <div className="issue-reply"><div className="issue-reply-label">Your Reply</div><p>{item.reply}</p></div>}
          <div className="reply-form">
            <input
              type="text" placeholder="Write a reply..."
              value={replyDrafts[item.id] || ''}
              onChange={(e) => setReplyDrafts((d) => ({ ...d, [item.id]: e.target.value }))}
            />
            <button onClick={() => sendReply(item)}>Send</button>
          </div>
          <div className="inbox-actions">
            {item.status === 'unread' && <button className="btn-sm" onClick={() => markRead(item)}>Mark Read</button>}
            <button className="btn-sm" onClick={() => promote(item)}>Promote to Issue</button>
            <button className="del-btn" onClick={() => remove(item)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
