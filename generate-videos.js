const fs = require('fs');
const path = require('path');

// Read video data
const videoData = JSON.parse(fs.readFileSync('./video_data.json', 'utf8'));

// Create videos directory if it doesn't exist
const videosDir = './videos-pages';
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

// Helper to generate page filename
function getPageFilename(video) {
  const folderSlug = video.folder.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
  const titleSlug = video.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `video-${folderSlug}-${video.number}.html`;
}

// Helper to get category from folder
function getCategory(folder) {
  const categoryMap = {
    'Core Knowledge': 'meditation',
    'Atman Padha (Path of Self)': 'meditation',
    'Dealing with Samskaras': 'meditation',
    'Dukkha Padha (Path of Contentment)': 'meditation',
    'Jnana Padha (Path of Knowledge)': 'meditation',
    'Manas Padha (Path of Mind)': 'meditation',
    'Siddhi Padha (Patch of Accomplishment)': 'meditation'
  };
  return categoryMap[folder] || 'meditation';
}

// Helper to get total videos in folder
function getTotalInFolder(folder) {
  return videoData.filter(v => v.folder === folder).length;
}

// Helper to get folder index for breadcrumb
function getFolderIndex(video) {
  return videoData.filter(v => v.folder === video.folder && v.number <= video.number).length;
}

// Generate pages
videoData.forEach((video, index) => {
  if (!video.youtubeId && !video.driveId) {
    console.log(`⚠️  Skipping "${video.title}" - no youtubeId or driveId`);
    return;
  }

  const category = getCategory(video.folder);
  const totalInFolder = getTotalInFolder(video.folder);
  const folderIndex = getFolderIndex(video);
  const filename = getPageFilename(video);
  const filepath = path.join(videosDir, filename);

  const meditationBadge = video.is_meditation ? '🧘 Guided Practice' : '📚 Educational';

  // Use Google Drive embed if available, otherwise YouTube
  let videoEmbed;
  if (video.driveId) {
    videoEmbed = `<iframe src="https://drive.google.com/file/d/${video.driveId}/preview" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
  } else {
    videoEmbed = `<iframe src="https://www.youtube.com/embed/${video.youtubeId}?fs=1&rel=0&modestbranding=1" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${video.title} - Health Games</title>
    <link rel="stylesheet" href="../style.css">
    <style>
        body {
            background-color: #fafaf8;
        }
        .video-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }
        .breadcrumb {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .breadcrumb a {
            color: #2c5282;
            text-decoration: none;
        }
        .breadcrumb a:hover {
            text-decoration: underline;
        }
        .video-header {
            margin-bottom: 2rem;
        }
        .badge {
            display: inline-block;
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
            margin-bottom: 1rem;
            background-color: #e8f4f8;
            color: #2c5282;
        }
        .badge.practice {
            background-color: #f0e8f8;
            color: #6b3fa0;
        }
        h1 {
            font-size: 2rem;
            margin: 0 0 0.5rem 0;
            color: #1a1a1a;
            font-weight: 600;
        }
        .metadata {
            font-size: 0.9rem;
            color: #666;
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1rem;
        }
        .youtube-embed {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            margin-bottom: 2rem;
            background-color: #000;
            border-radius: 8px;
            overflow: hidden;
        }
        .youtube-embed iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
        .back-button {
            display: inline-block;
            margin-bottom: 2rem;
            padding: 0.6rem 1rem;
            background-color: #f0f0f0;
            color: #333;
            text-decoration: none;
            border-radius: 4px;
            font-size: 0.9rem;
            transition: background-color 0.2s;
        }
        .back-button:hover {
            background-color: #e0e0e0;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <a href="../index.html" class="logo">
            <img src="../img/HG Logo.png" alt="Logo">
            <span class="initials">HG</span>
        </a>
        <ul class="nav-links">
            <li><a href="../adhd.html">ADHD</a></li>
            <li><a href="../anxiety.html">Anxiety</a></li>
            <li><a href="../depression.html">Depression</a></li>
            <li><a href="../meditation.html">Meditation</a></li>
            <li><a href="../trauma.html">Trauma</a></li>
        </ul>
    </nav>

    <div class="video-container">
        <a href="../meditation.html" class="back-button">← Back to Meditation</a>

        <div class="breadcrumb">
            <a href="../meditation.html">Meditation</a>
            <span>/</span>
            <span>${video.folder}</span>
            <span>/</span>
            <span>Video ${folderIndex} of ${totalInFolder}</span>
        </div>

        <div class="video-header">
            <div class="badge ${video.is_meditation ? 'practice' : ''}">${meditationBadge}</div>
            <h1>${video.title}</h1>
            <div class="metadata">
                <span>⏱️ ${video.duration}</span>
                <span>📺 Video ${folderIndex} of ${totalInFolder}</span>
            </div>
        </div>

        <div class="youtube-embed">
            ${videoEmbed}
        </div>
    </div>
</body>
</html>`;

  fs.writeFileSync(filepath, html, 'utf8');
  console.log(`✓ Generated: ${filename}`);
});

console.log(`\n✅ Done! Generated pages in ./videos-pages/`);
