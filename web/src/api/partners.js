import { request } from './client';

export const listPartners = () => request('/partners');
export const upsertPartner = (slot, data) => request(`/partners/${slot}`, { method: 'PUT', body: data, auth: true });
