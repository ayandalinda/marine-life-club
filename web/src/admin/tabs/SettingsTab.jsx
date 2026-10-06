import { useEffect, useRef, useState } from 'react';
import { Search, Lock, Zap, Eye, Database, FileText, Globe } from 'lucide-react';
import { useSiteContent } from '../../contexts/SiteContentContext';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { useToast } from '../../contexts/ToastContext';
import { useTheme } from '../../contexts/ThemeContext';
import { changeAdminPassword } from '../../api/auth';
import { downloadSitemap, downloadBackup } from '../../lib/downloads';
import { updateProgramme } from '../../api/programmes';
import { upsertPartner } from '../../api/partners';
import { upsertTier } from '../../api/tiers';

const THEMES = [
  { id: 'ocean', label: 'Ocean', preview: 'linear-gradient(135deg,#020d18,#00f5c4)' },
  { id: 'light', label: 'Light', preview: 'linear-gradient(135deg,#e2eef9,#009988)' },
  { id: 'forest', label: 'Forest', preview: 'linear-gradient(135deg,#0a1a0a,#7dffb3)' },
  { id: 'crimson', label: 'Crimson', preview: 'linear-gradient(135deg,#180a0a,#ff6b6b)' },
  { id: 'slate', label: 'Slate', preview: 'linear-gradient(135deg,#0d0d14,#a78bfa)' },
];

const SECTION_NAMES = {
  home: 'Home/Hero', about: 'About UMLC', programmes: 'Programmes', 'student-voice': 'Student Voice',
  events: 'Events', partnerships: 'Partnerships', leadership: 'Leadership',
};

function Toggle({ on, onClick, label }) {
  return <button type="button" className={`toggle${on ? ' on' : ''}`} onClick={onClick} aria-label={label} aria-pressed={on} />;
}

export default function SettingsTab() {
  const { siteContent, updateSiteContent, programmes, partners, tiers, leaders, events, issues } = useSiteContent();
  const { theme, setTheme } = useTheme();
  const { logout } = useAdminAuth();
  const { showToast } = useToast();
  const settings = siteContent.settings || {};
  const sections = siteContent.sections || {};

  const setSetting = async (key, value) => {
    await updateSiteContent({ settings: { ...settings, [key]: value } });
  };

  const setSection = async (key, value) => {
    await updateSiteContent({ sections: { ...sections, [key]: value } });
  };

  // SEO
  const [seo, setSeo] = useState({
    title: siteContent.seo?.title || '', metaDesc: siteContent.seo?.metaDesc || '', canonical: siteContent.seo?.canonical || '',
  });
  const saveSEO = async () => {
    await updateSiteContent({ seo: { ...siteContent.seo, ...seo } });
    showToast('SEO settings saved.');
  };

  // Change password
  const [pw, setPw] = useState({ cur: '', next: '', confirm: '' });
  const [pwMsg, setPwMsg] = useState(null);
  const changePassword = async () => {
    setPwMsg(null);
    if (pw.next.length < 8) {
      setPwMsg({ ok: false, text: 'New password must be at least 8 characters.' });
      return;
    }
    if (pw.next !== pw.confirm) {
      setPwMsg({ ok: false, text: "Passwords don't match." });
      return;
    }
    try {
      await changeAdminPassword(pw.cur, pw.next);
      setPwMsg({ ok: true, text: 'Password updated.' });
      setPw({ cur: '', next: '', confirm: '' });
    } catch (err) {
      setPwMsg({ ok: false, text: err.message || 'Current password is incorrect.' });
    }
  };

  // Backups
  const restoreInputRef = useRef(null);
  const handleBackupDownload = () => {
    downloadBackup({ siteContent, programmes, partners, tiers, leaders, events, issues });
  };
  const handleRestore = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!data.siteContent) throw new Error('Invalid backup file.');
      await updateSiteContent(data.siteContent);
      if (Array.isArray(data.programmes)) {
        await Promise.all(data.programmes.map((p) => p.id && updateProgramme(p.id, p)));
      }
      if (Array.isArray(data.partners)) {
        await Promise.all(data.partners.map((p) => upsertPartner(p.slot, p)));
      }
      if (Array.isArray(data.tiers)) {
        await Promise.all(data.tiers.map((t) => upsertTier(t.slot, t)));
      }
      showToast('Backup restored.');
    } catch (err) {
      showToast(err.message || 'Failed to restore backup.');
    } finally {
      e.target.value = '';
    }
  };

  // Google Translate (settings panel)
  const translateRef = useRef(null);
  const [translateOpen, setTranslateOpen] = useState(false);
  useEffect(() => {
    if (!translateOpen || !translateRef.current || translateRef.current.childElementCount > 0) return;
    const tryInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, translateRef.current.id);
      } else {
        setTimeout(tryInit, 300);
      }
    };
    tryInit();
  }, [translateOpen]);

  return (
    <div>
      <div className="edit-group">
        <h4>Theme</h4>
        <div className="theme-grid">
          {THEMES.map((t) => (
            <div
              key={t.id}
              className={`theme-swatch${theme === t.id ? ' active' : ''}`}
              onClick={() => setTheme(t.id)}
            >
              <div className="sw-preview" style={{ background: t.preview }}></div>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="edit-group">
        <h4>Section Visibility</h4>
        <div>
          {Object.entries(SECTION_NAMES).map(([key, label]) => (
            <div className="toggle-row" key={key}>
              <span>{label}</span>
              <Toggle on={sections[key] !== false} onClick={() => setSection(key, sections[key] === false)} label={label} />
            </div>
          ))}
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Search size={15} /> SEO &amp; Discoverability
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>Search Engine Visibility</strong><small>Turn ON when your site goes live to allow Google/Bing to index it</small></div>
          <Toggle on={!!siteContent.seo?.enabled} onClick={() => updateSiteContent({ seo: { ...siteContent.seo, enabled: !siteContent.seo?.enabled } })} label="SEO visibility" />
        </div>
        <div className="setting-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
          <div className="mf" style={{ width: '100%' }}><label>Site Title</label><input type="text" value={seo.title} onChange={(e) => setSeo((s) => ({ ...s, title: e.target.value }))} /></div>
          <div className="mf" style={{ width: '100%' }}><label>Meta Description (160 chars)</label><input type="text" value={seo.metaDesc} onChange={(e) => setSeo((s) => ({ ...s, metaDesc: e.target.value }))} /></div>
          <div className="mf" style={{ width: '100%', marginBottom: 0 }}><label>Canonical URL</label><input type="url" value={seo.canonical} onChange={(e) => setSeo((s) => ({ ...s, canonical: e.target.value }))} /></div>
          <button className="save-btn" onClick={saveSEO} style={{ marginTop: '0.75rem' }}>Save SEO Settings</button>
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>XML Sitemap</strong><small>Helps search engines discover all your pages</small></div>
        </div>
        <button className="save-btn" onClick={() => downloadSitemap(siteContent.seo?.canonical)}>Download sitemap.xml</button>
      </div>

      <div className="settings-section">
        <div className="settings-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Lock size={15} /> Security
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>SSL/TLS Certificate</strong><small>Enable HTTPS via your web host (e.g. Netlify, Vercel) — required for live sites.</small></div>
          <span className="setting-status">Manual Setup</span>
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>SSL Badge on Footer</strong><small>Show SSL Secured badge when SSL is active</small></div>
          <Toggle on={!!settings.sslBadge} onClick={() => setSetting('sslBadge', !settings.sslBadge)} label="SSL badge" />
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>Login Attempt Limit</strong><small>Block admin login after 5 failed attempts for 10 minutes</small></div>
          <Toggle on={!!settings.loginLimit} onClick={() => setSetting('loginLimit', !settings.loginLimit)} label="Login attempt limit" />
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Zap size={15} /> Performance &amp; Mobile
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>Smooth Scroll &amp; Animations</strong><small>Scroll animations and transitions enhance user experience</small></div>
          <Toggle on={settings.animations !== false} onClick={() => setSetting('animations', settings.animations === false)} label="Animations" />
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>Simplified Navigation</strong><small>Reduces nav items to essential links only (mobile-friendly)</small></div>
          <Toggle on={!!settings.simpleNav} onClick={() => setSetting('simpleNav', !settings.simpleNav)} label="Simplified navigation" />
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Eye size={15} /> Accessibility
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>High Contrast Mode</strong><small>Boosts text contrast for low-vision users</small></div>
          <Toggle on={!!settings.highContrast} onClick={() => setSetting('highContrast', !settings.highContrast)} label="High contrast" />
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Database size={15} /> Backups &amp; Data
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>Manual Backup</strong><small>Download a full backup of all your website data as a JSON file</small></div>
          <button className="save-btn" style={{ marginTop: 0 }} onClick={handleBackupDownload}>Download Backup</button>
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>Restore Backup</strong><small>Upload a previously saved backup .json file to restore content</small></div>
          <div>
            <input type="file" accept=".json" ref={restoreInputRef} onChange={handleRestore} style={{ display: 'none' }} />
            <button className="save-btn" style={{ marginTop: 0, background: 'var(--mid)', color: 'var(--pearl)' }} onClick={() => restoreInputRef.current?.click()}>Restore from Backup</button>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <FileText size={15} /> Privacy &amp; Compliance (POPIA / GDPR)
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>Cookie Consent Banner</strong><small>Notify users about data collection on first visit</small></div>
          <Toggle on={!!settings.cookieBanner} onClick={() => setSetting('cookieBanner', !settings.cookieBanner)} label="Cookie banner" />
        </div>
      </div>

      <div className="edit-group" style={{ marginTop: '1.5rem' }}>
        <h4>Change Admin Password</h4>
        <div className="mf"><label>Current Password</label><input type="password" value={pw.cur} onChange={(e) => setPw((p) => ({ ...p, cur: e.target.value }))} /></div>
        <div className="mf"><label>New Password</label><input type="password" value={pw.next} onChange={(e) => setPw((p) => ({ ...p, next: e.target.value }))} /></div>
        <div className="mf"><label>Confirm New Password</label><input type="password" value={pw.confirm} onChange={(e) => setPw((p) => ({ ...p, confirm: e.target.value }))} /></div>
        {pwMsg && <div className={`alert ${pwMsg.ok ? 'alert-ok' : 'alert-err'}`} style={{ display: 'block' }}>{pwMsg.text}</div>}
        <button className="save-btn" onClick={changePassword}>Update Password</button>
      </div>

      <div className="settings-section">
        <div className="settings-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Globe size={15} /> Language &amp; Translation
        </div>
        <div className="setting-row">
          <div className="setting-info"><strong>Translate Website</strong><small>Translate all content using Google Translate.</small></div>
          <button className="save-btn" style={{ margin: 0, fontSize: '0.72rem', padding: '0.5rem 1rem' }} onClick={() => setTranslateOpen((o) => !o)}>
            {translateOpen ? 'Close Translator' : 'Open Translator'}
          </button>
        </div>
        {translateOpen && <div style={{ marginTop: '0.75rem' }}><div id="google-translate-settings" ref={translateRef}></div></div>}
      </div>

      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  );
}
