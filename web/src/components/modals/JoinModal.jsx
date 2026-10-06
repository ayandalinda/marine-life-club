import { useState } from 'react';
import { UserPlus } from 'lucide-react';
import Modal from './Modal';
import { useMemberAuth } from '../../contexts/MemberAuthContext';
import { useToast } from '../../contexts/ToastContext';

const YEARS = ['1st Year', '2nd Year', '3rd Year', 'Postgraduate', 'Other'];

function RegisterForm({ onDone, onSwitchToLogin }) {
  const { register } = useMemberAuth();
  const { showToast } = useToast();
  const [form, setForm] = useState({
    fname: '', lname: '', course: '', institution: '', year: '', yearOther: '',
    email: '', phone: '', pass: '', pass2: '',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    setError('');
    const { fname, lname, course, institution, year, yearOther, email, phone, pass, pass2 } = form;
    if (!fname || !lname || !course || !institution || !year || !email || !phone || !pass) {
      setError('Please fill in all required fields.');
      return;
    }
    if (pass.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (pass !== pass2) {
      setError('Passwords do not match.');
      return;
    }
    setSubmitting(true);
    try {
      await register({
        fname, lname, course, institution,
        year: year === 'Other' ? (yearOther || 'Other') : year,
        email, phone, password: pass,
      });
      showToast(`Welcome, ${fname}! Your account has been created.`);
      onDone();
    } catch (err) {
      setError(err.message || 'Registration failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="field"><label>First Name *</label><input type="text" placeholder="First name" value={form.fname} onChange={set('fname')} /></div>
        <div className="field"><label>Last Name *</label><input type="text" placeholder="Last name" value={form.lname} onChange={set('lname')} /></div>
      </div>
      <div className="field"><label>Course / Programme *</label><input type="text" placeholder="e.g. BSc Marine Biology" value={form.course} onChange={set('course')} /></div>
      <div className="field"><label>Place of Study *</label><input type="text" placeholder="e.g. UKZN Howard College" value={form.institution} onChange={set('institution')} /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="field">
          <label>Year of Study *</label>
          <select value={form.year} onChange={set('year')}>
            <option value="">Select year...</option>
            {YEARS.map((y) => <option key={y}>{y}</option>)}
          </select>
        </div>
        {form.year === 'Other' && (
          <div className="field"><label>Specify Year</label><input type="text" placeholder="e.g. Honours" value={form.yearOther} onChange={set('yearOther')} /></div>
        )}
      </div>
      <div className="field"><label>Student Email *</label><input type="email" placeholder="student@ukzn.ac.za" value={form.email} onChange={set('email')} /></div>
      <div className="field"><label>Cell Phone *</label><input type="tel" placeholder="0821234567" value={form.phone} onChange={set('phone')} /></div>
      <div className="field"><label>Password *</label><input type="password" placeholder="Min 8 characters" value={form.pass} onChange={set('pass')} /></div>
      <div className="field"><label>Confirm Password *</label><input type="password" placeholder="Repeat password" value={form.pass2} onChange={set('pass2')} /></div>
      {error && <div className="alert alert-err" style={{ display: 'block' }}>{error}</div>}
      <button className="submit-btn" onClick={handleSubmit} disabled={submitting}>{submitting ? 'Creating…' : 'Create Account'}</button>
      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.82rem', color: 'var(--mist)' }}>
        Already a member?{' '}
        <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToLogin(); }} style={{ color: 'var(--biolum)' }}>Login here</a>
      </p>
    </div>
  );
}

function LoginForm({ onDone }) {
  const { login } = useMemberAuth();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async () => {
    setError('');
    if (!email || !pass) {
      setError('Invalid email or password.');
      return;
    }
    setSubmitting(true);
    try {
      await login(email, pass);
      onDone();
    } catch {
      setError('Invalid email or password.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <p style={{ color: 'var(--mist)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Welcome back! Login with your member email and password.</p>
      <div className="field"><label>Email</label><input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
      <div className="field">
        <label>Password</label>
        <input
          type="password" placeholder="Password" value={pass}
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleLogin(); }}
        />
      </div>
      {error && <div className="alert alert-err" style={{ display: 'block' }}>{error}</div>}
      <button className="submit-btn" onClick={handleLogin} disabled={submitting}>{submitting ? 'Logging in…' : 'Login'}</button>
    </div>
  );
}

export default function JoinModal({ open, onClose }) {
  const [tab, setTab] = useState('register');

  const handleClose = () => {
    setTab('register');
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <UserPlus size={18} style={{ color: 'var(--biolum)' }} />
          Join UMLC
        </span>
      }
      maxWidth={560}
      labelledBy="join-modal-title"
    >
      <div className="tabs" style={{ marginBottom: '1.5rem' }}>
        <button className={`tab-btn${tab === 'register' ? ' on' : ''}`} onClick={() => setTab('register')}>Register</button>
        <button className={`tab-btn${tab === 'login' ? ' on' : ''}`} onClick={() => setTab('login')}>Member Login</button>
      </div>
      {tab === 'register' ? (
        <RegisterForm onDone={handleClose} onSwitchToLogin={() => setTab('login')} />
      ) : (
        <LoginForm onDone={handleClose} />
      )}
    </Modal>
  );
}
