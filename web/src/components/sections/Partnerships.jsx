import { useSiteContent } from '../../contexts/SiteContentContext';
import { downloadProposal } from '../../lib/downloads';

const COLLABORATORS = ['SAAMBR', 'Ezemvelo KZN Wildlife', 'Two Oceans Aquarium', 'ORI', 'UKZN School of Life Sciences', 'South African Navy'];

export default function Partnerships({ onOpenContact }) {
  const { siteContent, partners, tiers } = useSiteContent();

  return (
    <section id="partnerships" className="section reveal" aria-label="Partnerships">
      <div className="section-label" aria-hidden="true">Partnerships</div>
      <h2 className="section-heading">Growing our<br /><em>network.</em></h2>
      <div className="divider" aria-hidden="true"></div>
      <div className="partners-intro"><p>{siteContent.partnerIntro}</p></div>
      <div className="partner-grid" aria-label="Current partners">
        {[1, 2, 3, 4].map((slot) => {
          const p = partners.find((x) => x.slot === slot);
          if (p && p.logo) {
            return (
              <div className="partner-tile" key={slot}>
                <img className="partner-tile-img" src={p.logo} alt={p.name || 'Partner'} />
                {p.name && <div className="partner-tile-name">{p.name}</div>}
                {p.url && <a className="pt-url" href={p.url} target="_blank" rel="noopener noreferrer">Visit →</a>}
              </div>
            );
          }
          return (
            <div className="partner-tile" key={slot}>
              <div className="partner-tile-empty">
                <span className="add-icon">+</span>
                <span>Open Slot</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cta-banner reveal">
        <div>
          <h3>Become a Partner</h3>
          <p>Download our sponsorship proposal or contact us to discuss collaboration opportunities.</p>
        </div>
        <div className="cta-btns">
          <button className="btn-coral" onClick={() => downloadProposal(tiers)}>Download Proposal</button>
          <button className="btn-outline" onClick={onOpenContact}>Contact Us</button>
        </div>
      </div>
      <div className="potential-partners reveal">
        <h4>Potential Collaborators</h4>
        <div className="partner-tags">
          {COLLABORATORS.map((c) => <div className="partner-tag" key={c}>{c}</div>)}
        </div>
      </div>
    </section>
  );
}
