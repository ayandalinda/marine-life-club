import { useEffect, useState } from 'react';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import CookieBanner from './components/layout/CookieBanner';
import ParticleBackground from './components/layout/ParticleBackground';
import GoogleTranslateWidget from './components/layout/GoogleTranslateWidget';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Programmes from './components/sections/Programmes';
import StudentVoice from './components/sections/StudentVoice';
import Events from './components/sections/Events';
import Partnerships from './components/sections/Partnerships';
import Leadership from './components/sections/Leadership';
import SearchOverlay from './components/search/SearchOverlay';
import DonateModal from './components/modals/DonateModal';
import ContactModal from './components/modals/ContactModal';
import JoinModal from './components/modals/JoinModal';
import MemberProfileModal from './components/modals/MemberProfileModal';
import PrivacyModal from './components/modals/PrivacyModal';
import ProgrammeDetailModal from './components/modals/ProgrammeDetailModal';
import { useSiteContent } from './contexts/SiteContentContext';

function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function PublicSite() {
  const { siteContent } = useSiteContent();
  const sections = siteContent.sections || {};
  const visible = (key) => sections[key] !== false;

  const [searchOpen, setSearchOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [activeProgramme, setActiveProgramme] = useState(null);

  useRevealOnScroll();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setActiveProgramme(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <ParticleBackground />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Nav
        onOpenSearch={() => setSearchOpen(true)}
        onOpenDonate={() => setDonateOpen(true)}
        onOpenJoin={() => setJoinOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
      />
      <div className="page">
        {visible('home') && <Hero onOpenJoin={() => setJoinOpen(true)} />}
        {visible('about') && <About />}
        {visible('programmes') && <Programmes onOpenDetail={setActiveProgramme} />}
        {visible('student-voice') && <StudentVoice />}
        {visible('events') && <Events />}
        {visible('partnerships') && <Partnerships onOpenContact={() => setContactOpen(true)} />}
        {visible('leadership') && <Leadership />}
      </div>
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
      <MemberProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ProgrammeDetailModal programme={activeProgramme} onClose={() => setActiveProgramme(null)} />

      <CookieBanner onOpenPrivacy={() => setPrivacyOpen(true)} />
      <GoogleTranslateWidget />
    </>
  );
}
