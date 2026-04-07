# 🌊 UMLC Backend - Quick Start

Your marine-life-club project now has a **simple, lightweight backend**! Here's what was added and how to use it.

## 📦 What's New

| File | Purpose |
|------|---------|
| `server.js` | Main backend server (Express.js + SQLite) |
| `package.json` | Node.js dependencies and scripts |
| `.env.example` | Configuration template |
| `BACKEND_SETUP.md` | Full API documentation |
| `integration-examples.js` | Code examples to connect frontend to backend |
| `setup.bat` | Automated setup script (Windows) |
| `.gitignore` | Prevents sensitive files from being committed |

## 🚀 Get Started in 3 Steps

### Step 1: Run Setup
```bash
# Windows
setup.bat

# OR manually:
npm install
```

### Step 2: Start the Backend
```bash
npm start
```

You should see:
```
✅ Connected to SQLite database
📋 Database tables initialized
🚀 Server running on http://localhost:5000
```

### Step 3: Backend is Ready!
- API is at `http://localhost:5000/api/`
- Keep this terminal running
- Your frontend can now make requests to `http://localhost:5000/api/...`

---

## 📡 Quick API Reference

All endpoints return JSON:

```bash
# Get all events
curl http://localhost:5000/api/events

# Create new event
curl -X POST http://localhost:5000/api/events \
  -H "Content-Type: application/json" \
  -d '{"title":"Beach Cleanup","date":"2025-04-15","location":"Durban Beach"}'

# Get all student voice issues
curl http://localhost:5000/api/issues

# Submit student issue
curl -X POST http://localhost:5000/api/issues \
  -H "Content-Type: application/json" \
  -d '{"title":"Issue Title","description":"...","submitterName":"John","submitterEmail":"john@example.com"}'

# Get contact inquiries
curl http://localhost:5000/api/inquiries

# Get leadership
curl http://localhost:5000/api/leadership

# Health check
curl http://localhost:5000/api/health
```

---

## 🔌 Integrate with Frontend

Copy code from `integration-examples.js` into `script.js`:

```javascript
// In your script.js, add:
async function loadEventsFromBackend() {
  const response = await fetch('http://localhost:5000/api/events');
  const events = await response.json();
  D.events = events;
  render(); // Your existing render function
}

// Call on page load
window.addEventListener('load', loadEventsFromBackend);
```

See `integration-examples.js` for more examples!

---

## 📂 Database

SQLite database (`data.db`) is created automatically. Tables:
- **events** - Club events
- **issues** - Student voice submissions  
- **inquiries** - Contact form submissions
- **leadership** - Club leadership

---

## 🛠️ Development

### Auto-reload during development:
```bash
npm run dev
```

### Check if backend is running:
```bash
curl http://localhost:5000/api/health
```

### Reset database (delete all data):
```bash
rm data.db
# or
del data.db  (Windows)
```

---

## 📝 Next Steps

1. **Update `script.js`** - Replace local data calls with API calls using functions from `integration-examples.js`
2. **Connect forms** - Submit student voice, contact forms directly to backend
3. **Update admin panel** - Show real data from backend
4. **Deploy** - See `BACKEND_SETUP.md` for deployment options

---

## ⚠️ Important Notes

- **Backend runs on port 5000** by default (change in `.env` if needed)
- **Database is local** (data.db) - good for development, use proper DB for production
- **CORS is enabled** - allows frontend to make requests
- **No authentication yet** - add security before going live!

---

## 🐛 Troubleshooting

**"Port 5000 already in use"**
- Change PORT in `.env` to 8000 or 3000

**"Cannot find module"**
- Run `npm install` again
- Delete `node_modules` and retry

**"Database locked"**
- Kill the backend process and restart

**Frontend can't reach backend**
- Make sure backend is running: `npm start`
- Check backend is on `http://localhost:5000`
- Check CORS is enabled (it is by default)

---

## 📚 Full Documentation

See `BACKEND_SETUP.md` for:
- Complete API reference with examples
- Database schema
- Security recommendations
- Deployment guides

---

## 💡 Tips

- Keep backend terminal open while developing
- Use `npm run dev` for automatic restarts during coding
- Check `/api/health` if something seems broken
- Database is in same folder as server.js
- Frontend and backend run on different ports (3000 and 5000)

---

## 🎉 You're all set!

Your backend is now ready to power your marine-life-club website. Start building! 🌊
