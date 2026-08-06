import { useState } from 'react';
import { useSiteContent } from '../contexts/SiteContentContext';
import InboxTab from './tabs/InboxTab';
import IssuesTab from './tabs/IssuesTab';
import ContentTab from './tabs/ContentTab';
import TeamTab from './tabs/TeamTab';
import EventsTab from './tabs/EventsTab';
import PartnersTab from './tabs/PartnersTab';
import ProposalTab from './tabs/ProposalTab';
import MembersTab from './tabs/MembersTab';
import DonationsTab from './tabs/DonationsTab';
import SettingsTab from './tabs/SettingsTab';

const TABS = [
  { id: 't-inbox', label: '📬 Inbox', Component: InboxTab },
  { id: 't-issues', label: '📋 Issues', Component: IssuesTab },
  { id: 't-content', label: '✏️ Content', Component: ContentTab },
  { id: 't-leaders', label: '👥 Team', Component: TeamTab },
  { id: 't-events', label: '📅 Events', Component: EventsTab },
  { id: 't-partners', label: '🤝 Partners', Component: PartnersTab },
  { id: 't-proposal', label: '📄 Proposal', Component: ProposalTab },
  { id: 't-members', label: '👥 Members', Component: MembersTab },
  { id: 't-donations', label: '💛 Donations', Component: DonationsTab },
  { id: 't-settings', label: '⚙ Settings', Component: SettingsTab },
];

export default function AdminShell() {
  const [active, setActive] = useState('t-inbox');
  const { loading } = useSiteContent();
  const ActiveComponent = TABS.find((t) => t.id === active)?.Component;

  if (loading) {
    return <p style={{ color: 'var(--mist)' }}>Loading…</p>;
  }

  return (
    <div>
      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tab-btn${active === t.id ? ' on' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tab-pane on" id={active}>
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
}
