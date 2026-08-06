export function downloadBlob(filename, content, type = 'text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function downloadProposal(tiers) {
  const lines = [
    'UKZN MARINE LIFE CLUB — SPONSORSHIP PROPOSAL',
    '='.repeat(50),
    '',
    ...tiers.flatMap((t) => [
      `${t.icon || ''} ${t.name} — ${t.price}`,
      t.perks,
      '',
    ]),
    'Contact us to discuss a partnership: info@umlc.co.za',
  ];
  downloadBlob('UMLC-Sponsorship-Proposal.txt', lines.join('\n'));
}

export function downloadConstitution() {
  const text = [
    'UKZN MARINE LIFE CLUB — CONSTITUTION',
    '='.repeat(50),
    '',
    'Article 1: Name',
    'This organization shall be known as the UKZN Marine Life Club (UMLC).',
    '',
    'Article 2: Purpose',
    'To foster a community of marine biology students at UKZN, providing academic',
    'support, professional development, and hands-on conservation experience.',
    '',
    'Article 3: Membership',
    'Membership is open to all registered UKZN students with an interest in',
    'marine biology and conservation.',
    '',
    'Article 4: Governance',
    'The club is led by an elected executive committee including President,',
    'Vice President, Secretary, Treasurer, Media Officer, and Event Coordinator.',
  ].join('\n');
  downloadBlob('UMLC-Constitution.txt', text);
}

export function downloadSitemap(canonical) {
  const base = (canonical || 'https://www.umlc.co.za/').replace(/\/$/, '');
  const paths = ['', '#about', '#programmes', '#student-voice', '#events', '#partnerships', '#leadership'];
  const urls = paths.map((p) => `  <url><loc>${base}/${p}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  downloadBlob('sitemap.xml', xml, 'application/xml');
}

export function downloadCSV(filename, rows, headers) {
  const escape = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const lines = [headers.map(escape).join(',')];
  rows.forEach((row) => {
    lines.push(headers.map((h) => escape(row[h])).join(','));
  });
  downloadBlob(filename, lines.join('\n'), 'text/csv');
}

export function downloadBackup(data) {
  downloadBlob(`umlc-backup-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(data, null, 2), 'application/json');
}
