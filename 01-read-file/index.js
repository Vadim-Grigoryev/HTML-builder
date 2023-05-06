const fs = require("fs");
const path = require('path');
const fullPath = path.join(__dirname, 'text.txt');
let readableStream = fs.createReadStream(fullPath);
readableStream.on("data", function(text) {
    console.log(text.toString());
}
)

