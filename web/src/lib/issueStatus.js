export const STATUS_MAP = {
  pending: { label: 'Pending', badge: 'badge-pending', bar: 'p-pending', steps: [false, false, false, false] },
  'under-review': { label: 'Under Review', badge: 'badge-review', bar: 'p-review', steps: [true, false, false, false] },
  'in-progress': { label: 'In Progress', badge: 'badge-progress', bar: 'p-progress', steps: [true, true, false, false] },
  resolved: { label: 'Resolved', badge: 'badge-resolved', bar: 'p-resolved', steps: [true, true, true, true] },
};

export const STEPS = ['Received', 'Under Review', 'In Progress', 'Resolved'];
