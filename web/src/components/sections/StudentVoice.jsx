import { useState } from 'react';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';
import { createIssue } from '../../api/issues';
import { STATUS_MAP, STEPS } from '../../lib/issueStatus';

const CATEGORIES = ['Academic Concerns', 'Facilities & Equipment', 'Events & Activities', 'Student Welfare', 'General Suggestion'];

function IssueItem({ issue }) {
  const status = STATUS_MAP[issue.status] || STATUS_MAP.pending;
  return (
    <div className={`issue-item status-${issue.status}`}>
      <div className="issue-top">
        <h4>{issue.title}</h4>
        <span className={`badge ${status.badge}`}>{status.label}</span>
      </div>
      {issue.description && <p className="issue-desc">{issue.description}</p>}
      <div className="progress-track"><div className={`progress-fill ${status.bar}`}></div></div>
      <div className="progress-steps">
        {STEPS.map((s, i) => (
          <span key={s} className={status.steps[i] ? 'active' : ''}>{s}</span>
        ))}
      </div>
      {issue.reply && (
        <div className="issue-reply">
          <div className="issue-reply-label">Response from UMLC</div>
          <p>{issue.reply}</p>
        </div>
      )}
    </div>
  );
}

export default function StudentVoice() {
  const { issues, refetchIssues } = useSiteContent();
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', category: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.category || !form.message) {
      showToast('Please select a category and enter a message.');
      return;
    }
    setSubmitting(true);
    try {
      await createIssue({
        title: form.category,
        description: form.message,
        submitterName: form.name,
        submitterEmail: form.email,
      });
      await refetchIssues();
      setForm({ name: '', email: '', category: '', message: '' });
      showToast('Thank you — your voice has been submitted.');
    } catch (err) {
      showToast(err.message || 'Something went wrong, please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="student-voice" className="section reveal" aria-label="Student Voice">
      <div className="section-label" aria-hidden="true">Student Voice</div>
      <h2 className="section-heading">Your voice<br /><em>matters here.</em></h2>
      <div className="divider" aria-hidden="true"></div>
      <div className="voice-layout">
        <div className="voice-intro">
          <p>Submit concerns anonymously or with your info. Leadership reviews all messages and updates each issue's status publicly below.</p>
          <div className="issues-label">Live Issues Tracker</div>
          <div className="issues-list" aria-live="polite">
            {issues.map((issue) => <IssueItem issue={issue} key={issue.id} />)}
          </div>
        </div>
        <div className="voice-form-wrap reveal reveal-delay-1">
          <h3>Submit Your Voice</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="vf-name">Your Name (optional)</label>
              <input type="text" id="vf-name" placeholder="Anonymous" autoComplete="name" value={form.name} onChange={set('name')} />
            </div>
            <div className="field">
              <label htmlFor="vf-email">Email (optional, for follow-up)</label>
              <input type="email" id="vf-email" placeholder="your@email.com" autoComplete="email" value={form.email} onChange={set('email')} />
            </div>
            <div className="field">
              <label htmlFor="vf-cat">Category</label>
              <select id="vf-cat" required aria-required="true" value={form.category} onChange={set('category')}>
                <option value="">Select a category...</option>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="vf-msg">Your Message</label>
              <textarea id="vf-msg" rows={5} placeholder="Share your thoughts, concerns, or ideas..." required aria-required="true" value={form.message} onChange={set('message')} />
            </div>
            <button type="submit" className="submit-btn" disabled={submitting}>{submitting ? 'Submitting…' : 'Submit Voice'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
