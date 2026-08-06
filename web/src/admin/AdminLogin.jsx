import { useEffect, useRef, useState } from 'react';
import { useAdminAuth } from '../contexts/AdminAuthContext';

const LOCKOUT_MS = 10 * 60 * 1000;

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const attemptsRef = useRef(0);
  const [lockedUntil, setLockedUntil] = useState(null);

  useEffect(() => {
    if (!lockedUntil) return;
    const t = setTimeout(() => setLockedUntil(null), lockedUntil - Date.now());
    return () => clearTimeout(t);
  }, [lockedUntil]);

  const handleSubmit = async () => {
    if (lockedUntil && Date.now() < lockedUntil) {
      setError('Too many failed attempts. Try again later.');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      await login(username, password);
      attemptsRef.current = 0;
    } catch {
      attemptsRef.current += 1;
      if (attemptsRef.current >= 5) {
        setLockedUntil(Date.now() + LOCKOUT_MS);
        setError('Too many failed attempts. Locked for 10 minutes.');
      } else {
        setError('Invalid credentials.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const locked = lockedUntil && Date.now() < lockedUntil;

  return (
    <div id="login-view">
      <p style={{ color: 'var(--mist)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        President-only access. All website content is editable here.
      </p>
      <div className="mf">
        <label htmlFor="a-user">Username</label>
        <input type="text" id="a-user" placeholder="president" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mf">
        <label htmlFor="a-pass">Password</label>
        <input
          type="password" id="a-pass" placeholder="Password" autoComplete="current-password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(); }}
        />
      </div>
      {error && <div className="alert alert-err" role="alert" style={{ display: 'block' }}>{error}</div>}
      <button className="save-btn" onClick={handleSubmit} style={{ width: '100%', marginTop: '0.5rem' }} disabled={submitting || locked}>
        {submitting ? 'Logging in…' : 'Login'}
      </button>
    </div>
  );
}
