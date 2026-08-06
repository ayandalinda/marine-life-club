import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { useMemberAuth } from '../../contexts/MemberAuthContext';
import { useSiteContent } from '../../contexts/SiteContentContext';

const ALL_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#programmes', label: 'Programmes' },
  { href: '#student-voice', label: 'Student Voice' },
  { href: '#events', label: 'Events' },
  { href: '#partnerships', label: 'Partners' },
  { href: '#leadership', label: 'Leadership' },
];
const SIMPLE_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#leadership', label: 'Leadership' },
];

export default function Nav({ onOpenSearch, onOpenDonate, onOpenJoin, onOpenProfile }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { member } = useMemberAuth();
  const { siteContent } = useSiteContent();
  const links = siteContent.settings?.simpleNav ? SIMPLE_LINKS : ALL_LINKS;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
      <nav>
        <a href="#home" className="logo" aria-label="UMLC Home">
          <img className="logo-img" src={logo} alt="" />
          UMLC
        </a>
        <ul className="nav-links" role="menubar">
          {links.map((l) => (
            <li role="none" key={l.href}><a href={l.href} role="menuitem">{l.label}</a></li>
          ))}
          <li role="none"><button className="nav-search" onClick={onOpenSearch} aria-label="Search">🔍</button></li>
          <li role="none">
            <button
              className="nav-cta"
              style={{ color: 'var(--coral)', borderColor: 'rgba(255,107,71,0.4)' }}
              onClick={onOpenDonate}
              aria-label="Donate"
            >💛 Donate</button>
          </li>
          <li role="none">
            {member ? (
              <button className="nav-cta" onClick={onOpenProfile} aria-label="My Profile">👤 {member.fname}</button>
            ) : (
              <button className="nav-cta" onClick={onOpenJoin} aria-label="Join UMLC">Join UMLC</button>
            )}
          </li>
          <li role="none"><Link className="nav-cta" to="/admin" aria-label="Admin Panel">⚙ Admin</Link></li>
        </ul>
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
        ))}
        <button onClick={() => { closeMenu(); onOpenSearch(); }}>🔍 Search</button>
        {member ? (
          <button onClick={() => { closeMenu(); onOpenProfile(); }}>👤 {member.fname}</button>
        ) : (
          <button onClick={() => { closeMenu(); onOpenJoin(); }}>Join UMLC</button>
        )}
        <Link to="/admin" onClick={closeMenu}>⚙ Admin Panel</Link>
      </div>
    </div>
  );
}
