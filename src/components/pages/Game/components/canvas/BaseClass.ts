class Base {
    y: number;
    x: number;
    visible: boolean;
    constructor(x: number,y: number) {
        this.x = x;
        this.y = y;
        this.visible = true;
    }
    getVisible() {
        return this.visible;
    }
    setVisible(value: boolean) {
        this.visible = value;
    }
    getPos() {
        return ({x: this.x, y: this.y});
    }
}

export default Base;