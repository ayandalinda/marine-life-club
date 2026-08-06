import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getSiteContent, updateSiteContent as apiUpdateSiteContent } from '../api/siteContent';
import { listProgrammes } from '../api/programmes';
import { listPartners } from '../api/partners';
import { listTiers } from '../api/tiers';
import { listLeadership } from '../api/leadership';
import { listEvents } from '../api/events';
import { listIssues } from '../api/issues';

const SiteContentContext = createContext(null);

const EMPTY_SITE_CONTENT = {
  hero: {}, about: {}, contacts: {}, socials: {}, footerAddress: '', partnerIntro: '',
  bankDetails: {}, seo: {}, sections: {}, settings: {},
};

export function SiteContentProvider({ children }) {
  const [siteContent, setSiteContent] = useState(EMPTY_SITE_CONTENT);
  const [programmes, setProgrammes] = useState([]);
  const [partners, setPartners] = useState([]);
  const [tiers, setTiers] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [events, setEvents] = useState([]);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  const refetchSiteContent = useCallback(async () => setSiteContent(await getSiteContent()), []);
  const refetchProgrammes = useCallback(async () => setProgrammes(await listProgrammes()), []);
  const refetchPartners = useCallback(async () => setPartners(await listPartners()), []);
  const refetchTiers = useCallback(async () => setTiers(await listTiers()), []);
  const refetchLeaders = useCallback(async () => setLeaders(await listLeadership()), []);
  const refetchEvents = useCallback(async () => setEvents(await listEvents()), []);
  const refetchIssues = useCallback(async () => setIssues(await listIssues()), []);

  useEffect(() => {
    Promise.allSettled([
      refetchSiteContent(), refetchProgrammes(), refetchPartners(),
      refetchTiers(), refetchLeaders(), refetchEvents(), refetchIssues(),
    ]).finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const settings = siteContent.settings || {};
    document.body.classList.toggle('no-animations', settings.animations === false);
    document.body.classList.toggle('high-contrast', !!settings.highContrast);
  }, [siteContent.settings]);

  useEffect(() => {
    const seo = siteContent.seo || {};
    if (seo.title) document.title = seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && seo.metaDesc) metaDesc.setAttribute('content', seo.metaDesc);
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute('content', seo.enabled ? 'index,follow' : 'noindex,nofollow');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && seo.canonical) canonical.setAttribute('href', seo.canonical);
  }, [siteContent.seo]);

  const updateSiteContent = useCallback(async (patch) => {
    const updated = await apiUpdateSiteContent(patch);
    setSiteContent(updated);
    return updated;
  }, []);

  return (
    <SiteContentContext.Provider
      value={{
        siteContent, programmes, partners, tiers, leaders, events, issues, loading,
        updateSiteContent,
        refetchSiteContent, refetchProgrammes, refetchPartners,
        refetchTiers, refetchLeaders, refetchEvents, refetchIssues,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
