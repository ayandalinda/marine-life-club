import { useState } from 'react';
import { createIssue, updateIssue, deleteIssue } from '../../api/issues';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';
import { STATUS_MAP } from '../../lib/issueStatus';

const CATEGORIES = [
  'Academic Concerns',
  'Facilities & Equipment',
  'Events & Activities',
  'Student Welfare',
  'General Suggestion',
];

export default function IssuesTab() {
  const { issues, refetchIssues } = useSiteContent();
  const { showToast } = useToast();
  const [form, setForm] = useState({ title: '', description: '', status: 'under-review' });
  const [replies, setReplies] = useState({});
  const [saving, setSaving] = useState(false);

  const addIssue = async () => {
    if (!form.title) {
      showToast('Please enter an issue title.');
      return;
    }
    setSaving(true);
    try {
      await createIssue(form);
      setForm({ title: '', description: '', status: 'under-review' });
      await refetchIssues();
      showToast('Issue created successfully.');
    } finally {
      setSaving(false);
    }
  };

  const changeStatus = async (issue, status) => {
    try {
      await updateIssue(issue.id, { status });
      await refetchIssues();
      showToast(`Status updated to ${STATUS_MAP[status]?.label || status}.`);
    } catch (err) {
      showToast(err.message || 'Failed to update status.');
    }
  };

  const saveReply = async (issue) => {
    const text = replies[issue.id] !== undefined ? replies[issue.id] : (issue.reply || '');
    try {
      await updateIssue(issue.id, { reply: text });
      await refetchIssues();
      showToast('Response saved.');
    } catch (err) {
      showToast(err.message || 'Failed to save response.');
    }
  };

  const remove = async (issue) => {
    if (!window.confirm(`Delete issue "${issue.title}"?`)) return;
    try {
      await deleteIssue(issue.id);
      await refetchIssues();
      showToast('Issue deleted.');
    } catch (err) {
      showToast(err.message || 'Failed to delete issue.');
    }
  };

  return (
    <>
      <div className="edit-group">
        <h4>Create Student Voice Issue</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
          <div className="mf">
            <label>Title / Category</label>
            <input
              type="text"
              list="issue-categories"
              placeholder="e.g. Marine Lab Microscope Maintenance"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            />
            <datalist id="issue-categories">
              {CATEGORIES.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
          <div className="mf">
            <label>Initial Status</label>
            <select
              value={form.status}
              onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
            >
              {Object.entries(STATUS_MAP).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mf">
          <label>Issue Description</label>
          <input
            type="text"
            placeholder="Brief explanation of the concern..."
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          />
        </div>
        <button className="save-btn" onClick={addIssue} disabled={saving}>
          {saving ? 'Creating…' : 'Add Issue'}
        </button>
      </div>

      <div className="edit-group">
        <h4>Manage Student Voice Issues ({issues.length})</h4>
        {issues.length === 0 ? (
          <p className="no-inbox">No issues submitted yet.</p>
        ) : (
          issues.map((issue) => {
            const currentReply = replies[issue.id] !== undefined ? replies[issue.id] : (issue.reply || '');
            return (
              <div className="eitem" key={issue.id}>
                <div className="eitem-row">
                  <div>
                    <strong>{issue.title}</strong>
                    {issue.submitterName && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--ghost)', marginLeft: '0.5rem' }}>
                        by {issue.submitterName} {issue.submitterEmail ? `(${issue.submitterEmail})` : ''}
                      </span>
                    )}
                  </div>
                  <button className="del-btn" onClick={() => remove(issue)}>Remove</button>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--mist)', margin: '0.5rem 0' }}>
                  {issue.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'end' }}>
                  <div className="mf" style={{ marginBottom: 0 }}>
                    <label>Public Tracker Status</label>
                    <select
                      value={issue.status}
                      onChange={(e) => changeStatus(issue, e.target.value)}
                    >
                      {Object.entries(STATUS_MAP).map(([k, v]) => (
                        <option key={k} value={k}>{v.label}</option>
                      ))}
                    </select>
                  </div>
                  <span className={`badge ${STATUS_MAP[issue.status]?.badge || 'badge-pending'}`}>
                    {STATUS_MAP[issue.status]?.label || issue.status}
                  </span>
                </div>

                <div className="mf" style={{ marginTop: '0.75rem' }}>
                  <label>Official UMLC Response</label>
                  <textarea
                    rows={2}
                    value={currentReply}
                    onChange={(e) => setReplies((r) => ({ ...r, [issue.id]: e.target.value }))}
                    placeholder="Write executive committee response to be published on the live tracker..."
                  />
                  <button
                    type="button"
                    className="btn-sm"
                    style={{ marginTop: '0.4rem' }}
                    onClick={() => saveReply(issue)}
                  >
                    Save Response
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
