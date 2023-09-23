const fs = require('fs');

// read
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, data);
    });
}

// write 
function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, 'utf8', (error) => {
        if (error) {
            callback(error);
            return;
        }
        callback(null);
    });
}

module.exports = {
    readFile,
    writeFile,
};

