const fs = require('fs');

let content = fs.readFileSync('./assets/test.md', 'utf-8'); // sync method

console.log(content);

fs.readFile('./assets/test.md',  (err, file) => {
    if (err) {
        console.log(err.message);
        process.exit();
    }
    console.log(`async read : ${file}`);
});