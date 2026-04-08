# 🔗 Google Drive URL Extraction - Visual Guide

## Getting Your Image URLs (3 Simple Steps)

### Step 1: Upload Image to Google Drive

```
Google Drive
├── UMLC Leaders Photos
│   ├── President.jpg
│   ├── VicePresident.jpg
│   ├── Secretary.jpg
│   └── [other images]
```

### Step 2: Get the File ID

#### Method A: From Google Drive View Link (Easiest ⭐)

1. **Right-click** the image
2. Select **"Open in new tab"**

Your URL will look like:
```
https://drive.google.com/file/d/ABC123XYZ456DEF789GHI012JKL345MNO/view?usp=sharing
                                    ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
                                    THIS IS YOUR FILE ID
```

**Extract the File ID:** `ABC123XYZ456DEF789GHI012JKL345MNO`

#### Method B: From Share Link

1. Right-click → **"Share"**
2. Copy the link
3. Extract the ID the same way

### Step 3: Create the Image URL

Take your **File ID** and plug it into this template:

```
https://lh3.googleusercontent.com/d/FILE_ID=w400-h400-c
```

**Replace `FILE_ID` with your actual ID**

---

## Real Example

Let's say you uploaded your President's photo and:

**File ID extracted from Google Drive:**
```
1qwerty789asdfgh012zxcvbn345mnop6
```

**Create this URL:**
```
https://lh3.googleusercontent.com/d/1qwerty789asdfgh012zxcvbn345mnop6=w400-h400-c
```

**Paste this into the admin panel's "Photo URL" field for President**

---

## Size Variations

Same File ID, different display sizes:

| Size | URL |
|------|-----|
| Small (300px) | `https://lh3.googleusercontent.com/d/FILE_ID=w300-h300-c` |
| **Medium (400px)** ⭐ | `https://lh3.googleusercontent.com/d/FILE_ID=w400-h400-c` |
| Large (600px) | `https://lh3.googleusercontent.com/d/FILE_ID=w600-h600-c` |
| Extra Large (800px) | `https://lh3.googleusercontent.com/d/FILE_ID=w800-h800-c` |

---

## All Leaders Example

Here's what your admin panel should look like after adding all URLs:

```
President
├─ Role Title: President
├─ Name: John Smith
├─ Email: president@umlc.co.za
└─ Photo URL: https://lh3.googleusercontent.com/d/ABC123...=w400-h400-c

Vice President
├─ Role Title: Vice President
├─ Name: Sarah Johnson
├─ Email: vicepresident@umlc.co.za
└─ Photo URL: https://lh3.googleusercontent.com/d/DEF456...=w400-h400-c

Secretary
├─ Role Title: Secretary
├─ Name: Mike Williams
├─ Email: secretary@umlc.co.za
└─ Photo URL: https://lh3.googleusercontent.com/d/GHI789...=w400-h400-c

[Continue for all 6 leaders...]
```

---

## Troubleshooting Guide

### "Image not showing on website"

**Check 1:** Is your File ID correct?
- Copy it directly from Google Drive URL
- No spaces or extra characters

**Check 2:** Is the URL format correct?
- Should be: `https://lh3.googleusercontent.com/d/FILE_ID=w400-h400-c`
- Common mistake: Using full Google Drive URL instead of this format

**Check 3:** Is the image file still in your Drive?
- If you delete it from Google Drive, the link stops working
- Solution: Re-upload and get new File ID

**Check 4:** Did you click "Save All"?
- Changes in admin panel don't apply until you save
- Always click the **"Save All"** button at the bottom

---

## Alternative URL Format (If Above Doesn't Work)

If the Google `lh3...` format isn't working, try:

```
https://drive.google.com/uc?export=download&id=FILE_ID
```

This is a direct download link format:
- More reliable
- May be slower to load
- Fall back option if issues occur

**Example:**
```
https://drive.google.com/uc?export=download&id=1qwerty789asdfgh012zxcvbn345mnop6
```

---

## Advanced: Bulk URLs

If managing many photos, create a spreadsheet:

| Role | Name | File ID | Image URL |
|------|------|---------|-----------|
| President | John Smith | `1qwer...` | `https://lh3.googleusercontent.com/d/1qwer...=w400-h400-c` |
| VP | Sarah J. | `2tyui...` | `https://lh3.googleusercontent.com/d/2tyui...=w400-h400-c` |
| Secretary | Mike W. | `3asdf...` | `https://lh3.googleusercontent.com/d/3asdf...=w400-h400-c` |

Keep this spreadsheet for easy reference and updates.

---

## Quick Checklist ✅

- [ ] Image uploaded to `UMLC Leaders Photos` folder
- [ ] Right-clicked and opened in new tab
- [ ] Copied File ID from the URL
- [ ] Formatted URL: `https://lh3.googleusercontent.com/d/FILE_ID=w400-h400-c`
- [ ] Logged into admin panel
- [ ] Pasted URL into Photo URL field
- [ ] Clicked "Save All"
- [ ] Refreshed website to see image

---

## Need More Help?

- **Question:** How do I get File ID?
  - **Answer:** Copy from `https://drive.google.com/file/d/FILE_ID_HERE/view`

- **Question:** Will the link work forever?
  - **Answer:** Yes, as long as the file is in your Google Drive

- **Question:** Can I use links from other people's Drive?
  - **Answer:** Only if they've shared the file with you (or made it public)

---

**Last Updated:** April 7, 2026  
**Tested With:** Google Chrome, Firefox, Safari
