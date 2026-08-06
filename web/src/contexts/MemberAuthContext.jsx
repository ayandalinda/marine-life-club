import { createContext, useCallback, useContext, useState } from 'react';
import { loginMember, registerMember } from '../api/members';

const MemberAuthContext = createContext(null);
const STORAGE_KEY = 'umlc_member';

export function MemberAuthProvider({ children }) {
  const [member, setMember] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  });

  const login = useCallback(async (email, password) => {
    const { member: m } = await loginMember({ email, password });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(m));
    setMember(m);
    return m;
  }, []);

  const register = useCallback(async (data) => {
    const { member: m } = await registerMember(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(m));
    setMember(m);
    return m;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setMember(null);
  }, []);

  return (
    <MemberAuthContext.Provider value={{ member, login, register, logout }}>
      {children}
    </MemberAuthContext.Provider>
  );
}

export function useMemberAuth() {
  return useContext(MemberAuthContext);
}
