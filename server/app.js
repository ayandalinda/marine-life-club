require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const authRoutes = require('./routes/auth');
const memberRoutes = require('./routes/members');
const eventRoutes = require('./routes/events');
const issueRoutes = require('./routes/issues');
const inquiryRoutes = require('./routes/inquiries');
const leadershipRoutes = require('./routes/leadership');
const programmeRoutes = require('./routes/programmes');
const partnerRoutes = require('./routes/partners');
const tierRoutes = require('./routes/tiers');
const donationRoutes = require('./routes/donations');
const siteContentRoutes = require('./routes/siteContent');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api', authRoutes);
app.use('/api', memberRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/leadership', leadershipRoutes);
app.use('/api/programmes', programmeRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/tiers', tierRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/site-content', siteContentRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running (Supabase API Mode)', timestamp: new Date() });
});

// Serve the built React app (used by the plain-Node/Procfile deploy target;
// harmless on Netlify/Vercel, which serve web/dist directly and never reach here for non-/api paths)
const webDist = path.join(__dirname, '..', 'web', 'dist');
if (fs.existsSync(webDist)) {
  app.use(express.static(webDist));
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(webDist, 'index.html'));
  });
}

module.exports = app;
