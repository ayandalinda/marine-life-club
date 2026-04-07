# Marine Life Club - Testing & Debugging Guide

## Quick Navigation Button Test

### 1. **Open Browser Console** 
- Press `F12` or `Ctrl+Shift+I` to open Developer Tools
- Go to the **Console** tab
- Check for any red error messages

### 2. **Test Each Navigation Button**

#### Search Button (🔍)
1. Click the search button in the navbar
2. Check console for: `🔎 Opening search...` then `✅ Search opened`
3. You should see a search overlay appear at the top
4. Type "events" to test search functionality

#### Donate Button (💛 Donate)
1. Click "Donate" in the navbar
2. Check console for: `💰 Opening donate modal...` then `✅ Donate modal opened`
3. Modal should show bank details for FNB account
4. Try selecting an amount (R50, R100, etc.)

#### Join Button (Join UMLC)
1. Click "Join UMLC" in the navbar
2. Check console for: `👥 Opening join modal...` then `✅ Join modal opened`
3. Modal should have three tabs: Register, Login, Reset Password

#### Admin Button (⚙ Admin)
1. Click "Admin" in the navbar
2. Check console for: `🔐 Opening admin panel...` then `✅ Admin panel opened`
3. You should see an admin login form
4. (Credentials required to proceed further)

### 3. **Console Log Decoder**

| Symbol | Meaning | Status |
|--------|---------|--------|
| ✅ | Success | Working |
| ❌ | Error/Failure | Problem |
| 🔎 | Search starting | Initial action |
| 💰 | Donate starting | Initial action |
| 👥 | Join starting | Initial action |
| 🔐 | Admin starting | Initial action |
| ⚠️ | Warning | Element missing but not critical |

## Backend Data Transfer Test

### 1. **Submit Student Voice Form**
1. Scroll to "Student Voice" section
2. Fill in the form with test data:
   - Name: "Test User"
   - Email: "test@example.com"  
   - Category: Select any option
   - Message: "This is a test message"
3. Click Submit
4. Check console for:
   - Network request showing `POST /api/issues`
   - Success message: "Thank you Test User! Your message has been received..."
   - Inbox badge updates with new message count

### 2. **Verify Data in Admin Panel**
1. Click Admin button (use admin credentials if available)
2. Go to the "Inbox" tab
3. Your test message should appear in the inbox list
4. Try marking it as read, adding a reply, or deleting it

### 3. **Event Creation (Admin Only)**
1. In Admin panel, go to "Issues" tab
2. Add a new issue/event
3. Verify it appears on the public page within seconds

## Common Issues & Solutions

### Issue: Buttons don't open anything
**Solution:**
1. Check browser console (F12) for error messages
2. Verify overlays exist: Press `Ctrl+Shift+I` → Elements tab → search for "donateOverlay"
3. Check if overlays are hidden by CSS - look for `display: none` or `visibility: hidden`

### Issue: "Backend not available" message
**Solution:**
1. Verify the backend server is running on Render
2. Check internet connection
3. Data will automatically save locally - check localStorage:
   - Open Console
   - Type: `localStorage.getItem('umlc')`
   - Should show your data as JSON

### Issue: Forms don't submit
**Solution:**
1. Check console for network errors
2. Verify all form fields have correct IDs:
   ```
   Voice form: vf-name, vf-email, vf-cat, vf-msg
   Donate form: donate-amount, donate-name, donate-email-input
   Join form: reg-fname, reg-email, mem-pass
   ```
3. Try submitting again - if still fails, check the browser console for specific error

### Issue: Data not syncing across browsers
**Solution:**
1. Data syncs through the backend database at `https://marine-life-club.onrender.com`
2. Both browsers must be connected to internet
3. Force refresh (Ctrl+F5) to reload data from backend
4. Check admin inbox/issues to see submitted data

## Deployment Verification

### Local Testing (http://localhost:5000)
```bash
# Start backend server in terminal
node server.js
# or with auto-reload:
npm run dev
```

### Production Testing (https://marine-life-club.onrender.com)
1. Visit the live URL
2. Test all buttons - should work instantly (no localhost prefix)
3. Submit test data
4. Verify data persists after page reload

## Browser Compatibility

| Browser | Status | Notes |
|---------|--------|-------|
| Chrome | ✅ Full Support | Recommended |
| Firefox | ✅ Full Support | Works great |
| Safari | ✅ Full Support | May need wallet fix |
| Edge | ✅ Full Support | Based on Chrome |
| IE11 | ❌ Not Supported | Too old |

## Performance Checklist

- [ ] Page loads in under 3 seconds
- [ ] Buttons respond instantly to clicks
- [ ] No console errors on page load
- [ ] Search works and filters results
- [ ] Forms submit and show success message
- [ ] Admin panel loads after login
- [ ] Data appears across different browsers

## Debug Console Commands

```javascript
// Check current data
console.log(D);

// Check API base URL
console.log(API_BASE_URL);

// Manually fetch from backend
fetch(API_BASE_URL + '/issues').then(r => r.json()).then(d => console.log('Issues:', d));

// Check if elements exist
console.log('Search overlay:', document.getElementById('searchWrap'));
console.log('Donate overlay:', document.getElementById('donateOverlay'));
console.log('Join overlay:', document.getElementById('joinOverlay'));
console.log('Admin overlay:', document.getElementById('adminOverlay'));

// Manually open modal
document.getElementById('donateOverlay').classList.add('show');

// Clear local data (WARNING: destroys all local data)
localStorage.clear();
```

## Report Issues With

When reporting issues, include:
1. Browser name and version
2. Device type (desktop/mobile)
3. Exact steps to reproduce
4. Screenshot of console errors (F12 → Console tab)
5. Network tab errors (F12 → Network tab)
6. Whether it works on another device/browser

## Performance Optimization Done
- ✅ Added error handling to all modal functions
- ✅ Added console logging for debugging
- ✅ Fixed initialization to handle both DOMContentLoaded and delayed page load
- ✅ Added try-catch blocks to prevent JavaScript errors
- ✅ Backend API integrated with fallback to local storage
- ✅ Event listeners wrapped with null checks

---
**Last Updated:** $(date)
**Status:** All buttons tested and logging enabled
