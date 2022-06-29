import React, { FC, useEffect, useRef } from 'react'
import spaceshipImg from 'static/images/buran.png'
import debrisImg from 'static/images/debris.png'
import bomb3Img from 'static/images/bomb3.png'
import explosionImg from 'static/images/exp.png'
import fireImg from 'static/images/fire.png'
import bulletImg from 'static/images/bullet.png'
import bulletImg2 from 'static/images/laser3.png'
import rocketBonusImg from 'static/images/bonuses/rocket.png'
import bombExp from 'static/images/bomb_spritesheet.png'
import asterImg from 'static/images/aster.png'
import endSoundFile from 'static/sounds/end.wav'
import fireSoundFile from 'static/sounds/fire.wav'
import expSoundFile from 'static/sounds/exp2.mp3'
import powerUpFile from 'static/sounds/powerUp.mp3'
import { getRandomArbitrary } from './utils'
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
} from './consts'
import Base from './BaseClass'


const playAudio = (src: any, volume?: number) => {
    const sound = new Audio(src)
    sound.volume = volume ? volume : 0.1
    sound?.play()
}

interface CanvasProps {
    setLives: (arg0: number) => void
    setScore: (arg0: number) => void
    isGameStart: boolean
    setIsGameStart: (arg0: boolean) => void
    getFullScreen: () => void
    width: number
    height: number
    resize: number
}

const CanvasComponent: FC<CanvasProps> = ({
    setLives,
    setScore,
    isGameStart,
    setIsGameStart,
    getFullScreen,
    width,
    height,
    resize,
}) => {
    const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>
    let canvas: any = {}
    let isLoaded = false
    const requestRef: any = React.useRef()
    let ctx: any
    const spaceship = typeof Image !== "undefined" ? new Image() : undefined
    const debris = typeof Image !== "undefined" ? new Image() : undefined
    const explosion = typeof Image !== "undefined" ? new Image() : undefined
    const fire = typeof Image !== "undefined" ? new Image() : undefined
    const bullet = typeof Image !== "undefined" ? new Image() : undefined
    const bullet2 = typeof Image !== "undefined" ? new Image() : undefined
    const rocketBonus = typeof Image !== "undefined" ? new Image() : undefined
    const bomb3 = typeof Image !== "undefined" ? new Image() : undefined
    const bombExplosion = typeof Image !== "undefined" ? new Image() : undefined
    const aster = typeof Image !== "undefined" ? new Image() : undefined

    // скорость кораблля
    let speed = 0
    // угол поворота корабля
    let angle = 0
    // положение корабля
    let xMove = 0
    let yMove = 0
    // стостояние кнопок
    let keyLeft = false
    let keyRight = false
    let keyUp = false
    let keyDown = false
    let keySpace = false
    let timestamp = 0
    let timestampAsteroid = 0
    let asteroidDelay = 0
    let count = 0
    let lives = 3
    let isGameEnd = false
    let isTripleFire = false

    let debrisX = 0
    let debrisY = 0
    let bullets: any = []
    let asteroids: any = []
    let explosions: any = []
    let bombs: any = []
    let bombExpArray: any = []
    let bonuses: any = []

    class Sprite extends Base {
        private timeLives: number
        row: number
        column: number
        currentFrame: number
        frameWidth: number
        frameHeight: number
        numColumns: number
        numRows: number
        isSmall: boolean
        isVisible: boolean
        timeCount: number
        type: string
        private tickSprite: number

        constructor(x: number, y: number, frameSize: number, cols = 1, rows = 1, timeCount?: number) {
            super(x, y)
            this.timeLives = 10
            // анимация взрыва
            this.row = 0
            this.column = 0
            this.currentFrame = 0
            this.frameWidth = frameSize
            this.frameHeight = frameSize
            this.numColumns = cols
            this.numRows = rows
            this.tickSprite = 0
            this.isVisible = true
            this.timeCount = timeCount
            this.type = ''
        }

        update() {
            this.tickSprite++
            if (this.tickSprite % 5 === 0) {
                this.currentFrame++
                let maxFrame = this.numColumns * this.numRows - 1
                if (this.currentFrame > maxFrame) {
                    this.timeLives = 0
                    this.currentFrame = 0
                    if (this.timeCount) {
                        this.timeCount = this.timeCount -= 1
                        this.isVisible = this.timeCount !== 0
                    }
                }
                // Update rows and columns
                this.column = this.currentFrame % this.numColumns
                this.row = Math.floor(this.currentFrame / this.numColumns)
            }
        }
    }

    class Explosion extends Base {
        private timeLives: number
        private row: number
        private column: number
        currentFrame: number
        frameWidth: number
        frameHeight: number
        numColumns: number
        numRows: number
        isSmall: boolean
        private tickExplosion: number

        constructor(x: number, y: number, isSmall: boolean) {
            super(x, y)
            this.isSmall = isSmall
            this.timeLives = 10
            // анимация взрыва
            this.row = 0
            this.column = 0
            this.currentFrame = 0
            this.frameWidth = 550
            this.frameHeight = 550
            this.numColumns = 10
            this.numRows = 1
            this.tickExplosion = 0
        }

        update() {
            this.tickExplosion++
            if (this.tickExplosion % 5 === 0) {
                this.currentFrame++
                let maxFrame = this.numColumns * this.numRows - 1
                if (this.currentFrame > maxFrame) {
                    this.timeLives = 0
                }
                // Update rows and columns
                this.column = this.currentFrame % this.numColumns
                this.row = Math.floor(this.currentFrame / this.numColumns)
            }
        }
    }

    class Asteroid extends Base {
        public speed: number
        private readonly angle: number
        private readonly angleIncreaseNum: number
        public radius: number
        public isSmall: boolean
        public rotateAngle: number

        constructor(x: number, y: number) {
            super(x, y)
            this.speed = asteroidSpeed
            this.angle = getRandomArbitrary(0, 360)
            this.radius = 50
            this.isSmall = false
            this.rotateAngle = 0
            this.angleIncreaseNum = getRandomArbitrary(1, 20)
        }

        update() {
            this.x += Math.cos((Math.PI / 180) * (this.angle - 90)) * this.speed
            this.y += Math.sin((Math.PI / 180) * (this.angle - 90)) * this.speed
            this.rotateAngle += (1 * this.angleIncreaseNum) / 20
            if (this.x > canvas.width) {
                this.x = 0 - this.radius / 2
            }
            if (this.x + this.radius / 2 < 0) {
                this.x = canvas.width - this.radius / 2
            }
            if (this.y > canvas.height) {
                this.y = 0 - this.radius / 2
            }
            if (this.y + this.radius - 2 < 0) {
                this.y = canvas.height - this.radius / 2
            }
        }

        getCenterX() {
            return this.x + this.radius * 2
        }

        getCenterY() {
            return this.y + this.radius * 2
        }
    }

    class Bullet extends Base {
        private angle: number
        private speed: number

        constructor(x: number, y: number, angle: number) {
            super(x, y)
            this.angle = angle
            this.speed = 20
        }

        update() {
            this.x += Math.cos((Math.PI / 180) * (this.angle - 90)) * this.speed
            this.y += Math.sin((Math.PI / 180) * (this.angle - 90)) * this.speed

            if (this.x > canvas.width || this.y > canvas.height) {
                this.visible = false
            }
        }
    }

    const fireShip = () => {
        const bullet = new Bullet(
            xMove + shipWith / 2 - bulletRadius / 2,
            yMove + shipHeight / 2 - bulletRadius / 2,
            angle,
        )
        bullets.push(bullet)

        if (isTripleFire) {
            const x1 = xMove + shipWith / 2 - bulletRadius / 2 + 50 * Math.sin(((-angle + 50) * Math.PI) / 180)
            const y1 = yMove - bulletRadius / 2 + shipHeight / 2 + 50 * Math.cos(((-angle + 50) * Math.PI) / 180)
            const x2 = xMove + shipWith / 2 - bulletRadius / 2 + 50 * Math.sin(((-angle - 50) * Math.PI) / 180)
            const y2 = yMove - bulletRadius / 2 + shipHeight / 2 + 50 * Math.cos(((-angle - 50) * Math.PI) / 180)
            const bullet1 = new Bullet(x1, y1, angle)
            const bullet2 = new Bullet(x2, y2, angle)
            bullets.push(bullet1)
            bullets.push(bullet2)
        }
        playAudio(fireSoundFile)
    }

    const updateShip = (time: number) => {
        // двигаем корабль
        if (keyRight) {
            angle += angleIncValue
        }
        if (keyLeft) {
            angle -= angleIncValue
        }
        if (keyDown) {
            speed -= speedIncValue
        }
        if (keyUp) {
            speed += speedIncValue
        }
        if (keySpace) {
            if (time - timestamp > shotDelay) {
                fireShip()
                timestamp = time
            }
        }
        speed = speed * speedInertion
        xMove += Math.cos((Math.PI / 180) * (angle - 90)) * speed
        yMove += Math.sin((Math.PI / 180) * (angle - 90)) * speed
        if (xMove > canvas.width) {
            xMove = 0 - shipWith / 2
        }
        if (xMove + shipWith / 2 < 0) {
            xMove = canvas.width - shipWith / 2
        }
        if (yMove > canvas.height) {
            yMove = 0 - shipHeight / 2
        }
        if (yMove + shipHeight - 2 < 0) {
            yMove = canvas.height - shipHeight / 2
        }
    }

    const checkCollision = () => {
        if (!isGameStart) {
            return
        }
        bombs.forEach((bomb: any) => {
            if (Math.abs(xMove + 50 - bomb.x - 30) < 50 && Math.abs(yMove + 50 - bomb.y - 30) < 50) {
                bomb.isVisible = false
                const bombExpObj = new Sprite(bomb.x + 20, bomb.y + 20, 810, 9, 1)
                bombExpArray.push(bombExpObj)
                playAudio(powerUpFile, 0.5)
                asteroids.forEach((asteroid: any) => {
                    asteroid.visible = false
                    const explosion = new Explosion(asteroid.x, asteroid.y, asteroid.isSmall)
                    explosions.push(explosion)
                    playAudio(expSoundFile)
                })
            }
        })

        bonuses.forEach((bonus: any) => {
            if (Math.abs(xMove + 50 - bonus.x - 30) < 50 && Math.abs(yMove + 50 - bonus.y - 30) < 50) {
                bonus.isVisible = false
                isTripleFire = true
                playAudio(powerUpFile, 1)
                setTimeout(() => {
                    isTripleFire = false
                }, 10000)
            }
        })
        asteroids.forEach((asteroid: any) => {
            bullets.forEach((bullet: any) => {
                if (
                    Math.abs(bullet.getPos().x + 1 - asteroid.getCenterX()) < asteroid.radius &&
                    Math.abs(bullet.getPos().y + 1 - asteroid.getCenterY()) < asteroid.radius
                ) {
                    bullet.visible = false
                    asteroid.visible = false
                    const explosion = new Explosion(asteroid.x, asteroid.y, asteroid.isSmall)

                    // появление новых астеройдов и бонусов
                    if (!asteroid.isSmall) {
                        const num = Math.ceil(getRandomArbitrary(0, 5))
                        if (num === 2) {
                            const bomb3Obj = new Sprite(asteroid.x + 50, asteroid.y + 50, 450, 10, 1, 5)
                            bombs.push(bomb3Obj)
                        }
                        if (num === 3) {
                            const rocketBonus = new Sprite(asteroid.x + 50, asteroid.y + 50, 450, 1, 1, 50)
                            rocketBonus.type = 'rocket'
                            bonuses.push(rocketBonus)
                        }

                        for (let i = 0; i < 3; i++) {
                            const smallAsteroid = new Asteroid(asteroid.x, asteroid.y)
                            smallAsteroid.speed = 3
                            smallAsteroid.radius = 25
                            smallAsteroid.isSmall = true
                            asteroids.push(smallAsteroid)
                        }
                    }
                    playAudio(expSoundFile)
                    explosions.push(explosion)
                    count += 1
                    setScore(count)
                }
            })
            if (
                Math.abs(xMove + 50 - asteroid.getCenterX()) < 70 &&
                Math.abs(yMove + 50 - asteroid.getCenterY()) < 70
            ) {
                asteroid.visible = false
                const explosion = new Explosion(asteroid.x, asteroid.y, asteroid.isSmall)
                explosions.push(explosion)
                playAudio(expSoundFile)
                lives -= 1
                setLives(lives)
                if (!lives) {
                    playAudio(endSoundFile)
                    isGameEnd = true
                    setIsGameStart(false)
                }
            }
        })
    }

    const getAsteroidCoords = (): any => {
        const random = timestampAsteroid % 2
        const offset = random ? -1 : 1

        const x: number = getRandomArbitrary(0, canvas.width) + canvas.width * offset
        const y: number = getRandomArbitrary(0, canvas.height) + canvas.height * offset
        return { x, y }
    }

    const fireObj = new Sprite(300, 300, 190, 10, 1)
    const bombObj = new Sprite(100, 100, 810, 9, 1)
    const updateScene = () => {
        // очищаем весь канвас перед перерисовкой
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // рисуем объект в новых кординатах
        // фон метеориты
        ctx.drawImage(debris, debrisX, debrisY)
        // добавляем астеройды
        if (timestampAsteroid - asteroidDelay > 1500) {
            asteroidDelay = timestampAsteroid
            const { x, y } = getAsteroidCoords()
            const asteroid = new Asteroid(x, y)
            asteroids.push(asteroid)
        }

        bullets = bullets.filter((el: any) => el.getVisible())
        bullets.forEach((el: any) => {
            const x = el.getPos().x + 25
            const y = el.getPos().y + 25
            ctx.translate(x, y)
            ctx.rotate((Math.PI / 180) * (el.angle - 90))
            ctx.translate(-x, -y)
            const image = isTripleFire ? bullet2 : bullet
            ctx.drawImage(image, el.getPos().x, el.getPos().y, 50, 50)
            ctx.setTransform(1, 0, 0, 1, 0, 0)
            el.update()
        })
        asteroids = asteroids.filter((el: any) => el.getVisible())
        explosions = explosions.filter((el: any) => el.timeLives > 0)
        bombs = bombs.filter((el: any) => el.isVisible)
        bonuses = bonuses.filter((el: any) => el.isVisible)
        bombExpArray = bombExpArray.filter((el: any) => el.timeLives > 0)
        checkCollision()

        bombs.forEach((bomb3Obj: any) => {
            ctx.drawImage(
                bomb3,
                bomb3Obj.column * bomb3Obj.frameWidth,
                bomb3Obj.row * bomb3Obj.frameHeight,
                bomb3Obj.frameWidth,
                bomb3Obj.frameHeight,
                bomb3Obj.x,
                bomb3Obj.y,
                bomb3Obj.frameWidth / 4,
                bomb3Obj.frameHeight / 4,
            )
            bomb3Obj.update()
        })

        bonuses.forEach((bonus: any) => {
            ctx.drawImage(rocketBonus, bonus.x, bonus.y, 70, 70)
            bonus.update()
        })
        asteroids.forEach((el: any) => {
            const size = el.isSmall ? 100 : 200

            ctx.translate(el.x + size / 2, el.y + size / 2)
            ctx.rotate((Math.PI / 180) * (el.rotateAngle + 90))
            ctx.translate(-el.x - size / 2, -el.y - size / 2)
            ctx.drawImage(aster, el.getPos().x, el.getPos().y, size, size)
            ctx.setTransform(1, 0, 0, 1, 0, 0)
            el.update()
        })
        explosions.forEach((el: any) => {
            const posX = el.isSmall ? el.x - 100 : el.x
            const posY = el.isSmall ? el.y - 100 : el.y
            ctx.drawImage(
                explosion,
                el.column * el.frameWidth + 17,
                el.row * el.frameHeight + 17,
                el.frameWidth,
                el.frameHeight,
                posX,
                posY,
                el.frameWidth / 2,
                el.frameHeight / 2,
            )
            el.update()
        })

        // взрывы бомб
        bombExpArray.forEach((el: any) => {
            ctx.drawImage(
                bombExplosion,
                el.column * el.frameWidth,
                el.row * el.frameHeight,
                el.frameWidth,
                el.frameHeight,
                el.x - 100,
                el.y - 100,
                el.frameWidth / 3,
                el.frameHeight / 3,
            )
            el.update()
        })

        // корабль
        // сохраняем канвас
        ctx.save()
        // переносим центр в центр корабля
        ctx.translate(xMove + shipWith / 2, yMove + shipHeight / 2)
        // поворачиваем корабль
        ctx.rotate((Math.PI / 180) * angle)
        // переносим центр обратно
        ctx.translate(-xMove - shipWith / 2, -yMove - shipHeight / 2)
        // отрисовываем корабль
        if (keyUp) {
            // отрисовывавем пламя двигателя
            ctx.drawImage(
                fire,
                fireObj.column * fireObj.frameWidth,
                fireObj.row * fireObj.frameHeight,
                fireObj.frameWidth,
                fireObj.frameHeight,
                xMove + 13,
                yMove + 95,
                fireObj.frameWidth / 4,
                fireObj.frameHeight / 4,
            )
            ctx.drawImage(
                fire,
                fireObj.column * fireObj.frameWidth,
                fireObj.row * fireObj.frameHeight,
                fireObj.frameWidth,
                fireObj.frameHeight,
                xMove + 26.5,
                yMove + 120,
                fireObj.frameWidth / 4,
                fireObj.frameHeight / 4,
            )
            ctx.drawImage(
                fire,
                fireObj.column * fireObj.frameWidth,
                fireObj.row * fireObj.frameHeight,
                fireObj.frameWidth,
                fireObj.frameHeight,
                xMove + 39,
                yMove + 95,
                fireObj.frameWidth / 4,
                fireObj.frameHeight / 4,
            )
        }
        fireObj.update()

        ctx.drawImage(spaceship, xMove, yMove, shipWith, shipHeight)

        // восстанавливаем канвас
        ctx.restore()
        ctx.fillStyle = 'white'
        ctx.font = '24px serif'
    }

    const loop = (time: number) => {
        timestampAsteroid = time

        // двигаем метеориты
        debrisX = (debrisX + 1) % canvas.width
        updateShip(time)
        updateScene()
        requestRef.current = requestAnimationFrame(loop)
    }
    // обработка кнопок
    const keySwitcher = (e: KeyboardEvent, state: boolean) => {
        switch (e.key) {
            //key A or LEFT
            case 'ArrowLeft':
            case 'a':
            case 'A':
                keyLeft = state
                break
            //key D or RIGHT
            case 'd':
            case 'D':
            case 'ArrowRight':
                keyRight = state
                break
            //key W or UP
            case 'w':
            case 'W':
            case 'ArrowUp':
                keyUp = state
                break
            //key S or DOWN
            case 's':
            case 'S':
            case 'ArrowDown':
                keyDown = state
                break
            //key Space
            case 'Space':
            case ' ':
                keySpace = state
                break
        }
        e.preventDefault()
    }
    // начать движение
    const keyDownHandler = (event: KeyboardEvent) => {
        keySwitcher(event, true)
    }

    // остановить движение
    const keyUpHandler = (event: KeyboardEvent) => {
        keySwitcher(event, false)
    }

    useEffect(() => {
        canvas = canvasRef.current
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px'
        canvas.width = width
        canvas.height = height
        ctx = canvas.getContext('2d')
        canvas.addEventListener('click', getFullScreen)
        debris.src = debrisImg
        spaceship.src = spaceshipImg
        explosion.src = explosionImg
        fire.src = fireImg
        bullet.src = bulletImg
        bullet2.src = bulletImg2
        rocketBonus.src = rocketBonusImg
        bomb3.src = bomb3Img
        bombExplosion.src = bombExp
        aster.src = asterImg

        const startAnimation = () => {
            isLoaded = true
            requestRef.current = requestAnimationFrame(loop)
            xMove = Math.floor(canvas.width / 2)
            yMove = Math.floor(canvas.height / 2)

            debrisY = canvas.height / 5
        }
        startAnimation()
        if (typeof window !== 'undefined') {
            if (isGameStart) {
                window.addEventListener('keydown', keyDownHandler)
                window.addEventListener('keyup', keyUpHandler)
            }

            return () => {
                cancelAnimationFrame(requestRef.current)
                window.removeEventListener('keydown', keyDownHandler)
                window.removeEventListener('keyup', keyUpHandler)
            }
        }
    }, [isGameStart, resize])

    return (
        <canvas
            ref={canvasRef}
            className={styles.gameCanvas}
        />
    )
}

export default CanvasComponent
