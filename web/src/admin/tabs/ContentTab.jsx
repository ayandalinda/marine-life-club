import { useEffect, useState } from 'react';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useToast } from '../../contexts/ToastContext';
import { updateProgramme } from '../../api/programmes';

function HeroEditor() {
  const { siteContent, updateSiteContent } = useSiteContent();
  const { showToast } = useToast();
  const [tagline, setTagline] = useState(siteContent.hero?.tagline || '');
  const [sub, setSub] = useState(siteContent.hero?.sub || '');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (siteContent.hero) {
      setTagline(siteContent.hero.tagline || '');
      setSub(siteContent.hero.sub || '');
    }
  }, [siteContent.hero]);

  const save = async () => {
    setSaving(true);
    try {
      await updateSiteContent({ hero: { tagline, sub } });
      showToast('Hero saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Hero</h4>
      <div className="mf"><label>Tagline/Quote</label><input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} /></div>
      <div className="mf"><label>Subtitle Text</label><textarea rows={3} value={sub} onChange={(e) => setSub(e.target.value)} /></div>
      <button className="save-btn" onClick={save} disabled={saving}>Save Hero</button>
    </div>
  );
}

function AboutEditor() {
  const { siteContent, updateSiteContent } = useSiteContent();
  const { showToast } = useToast();
  const [about, setAbout] = useState({
    intro: siteContent.about?.intro || '',
    mission: siteContent.about?.mission || '',
    vision: siteContent.about?.vision || '',
    values: siteContent.about?.values || '',
    presidentMessage: siteContent.about?.presidentMessage || '',
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (siteContent.about) {
      setAbout({
        intro: siteContent.about.intro || '',
        mission: siteContent.about.mission || '',
        vision: siteContent.about.vision || '',
        values: siteContent.about.values || '',
        presidentMessage: siteContent.about.presidentMessage || '',
      });
    }
  }, [siteContent.about]);

  const set = (key) => (e) => setAbout((a) => ({ ...a, [key]: e.target.value }));

  const save = async () => {
    setSaving(true);
    try {
      await updateSiteContent({ about });
      showToast('About saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>About</h4>
      <div className="mf"><label>Intro Paragraph</label><textarea rows={3} value={about.intro} onChange={set('intro')} /></div>
      <div className="mf"><label>Mission</label><textarea rows={3} value={about.mission} onChange={set('mission')} /></div>
      <div className="mf"><label>Vision</label><textarea rows={3} value={about.vision} onChange={set('vision')} /></div>
      <div className="mf"><label>Core Values (HTML ok)</label><textarea rows={4} value={about.values} onChange={set('values')} /></div>
      <div className="mf"><label>President's Message</label><textarea rows={5} value={about.presidentMessage} onChange={set('presidentMessage')} /></div>
      <button className="save-btn" onClick={save} disabled={saving}>Save About</button>
    </div>
  );
}

function ProgrammesEditor() {
  const { programmes, refetchProgrammes } = useSiteContent();
  const { showToast } = useToast();
  const [drafts, setDrafts] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (Array.isArray(programmes) && programmes.length > 0) {
      setDrafts((prev) => {
        const next = { ...prev };
        for (const p of programmes) {
          if (!next[p.id]) {
            next[p.id] = { ...p, activitiesText: (p.activities || []).join('\n') };
          }
        }
        return next;
      });
    }
  }, [programmes]);

  const setField = (id, key) => (e) => setDrafts((d) => ({ ...d, [id]: { ...(d[id] || {}), [key]: e.target.value } }));

  const save = async () => {
    setSaving(true);
    try {
      await Promise.all(
        programmes.map((prog) => {
          const d = drafts[prog.id] || prog;
          const activities = (d.activitiesText !== undefined ? d.activitiesText : (d.activities || []).join('\n'))
            .split('\n')
            .map((s) => s.trim())
            .filter(Boolean);

          return updateProgramme(prog.id, {
            num: d.num || prog.num,
            icon: d.icon || prog.icon,
            title: d.title || prog.title,
            tagline: d.tagline || prog.tagline,
            summary: d.summary || prog.summary,
            description: d.description || prog.description,
            howToJoin: d.howToJoin || prog.howToJoin,
            activities,
          });
        }),
      );
      await refetchProgrammes();
      showToast('Programmes saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Programmes</h4>
      <div>
        {programmes.map((p) => {
          const d = drafts[p.id] || { ...p, activitiesText: (p.activities || []).join('\n') };
          return (
            <div className="eitem" key={p.id}>
              <strong>{p.num} — {p.title}</strong>
              <div className="mf"><label>Icon</label><input type="text" value={d.icon || ''} onChange={setField(p.id, 'icon')} /></div>
              <div className="mf"><label>Title</label><input type="text" value={d.title || ''} onChange={setField(p.id, 'title')} /></div>
              <div className="mf"><label>Tagline</label><input type="text" value={d.tagline || ''} onChange={setField(p.id, 'tagline')} /></div>
              <div className="mf"><label>Summary</label><textarea rows={2} value={d.summary || ''} onChange={setField(p.id, 'summary')} /></div>
              <div className="mf"><label>Description</label><textarea rows={3} value={d.description || ''} onChange={setField(p.id, 'description')} /></div>
              <div className="mf"><label>Activities (one per line)</label><textarea rows={4} value={d.activitiesText || ''} onChange={setField(p.id, 'activitiesText')} /></div>
              <div className="mf"><label>How to Join</label><textarea rows={2} value={d.howToJoin || ''} onChange={setField(p.id, 'howToJoin')} /></div>
            </div>
          );
        })}
      </div>
      <button className="save-btn" onClick={save} disabled={saving}>Save Programmes</button>
    </div>
  );
}

function PartnershipsFooterEditor() {
  const { siteContent, updateSiteContent } = useSiteContent();
  const { showToast } = useToast();
  const [partnerIntro, setPartnerIntro] = useState(siteContent.partnerIntro || '');
  const [footerAddress, setFooterAddress] = useState((siteContent.footerAddress || '').replace(/<br\s*\/?>/gi, '\n'));
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (siteContent.partnerIntro !== undefined) setPartnerIntro(siteContent.partnerIntro || '');
    if (siteContent.footerAddress !== undefined) setFooterAddress((siteContent.footerAddress || '').replace(/<br\s*\/?>/gi, '\n'));
  }, [siteContent.partnerIntro, siteContent.footerAddress]);

  const save = async () => {
    setSaving(true);
    try {
      await updateSiteContent({
        partnerIntro,
        footerAddress: footerAddress.split('\n').map((s) => s.trim()).filter(Boolean).join('<br>'),
      });
      showToast('Saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Partnerships &amp; Footer</h4>
      <div className="mf"><label>Partnerships Intro</label><textarea rows={2} value={partnerIntro} onChange={(e) => setPartnerIntro(e.target.value)} /></div>
      <div className="mf"><label>Footer Address (one line per row)</label><textarea rows={3} value={footerAddress} onChange={(e) => setFooterAddress(e.target.value)} /></div>
      <button className="save-btn" onClick={save} disabled={saving}>Save</button>
    </div>
  );
}

function SocialsEditor() {
  const { siteContent, updateSiteContent } = useSiteContent();
  const { showToast } = useToast();
  const [socials, setSocials] = useState({
    instagram: siteContent.socials?.instagram || '',
    tiktok: siteContent.socials?.tiktok || '',
    facebook: siteContent.socials?.facebook || '',
    youtube: siteContent.socials?.youtube || '',
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (siteContent.socials) {
      setSocials({
        instagram: siteContent.socials.instagram || '',
        tiktok: siteContent.socials.tiktok || '',
        facebook: siteContent.socials.facebook || '',
        youtube: siteContent.socials.youtube || '',
      });
    }
  }, [siteContent.socials]);

  const set = (key) => (e) => setSocials((s) => ({ ...s, [key]: e.target.value }));

  const save = async () => {
    setSaving(true);
    try {
      await updateSiteContent({ socials });
      showToast('Socials saved.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-group">
      <h4>Social Media Links</h4>
      <div className="mf"><label>Instagram URL</label><input type="url" placeholder="https://instagram.com/..." value={socials.instagram} onChange={set('instagram')} /></div>
      <div className="mf"><label>TikTok URL</label><input type="url" placeholder="https://tiktok.com/@..." value={socials.tiktok} onChange={set('tiktok')} /></div>
      <div className="mf"><label>Facebook URL</label><input type="url" placeholder="https://facebook.com/..." value={socials.facebook} onChange={set('facebook')} /></div>
      <div className="mf"><label>YouTube URL</label><input type="url" placeholder="https://youtube.com/..." value={socials.youtube} onChange={set('youtube')} /></div>
      <button className="save-btn" onClick={save} disabled={saving}>Save Socials</button>
    </div>
  );
}

export default function ContentTab() {
  return (
    <>
      <HeroEditor />
      <AboutEditor />
      <ProgrammesEditor />
      <PartnershipsFooterEditor />
      <SocialsEditor />
    </>
  );
}
