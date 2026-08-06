import { request } from './client';

export const listLeadership = () => request('/leadership');
export const upsertLeader = (data) => request('/leadership', { method: 'POST', body: data, auth: true });
