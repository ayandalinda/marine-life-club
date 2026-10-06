import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getSiteContent, updateSiteContent as apiUpdateSiteContent } from '../api/siteContent';
import { listProgrammes } from '../api/programmes';
import { listPartners } from '../api/partners';
import { listTiers } from '../api/tiers';
import { listLeadership } from '../api/leadership';
import { listEvents } from '../api/events';
import { listIssues } from '../api/issues';
import {
  DEFAULT_SITE_CONTENT,
  DEFAULT_PROGRAMMES,
  DEFAULT_LEADERS,
  DEFAULT_PARTNERS,
  DEFAULT_TIERS,
  DEFAULT_EVENTS,
} from '../lib/defaults';

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const [siteContent, setSiteContent] = useState(DEFAULT_SITE_CONTENT);
  const [programmes, setProgrammes] = useState(DEFAULT_PROGRAMMES);
  const [partners, setPartners] = useState(DEFAULT_PARTNERS);
  const [tiers, setTiers] = useState(DEFAULT_TIERS);
  const [leaders, setLeaders] = useState(DEFAULT_LEADERS);
  const [events, setEvents] = useState(DEFAULT_EVENTS);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  const refetchSiteContent = useCallback(async () => {
    try {
      const data = await getSiteContent();
      if (data && typeof data === 'object') {
        setSiteContent((prev) => ({
          ...prev,
          ...data,
          hero: { ...prev.hero, ...(data.hero || {}) },
          about: { ...prev.about, ...(data.about || {}) },
          contacts: { ...prev.contacts, ...(data.contacts || {}) },
          socials: { ...prev.socials, ...(data.socials || {}) },
          sections: { ...prev.sections, ...(data.sections || {}) },
          settings: { ...prev.settings, ...(data.settings || {}) },
        }));
      }
    } catch (err) {
      console.warn('Using cached/default site content:', err.message);
    }
  }, []);

  const refetchProgrammes = useCallback(async () => {
    try {
      const list = await listProgrammes();
      if (Array.isArray(list) && list.length > 0) setProgrammes(list);
    } catch (err) {
      console.warn('Using default programmes:', err.message);
    }
  }, []);

  const refetchPartners = useCallback(async () => {
    try {
      const list = await listPartners();
      if (Array.isArray(list) && list.length > 0) setPartners(list);
    } catch (err) {
      console.warn('Using default partners:', err.message);
    }
  }, []);

  const refetchTiers = useCallback(async () => {
    try {
      const list = await listTiers();
      if (Array.isArray(list) && list.length > 0) setTiers(list);
    } catch (err) {
      console.warn('Using default tiers:', err.message);
    }
  }, []);

  const refetchLeaders = useCallback(async () => {
    try {
      const list = await listLeadership();
      if (Array.isArray(list) && list.length > 0) setLeaders(list);
    } catch (err) {
      console.warn('Using default leaders:', err.message);
    }
  }, []);

  const refetchEvents = useCallback(async () => {
    try {
      const list = await listEvents();
      if (Array.isArray(list)) setEvents(list);
    } catch (err) {
      console.warn('Using default events:', err.message);
    }
  }, []);

  const refetchIssues = useCallback(async () => {
    try {
      const list = await listIssues();
      if (Array.isArray(list)) setIssues(list);
    } catch (err) {
      console.warn('Using empty issues list:', err.message);
    }
  }, []);

  useEffect(() => {
    Promise.allSettled([
      refetchSiteContent(),
      refetchProgrammes(),
      refetchPartners(),
      refetchTiers(),
      refetchLeaders(),
      refetchEvents(),
      refetchIssues(),
    ]).finally(() => setLoading(false));
  }, [
    refetchSiteContent,
    refetchProgrammes,
    refetchPartners,
    refetchTiers,
    refetchLeaders,
    refetchEvents,
    refetchIssues,
  ]);

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
    setSiteContent((prev) => ({
      ...prev,
      ...updated,
      hero: { ...prev.hero, ...(updated?.hero || {}) },
      about: { ...prev.about, ...(updated?.about || {}) },
      contacts: { ...prev.contacts, ...(updated?.contacts || {}) },
      socials: { ...prev.socials, ...(updated?.socials || {}) },
      sections: { ...prev.sections, ...(updated?.sections || {}) },
      settings: { ...prev.settings, ...(updated?.settings || {}) },
    }));
    return updated;
  }, []);

  return (
    <SiteContentContext.Provider
      value={{
        siteContent,
        programmes,
        partners,
        tiers,
        leaders,
        events,
        issues,
        loading,
        updateSiteContent,
        refetchSiteContent,
        refetchProgrammes,
        refetchPartners,
        refetchTiers,
        refetchLeaders,
        refetchEvents,
        refetchIssues,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
