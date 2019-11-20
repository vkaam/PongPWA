export class Player {
    constructor(type, x, canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.type = type
        this.height = 200
        this.width = 20
        this.x = x
        this.y = canvas.height / 2 - this.height / 2
        this.renderPlayer()
    }
    renderPlayer() {
        this.ctx.fillStyle = "white"
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, this.width, this.height)
        this.ctx.fill()
        this.ctx.closePath()
    }
    unrenderPlayer() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height)
    }
    updateLocation(y) {
        this.unrenderPlayer()
        this.y = y
        this.renderPlayer()
    }
}