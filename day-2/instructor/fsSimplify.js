const fs = require('fs').promises;
const crypto = require('crypto');

async function createFileAndDirectory() {
    try {
        const randomInt = crypto.randomInt(0, 1000).toString().padStart(4, '0');
        await fs.mkdir(`./fs-files/folder-${randomInt}`, { recursive: true });
        await fs.writeFile(`./fs-files/folder-${randomInt}/message${randomInt}.txt`, `Hello Node.js, this is your number ${randomInt}`, 'utf8');
        const data = await fs.readFile(`./fs-files/folder-${randomInt}/message${randomInt}.txt`, 'utf8');
        console.log('File written and read successfully.');
        console.log('This is the data from the file:');
        console.log(data);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

createFileAndDirectory();
