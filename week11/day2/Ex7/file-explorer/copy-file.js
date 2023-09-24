const fs = require('fs');

const sourceFilePath = 'source.txt';
const destinationFilePath = 'destination.txt';

// Read source.txt
fs.readFile(sourceFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source.txt:', err);
    return;
  }
  // Write in destination.txt
  fs.writeFile(destinationFilePath, data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to destination.txt:', err);
      return;
    }
    console.log('File copied successfully from source.txt to destination.txt');
  });
});
