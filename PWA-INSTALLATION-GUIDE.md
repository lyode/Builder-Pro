# Make Builder Pro Installable on Android (PWA Setup)

## 📋 Overview
This guide will help you convert your Builder Pro web app into a Progressive Web App (PWA) that can be installed on Android devices.

## 📁 Files You Need to Add

1. **manifest.json** - App configuration file
2. **service-worker.js** - Enables offline functionality
3. **icon-192.png** - Small app icon (192x192px)
4. **icon-512.png** - Large app icon (512x512px)

## 🚀 Installation Steps

### Step 1: Upload Files to Your Repository

Upload these files to your GitHub repository (https://github.com/lyode/Builder-Pro):
- `manifest.json`
- `service-worker.js`
- `icon-192.png`
- `icon-512.png`

All files should be in the root of your `Builder-Pro` folder.

### Step 2: Update Your index.html

Add the following code to your `index.html` file:

#### In the `<head>` section, add:

```html
<!-- PWA Meta Tags -->
<meta name="theme-color" content="#4CAF50">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Builder Pro">

<!-- Manifest Link -->
<link rel="manifest" href="manifest.json">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="icon-192.png">
```

#### Before the closing `</body>` tag, add:

```html
<script>
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/Builder-Pro/service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registered: ', registration);
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
</script>
```

### Step 3: Commit and Push Changes

```bash
git add manifest.json service-worker.js icon-192.png icon-512.png index.html
git commit -m "Add PWA support for Android installation"
git push origin main
```

### Step 4: Wait for GitHub Pages to Deploy

GitHub Pages will automatically deploy your changes. Wait 1-2 minutes.

## 📱 How to Install on Android

Once deployed, users can install the app on their Android devices:

### Method 1: Chrome Browser (Recommended)
1. Open https://lyode.github.io/Builder-Pro/ in Chrome
2. Tap the **menu** button (three dots)
3. Select **"Add to Home screen"** or **"Install app"**
4. Confirm the installation
5. The app icon will appear on your home screen

### Method 2: Install Banner
- When you visit the site, Chrome may show an install banner at the bottom
- Tap **"Install"** on the banner

### Method 3: Settings Menu
1. Open the website in Chrome
2. Tap the menu (⋮)
3. Go to **"Add to Home screen"**
4. Name the app and tap **"Add"**

## ✅ Verification Checklist

After deploying, verify your PWA:

1. **Check Manifest**: Visit https://lyode.github.io/Builder-Pro/manifest.json - should show JSON data
2. **Chrome DevTools**:
   - Open the site in Chrome desktop
   - Press F12 → Go to "Application" tab
   - Check "Manifest" section - should show your app details
   - Check "Service Workers" - should show registered worker
3. **Lighthouse Test**:
   - In Chrome DevTools, go to "Lighthouse" tab
   - Run a "Progressive Web App" audit
   - Should score 100% or close to it

## 🔧 Troubleshooting

### "Install" button doesn't appear?
- Make sure you're using Chrome browser
- Clear browser cache and reload
- Check that HTTPS is enabled (GitHub Pages uses HTTPS by default)
- Verify all files are uploaded correctly

### Service Worker not registering?
- Check browser console for errors (F12 → Console)
- Make sure the service-worker.js path is correct
- Clear site data: Settings → Privacy → Site Settings → https://lyode.github.io → Clear data

### Icons not showing?
- Verify icon files are uploaded to the correct location
- Check icon file names match what's in manifest.json
- Icons must be PNG format

## 🎨 Customization

### Change App Colors
Edit `manifest.json`:
```json
"background_color": "#ffffff",  // Background color when launching
"theme_color": "#4CAF50"        // Address bar color
```

### Change App Name
Edit `manifest.json`:
```json
"name": "Your Full App Name",
"short_name": "Short Name"
```

### Add More Icons
You can add different icon sizes in manifest.json and create corresponding image files.

## 📊 Benefits of PWA

✅ Works offline
✅ Fast loading
✅ Installable on home screen
✅ Looks like a native app
✅ No app store required
✅ Automatic updates
✅ Smaller size than native apps

## 📚 Resources

- [Google PWA Documentation](https://web.dev/progressive-web-apps/)
- [MDN Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

---

Need help? Check that all files are uploaded and paths are correct in your repository.
