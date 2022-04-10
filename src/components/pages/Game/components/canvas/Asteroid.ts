import { asteroidSpeed } from './consts';
import { getRandomArbitrary } from './utils';
import React from 'react';

class Asteroid {
    private readonly random: number;
    private readonly offset: number;
    private x: any;
    private y: any;
    private readonly speed: any;
    private readonly angle: any;
    private readonly radius: number;
    private visible: boolean;
    private canvas: any;
    constructor(timestampAsteroid: number, canvas: React.RefObject<HTMLInputElement>) {
        this.random = timestampAsteroid % 2;
        this.offset = this.random ? -1 : 1;
        if (canvas.current) {
            this.x = getRandomArbitrary(0, canvas.current.width) + canvas.current.width * this.offset;
            this.y = getRandomArbitrary(0, canvas.current.height) + canvas.current.height * this.offset;
        }
        this.speed = asteroidSpeed;
        this.angle = getRandomArbitrary(0, 360);
        this.radius = 50;
        this.visible = true;
        this.canvas = canvas.current;
    }
    update() {
        this.x += Math.cos((Math.PI / 180) * (this.angle - 90)) * this.speed;
        this.y += Math.sin((Math.PI / 180) * (this.angle - 90)) * this.speed;
        if (this.x > this.canvas.current.width) {
            this.x = 0 - this.radius / 2;
        }
        if (this.x + this.radius / 2 < 0) {
            this.x = this.canvas.current.width - this.radius / 2;
        }
        if (this.y > this.canvas.current.height) {
            this.y = 0 - this.radius / 2;
        }
        if (this.y + this.radius - 2 < 0) {
            this.y = this.canvas.current.height - this.radius / 2;
        }
    }
    getPos() {
        return { x: this.x, y: this.y };
    }
    getVisible() {
        return this.visible;
    }
    getCenterX() {
        return this.x + 100;
    }
    getCenterY() {
        return this.y + 100;
    }
    setVisible(value: boolean) {
        this.visible = value;
    }
}

export default Asteroid;
