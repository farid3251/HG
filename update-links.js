const fs = require('fs');

const videoData = JSON.parse(fs.readFileSync('./video_data.json', 'utf8'));
let meditationHtml = fs.readFileSync('./meditation.html', 'utf8');

// Helper to generate page filename
function getPageFilename(video) {
  const folderSlug = video.folder.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
  return `video-${folderSlug}-${video.number}.html`;
}

// Replace all meditation-XX.html links with generated page links
videoData.forEach((video) => {
  const oldHref = `href="meditation-${String(video.number).padStart(2, '0')}.html"`;
  const newHref = `href="videos-pages/${getPageFilename(video)}"`;
  meditationHtml = meditationHtml.replaceAll(oldHref, newHref);
});

fs.writeFileSync('./meditation.html', meditationHtml, 'utf8');
console.log('✅ Updated meditation.html with links to generated video pages');
