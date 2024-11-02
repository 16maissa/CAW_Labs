//this is my solution to exo4 quetion 1 which was replaced by question 2 and 3
//my filename: f.txt
// const fs = require('fs');

// const text = process.argv[2];

// fs.writeFile('f.txt', text, (err) => {
//     if (err) {
//         console.error('Error saving the file:', err);
//     } else {
//         console.log('The file has been saved!');
//     }
// });

//question2 and 3
// my filename: destination.txt

const fs = require('fs');


const fileName = process.argv[2];
const text = process.argv[3];


fs.writeFile(fileName, text, (err) => {
    if (err) {
        console.error('Error saving the file:', err);
    } else {
        console.log('The file has been saved!');
    }
});
