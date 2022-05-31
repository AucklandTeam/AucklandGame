# 🚀 Auckland Asteroid game!

Лучшая игра про астеройды на js

Хостинг на Heroku: https://auckland-asteroids.herokuapp.com/

```
npm run start - запуск
npm run build - production сборка
npm run serve - dev server
```
Стэк: NodeJS, React, Sass

Сборка в контейнере
```
docker build . --tag auckland 
```
Запуск контейнера
```
docker run -d -p 80:80 auckland
```