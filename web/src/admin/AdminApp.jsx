import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import AdminLogin from './AdminLogin';
import AdminShell from './AdminShell';

export default function AdminApp() {
  const { isAuthenticated } = useAdminAuth();

  return (
    <div className="page" style={{ minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: 800, margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="logo" aria-label="UMLC Home">
          <img className="logo-img" src={logo} alt="" />
          UMLC
        </Link>
        <Link to="/" className="btn-outline">← Back to site</Link>
      </div>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="modal" style={{ position: 'static', maxHeight: 'none', width: '100%', transform: 'none' }}>
          <div className="modal-head"><h2>⚙ Administration Panel</h2></div>
          <div className="modal-body">
            {isAuthenticated ? <AdminShell /> : <AdminLogin />}
          </div>
        </div>
      </div>
    </div>
  );
}
