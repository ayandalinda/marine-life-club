import Modal from './Modal';
import { useMemberAuth } from '../../contexts/MemberAuthContext';

export default function MemberProfileModal({ open, onClose }) {
  const { member, logout } = useMemberAuth();
  if (!member) return null;

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="👤 My Profile" maxWidth={420} labelledBy="mem-profile-title">
      <div style={{ fontSize: '0.9rem', lineHeight: 2, color: 'var(--pearl)' }}>
        <strong>Name:</strong> {member.fname} {member.lname}<br />
        <strong>Course:</strong> {member.course}<br />
        <strong>Institution:</strong> {member.institution}<br />
        <strong>Year:</strong> {member.year}<br />
        <strong>Email:</strong> {member.email}<br />
        {member.phone && <><strong>Phone:</strong> {member.phone}<br /></>}
      </div>
      <button className="del-btn" onClick={handleLogout} style={{ marginTop: '1.5rem', width: '100%' }}>Logout</button>
    </Modal>
  );
}
