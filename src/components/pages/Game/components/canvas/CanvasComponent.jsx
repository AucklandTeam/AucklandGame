import React, { useEffect, useRef } from 'react';
import spaceshipImg from '../../../../../../www/Images/spaceship.png';
import bgImg from '../../../../../../www/Images/sky.png';
import debrisImg from '../../../../../../www/Images/debris.png';
import explosionImg from '../../../../../../www/Images/Explosion.png';
import asterImg from '../../../../../../www/Images/aster.png';
import { getRandomArbitrary } from './utils';
import {
    angleIncValue,
    speedIncValue,
    speedInertion,
    shipWith,
    shipHeight,
    bulletRadius,
    shotDelay,
    asteroidSpeed,
} from './consts';
import Base from './BaseClass';

const CanvasComponent = () => {
    const canvas = useRef() ;
    let isLoaded = false;
    const requestRef = React.useRef();
    let ctx;
    const spaceship = new Image();
    const bg = new Image();
    const debris = new Image();
    const explosion = new Image();
    const aster = new Image();

    // скорость кораблля
    let speed = 0;
    // угол поворота корабля
    let angle = 0;
    // положение корабля
    let xMove = 0;
    let yMove = 0;
    // стостояние кнопок
    let keyLeft = false;
    let keyRight = false;
    let keyUp = false;
    let keyDown = false;
    let keySpace = false;
    let timestamp = 0;
    let timestampAsteroid = 0;
    let asteroidDelay = 0;
    let count = 0;
    let lives = 3;
    let isGameEnd = false;

    let debrisX = 0;
    let debrisY = 0;
    let bullets = [];
    let asteroids = [];
    let explosions = [];

    class Explosion extends Base {
        constructor(x,y) {
            super(x,y);
            this.timeLives = 10;
        }
        update() {
            this.timeLives -= 1;
        }
    }

    class Asteroid extends Base {
        constructor(x, y) {
            super(x, y);
            this.speed = asteroidSpeed;
            this.angle = getRandomArbitrary(0, 360);
            this.radius = 50;
        }
        update() {
            this.x += Math.cos(Math.PI/180*(this.angle - 90)) * this.speed;
            this.y += Math.sin(Math.PI/180*(this.angle - 90)) * this.speed;
            if (this.x > canvas.current.width) {
                this.x = 0 - this.radius/2;
            }
            if (this.x + this.radius/2 < 0) {
                this.x = canvas.current.width - this.radius/2;
            }
            if (this.y > canvas.current.height) {
                this.y = 0 - this.radius/2;
            }
            if (this.y + this.radius - 2 < 0) {
                this.y = canvas.current.height - this.radius/2;
            }
        }
        getCenterX() {
            return this.x + 100;
        }
        getCenterY() {
            return this.y + 100;
        }
    };

    class Bullet extends Base {
        constructor(x, y, angle) {
            super(x, y);
            this.angle = angle;
            this.speed = 20;
        }
        update() {
            this.x += Math.cos(Math.PI/180*(this.angle - 90)) * this.speed;
            this.y += Math.sin(Math.PI/180*(this.angle - 90)) * this.speed;
            if (this.x > canvas.current.width || this.y > canvas.current.height) {
                this.visible = false;
            }
        }
    };

    const fireShip = () => {
        const bullet = new Bullet(xMove + shipWith/2, yMove + shipHeight/2, angle);
        bullets.push(bullet);
    };

    const updateShip = (time) => {
        if (true) {
            // двигаем корабль
            if (keyRight) {
                angle += angleIncValue;
            }
            if (keyLeft) {
                angle -= angleIncValue;
            }
            if (keyDown) {
                speed -= speedIncValue;
            }
            if (keyUp) {
                speed += speedIncValue;
            }
            if (keySpace) {
                if (time - timestamp > shotDelay) {
                    fireShip();
                    timestamp = time;
                }

            }
            speed = speed * speedInertion;
            xMove += Math.cos(Math.PI/180*(angle -90)) * speed;
            yMove += Math.sin(Math.PI/180*(angle - 90)) * speed;
            if (xMove > canvas.current.width) {
                xMove = 0 - shipWith/2;
            }
            if (xMove + shipWith/2 < 0) {
                xMove = canvas.current.width - shipWith/2;
            }
            if (yMove > canvas.current.height) {
                yMove = 0 - shipHeight/2;
            }
            if (yMove + shipHeight - 2 < 0) {
                yMove = canvas.current.height - shipHeight/2;
            }
        }
    };

    const checkCollision = () => {
        asteroids.forEach(asteroid => {
            bullets.forEach(bullet => {
                if (Math.abs(bullet.getPos().x + 1 - asteroid.getCenterX()) < 50 && 
                        Math.abs(bullet.getPos().y + 1 - asteroid.getCenterY()) < 50) {
                    bullet.visible = false;
                    asteroid.visible = false;
                    const explosion = new Explosion(asteroid.x, asteroid.y);
                    explosions.push(explosion);
                    count += 1;
                }
            });
            if (Math.abs(xMove + 50 - asteroid.getCenterX()) < 70 && 
                    Math.abs(yMove + 50 - asteroid.getCenterY()) < 70) {
                asteroid.visible = false;
                const explosion = new Explosion(asteroid.x, asteroid.y);
                explosions.push(explosion);
                lives -= 1;
                if (!lives) {
                    isGameEnd = true;
                }

            }
        });
    };

    const getAsteroidCoords = () => {
        const random = timestampAsteroid % 2;
        const offset = random ? -1 : 1;
        const x = getRandomArbitrary(0, canvas.current.width) + canvas.current.width * offset;
        const y = getRandomArbitrary(0, canvas.current.height) + canvas.current.height * offset;
        return ({x, y});
    };

    const updateScene = () => {
        // очищаем весь канвас перед перерисовкой
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        // рисуем объект в новых кординатах
        // фон
        ctx.drawImage(bg, 0, 0);
        // фон метеориты
        ctx.drawImage(debris, debrisX, debrisY);
        // пули
        if (timestampAsteroid - asteroidDelay > 1000) {
            asteroidDelay = timestampAsteroid;
            const {x, y} = getAsteroidCoords();
            const asteroid = new Asteroid(x, y);
            asteroids.push(asteroid);
        };

        if (isGameEnd) {
            ctx.fillStyle = 'white';
            ctx.font = '48px serif';
            ctx.fillText('GAME OVER !', canvas.current.width/2 - 100, canvas.current.height/2);
            return;
        }
        bullets = bullets.filter(el => el.getVisible());
        bullets.forEach(el => {
            ctx.beginPath();
            ctx.arc(el.getPos().x, el.getPos().y, bulletRadius, 0, 2 * Math.PI);
            ctx.fillStyle = 'orange';
            ctx.fill();
            el.update();
            ctx.closePath();
        });

        asteroids = asteroids.filter(el => el.getVisible());
        explosions = explosions.filter(el => el.timeLives > 0);
        checkCollision();
        asteroids.forEach(el => {
            ctx.drawImage(aster, el.getPos().x, el.getPos().y, 200, 200);
            el.update();
        });
        explosions.forEach(el => {
            ctx.drawImage(explosion, el.x, el.y, 200, 140);
            el.update();
        });
        // корабль
        // сохраняем канвас
        ctx.save();
        // переносим центр в центр корабля
        ctx.translate(xMove + shipWith/2, yMove + shipHeight/2);
        // поворачиваем корабль
        ctx.rotate(Math.PI/180 * angle);
        // переносим центр обратно
        ctx.translate(-xMove - shipWith/2, -yMove - shipHeight/2);
        // отрисовываем корабль
        ctx.drawImage(spaceship, xMove, yMove);
        // восстанавливаем канвас
        ctx.restore();
        ctx.fillStyle = 'white';
        ctx.font = '24px serif';
        ctx.fillText(`score: ${count}`, 100, 50);
        ctx.fillText(`lives: ${lives}`, canvas.current.width - 100, 50);
    };

    const loop = (time) => {
        timestampAsteroid = time;
        // двигаем метеориты
        debrisX = (debrisX + 1) % canvas.current.width;
        updateShip(time);
        updateScene();
        requestRef.current = requestAnimationFrame(loop);
    };
    // обработка кнопок
    const keySwitcher = (e, state) => {
        switch(e.keyCode)
        {
            //key A or LEFT
            case 65:
            case 37:
                keyLeft = state;
                break;
            //key D or RIGHT
            case 68:
            case 39:
                keyRight = state;
                break;
            //key W or UP
            case 87:
            case 38:
                keyUp = state;
                break;
            //key S or DOWN
            case 83:
            case 40:
                keyDown = state;
                break;
            //key Space
            case 32:
            case 75:
                keySpace = state;
                break;
        }
        e.preventDefault();
    };
    // начать движение
    const keyDownHandler = (e) => {
        keySwitcher(e, true);
    };

    // остановить движение
    const keyUpHandler = (e) => {
        keySwitcher(e, false);
    };

    useEffect(() => {
        canvas.current.width = 1279;
        canvas.current.height = 720;
        canvas.current.style.width = '1279px';
        canvas.current.style.height = '720px';
        ctx = canvas.current.getContext('2d');


        bg.src = bgImg;
        debris.src = debrisImg;
        spaceship.src = spaceshipImg;
        explosion.src = explosionImg;
        aster.src = asterImg;

        const startAnimation = () => {
            isLoaded = true;
            requestRef.current = requestAnimationFrame(loop);
            xMove = Math.floor(canvas.current.width / 2);
            yMove = Math.floor(canvas.current.height / 2);

            debrisY = canvas.current.height / 5;
        };

        startAnimation();
        window.addEventListener('keydown', keyDownHandler);
        window.addEventListener('keyup', keyUpHandler);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return <canvas onKeyDown={keyDownHandler} onKeyUp={keyUpHandler} ref={canvas} />;
};

export default CanvasComponent;
