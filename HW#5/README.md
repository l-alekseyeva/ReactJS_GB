HW#5

Для корректной работы файлы:
- .babelrc;
- package-lock.json;
- package.json;
- webpack.config.js
необходимо вынести на папку выше, папки HW#4.

В папке src/client/app/ лежат все файлы, которые используются для сборки.

В папке src/client/public лежат готовые файлы проекта.

Папка src/client/app/components:

Файл PokeCard.jsx - карточка одного покемона.
Файл PokeList.jsx - вывод всех карточек
Файл footer.jsx - подвал сайта.

Папка src/client/app/container:
Файл PokeListContainer.jsx - ajax запрос данных по покемонам

Файл index.jsx - сборка всего сайта, объединяются файлы PokeListContainer.jsx и footer.jsx.


В папке src/client/public:
Файл bundle.js - готовая сборка файла index.jsx.
Файл index.html - для браузера.
Файл style.css - стили проекта.
