const fs = require("fs");

let files = fs.readdirSync('./assets'); // sync call

fs.readdir('./assets', (err, files) => {
    if (err) {
        throw err;
        process.exit();
    }
    console.log('ayscn read ', files);
});

console.log(files);