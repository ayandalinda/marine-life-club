const { createClient } = require('@supabase/supabase-js');
const localAdapter = require('./localStore');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const isSupabaseConfigured =
  Boolean(SUPABASE_URL && SUPABASE_KEY) &&
  SUPABASE_URL.startsWith('http') &&
  !SUPABASE_URL.includes('your_supabase_project_url');

let client;
if (isSupabaseConfigured) {
  try {
    client = createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('🔗 Connected to Supabase Cloud Database');
  } catch (err) {
    console.warn('⚠️ Failed to initialize Supabase client, falling back to local database:', err.message);
    client = localAdapter;
  }
} else {
  console.log('📁 Using local database adapter (data stored in server/data/db.json). Full CRUD enabled.');
  client = localAdapter;
}

module.exports = client;
