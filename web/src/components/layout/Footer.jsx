import logo from '../../assets/logo.jpg';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { downloadConstitution, downloadProposal } from '../../lib/downloads';

export default function Footer({ onOpenPrivacy }) {
  const { siteContent, tiers } = useSiteContent();
  const socials = siteContent.socials || {};
  const settings = siteContent.settings || {};
  const contacts = siteContent.contacts || {};

  return (
    <footer role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo"><img className="logo-img" src={logo} alt="" /></a>
          <p dangerouslySetInnerHTML={{ __html: siteContent.footerAddress || '' }} />
        </div>
        <div className="footer-col">
          <h5>Navigate</h5>
          <a href="#about">About Us</a>
          <a href="#programmes">Programmes</a>
          <a href="#student-voice">Student Voice</a>
          <a href="#events">Events</a>
          <a href="#partnerships">Partnerships</a>
          <a href="#leadership">Leadership</a>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <a onClick={() => downloadConstitution()}>Club Constitution</a>
          <a onClick={() => downloadProposal(tiers)}>Sponsorship Proposal</a>
          <a onClick={onOpenPrivacy}>Privacy Policy</a>
        </div>
        <div className="footer-col">
          <h5>Connect</h5>
          <a href={socials.instagram || '#'} target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          <a href={socials.tiktok || '#'} target="_blank" rel="noopener noreferrer">🎵 TikTok</a>
          <a href={socials.facebook || '#'} target="_blank" rel="noopener noreferrer">👥 Facebook</a>
          <a href={socials.youtube || '#'} target="_blank" rel="noopener noreferrer">▶️ YouTube</a>
          <a href={`mailto:${contacts.general || 'info@umlc.co.za'}`}>{contacts.general || 'info@umlc.co.za'}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} UKZN Marine Life Club. All rights reserved.
          {settings.sslBadge && <span className="ssl-badge">🔒 SSL Secured</span>}
        </p>
      </div>
    </footer>
  );
}
