import { useState } from 'react';
import {
  LayoutDashboard,
  Inbox,
  ClipboardList,
  Calendar,
  Users,
  FileEdit,
  UserCheck,
  Handshake,
  FileText,
  Heart,
  Settings,
} from 'lucide-react';
import { useSiteContent } from '../contexts/SiteContentContext';
import OverviewTab from './tabs/OverviewTab';
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
  { id: 't-overview', label: 'Overview', Icon: LayoutDashboard, Component: OverviewTab },
  { id: 't-inbox', label: 'Inbox', Icon: Inbox, Component: InboxTab },
  { id: 't-issues', label: 'Issues', Icon: ClipboardList, Component: IssuesTab },
  { id: 't-events', label: 'Events', Icon: Calendar, Component: EventsTab },
  { id: 't-members', label: 'Members', Icon: Users, Component: MembersTab },
  { id: 't-content', label: 'Content', Icon: FileEdit, Component: ContentTab },
  { id: 't-leaders', label: 'Team', Icon: UserCheck, Component: TeamTab },
  { id: 't-partners', label: 'Partners', Icon: Handshake, Component: PartnersTab },
  { id: 't-proposal', label: 'Proposal', Icon: FileText, Component: ProposalTab },
  { id: 't-donations', label: 'Donations', Icon: Heart, Component: DonationsTab },
  { id: 't-settings', label: 'Settings', Icon: Settings, Component: SettingsTab },
];

export default function AdminShell() {
  const [active, setActive] = useState('t-overview');
  const { loading } = useSiteContent();
  const ActiveComponent = TABS.find((t) => t.id === active)?.Component;

  if (loading) {
    return <p style={{ color: 'var(--mist)' }}>Loading…</p>;
  }

  return (
    <div>
      <div className="tabs">
        {TABS.map((t) => {
          const Icon = t.Icon;
          return (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? ' on' : ''}`}
              onClick={() => setActive(t.id)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Icon size={14} />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>
      <div className="tab-pane on" id={active}>
        {ActiveComponent && <ActiveComponent onSwitchTab={(id) => setActive(id)} />}
      </div>
    </div>
  );
}
