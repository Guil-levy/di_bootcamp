const fileManager = require('./fileManager.js');


fileManager.readFile('Hello World.txt', (readError, data) => {
    if (readError) {
        console.error('Error reading file:', readError);
    } else {
        console.log('File content:', data);

        
        fileManager.writeFile('Bye World.txt', 'Writing to the file', (writeError) => {
            if (writeError) {
                console.error('Error writing to file:', writeError);
            } else {
                console.log('File "Bye World.txt" written successfully.');
            }
        });
    }
});
//log : File content: "Hello World !!"
// File "Bye World.txt" written successfully.