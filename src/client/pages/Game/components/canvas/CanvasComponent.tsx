import React, {FC, useEffect, useRef} from 'react';
import spaceshipImg from 'static/images/buran.png'
import bgImg from 'static/images/sky.png';
import debrisImg from 'static/images/debris.png';
import explosionImg from 'static/images/exp.png';
import asterImg from 'static/images/aster.png';
import { getRandomArbitrary } from './utils';
import styles from 'styles/base.scss'
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

interface CanvasProps {
    setLives: (arg0: number) => void;
    setScore: (arg0: number) => void;
    isGameStart: boolean;
    setIsGameStart: (arg0: boolean) => void;
    getFullScreen: any;
}

const CanvasComponent: FC<CanvasProps> = ({
      setLives,
      setScore,
      isGameStart,
      setIsGameStart,
      getFullScreen,
    }) => {
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
        private row: number;
        private column: number;
        currentFrame: number;
        frameWidth: number;
        frameHeight: number;
        numColumns: number;
        numRows: number;
        isSmall: boolean;
        private tickExplosion: number;
        constructor(x: number,y: number, isSmall: boolean) {
            super(x,y);
            this.isSmall = isSmall;
            this.timeLives = 10;
            // анимация взрыва
            this.row = 0;
            this.column = 0;
            this.currentFrame = 0;
            this.frameWidth = 550;
            this.frameHeight = 550;
            this.numColumns = 10;
            this.numRows = 1;
            this.tickExplosion = 0;
        }
        update() {
            this.tickExplosion++;
            if ( this.tickExplosion % 5 === 0) {
                this.currentFrame++;
                let maxFrame = this.numColumns * this.numRows - 1;
                if ( this.currentFrame > maxFrame){
                    this.timeLives = 0;
                }
                // Update rows and columns
                this.column = this.currentFrame % this.numColumns;
                this.row = Math.floor(this.currentFrame / this.numColumns);
            }
        }
    }

    class Asteroid extends Base {
        public speed: number;
        private readonly angle: number;
        public radius: number;
        public isSmall: boolean;
        constructor(x:number, y:number) {
            super(x, y);
            this.speed = asteroidSpeed;
            this.angle = getRandomArbitrary(0, 360);
            this.radius = 50;
            this.isSmall = false;
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
            return this.x + this.radius * 2;
        }
        getCenterY() {
            return this.y + this.radius * 2;
        }
    };

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
    };

    const fireShip = () => {
        const bullet = new Bullet(xMove + shipWith/2, yMove + shipHeight/2, angle);

        bullets.push(bullet);

        const isTripleFire = true;
        if (isTripleFire) {
            const x1 = xMove + shipWith/2 - bulletRadius/2 + 50 * Math.sin((-angle + 50) * Math.PI / 180);
            const y1 = yMove - bulletRadius/2 + shipHeight/2 + 50 * Math.cos((-angle + 50) * Math.PI / 180);
            const x2 = xMove + shipWith/2 - bulletRadius/2 + 50 * Math.sin((-angle - 50) * Math.PI / 180);
            const y2 = yMove - bulletRadius/2 + shipHeight/2 + 50 * Math.cos((-angle - 50) * Math.PI / 180)
            const bullet1 = new Bullet(x1, y1, angle);
            const bullet2 = new Bullet(x2, y2, angle);
            bullets.push(bullet1);
            bullets.push(bullet2);
        }
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
                if (Math.abs(bullet.getPos().x + 1 - asteroid.getCenterX()) < asteroid.radius &&
                    Math.abs(bullet.getPos().y + 1 - asteroid.getCenterY()) < asteroid.radius) {
                    bullet.visible = false;
                    asteroid.visible = false;
                    const explosion = new Explosion(asteroid.x, asteroid.y, asteroid.isSmall);
                    // появление новых астеройдов
                    if (!asteroid.isSmall) {
                        for (let i = 0; i < 2; i++) {
                            const smallAsteroid = new Asteroid(asteroid.x, asteroid.y);
                            smallAsteroid.speed = 3;
                            smallAsteroid.radius = 25;
                            smallAsteroid.isSmall = true;
                            asteroids.push(smallAsteroid);
                        }
                    }
                    explosions.push(explosion);
                    count += 1;
                    setScore(count);
                }
            });
            if (Math.abs(xMove + 50 - asteroid.getCenterX()) < 70 &&
                Math.abs(yMove + 50 - asteroid.getCenterY()) < 70) {
                asteroid.visible = false;
                const explosion = new Explosion(asteroid.x, asteroid.y, asteroid.isSmall);
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
        // добавляем астеройды
        if (timestampAsteroid - asteroidDelay > 1500) {
            asteroidDelay = timestampAsteroid;
            const {x, y} = getAsteroidCoords();
            const asteroid = new Asteroid(x, y);
            asteroids.push(asteroid);
        };

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
            const size = el.isSmall ? 100 : 200;
            ctx.drawImage(aster, el.getPos().x, el.getPos().y, size, size);
            el.update();
        });
        explosions.forEach((el: any) => {
            const posX = el.isSmall ? el.x - 100 : el.x;
            const posY = el.isSmall ? el.y - 100 : el.y;
            ctx.drawImage(explosion, el.column * el.frameWidth + 17,
                el.row * el.frameHeight + 17,
                el.frameWidth, el.frameHeight, posX, posY, el.frameWidth/2, el.frameHeight/2);
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
        ctx.drawImage(spaceship, xMove, yMove, shipWith, shipHeight);
        // восстанавливаем канвас
        ctx.restore();
        ctx.fillStyle = 'white';
        ctx.font = '24px serif';

        ctx.beginPath();
        ctx.arc(xMove + shipWith/2 - bulletRadius/2 + 50*Math.sin((-angle - 50) * Math.PI / 180), yMove - bulletRadius/2 + shipHeight/2 + 50*Math.cos((-angle - 50) * Math.PI / 180), bulletRadius, 0, 2 * Math.PI);
        ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        const angRemainer = angle % 360;
        const angle2 =  angRemainer < 0 ? 360 +  angRemainer :  angRemainer;
        ctx.arc(xMove + shipWith/2 - bulletRadius/2 + 50*Math.sin((-angle + 50) * Math.PI / 180), yMove - bulletRadius/2 + shipHeight/2 + 50*Math.cos((-angle + 50) * Math.PI / 180), bulletRadius, 0, 2 * Math.PI);

        ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.closePath();
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
        canvas.addEventListener('click', getFullScreen);

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
