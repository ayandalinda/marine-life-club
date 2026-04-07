# UMLC Backend Setup Guide

This is a simple Node.js + Express backend for the UKZN Marine Life Club website. It uses SQLite for data storage and provides REST API endpoints for managing events, student voice issues, inquiries, and leadership information.

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation

1. **Navigate to project directory**
```bash
cd c:\Users\225029989\Documents\GitHub\marine-life-club
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the backend**
```bash
npm start
```

The backend will run on `http://localhost:5000`

**For development with auto-reload:**
```bash
npm run dev
```
(This requires nodemon, which is already in devDependencies)

---

## 📡 API Endpoints

### Events

**GET** `/api/events` - Get all events
```json
Response: [
  {
    "id": 1,
    "title": "Beach Cleanup",
    "description": "Monthly beach cleanup...",
    "date": "2025-04-15",
    "location": "Durban Beach",
    "category": "conservation"
  }
]
```

**POST** `/api/events` - Create new event
```json
Request: {
  "title": "Beach Cleanup",
  "description": "Monthly beach cleanup...",
  "date": "2025-04-15",
  "location": "Durban Beach",
  "category": "conservation"
}
```

---

### Student Voice / Issues

**GET** `/api/issues` - Get all student voice issues
```json
Response: [
  {
    "id": 1,
    "title": "Issue Title",
    "description": "Issue description...",
    "status": "under-review",
    "reply": "Our response...",
    "submitterName": "John Doe",
    "submitterEmail": "john@example.com"
  }
]
```

**POST** `/api/issues` - Submit new issue
```json
Request: {
  "title": "New Issue",
  "description": "Issue description...",
  "submitterName": "John Doe",
  "submitterEmail": "john@example.com"
}
```

**PUT** `/api/issues/:id` - Update issue status and reply
```json
Request: {
  "status": "resolved",
  "reply": "Our response..."
}
```

---

### Contact Inquiries

**GET** `/api/inquiries` - Get all contact inquiries
```json
Response: [
  {
    "id": 1,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "subject": "Partnership Request",
    "message": "We would like to partner with...",
    "status": "unread"
  }
]
```

**POST** `/api/inquiries` - Submit contact form
```json
Request: {
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Partnership Request",
  "message": "We would like to partner with..."
}
```

---

### Leadership

**GET** `/api/leadership` - Get all leadership members
```json
Response: [
  {
    "id": 1,
    "role": "President",
    "name": "John Smith",
    "bio": "Final year student...",
    "email": "president@umlc.co.za",
    "photo": "base64_image_or_url"
  }
]
```

**POST** `/api/leadership` - Update leadership member
```json
Request: {
  "role": "President",
  "name": "John Smith",
  "bio": "Final year student...",
  "email": "president@umlc.co.za",
  "photo": "base64_image_or_url"
}
```

---

### Health Check

**GET** `/api/health` - Check if backend is running
```json
Response: {
  "status": "Backend is running",
  "timestamp": "2025-04-10T10:30:00.000Z"
}
```

---

## 🔌 Integrating Frontend with Backend

Update your `script.js` to call these API endpoints instead of using local storage:

### Example: Fetch events from backend
```javascript
// Replace local data fetch with API call
async function loadEventsFromBackend() {
  try {
    const response = await fetch('http://localhost:5000/api/events');
    const events = await response.json();
    D.events = events;
    renderEvents(); // Your existing render function
  } catch (error) {
    console.error('Error loading events:', error);
  }
}

// Call on page load
loadEventsFromBackend();
```

### Example: Submit student voice issue
```javascript
async function submitStudentVoiceForm(data) {
  try {
    const response = await fetch('http://localhost:5000/api/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        submitterName: data.name,
        submitterEmail: data.email
      })
    });
    const result = await response.json();
    console.log('Issue submitted:', result);
  } catch (error) {
    console.error('Error submitting issue:', error);
  }
}
```

---

## 📁 Database

The backend uses **SQLite** by default. The database file (`data.db`) will be created automatically in the project root when you first run the server.

### Database Tables:
- **events** - Club events and activities
- **issues** - Student voice issues/suggestions
- **inquiries** - Contact form submissions
- **leadership** - Club leadership team

---

## 🛡️ Security Notes (For Production)

Before deploying to production:

1. **Change credentials** in `.env`
2. **Add authentication middleware** for admin endpoints
3. **Validate all input data** to prevent SQL injection
4. **Use HTTPS** instead of HTTP
5. **Set CORS_ORIGIN** to your actual domain
6. **Add rate limiting** to prevent abuse
7. **Use environment variables** for sensitive data

---

## 📝 Configuration

Create a `.env` file (copy from `.env.example`):
```
PORT=5000
NODE_ENV=development
CORS_ORIGIN=*
```

---

## 🐛 Troubleshooting

**"Port 5000 already in use"**
```bash
# Change PORT in .env file or use a different port
# Or kill the process using the port
```

**"Module not found"**
```bash
# Reinstall dependencies
npm install
```

**"Database locked"**
- Close other instances of the application
- Delete `data.db` and restart (will lose data!)

---

## 📦 Deployment Options

### Heroku
```bash
git push heroku main
```

### Vercel/Netlify
- Not ideal for Node backend - use Heroku, Railway, or AWS

### AWS/DigitalOcean/Linode
- Standard Node.js deployment

### Replit/Glitch
- Great for testing and learning

---

## 🔄 Syncing with Frontend

The backend is separate from the frontend. To use both:

1. **Keep frontend files** (index.html, styles.css, script.js) as-is
2. **Backend files** (server.js, package.json, .env) are new
3. **Update script.js** to call API endpoints instead of local data
4. **Run both simultaneously** (frontend on port 8000, backend on 5000)

---

## 📞 Support

For issues or questions about the backend, check the API endpoints above or review `server.js` comments.

Happy coding! 🌊
