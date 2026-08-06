import { request } from './client';

export const listTiers = () => request('/tiers');
export const upsertTier = (slot, data) => request(`/tiers/${slot}`, { method: 'PUT', body: data, auth: true });
