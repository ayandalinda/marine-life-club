const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET || JWT_SECRET.length < 32) {
  throw new Error('JWT_SECRET must be set to a random string of at least 32 characters');
}
function verifyBearer(req, res, next) {
  const value = req.headers.authorization || '';
  const token = value.startsWith('Bearer ') ? value.slice(7) : null;
  if (!token) return res.sendStatus(401);
  try { req.user = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] }); next(); }
  catch { return res.sendStatus(403); }
}
function authenticateToken(req, res, next) {
  verifyBearer(req, res, () => {
    if (req.user.role !== 'admin') return res.sendStatus(403);
    next();
  });
}
function authenticateMember(req, res, next) {
  verifyBearer(req, res, () => {
    if (req.user.role !== 'member' || !Number.isInteger(req.user.memberId)) return res.sendStatus(403);
    next();
  });
}
module.exports = { authenticateToken, authenticateMember, JWT_SECRET };
