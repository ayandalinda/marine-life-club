import logo from '../../assets/logo.jpg';
import { useSiteContent } from '../../contexts/SiteContentContext';

export default function Hero({ onOpenJoin }) {
  const { siteContent } = useSiteContent();
  const hero = siteContent.hero || {};

  return (
    <section id="home" aria-label="Hero section">
      <div className="orb orb-1" aria-hidden="true"></div>
      <div className="orb orb-2" aria-hidden="true"></div>
      <div className="hero-inner">
        <img className="hero-logo" src={logo} alt="UMLC logo" />
        <div className="hero-eyebrow" aria-label="Institution">UKZN · School of Life Sciences · Est. 2025</div>
        <h1 className="hero-title">Empowering Future<br /><em>Marine Leaders</em><br />in KwaZulu-Natal</h1>
        {hero.tagline && <p className="hero-tagline">{hero.tagline}</p>}
        {hero.sub && <p className="hero-sub">{hero.sub}</p>}
        <div className="hero-btns">
          <button className="btn-glow" onClick={onOpenJoin}>Join UMLC</button>
          <a href="#events" className="btn-outline">Upcoming Events</a>
          <a href="#about" className="btn-outline">Learn More</a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true"><div className="scroll-line"></div>Scroll</div>
    </section>
  );
}
