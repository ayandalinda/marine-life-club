import Modal from './Modal';

export default function PrivacyModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Privacy Policy (POPIA/GDPR)" maxWidth={720} labelledBy="privacy-title">
      <div style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--mist)' }}>
        <p style={{ marginBottom: '1rem' }}>
          The UKZN Marine Life Club ("UMLC", "we", "us") respects your privacy and is committed to protecting your
          personal information in accordance with South Africa's Protection of Personal Information Act (POPIA) and,
          where applicable, the EU General Data Protection Regulation (GDPR).
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>What we collect:</strong> Information you voluntarily submit through our registration, Student
          Voice, contact, and donation forms — such as your name, email address, phone number, course, and
          institution.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>How we use it:</strong> To manage membership, respond to enquiries and issues raised through
          Student Voice, coordinate events, and communicate with donors and partners. We do not sell or share your
          information with third parties for marketing purposes.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Storage:</strong> Data is stored securely in our database and is accessible only to authorised
          club administrators.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Your rights:</strong> You may request access to, correction of, or deletion of your personal
          information at any time by contacting us at the email address listed in the footer of this site.
        </p>
        <p>
          <strong>Cookies &amp; local storage:</strong> This site may use your browser's local storage to remember
          your preferences (such as theme choice). No third-party tracking cookies are used.
        </p>
      </div>
    </Modal>
  );
}
