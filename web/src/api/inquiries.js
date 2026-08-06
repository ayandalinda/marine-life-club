import { request } from './client';

export const listInquiries = () => request('/inquiries', { auth: true });
export const createInquiry = (data) => request('/inquiries', { method: 'POST', body: data });
export const updateInquiry = (id, data) => request(`/inquiries/${id}`, { method: 'PUT', body: data, auth: true });
export const deleteInquiry = (id) => request(`/inquiries/${id}`, { method: 'DELETE', auth: true });
