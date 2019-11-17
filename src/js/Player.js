let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");

export class Player {
    constructor(type, x) {
        this.type = type
        this.height = 200
        this.width = 20
        this.x = x
        this.y = canvas.height / 2 - this.height / 2
        this.renderPlayer()
    }
    renderPlayer() {
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fill()
        ctx.closePath()
    }
    unrenderPlayer() {
        ctx.clearRect(this.x, this.y, this.width, this.height)
    }
    updateLocation(y) {
        this.unrenderPlayer()
        this.y = y
        this.renderPlayer()
    }
}