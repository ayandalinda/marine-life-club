import { request } from './client';

export const getSiteContent = () => request('/site-content');
export const updateSiteContent = (patch) => request('/site-content', { method: 'PUT', body: patch, auth: true });
