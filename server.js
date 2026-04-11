const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const NAMES_FILE = path.join(__dirname, 'visitor-names.txt');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve the static HTML/CSS/JS

// Endpoint to save visitor name
app.post('/save-name', (req, res) => {
    const { name } = req.body;
    
    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
    }

    const timestamp = new Date().toISOString();
    const entry = `[${timestamp}] ${name.trim()}\n`;

    // Append name to the text file
    fs.appendFile(NAMES_FILE, entry, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({ error: 'Failed to save name locally.' });
        }
        
        console.log(`Saved new visitor: ${name}`);
        res.json({ success: true, message: 'Name saved locally!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`Religion Website Server is running!`);
    console.log(`Local URL: http://localhost:${PORT}`);
    console.log(`Visitor names will be appended to visitor-names.txt`);
    console.log(`===============================================`);
});
