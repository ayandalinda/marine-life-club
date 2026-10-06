import { useState } from 'react';
import { Mail } from 'lucide-react';
import Modal from './Modal';
import { useToast } from '../../contexts/ToastContext';
import { createInquiry } from '../../api/inquiries';

export default function ContactModal({ open, onClose }) {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      showToast('Please fill in your name, email, and message.');
      return;
    }
    setSubmitting(true);
    try {
      await createInquiry(form);
      showToast('Message sent — we will get back to you via email.');
      setForm({ name: '', email: '', subject: '', message: '' });
      onClose();
    } catch (err) {
      showToast(err.message || 'Something went wrong, please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Mail size={18} style={{ color: 'var(--biolum)' }} />
          Contact Us
        </span>
      }
      maxWidth={520}
      labelledBy="contact-title"
    >
      <p style={{ color: 'var(--mist)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Send us an inquiry regarding partnerships, sponsorship, or general information. We will get back to you via email.
      </p>
      <div className="field"><label>Your Name</label><input type="text" placeholder="Full name" value={form.name} onChange={set('name')} /></div>
      <div className="field"><label>Email Address</label><input type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} /></div>
      <div className="field"><label>Subject</label><input type="text" placeholder="What is this regarding?" value={form.subject} onChange={set('subject')} /></div>
      <div className="field"><label>Message</label><textarea rows={5} placeholder="Write your message here..." value={form.message} onChange={set('message')} /></div>
      <button className="submit-btn" onClick={handleSubmit} disabled={submitting}>{submitting ? 'Sending…' : 'Send Message'}</button>
    </Modal>
  );
}
