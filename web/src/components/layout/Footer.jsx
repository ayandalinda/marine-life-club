import { Lock } from 'lucide-react';
import logo from '../../assets/logo.jpg';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { downloadConstitution, downloadProposal } from '../../lib/downloads';
import { InstagramIcon, TikTokIcon, FacebookIcon, YouTubeIcon } from '../common/SocialIcons';

export default function Footer({ onOpenPrivacy }) {
  const { siteContent, tiers } = useSiteContent();
  const socials = siteContent.socials || {};
  const settings = siteContent.settings || {};
  const contacts = siteContent.contacts || {};

  return (
    <footer role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <img className="logo-img" src={logo} alt="UMLC logo" />
          </a>
          <p dangerouslySetInnerHTML={{ __html: siteContent.footerAddress || '' }} />
        </div>
        <div className="footer-col">
          <h5>Navigate</h5>
          <a href="#about">About Us</a>
          <a href="#species">Species Guide</a>
          <a href="#programmes">Programmes</a>
          <a href="#student-voice">Student Voice</a>
          <a href="#events">Events</a>
          <a href="#partnerships">Partnerships</a>
          <a href="#leadership">Leadership</a>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <button
            type="button"
            onClick={() => downloadConstitution()}
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              font: 'inherit',
              fontSize: '0.87rem',
              color: 'var(--mist)',
              textAlign: 'left',
              lineHeight: 2.2,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Club Constitution
          </button>
          <button
            type="button"
            onClick={() => downloadProposal(tiers)}
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              font: 'inherit',
              fontSize: '0.87rem',
              color: 'var(--mist)',
              textAlign: 'left',
              lineHeight: 2.2,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Sponsorship Proposal
          </button>
          <button
            type="button"
            onClick={onOpenPrivacy}
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              font: 'inherit',
              fontSize: '0.87rem',
              color: 'var(--mist)',
              textAlign: 'left',
              lineHeight: 2.2,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Privacy Policy
          </button>
        </div>
        <div className="footer-col">
          <h5>Connect</h5>
          <a
            href={socials.instagram || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            <InstagramIcon size={14} /> Instagram
          </a>
          <a
            href={socials.tiktok || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            <TikTokIcon size={14} /> TikTok
          </a>
          <a
            href={socials.facebook || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            <FacebookIcon size={14} /> Facebook
          </a>
          <a
            href={socials.youtube || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            <YouTubeIcon size={14} /> YouTube
          </a>
          <a href={`mailto:${contacts.general || 'info@umlc.co.za'}`}>{contacts.general || 'info@umlc.co.za'}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} UKZN Marine Life Club. All rights reserved.
          {settings.sslBadge && (
            <span className="ssl-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Lock size={12} /> SSL Secured
            </span>
          )}
        </p>
      </div>
    </footer>
  );
}
