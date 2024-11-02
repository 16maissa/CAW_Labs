//exercice3
// i named the file test.txt
const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
    console.log("Please provide a file name as a parameter.");
    
}

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data); 
});

