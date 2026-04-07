// ══════════════════════════════════════════════
// BACKEND INTEGRATION EXAMPLES
// Add these functions to your script.js to use the backend API
// ══════════════════════════════════════════════

const API_BASE_URL = 'http://localhost:5000/api';

// ═══════════════════════════════════════════════
// EVENTS
// ═══════════════════════════════════════════════

async function fetchEventsFromBackend() {
  try {
    const response = await fetch(`${API_BASE_URL}/events`);
    if (!response.ok) throw new Error('Failed to fetch events');
    const events = await response.json();
    D.events = events;
    console.log('Events loaded from backend:', D.events);
    return D.events;
  } catch (error) {
    console.error('Error fetching events:', error);
    // Fallback to local data if backend fails
    return D.events;
  }
}

async function createEventOnBackend(eventData) {
  try {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    if (!response.ok) throw new Error('Failed to create event');
    const result = await response.json();
    console.log('Event created:', result);
    // Refresh events list
    await fetchEventsFromBackend();
    return result;
  } catch (error) {
    console.error('Error creating event:', error);
  }
}

// ═══════════════════════════════════════════════
// STUDENT VOICE / ISSUES
// ═══════════════════════════════════════════════

async function fetchIssuesFromBackend() {
  try {
    const response = await fetch(`${API_BASE_URL}/issues`);
    if (!response.ok) throw new Error('Failed to fetch issues');
    const issues = await response.json();
    D.issues = issues;
    console.log('Issues loaded from backend:', D.issues);
    return D.issues;
  } catch (error) {
    console.error('Error fetching issues:', error);
    return D.issues;
  }
}

async function submitStudentVoiceForm(issueData) {
  try {
    const response = await fetch(`${API_BASE_URL}/issues`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: issueData.title,
        description: issueData.description,
        submitterName: issueData.submitterName || 'Anonymous',
        submitterEmail: issueData.submitterEmail
      })
    });
    if (!response.ok) throw new Error('Failed to submit issue');
    const result = await response.json();
    console.log('Issue submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error submitting issue:', error);
    alert('Error submitting form. Please try again.');
  }
}

async function updateIssueStatus(issueId, status, reply) {
  try {
    const response = await fetch(`${API_BASE_URL}/issues/${issueId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, reply })
    });
    if (!response.ok) throw new Error('Failed to update issue');
    const result = await response.json();
    console.log('Issue updated:', result);
    // Refresh issues
    await fetchIssuesFromBackend();
    return result;
  } catch (error) {
    console.error('Error updating issue:', error);
  }
}

// ═══════════════════════════════════════════════
// CONTACT INQUIRIES
// ═══════════════════════════════════════════════

async function fetchInquiriesFromBackend() {
  try {
    const response = await fetch(`${API_BASE_URL}/inquiries`);
    if (!response.ok) throw new Error('Failed to fetch inquiries');
    const inquiries = await response.json();
    D.inbox = inquiries;
    console.log('Inquiries loaded from backend:', D.inbox);
    return D.inbox;
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return D.inbox;
  }
}

async function submitContactForm(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (!response.ok) throw new Error('Failed to submit inquiry');
    const result = await response.json();
    console.log('Inquiry submitted:', result);
    alert('Thank you for your inquiry! We will respond shortly.');
    return result;
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    alert('Error submitting form. Please try again.');
  }
}

// ═══════════════════════════════════════════════
// LEADERSHIP
// ═══════════════════════════════════════════════

async function fetchLeadershipFromBackend() {
  try {
    const response = await fetch(`${API_BASE_URL}/leadership`);
    if (!response.ok) throw new Error('Failed to fetch leadership');
    const leaders = await response.json();
    D.leaders = leaders;
    console.log('Leadership loaded from backend:', D.leaders);
    return D.leaders;
  } catch (error) {
    console.error('Error fetching leadership:', error);
    return D.leaders;
  }
}

async function updateLeadershipMember(memberData) {
  try {
    const response = await fetch(`${API_BASE_URL}/leadership`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memberData)
    });
    if (!response.ok) throw new Error('Failed to update leadership');
    const result = await response.json();
    console.log('Leadership updated:', result);
    // Refresh leadership
    await fetchLeadershipFromBackend();
    return result;
  } catch (error) {
    console.error('Error updating leadership:', error);
  }
}

// ═══════════════════════════════════════════════
// HEALTH CHECK
// ═══════════════════════════════════════════════

async function checkBackendHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    console.log('✅ Backend is healthy:', data);
    return true;
  } catch (error) {
    console.error('❌ Backend is not running:', error);
    return false;
  }
}

// ═══════════════════════════════════════════════
// INITIALIZATION
// Load all data from backend on page load
// ═══════════════════════════════════════════════

async function initializeBackendData() {
  console.log('Initializing backend connections...');
  
  // Check if backend is running
  const isHealthy = await checkBackendHealth();
  
  if (isHealthy) {
    // Load data from backend
    await Promise.all([
      fetchEventsFromBackend(),
      fetchIssuesFromBackend(),
      fetchInquiriesFromBackend(),
      fetchLeadershipFromBackend()
    ]);
    console.log('✅ All data loaded from backend');
  } else {
    console.log('⚠️ Backend not available, using local data');
  }
}

// Call this when the page loads (modify your existing load function):
// window.addEventListener('load', initializeBackendData);

// Or add to your existing DOMContentLoaded event listener:
// document.addEventListener('DOMContentLoaded', initializeBackendData);
