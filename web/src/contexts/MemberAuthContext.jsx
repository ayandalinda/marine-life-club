import { createContext, useCallback, useContext, useState } from 'react';
import { loginMember, registerMember, updateMember } from '../api/members';

const MemberAuthContext = createContext(null);
const STORAGE_KEY = 'umlc_member';
const TOKEN_KEY = 'umlc_member_token';

export function MemberAuthProvider({ children }) {
  const [member, setMember] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw && localStorage.getItem(TOKEN_KEY) ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const login = useCallback(async (email, password) => {
    const { member: m, token } = await loginMember({ email, password });
    localStorage.setItem(TOKEN_KEY, token);
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

  const updateProfile = useCallback(async (data) => {
    if (!member?.id) return;
    const res = await updateMember(member.id, data);
    const updated = { ...member, ...res.member };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setMember(updated);
    return updated;
  }, [member]);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TOKEN_KEY);
    setMember(null);
  }, []);

  return (
    <MemberAuthContext.Provider value={{ member, login, register, updateProfile, logout }}>
      {children}
    </MemberAuthContext.Provider>
  );
}

export function useMemberAuth() {
  return useContext(MemberAuthContext);
}
