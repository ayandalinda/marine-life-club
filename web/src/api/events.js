import { request } from './client';

export const listEvents = () => request('/events');
export const createEvent = (data) => request('/events', { method: 'POST', body: data, auth: true });
export const deleteEvent = (id) => request(`/events/${id}`, { method: 'DELETE', auth: true });
