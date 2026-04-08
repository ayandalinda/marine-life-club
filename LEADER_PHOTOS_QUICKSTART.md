# 🖼️ UMLC Leader Photos - Quick Start Guide

## What Changed?
Your UMLC website now supports displaying leader photos directly from **Google Drive**. No more manually uploading to Firebase Storage!

## How It Works

```
You → Google Drive (store images) → UMLC Website (display images)
```

## 5-Minute Setup

### ✅ Step 1: Create Your Drive Folder
1. Go to [Google Drive](https://drive.google.com)
2. **New** → **Folder** → Name it `UMLC Leaders Photos`

### ✅ Step 2: Upload Photos
Drop the leader photos into that folder. Name them clearly (e.g., `President.jpg`)

### ✅ Step 3: Get Image URLs

**Easiest Method:**
1. Right-click image in Google Drive
2. Select **"Open in new tab"**
3. Copy the **File ID** from the URL
   - URL looks like: `https://drive.google.com/file/d/🔑THIS_IS_YOUR_ID🔑/view`
4. Create this URL:
   ```
   https://lh3.googleusercontent.com/d/YOUR_FILE_ID=w400-h400-c
   ```

**Example:**
- File ID: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p`
- Image URL: `https://lh3.googleusercontent.com/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p=w400-h400-c`

### ✅ Step 4: Update Admin Panel

1. Click **⚙ Admin** on the website
2. Go to **👥 Team** tab
3. For each leader, paste the Google Drive URL in the **"Photo URL"** field
4. Click **"Save All"**

## 🎨 Image Size Tips

The format `w400-h400-c` means:
- **w400** = 400px wide
- **h400** = 400px tall
- **c** = crop (keeps it square)

Try these sizes:
- `w300-h300-c` – smaller (thumbnails)
- `w400-h400-c` – perfect for profile cards ⭐
- `w600-h600-c` – larger (high-res)
- `w800-h800-c` – extra large

## 📋 Checklist

- [ ] Create `UMLC Leaders Photos` folder on Google Drive
- [ ] Upload all leader photos
- [ ] Get File IDs for each photo
- [ ] Format URLs: `https://lh3.googleusercontent.com/d/FILE_ID=w400-h400-c`
- [ ] Log in to admin panel
- [ ] Paste URLs in Team tab
- [ ] Save all changes
- [ ] Refresh website and verify images appear

## 🔄 Updating a Photo

Need to replace a leader's photo?

1. **Upload new image** to your folder
2. **Get the new File ID**
3. **Update the URL** in admin panel
4. **Save** – done!

## ❓ Common Questions

**Q: Is my Google Drive folder visible to the public?**
A: By default, no. The images are protected by Google's security. You can share the folder or keep it private.

**Q: What image formats work?**
A: JPG, PNG, WebP. JPG recommended for web (smaller files).

**Q: Can I use other Google Drive accounts?**
A: Yes! Just get the File ID and format the URL the same way.

**Q: What if the link breaks?**
A: Re-upload the image and get the new File ID.

**Q: Do image links expire?**
A: No, as long as the file exists in Google Drive, the link works.

## 🚀 Alternative Options

If you don't want to use Google Drive:

| Service | Pros | Cons |
|---------|------|------|
| **Google Drive** ✅ | Free, easy, integrated | Need to manage IDs |
| **Imgur** | Very simple, reliable | Need to manage accounts |
| **Cloudinary** | Powerful customization | Paid plans available |
| **Firebase** | Already integrated | More technical |

---

## 📚 Full Documentation

For detailed instructions, see: **GOOGLE_DRIVE_SETUP.md**

## 💡 Need Help?

1. Check GOOGLE_DRIVE_SETUP.md for detailed steps
2. Verify image URLs are correct
3. Ensure images are in Google Drive (not deleted)
4. Contact Media Officer: **media@umlc.co.za**

---

**Last Updated:** April 2026  
**Status:** ✅ Ready to use
