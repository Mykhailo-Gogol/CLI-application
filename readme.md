## Screenshots

- Получаем и выводим весь список контактов в виде таблицы (console.table)

[node index.js --action list](https://ibb.co/CKvDhRx)

- Получаем контакт по id

[node index.js --action get --id 5](https://ibb.co/n3yC1v6)

- Добавялем контакт

[node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22](https://ibb.co/p2LFq7S)

- Удаляем контакт

[node index.js --action remove --id=3](https://ibb.co/1LShHtz)

## Шаг 1

- Инициализировал npm в проекте
- В корне проекта создал файл `index.js`
- Постаивил пакет [nodemon](https://www.npmjs.com/package/nodemon) как зависимость разработки (devDependencies)
- В файле `package.json` добавил "скрипты" для запуска `index.js`
- Скрипт `start` который запускает `index.js` с помощью `node`
- Скрипт `start:dev` который запускает `index.js` с помощью `nodemon`

## Шаг 2

В корне проекта создал папку `db`. Для хранения контактов скачал и использовал файл contacts.json, положив его в папку `db`.

В корне проекта создал файл `contacts.js`.

- Сделал импорт модулей `fs` и `path` для работы с файловой системой
- Создал переменную `contactsPath` и запиши в нее путь к файле `contacts.json`. Для составления пути ипользовал методы модуля `path`.
- Добавил функции для работы с коллекцией контактов. В функциях использовал модуль `fs` и его методы `readFile()` и `writeFile()`
- Сделал экспорт созданных функций через `module.exports`
