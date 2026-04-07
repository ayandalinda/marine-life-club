# Google Drive Setup for Leader Images

## Step 1: Create a Google Drive Folder

1. Go to [Google Drive](https://drive.google.com)
2. Click **"New"** → **"Folder"**
3. Name it: `UMLC Leaders Photos`
4. Right-click the folder → **"Share"**
5. Share it with anyone who needs to upload images or leave it private (you can change permissions later)

## Step 2: Upload Leader Images

1. Open your `UMLC Leaders Photos` folder
2. Upload each leader's photo
3. Organize by role (naming convention recommended):
   - `President.jpg`
   - `VicePresident.jpg`
   - `Secretary.jpg`
   - `Treasurer.jpg`
   - `MediaOfficer.jpg`
   - `EventCoordinator.jpg`

## Step 3: Get the Google Drive Image URL

For each image, follow these steps:

### Method 1: Using Direct Download Link (Easiest)
1. Right-click the image in Google Drive
2. Click **"Open in new tab"**
3. In the URL bar, locate the **FILE_ID**
   - Example: `https://drive.google.com/file/d/1abc123XYZ/view?usp=sharing`
   - The FILE_ID is: `1abc123XYZ`
4. Create a direct image URL using this format:
   ``
   new : https://lh3.googleusercontent.com/d/FILE_ID=1Im7TxiBFIYLv-fqL3xag4Ze4PGbDNjKv
   https://lh3.googleusercontent.com/d/FILE_ID=w400-h400-c
   ```
   Replace `FILE_ID` with the actual ID. Example:
   ```
   https://lh3.googleusercontent.com/d/1abc123XYZ=w400-h400-c
   ```

### Method 2: Using Shareable Link
1. Right-click the image → **"Share"**
2. Set it to **"Anyone with the link can view"**
3. Copy the share link
4. Transform it to a direct image URL:
   - Original: `https://drive.google.com/file/d/1abc123XYZ/view?usp=sharing`
   - Convert to: `https://lh3.googleusercontent.com/d/1Im7TxiBFIYLv-fqL3xag4Ze4PGbDNjKv

## Step 4: Add URLs to UMLC Website

1. Log in to the UMLC Admin Panel (⚙ Admin button)
2. Go to the **"👥 Team"** tab
3. For each leader, paste the Google Drive image URL into the **Photo URL** field
4. Click **"Save All"**

## Image Link Parameters Explained

- `w400-h400-c` = Width 400px, Height 400px, Crop mode
- You can adjust dimensions:
  - `w800-h800-c` for higher quality
  - `w300-h300-c` for smaller thumbnails

## Updating Images

To replace a leader's photo:
1. Upload the new image to your `UMLC Leaders Photos` folder
2. Get the new image's FILE_ID
3. Update the URL in the admin panel
4. Save changes

## Sharing the Google Drive Folder

If multiple people need to upload images:
1. Right-click the `UMLC Leaders Photos` folder
2. Click **"Share"**
3. Enter emails of people who can upload
4. Set their permission to **"Editor"**

## Troubleshooting

### Image Not Loading?
- Verify the FILE_ID is correct
- Check that the image file is publicly sharable (or shared with you)
- Try using the format: `https://drive.google.com/uc?export=download&id=FILE_ID`

### Link Expired?
- Google Drive image links generally don't expire if the file is properly shared
- If issues occur, try creating a new shareable link

### Want a Different Approach?
Alternative methods:
- **Imgur**: Upload to [Imgur.com](https://imgur.com) for direct image hosting
- **Cloudinary**: Use [Cloudinary](https://cloudinary.com) for image management
- **Firebase Storage**: Keep current Firebase Storage setup (less manual)

## Quick Reference

| Component | Details |
|-----------|---------|
| **Folder Name** | UMLC Leaders Photos |
| **Access Level** | Share as needed |
| **Image Format** | JPG, PNG recommended |
| **Dimensions** | 400x400px minimum |
| **File Size** | 2MB max per image |
| **Update Frequency** | Anytime via admin panel |

---

**Need Help?** Contact the Media Officer at media@umlc.co.za
