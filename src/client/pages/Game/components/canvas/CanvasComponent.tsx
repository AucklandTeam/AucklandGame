import React, {FC, useEffect, useRef} from 'react';
import spaceshipImg from 'static/images/buran.png'
//import spaceshipImg from 'static/image/buran.png';
import bgImg from 'static/images/sky.png';
import debrisImg from 'static/images/debris.png';
import explosionImg from 'static/images/exp.png';
import asterImg from 'static/images/aster.png';
import { getRandomArbitrary } from './utils';
import styles from 'styles/base.scss'

interface CanvasProps {
    setLives: (arg0: number) => void;
    setScore: (arg0: number) => void;
    isGameStart: boolean;
    setIsGameStart: (arg0: boolean) => void;
}

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

const CanvasComponent: FC<CanvasProps> = ({
    setLives, 
    setScore, 
    isGameStart,
    setIsGameStart
}) => {
    if (!Image) {
        return;
    }
    const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;
    let canvas: any = {};
    let isLoaded = false;
    const requestRef: any = React.useRef();
    let ctx: any;
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
    let bullets: any = [];
    let asteroids: any = [];
    let explosions: any = [];

    class Explosion extends Base {
        private timeLives: number;
        constructor(x: number,y: number) {
            super(x,y);
            this.timeLives = 10;
        }
        update() {
            this.timeLives -= 1;
        }
    }

    class Asteroid extends Base {
        private readonly speed: number;
        private readonly angle: number;
        private readonly radius: number;
        constructor(x:number, y:number) {
            super(x, y);
            this.speed = asteroidSpeed;
            this.angle = getRandomArbitrary(0, 360);
            this.radius = 50;
        }
        update() {
            this.x += Math.cos(Math.PI/180*(this.angle - 90)) * this.speed;
            this.y += Math.sin(Math.PI/180*(this.angle - 90)) * this.speed;

            if (this.x > canvas.width) {
                this.x = 0 - this.radius/2;
            }
            if (this.x + this.radius/2 < 0) {
                this.x = canvas.width - this.radius/2;
            }
            if (this.y > canvas.height) {
                this.y = 0 - this.radius/2;
            }
            if (this.y + this.radius - 2 < 0) {
                this.y = canvas.height - this.radius/2;
            }
        }
        getCenterX() {
            return this.x + 100;
        }
        getCenterY() {
            return this.y + 100;
        }
    }

    class Bullet extends Base {
        private angle: number;
        private speed: number;
        constructor(x: number, y: number, angle: number) {
            super(x, y);
            this.angle = angle;
            this.speed = 20;
        }
        update() {
            this.x += Math.cos(Math.PI/180*(this.angle - 90)) * this.speed;
            this.y += Math.sin(Math.PI/180*(this.angle - 90)) * this.speed;

            if (this.x > canvas.width || this.y > canvas.height) {
                this.visible = false;
            }
        }
    }

    const fireShip = () => {
        const bullet = new Bullet(xMove + shipWith/2, yMove + shipHeight/2, angle);
        bullets.push(bullet);
    };

    const updateShip = (time: number) => {
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
        if (xMove >canvas.width) {
            xMove = 0 - shipWith/2;
        }
        if (xMove + shipWith/2 < 0) {
            xMove = canvas.width - shipWith/2;
        }
        if (yMove > canvas.height) {
            yMove = 0 - shipHeight/2;
        }
        if (yMove + shipHeight - 2 < 0) {
            yMove = canvas.height - shipHeight/2;
        }

    };

    const checkCollision = () => {
        if (!isGameStart) {
            return;
        }
        asteroids.forEach((asteroid: any) => {
            bullets.forEach((bullet: any) => {
                if (Math.abs(bullet.getPos().x + 1 - asteroid.getCenterX()) < 50 &&
                        Math.abs(bullet.getPos().y + 1 - asteroid.getCenterY()) < 50) {
                    bullet.visible = false;
                    asteroid.visible = false;
                    const explosion = new Explosion(asteroid.x, asteroid.y);
                    explosions.push(explosion);
                    count += 1;
                    setScore(count);
                }
            });
            if (Math.abs(xMove + 50 - asteroid.getCenterX()) < 70 &&
                    Math.abs(yMove + 50 - asteroid.getCenterY()) < 70) {
                asteroid.visible = false;
                const explosion = new Explosion(asteroid.x, asteroid.y);
                explosions.push(explosion);
                lives -= 1;
                setLives(lives);
                if (!lives) {
                    isGameEnd = true;
                    setIsGameStart(false);
                }

            }
        });
    };

    const getAsteroidCoords = (): any => {
        const random = timestampAsteroid % 2;
        const offset = random ? -1 : 1;

        const x: number = getRandomArbitrary(0, canvas.width) + canvas.width * offset;
        const y: number = getRandomArbitrary(0, canvas.height) + canvas.height * offset;
        return ({x, y});
    };

    const updateScene = () => {
        // очищаем весь канвас перед перерисовкой
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        }

        if (isGameEnd) {
            ctx.fillStyle = 'white';
            ctx.font = '48px serif';
            ctx.fillText('GAME OVER !', canvas.width/2 - 100, canvas.height/2);
            return;
        }
        bullets = bullets.filter((el: any) => el.getVisible());
        bullets.forEach((el: any) => {
            ctx.beginPath();
            ctx.arc(el.getPos().x, el.getPos().y, bulletRadius, 0, 2 * Math.PI);
            ctx.fillStyle = 'orange';
            ctx.fill();
            el.update();
            ctx.closePath();
        });

        asteroids = asteroids.filter((el: any) => el.getVisible());
        explosions = explosions.filter((el: any) => el.timeLives > 0);
        checkCollision();
        asteroids.forEach((el: any) => {
            ctx.drawImage(aster, el.getPos().x, el.getPos().y, 200, 200);
            el.update();
        });
        explosions.forEach((el: any) => {
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
    };

    const loop = (time: number) => {
        timestampAsteroid = time;

        // двигаем метеориты
        debrisX = (debrisX + 1) % canvas.width;
        updateShip(time);
        updateScene();
        requestRef.current = requestAnimationFrame(loop);
    };
    // обработка кнопок
    const keySwitcher = (e: KeyboardEvent, state: boolean) => {
        switch(e.key)
        {
            //key A or LEFT
            case 'ArrowLeft':
            case 'a':
                keyLeft = state;
                break;
            //key D or RIGHT
            case 'd':
            case 'ArrowRight':
                keyRight = state;
                break;
            //key W or UP
            case 'w':
            case 'ArrowUp':
                keyUp = state;
                break;
            //key S or DOWN
            case 's':
            case 'ArrowDown':
                keyDown = state;
                break;
            //key Space
            case 'Space':
            case ' ':
                keySpace = state;
                break;
        }
        e.preventDefault();
    };
    // начать движение
    const keyDownHandler = (event: KeyboardEvent) => {
        keySwitcher(event, true);
    };

    // остановить движение
    const keyUpHandler = (event: KeyboardEvent) => {
        keySwitcher(event, false);
    };

    useEffect(() => {

        canvas= canvasRef.current;
        canvas.width = 1279;
        canvas.height = 720;
        canvas.style.width = '1279px';
        canvas.style.height = '720px';
        ctx = canvas.getContext('2d');


        bg.src = bgImg;
        debris.src = debrisImg;
        spaceship.src = spaceshipImg;
        explosion.src = explosionImg;
        aster.src = asterImg;

        const startAnimation = () => {
            isLoaded = true;
            requestRef.current = requestAnimationFrame(loop);
            xMove = Math.floor(canvas.width / 2);
            yMove = Math.floor(canvas.height / 2);

            debrisY = canvas.height / 5;
        };
        startAnimation();
        if (isGameStart) {
            window.addEventListener('keydown', keyDownHandler);
            window.addEventListener('keyup', keyUpHandler);
        }

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('keydown', keyDownHandler);
            window.removeEventListener('keyup', keyUpHandler);
        };
    }, [isGameStart]);

    return <canvas
        ref={canvasRef}
        className={styles.gameCanvas}
    />;
};

export default CanvasComponent;