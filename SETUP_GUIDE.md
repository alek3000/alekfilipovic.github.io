# Portfolio Setup Guide

Follow these steps to add your personal content to the portfolio.

## 📁 Step 1: Add Your Photo

1. **Find or prepare your photo:**
   - Use a square or portrait photo (recommended: 400x400px or larger)
   - Formats: JPG, PNG, or WebP
   - Name it: `profile.jpg` (or `profile.png` if using PNG)

2. **Place the file:**
   - Copy your photo to the `public` folder
   - Full path: `public/profile.jpg`

3. **The photo will automatically appear** in the Hero section - no code changes needed!

---

## 📄 Step 2: Add Your Resume

1. **Prepare your resume:**
   - Export your resume as a PDF
   - Name it: `resume.pdf`

2. **Place the file:**
   - Copy your resume PDF to the `public` folder
   - Full path: `public/resume.pdf`

3. **The resume link is already set up** - it will open when users click the Resume icon in the Connect section!

---

## 🔗 Step 3: Update Your Social Links

Open `src/components/Connect.jsx` and update the links:

```javascript
const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/YOUR_USERNAME',  // ← Update this
    label: 'GitHub', 
    type: 'link' 
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/YOUR_PROFILE',  // ← Update this
    label: 'LinkedIn', 
    type: 'link' 
  },
  { 
    icon: Mail, 
    href: 'mailto:your.email@example.com',  // ← Update this
    label: 'Email', 
    type: 'link' 
  },
  { 
    icon: FileText, 
    href: '/resume.pdf',  // ← Already correct if you named it resume.pdf
    label: 'Resume', 
    type: 'download' 
  },
]
```

**To update:**
1. Replace `YOUR_USERNAME` with your actual GitHub username
2. Replace `YOUR_PROFILE` with your LinkedIn profile URL
3. Replace `your.email@example.com` with your actual email address

---

## 📝 Step 4: Update Your About Section (Optional)

Open `src/components/About.jsx` and update the text to match your background:

```javascript
<p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4 sm:mb-6">
  // Replace this with your own introduction
</p>
```

---

## 🎨 Step 5: Update Your Projects (Optional)

Open `src/components/Projects.jsx` and replace the placeholder projects with your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Description of your project...',
    image: '/project1.jpg',  // Place images in public folder
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  // Add more projects...
]
```

**For project images:**
- Place project images in the `public` folder
- Reference them as `/image-name.jpg` in the code

---

## ✅ Quick Checklist

- [ ] Added `profile.jpg` to `public/` folder
- [ ] Added `resume.pdf` to `public/` folder
- [ ] Updated GitHub link in `Connect.jsx`
- [ ] Updated LinkedIn link in `Connect.jsx`
- [ ] Updated email address in `Connect.jsx`
- [ ] (Optional) Updated About section text
- [ ] (Optional) Added your projects

---

## 🚀 Testing

After adding your files:

1. **Start the dev server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Check your photo:**
   - Visit `http://localhost:5173`
   - Your photo should appear in the Hero section

3. **Test your resume:**
   - Scroll to the Connect section
   - Click the Resume icon
   - Your PDF should open in a new tab

4. **Test your links:**
   - Click each social icon in the Connect section
   - Verify they go to the correct pages

---

## 📂 File Structure Summary

```
alekfilipovic/
├── public/
│   ├── profile.jpg          ← Your photo here
│   ├── resume.pdf           ← Your resume here
│   └── project1.jpg         ← Project images (optional)
├── src/
│   └── components/
│       ├── Connect.jsx      ← Update links here
│       ├── About.jsx         ← Update text here (optional)
│       └── Projects.jsx      ← Add projects here (optional)
```

---

## 💡 Tips

- **Photo:** Use a high-quality image (at least 400x400px) for best results
- **Resume:** Keep the PDF under 5MB for faster loading
- **Links:** Make sure your social media profiles are public/accessible
- **Projects:** Add 3-6 projects for best visual balance

Need help? Check the code comments in each component file!

