import { request } from './client';

export const listEvents = () => request('/events');
export const createEvent = (data) => request('/events', { method: 'POST', body: data, auth: true });
export const updateEvent = (id, data) => request(`/events/${id}`, { method: 'PUT', body: data, auth: true });
export const deleteEvent = (id) => request(`/events/${id}`, { method: 'DELETE', auth: true });
export const rsvpEvent = (id, data) => request(`/events/${id}/rsvp`, { method: 'POST', body: data });
export const getEventRsvps = (id) => request(`/events/${id}/rsvps`);
