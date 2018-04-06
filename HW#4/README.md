HW#3

Для корректной работы файлы:
- .babelrc;
- package-lock.json;
- package.json;
- webpack.config.js
необходимо вынести на папку выше, папки HW#3.

В папке src/client/app/ лежат все файлы, которые используются для сборки.

В папке src/client/public лежат готовые файлы проекта.

Папка src/client/app/components:
В файле content.jsx объединяются файлы header.jsx и main.jsx. Сделано для того, чтобы можно было легко привязсть footer к низу страницы.

В файле header.jsx обединяются составные части шапки - menu.jsx и login.jsx.

Файл header.jsx - шапка сайта.
Файл menu.jsx - ссылки в меню.
Файл login.jsx - кнопка login.
Файл main.jsx - основное содержимое сайта.
Файл footer.jsx - подвал сайта.

Файл index.jsx - сборка всего сайта, объединяются файлы content.jsx и footer.jsx.


В папке src/client/public:
Файл bundle.js - готовая сборка файла index.jsx.
Файл index_HW_3.html - для браузера.
Файл style.css - стили проекта.
