import { createContext, useCallback, useContext, useState } from 'react';
import { adminLogin as apiAdminLogin } from '../api/auth';

const AdminAuthContext = createContext(null);
const TOKEN_KEY = 'umlc_admin_token';

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

  const login = useCallback(async (username, password) => {
    const { token: newToken } = await apiAdminLogin(username, password);
    localStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  }, []);

  return (
    <AdminAuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
