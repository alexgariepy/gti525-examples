import fs from 'node:fs';
const filename = 'C:/git/gti525-examples/cours07-node-js/exercises/myself/word_count/alice_book.txt';
const textToFind = "large rose-tree stood";
//const textToFind = "Alice";
const readStream = fs.createReadStream(filename);

let oldBloc = "";
let index = -1;

// Completez le code...
readStream.on('data', (chunk) => {
    // Convert the chunk to a string
    const data = chunk.toString();
    
    // Combine the old block with the new data
    const combinedData = oldBloc + data;
    
    // Find the index of the textToFind in the combined data
    index = combinedData.indexOf(textToFind);
    
    if (index !== -1) {
        console.log(`Found "${textToFind}" at index ${index}`);
        readStream.close(); // Stop reading further if found
    } else {
        // Update oldBloc to keep the last part of the current chunk for next iteration
        oldBloc = combinedData.slice(-textToFind.length);
    }
});