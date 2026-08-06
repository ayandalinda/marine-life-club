import { request } from './client';

export const registerMember = (data) => request('/register', { method: 'POST', body: data });
export const loginMember = (data) => request('/member-login', { method: 'POST', body: data });
export const listMembers = () => request('/members', { auth: true });
export const deleteMember = (id) => request(`/members/${id}`, { method: 'DELETE', auth: true });
