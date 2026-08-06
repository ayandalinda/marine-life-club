import { request } from './client';

export const adminLogin = (username, password) => request('/login', { method: 'POST', body: { username, password } });
export const changeAdminPassword = (currentPassword, newPassword) =>
  request('/admin/password', { method: 'PUT', body: { currentPassword, newPassword }, auth: true });
