const parseArgs = () => {
     // Получаем аргументы командной строки, начиная с третьего элемента (первые два - путь к Node.js и скрипту)
  const args = process.argv.slice(2);

  // Проходим по аргументам
  for (let i = 0; i < args.length; i += 2) {
    // Получаем название свойства и значение
    const propName = args[i].slice(2); // убираем "--"
    const propValue = args[i + 1];

    // Выводим на консоль в требуемом формате
    console.log(`${propName} is ${propValue}`);
  }
};

parseArgs();