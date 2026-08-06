import { request } from './client';

export const listProgrammes = () => request('/programmes');
export const createProgramme = (data) => request('/programmes', { method: 'POST', body: data, auth: true });
export const updateProgramme = (id, data) => request(`/programmes/${id}`, { method: 'PUT', body: data, auth: true });
export const deleteProgramme = (id) => request(`/programmes/${id}`, { method: 'DELETE', auth: true });
