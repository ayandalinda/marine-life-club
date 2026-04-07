# 📍 Where to Add Leader Photo URLs - Step by Step

## 🔐 Step 1: Log In to Admin Panel

1. Click the **⚙ Admin** button (top right of website)
2. Enter credentials:
   - **Username:** `president`
   - **Password:** `umlc2025`
3. Click **Login**

---

## 👥 Step 2: Go to Team Tab

Once logged in, you'll see the Admin Panel with several tabs at the top:

```
┌──────────────────────────────────────────────────┐
│ General | About | Programmes | Socials | 👥 Team | Events | ...
└──────────────────────────────────────────────────┘
                                      ↑ Click here
```

**Click the "👥 Team" tab**

---

## 📸 Step 3: You'll See This

The Team tab shows all 6 leaders with empty form fields:

```
╔════════════════════════════════════════════════╗
║          LEADERSHIP DETAILS                    ║
╠════════════════════════════════════════════════╣
║                                                ║
║ President                                      ║
║ ┌──────────────────────────────────────────┐  ║
║ │ Role Title                               │  ║
║ │ [President____________]                  │  ║
║ └──────────────────────────────────────────┘  ║
║                                                ║
║ ┌──────────────────────────────────────────┐  ║
║ │ Name                                     │  ║
║ │ [[President Name]_____________________]  │  ║
║ └──────────────────────────────────────────┘  ║
║                                                ║
║ ┌──────────────────────────────────────────┐  ║
║ │ Bio                                      │  ║
║ │ [Final year Marine Biology student...]  │  ║
║ └──────────────────────────────────────────┘  ║
║                                                ║
║ ┌──────────────────────────────────────────┐  ║
║ │ Email                                    │  ║
║ │ [president@umlc.co.za____________]       │  ║
║ └──────────────────────────────────────────┘  ║
║                                                ║
║ ┌──────────────────────────────────────────┐  ║ ← THIS IS NEW!
║ │ Photo URL (Google Drive)                 │  ║
║ │ [https://lh3.googleusercontent.com...]  │  ║
║ │ See GOOGLE_DRIVE_SETUP.md for ...        │  ║
║ └──────────────────────────────────────────┘  ║
║                                                ║
║ [Same fields repeat for Vice President]       ║
║ [Same fields repeat for Secretary]            ║
║ [Same fields repeat for Treasurer]            ║
║ [Same fields repeat for Media Officer]        ║
║ [Same fields repeat for Event Coordinator]    ║
║                                                ║
║                    [SAVE ALL]                  ║
║                                                ║
╚════════════════════════════════════════════════╝
```

---

## 🎯 Where to Paste the Google Drive URL

**Look for this field:**

```
Photo URL (Google Drive)
┌─────────────────────────────────────────────┐
│ https://lh3.googleusercontent.com/d/...    │ ← PASTE YOUR LINK HERE
└─────────────────────────────────────────────┘
See GOOGLE_DRIVE_SETUP.md for instructions
```

---

## 📋 Complete Process

### For Each of the 6 Leaders:

1. **Scroll down** to their section
2. **Find** the "Photo URL (Google Drive)" field
3. **Paste** the Google Drive image URL
   - Format: `https://lh3.googleusercontent.com/d/FILE_ID=w400-h400-c`
4. **Repeat** for all 6 leaders
5. **Click** "SAVE ALL" at the bottom

---

## 📝 Example: Adding President's Photo

Let's say you have:
- **President Name:** John Smith
- **President Photo File ID:** `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p`

### Your Google Drive URL:
```
https://lh3.googleusercontent.com/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p=w400-h400-c
```

### In Admin Panel:
```
President section:
├─ Role Title: President
├─ Name: John Smith
├─ Email: president@umlc.co.za
└─ Photo URL: https://lh3.googleusercontent.com/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p=w400-h400-c
                ↑ Paste here
```

### After Saving:
✅ Photo appears on public leadership page!

---

## ✅ Checklist for Each Leader

- [ ] Uploaded photo to Google Drive folder
- [ ] Got File ID from the URL
- [ ] Formatted URL: `https://lh3.googleusercontent.com/d/FILE_ID=w400-h400-c`
- [ ] Logged into Admin Panel
- [ ] Went to Team tab
- [ ] Found leader's "Photo URL (Google Drive)" field
- [ ] Pasted the full URL
- [ ] Repeated for all 6 leaders
- [ ] Clicked "SAVE ALL" button
- [ ] Refreshed website to verify

---

## 🔑 Finding the Photo URL Field

The field appears in this order for each leader:

```
1. Role Title ─────────────┐
2. Name                    │
3. Bio                     ├─ All leaders have these
4. Email                   │
5. Photo URL (Google...) ──┘ ← NEW FIELD - THIS IS WHERE YOU PASTE
```

---

## 💾 After You Paste URLs

1. Scroll to **bottom** of Team tab
2. Click **"SAVE ALL"** button
   ```
   ┌────────────────┐
   │   SAVE ALL     │ ← Click this
   └────────────────┘
   ```
3. You'll see a confirmation message: **"Leadership updated!"**
4. Refresh the website (F5 or Ctrl+R)
5. Go to **Leadership** section on public page
6. ✅ Photos should now display!

---

## 🆘 Not Seeing the Photo URL Field?

**Try these:**

1. **Refresh the page** (Ctrl+F5 to clear cache)
2. **Log out and back in** to Admin Panel
3. **Make sure you're on the "👥 Team" tab**
4. **Check browser console** (F12) for errors

If still not showing:
- The field should appear automatically when you click Team tab
- It's right below the Email field for each leader
- It has placeholder text: `https://lh3.googleusercontent.com/d/FILE_ID=w400-h400-c`

---

## 🎨 Visual Field Reference

Each leader card shows:

```
President
[Role Title text input]
[Name text input]
[Bio text area]
[Email text input]
[Photo URL text input] ← NEW - Paste Google Drive URL here
[See GOOGLE_DRIVE_SETUP.md link]

Vice President
[Same structure...]

Secretary
[Same structure...]

[Continue for all...]

[SAVE ALL button]
```

---

## 📸 Result on Website

After saving, your public leadership page will show:

```
LEADERSHIP
─────────────────────────────────────────

┌────────────┐  ┌────────────┐
│            │  │            │
│  [Photo]   │  │  [Photo]   │
│            │  │            │
├────────────┤  ├────────────┤
│ President  │  │ Vice Pres. │
│ John Smith │  │ Sarah J.   │
│            │  │            │
│ Final year │  │ Supports   │
│ student... │  │ presidential
│            │  │ duties...  │
│ president@ │  │ vicepresident@
│ umlc...    │  │ umlc...    │
└────────────┘  └────────────┘

[More leaders below...]
```

Each leader card now displays their photo directly from Google Drive! 🎉

---

## 📞 Need Help?

- **Photo URL field not visible?** → Refresh and click Team tab again
- **Don't know your File ID?** → Read GOOGLE_DRIVE_URL_GUIDE.md
- **Need full setup guide?** → Read GOOGLE_DRIVE_SETUP.md
- **Photos not showing?** → Check browser console (F12) for errors

---

**Status:** ✅ Photo URL field is now active in your admin panel  
**Location:** Admin Panel → Team Tab → Photo URL field for each leader  
**How to use:** Paste Google Drive image URLs and click Save All
