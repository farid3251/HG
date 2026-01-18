const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;
const NOTES_DIR = path.join(__dirname, 'notes_data');

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.dirname(__dirname)));

// Ensure notes directory exists
if (!fs.existsSync(NOTES_DIR)) {
    fs.mkdirSync(NOTES_DIR, { recursive: true });
    console.log('✓ Created notes_data directory');
}

// Get notes for a specific video
app.get('/api/notes/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    const filePath = path.join(NOTES_DIR, `${videoId}.json`);
    
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            const notes = JSON.parse(data);
            res.json({ success: true, notes: notes.content });
        } else {
            res.json({ success: true, notes: '' });
        }
    } catch (error) {
        console.error(`Error reading notes for ${videoId}:`, error);
        res.status(500).json({ success: false, error: 'Failed to load notes' });
    }
});

// Save notes for a specific video
app.post('/api/notes/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    const { content } = req.body;
    const filePath = path.join(NOTES_DIR, `${videoId}.json`);
    
    try {
        const noteData = {
            videoId: videoId,
            content: content,
            lastModified: new Date().toISOString()
        };
        
        fs.writeFileSync(filePath, JSON.stringify(noteData, null, 2), 'utf-8');
        res.json({ success: true, message: 'Notes saved successfully' });
    } catch (error) {
        console.error(`Error saving notes for ${videoId}:`, error);
        res.status(500).json({ success: false, error: 'Failed to save notes' });
    }
});

// Clear notes for a specific video
app.delete('/api/notes/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    const filePath = path.join(NOTES_DIR, `${videoId}.json`);
    
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        res.json({ success: true, message: 'Notes cleared successfully' });
    } catch (error) {
        console.error(`Error clearing notes for ${videoId}:`, error);
        res.status(500).json({ success: false, error: 'Failed to clear notes' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'Notes server is running' });
});

app.listen(PORT, () => {
    console.log(`\n🎬 Health Games Notes Server`);
    console.log(`${'='.repeat(50)}`);
    console.log(`✓ Server running on http://localhost:${PORT}`);
    console.log(`✓ Notes directory: ${NOTES_DIR}`);
    console.log(`✓ All notes will be saved and shared across users`);
    console.log(`${'='.repeat(50)}\n`);
});
