import fs from 'fs/promises';
import path from 'path';
const read = async () => {
    
    // Имя файла для чтения и путь к файлу
    const fileName = 'fileToRead.txt';
    const filePath = path.join(__dirname, 'src/streams/files', fileName);
    
    // Создаем Readable Stream
    const readableStream = fs.readableStream(filePath, { encoding: 'utf8' });
    
    // Устанавливаем обработчик события 'data' для чтения данных из потока
    readableStream.on('data', (chunk) => {
      // Печатаем содержимое в process.stdout
      process.stdout.write(chunk);
    });
    
    // Устанавливаем обработчик события 'end' для завершения потока
    readableStream.on('end', () => {
      console.log('\nЧтение завершено');
    });
    
    // Устанавливаем обработчик события 'error' для обработки ошибок
    readableStream.on('error', (err) => {
      console.error(`Ошибка при чтении файла: ${err.message}`);
    });
    
};

await read();