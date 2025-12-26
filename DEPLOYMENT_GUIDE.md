# GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Your repository name (e.g., `alekfilipovic`)

## 🚀 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name your repository (e.g., `alekfilipovic` or `portfolio`)
4. Choose **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Update Vite Config

**IMPORTANT:** Update `vite.config.js` with your repository name:

```javascript
base: '/your-repo-name/',  // Replace 'your-repo-name' with your actual repo name
```

For example, if your repo is `alekfilipovic`:
```javascript
base: '/alekfilipovic/',
```

### Step 3: Initialize Git and Push to GitHub

Run these commands in your terminal (in the project directory):

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
# Replace 'YOUR_USERNAME' and 'YOUR_REPO_NAME' with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: `gh-pages` (if using manual deploy) OR
   - **GitHub Actions** (if using automatic deploy - recommended)
5. Click **Save**

### Step 5: Deploy

**Option A: Automatic Deployment (Recommended)**
- The GitHub Actions workflow will automatically deploy when you push to `main`
- Just push your code and wait a few minutes
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

**Option B: Manual Deployment**
```bash
npm run deploy
```

This will:
1. Build your site
2. Deploy to the `gh-pages` branch
3. Your site will be live in a few minutes

## 🔗 Your Live URL

Once deployed, your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example:
```
https://alek3000.github.io/alekfilipovic/
```

## ✅ Verification Checklist

- [ ] Repository created on GitHub
- [ ] `vite.config.js` updated with correct `base` path
- [ ] Git initialized and files committed
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled in repository settings
- [ ] Deployment completed (check Actions tab)
- [ ] Site is accessible at your GitHub Pages URL

## 🐛 Troubleshooting

### Site shows 404
- Check that `base` in `vite.config.js` matches your repository name exactly
- Ensure the path includes leading and trailing slashes: `/repo-name/`
- Wait a few minutes for GitHub to propagate changes

### Build fails
- Check the Actions tab in your GitHub repository
- Look for error messages in the build logs
- Ensure all dependencies are in `package.json`

### Images/assets not loading
- Verify all files are in the `public/` folder
- Check that paths start with `/` (e.g., `/profile.JPG`)
- Clear browser cache and try again

## 🔄 Updating Your Site

After making changes:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. **Automatic deployment** will trigger (if using GitHub Actions)
   - Or run `npm run deploy` for manual deployment

3. **Wait 1-2 minutes** for the site to update

## 📝 Notes

- GitHub Pages may take a few minutes to update after deployment
- Use HTTPS URLs for your site
- Custom domains can be configured in repository Settings → Pages

Need help? Check the GitHub Pages documentation: https://docs.github.com/en/pages

