const BASE = '/api';

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

function authHeaders() {
  const token = localStorage.getItem('umlc_admin_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function request(path, { method = 'GET', body, auth = false } = {}) {
  const res = await fetch(BASE + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(auth ? authHeaders() : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  let data = null;
  const text = await res.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }
  }

  if (!res.ok) {
    throw new ApiError((data && data.error) || res.statusText, res.status);
  }
  return data;
}

export { ApiError };
