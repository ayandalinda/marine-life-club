import { request } from './client';

export const listDonations = () => request('/donations', { auth: true });
export const createDonation = (data) => request('/donations', { method: 'POST', body: data });
export const setDonationVerified = (id, verified) => request(`/donations/${id}`, { method: 'PUT', body: { verified }, auth: true });
export const deleteDonation = (id) => request(`/donations/${id}`, { method: 'DELETE', auth: true });
