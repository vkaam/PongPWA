export class Ball {
    constructor(x, y, canvas, playingField) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.playingField = playingField
        this.x = x
        this.y = y
        this.width = 20
        this.height = 20
        this.direction = 180
        this.speed = 10
        this.renderBall()
        setInterval(this.updateLocation.bind(this), 10)
    }

    renderBall() {
        this.ctx.fillStyle = "white"
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, this.width, this.height)
        this.ctx.fill()
        this.ctx.closePath()
    }

    unrenderBall() {
        this.ctx.clearRect(this.x - 5, this.y - 5, this.width + 10, this.height + 10)
    }

    updateLocation() {
        this.unrenderBall()
        this.x = this.x + this.speed * Math.cos(this.direction * Math.PI / 180)
        this.y = this.y + this.speed * Math.sin(this.direction * Math.PI / 180)
        this.renderBall()
        dispatchEvent(new Event('locationUpdated'))
    }

    bounce(bounceAngleDegrees, speedQuantifier) {
        let bounceAnglePiRads = bounceAngleDegrees / 180
        let normalRads = (bounceAnglePiRads * Math.PI - Math.PI / 2)
        let directionRads = (this.direction * Math.PI) / 180
        let newDirectionRads = 2 * normalRads - Math.PI - directionRads
        this.direction = newDirectionRads * 180 / Math.PI
    }
}