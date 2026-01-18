# Health Games - Mental Wellness Website

A fully functional, responsive website providing mental health resources and educational videos on ADHD, Anxiety, Depression, Meditation, and Trauma recovery.

## 📁 Website Structure

```
HG/
├── index.html                 # Home page (main entry point)
├── Home.html                  # Main home page content
├── style.css                  # All styling for the website
├── adhd.html                  # ADHD category page with video grid
├── anxiety.html               # Anxiety category page with video grid
├── depression.html            # Depression category page with video grid
├── meditation.html            # Meditation category page with video grid
├── trauma.html                # Trauma recovery category page with video grid
├── video-adhd-*.html          # Individual ADHD video detail pages
├── video-anxiety-*.html       # Individual Anxiety video detail pages
├── video-depression-*.html    # Individual Depression video detail pages
├── video-meditation-*.html    # Individual Meditation video detail pages
├── video-trauma-*.html        # Individual Trauma video detail pages
├── img/                       # Images folder (contains HG Logo.png)
└── README.md                  # This file
```

## 🎯 Features

### Fully Functional Navigation
- Logo links back to home on all pages
- Nav menu provides quick access to all 5 main categories
- Back buttons on video pages for easy navigation
- Responsive design that works on mobile, tablet, and desktop

### 5 Category Pages
Each category includes:
- Descriptive header with category icon and explanation
- Grid of video thumbnails with titles and descriptions
- Clickable cards that link to detailed video pages

### 30 Video Detail Pages
Each video page includes:
- Video player placeholder (ready for embedding YouTube/Vimeo)
- Video title and metadata (duration, level, instructor)
- Detailed description
- Key concepts/takeaways
- Back button for easy navigation

### Responsive Design
- Mobile-first design approach
- Flexible grid layouts that adapt to screen size
- Touch-friendly buttons and links
- Optimized typography for readability

### Color Scheme
- Primary dark: `#0b1f33`
- Accent green: `#98ff98`
- Background: `#f5f5f5`
- Clean, professional appearance

## 🚀 How to Use

1. **Open the website**: Start by opening `index.html` in your browser
2. **Navigate**: Use the navbar to browse different categories
3. **Select a video**: Click on any video card to view details
4. **Go back**: Use the back button to return to the category page

## 🎬 Embedding Videos

Each video page has a placeholder video player with emoji. To embed actual videos:

### Option 1: YouTube Embed
Replace the `.video-player` div content with:
```html
<iframe class="video-player" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="Video Title"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

### Option 2: Vimeo Embed
```html
<iframe class="video-player" 
    src="https://player.vimeo.com/video/VIDEO_ID" 
    title="Video Title"
    allowfullscreen>
</iframe>
```

### Option 3: Custom Video Player
```html
<video class="video-player" controls>
    <source src="path/to/video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

## ✨ Customization Guide

### Adding New Categories
1. Create a new category file (e.g., `stress.html`)
2. Copy the structure from an existing category page
3. Add 6 video cards with unique IDs
4. Update the navbar in all files to include the new category
5. Create video detail pages following the naming pattern

### Editing Video Content
To update video information:
1. Open the relevant video file (e.g., `video-adhd-1.html`)
2. Update the title in the `<h1>` tag
3. Modify duration, level, and instructor in the metadata
4. Update the description and key takeaways
5. Add the video embed code

### Changing Colors
Edit these colors in `style.css`:
- `#0b1f33` - Dark blue (primary)
- `#98ff98` - Green (accent/highlights)
- `#f5f5f5` - Light gray (background)

### Adding Images/Icons
Replace the emoji placeholders in video-player divs with actual images:
```html
<div class="video-thumbnail">
    <img src="img/thumbnail.png" alt="Video thumbnail">
</div>
```

## 🌐 Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## ♿ Accessibility Features
- Semantic HTML structure
- Readable color contrast (WCAG AA compliant)
- Keyboard navigation support
- Alternative text ready for images
- Responsive text sizing

## 📱 Mobile Responsive Breakpoints
- Desktop: Full grid layout
- Tablet (max-width: 1024px): 2-3 columns
- Mobile (max-width: 768px): 1-2 columns, adjusted font sizes

## 🎨 CSS Classes for Customization

### Main Containers
- `.navbar` - Top navigation bar
- `.hero` - Hero section with introduction
- `.category-header` - Category page header
- `.category-content` - Main content area
- `.videos-grid` - Video grid container

### Cards & Components
- `.video-card` - Individual video thumbnail card
- `.feature-card` - Feature card on home page
- `.back-button` - Navigation back button
- `.video-details` - Video information container

## 🐛 Troubleshooting

### Links not working
- Check that all file names match exactly (case-sensitive on some servers)
- Ensure files are in the same directory
- Use relative paths (e.g., `adhd.html` not `/adhd.html`)

### Styling looks off
- Clear browser cache (Ctrl+Shift+Delete)
- Verify `style.css` is in the same folder as HTML files
- Check browser console for CSS errors

### Logo not showing
- Ensure `img/HG Logo.png` exists
- Check file path in `<img>` tags

## 📞 Support
For issues or questions about the website structure, refer to the HTML comments in each file or review the CSS documentation above.

## 📄 License
Created 2026 - Health Games. All rights reserved.
