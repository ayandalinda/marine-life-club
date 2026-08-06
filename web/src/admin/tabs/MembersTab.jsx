import { useEffect, useMemo, useState } from 'react';
import { listMembers, deleteMember } from '../../api/members';
import { useToast } from '../../contexts/ToastContext';
import { downloadCSV } from '../../lib/downloads';

export default function MembersTab() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const { showToast } = useToast();

  const load = async () => {
    setLoading(true);
    try {
      setMembers(await listMembers());
    } catch (err) {
      showToast(err.message || 'Failed to load members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return members;
    return members.filter((m) =>
      [m.fname, m.lname, m.email, m.course, m.institution].some((v) => (v || '').toLowerCase().includes(q)),
    );
  }, [members, search]);

  const remove = async (m) => {
    if (!window.confirm(`Remove ${m.fname} ${m.lname}?`)) return;
    await deleteMember(m.id);
    load();
  };

  const exportCSV = () => {
    downloadCSV('umlc-members.csv', filtered, ['fname', 'lname', 'course', 'institution', 'year', 'email', 'phone', 'createdAt']);
  };

  return (
    <div className="edit-group">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <h4 style={{ marginBottom: 0 }}>Registered Members</h4>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <input
            type="text" placeholder="Search members..." value={search} onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '0.5rem 0.75rem', background: 'var(--deep)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, color: 'var(--pearl)', fontSize: '0.82rem' }}
          />
          <button className="save-btn" style={{ margin: 0, fontSize: '0.72rem', padding: '0.5rem 1rem' }} onClick={exportCSV}>⬇ Export CSV</button>
        </div>
      </div>
      {loading ? (
        <p style={{ color: 'var(--mist)' }}>Loading…</p>
      ) : (
        <div id="t-members" style={{ overflowX: 'auto' }}>
          <table className="members-table">
            <thead>
              <tr><th>Name</th><th>Course</th><th>Institution</th><th>Year</th><th>Email</th><th>Phone</th><th></th></tr>
            </thead>
            <tbody>
              {filtered.map((m) => (
                <tr key={m.id}>
                  <td>{m.fname} {m.lname}</td>
                  <td>{m.course}</td>
                  <td>{m.institution}</td>
                  <td>{m.year}</td>
                  <td>{m.email}</td>
                  <td>{m.phone}</td>
                  <td><button className="del-btn" onClick={() => remove(m)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <p className="no-inbox">No members found.</p>}
        </div>
      )}
    </div>
  );
}
