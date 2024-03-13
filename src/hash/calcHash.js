import fs from 'fs/promises';
import path from 'path';

async function calcHash() {
    const sourceFolder = '/src/hash/files';
    const oldFilename = 'fileToCalculateHashFor.txt';

    const sourceFilePath = path.join(sourceFolder, oldFilename);

    try {
        await fs.access(sourceFilePath);
        console.error('Not file in folder');
    } catch (error) {
        if (error.code === 'ENOENT') {
            try {
                const bufferText = Buffer.from(oldFilename, 'utf8');
                console.log(bufferText.toString('hex'));
            } catch {
                
            }
        }
    }

}

calcHash();













// const bufferText = Buffer.from('hello world', 'utf8'); // or Buffer.from('hello world')
// console.log(bufferText); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// const text = bufferText.toString('hex');
// // To get hex
// console.log(text); // 68656c6c6f20776f726c64

// console.log(bufferText.toString()); // or toString('utf8')
// // hello world

// //one single line
// // Buffer.from('hello world').toString('hex')