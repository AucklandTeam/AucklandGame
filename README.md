# 🚀 Auckland Asteroid game!

Лучшая игра про астеройды на js

Хостинг на Heroku: https://auckland-asteroids.herokuapp.com/

```
npm run start - запуск
npm run build - production сборка
npm run serve - dev server
```
Стэк: NodeJS, React, Sass

Сборка в контейнерах
```
docker-compose up
```
Проверяем, что все запущено
```
docker-compose ps
```
Захожим на localhost:8080 в PG admin и коннектимся к нашей базе:
```
- правой кнопкой create -> server
- general -> name: postgres
- connertion -> host name: postgres
                username: смотри POSTGRES_USER в dot.env
                password: смотри POSTGRES_PASSWORD в dot.env
                остальное по умолчанию
```

