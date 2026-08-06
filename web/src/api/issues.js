import { request } from './client';

export const listIssues = () => request('/issues');
export const createIssue = (data) => request('/issues', { method: 'POST', body: data });
export const updateIssue = (id, data) => request(`/issues/${id}`, { method: 'PUT', body: data, auth: true });
export const deleteIssue = (id) => request(`/issues/${id}`, { method: 'DELETE', auth: true });
