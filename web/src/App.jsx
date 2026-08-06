import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import { MemberAuthProvider } from './contexts/MemberAuthContext';
import { SiteContentProvider } from './contexts/SiteContentContext';
import PublicSite from './PublicSite';
import AdminApp from './admin/AdminApp';

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AdminAuthProvider>
          <MemberAuthProvider>
            <SiteContentProvider>
              <Routes>
                <Route path="/" element={<PublicSite />} />
                <Route path="/admin" element={<AdminApp />} />
              </Routes>
            </SiteContentProvider>
          </MemberAuthProvider>
        </AdminAuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
