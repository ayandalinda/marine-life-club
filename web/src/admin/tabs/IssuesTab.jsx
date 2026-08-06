import { useState } from 'react';
import { createIssue, updateIssue, deleteIssue } from '../../api/issues';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';
import { STATUS_MAP } from '../../lib/issueStatus';

export default function IssuesTab() {
  const { issues, refetchIssues } = useSiteContent();
  const { showToast } = useToast();
  const [form, setForm] = useState({ title: '', description: '', status: 'under-review' });

  const addIssue = async () => {
    if (!form.title) {
      showToast('Please enter a title.');
      return;
    }
    await createIssue(form);
    setForm({ title: '', description: '', status: 'under-review' });
    await refetchIssues();
    showToast('Issue added.');
  };

  const changeStatus = async (issue, status) => {
    await updateIssue(issue.id, { status });
    refetchIssues();
  };

  const changeReply = async (issue, reply) => {
    await updateIssue(issue.id, { reply });
    refetchIssues();
  };

  const remove = async (issue) => {
    if (!window.confirm('Delete this issue?')) return;
    await deleteIssue(issue.id);
    refetchIssues();
  };

  return (
    <>
      <div className="edit-group">
        <h4>Add New Issue</h4>
        <div className="mf"><label>Title</label><input type="text" placeholder="e.g. Lab Equipment Access" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} /></div>
        <div className="mf"><label>Description</label><input type="text" placeholder="Brief description..." value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} /></div>
        <div className="mf">
          <label>Status</label>
          <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}>
            {Object.entries(STATUS_MAP).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </div>
        <button className="save-btn" onClick={addIssue}>Add Issue</button>
      </div>
      <div className="edit-group">
        <h4>Manage Issues</h4>
        {issues.map((issue) => (
          <div className="eitem" key={issue.id}>
            <div className="eitem-row">
              <strong>{issue.title}</strong>
              <button className="del-btn" onClick={() => remove(issue)}>Remove</button>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--mist)', margin: '0.4rem 0' }}>{issue.description}</p>
            <div className="mf">
              <label>Status</label>
              <select defaultValue={issue.status} onChange={(e) => changeStatus(issue, e.target.value)}>
                {Object.entries(STATUS_MAP).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>
            <div className="mf">
              <label>Reply</label>
              <textarea rows={2} defaultValue={issue.reply || ''} onBlur={(e) => changeReply(issue, e.target.value)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
