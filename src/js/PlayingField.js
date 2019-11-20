import { Player } from "./Player";
import { Ball } from "./Ball";


export class PlayingField {
    constructor(canvas) {
        this.canvas = canvas
        this.height = canvas.height
        this.width = canvas.width
        this.ctx = canvas.getContext("2d")
        this.scorePlayer = 0
        this.scoreComputer = 0
        this.computerPlayer = new Player("computer", this.width - 70, this.canvas)
        this.realPlayer = new Player("real", 50, this.canvas)
        this.drawMiddleLine()
        this.ball = new Ball(200, 200, this.canvas)
        addEventListener('locationUpdated', this.checkCollisions.bind(this))
    }

    drawMiddleLine() {
        this.ctx.beginPath();
        this.ctx.setLineDash([this.height / 50, this.height / 50])
        this.ctx.moveTo(this.width / 2, 0)
        this.ctx.lineWidth = this.height / 150;
        this.ctx.lineTo(this.width / 2, this.height)
        this.ctx.strokeStyle = "white"
        this.ctx.stroke()
        this.ctx.closePath()
    }

    checkCollisions() {
        this.checkCollisionPlayer(this.realPlayer)
        this.checkCollisionPlayer(this.computerPlayer)
        this.checkCollisionSideWalls()
    }

    checkCollisionPlayer(player) {
        if ((this.x + this.widht >= player.x && this.x <= player.x + player.width) && (this.y + this.height >= player.y && this.x <= player.x + player.height)) {
            // this.ball.bounce()
            this.ball.bounce(90)
        }
    }

    checkCollisionSideWalls() {

        // console.log(this.width)
        // console.log(this.ball.x)
        if (this.ball.x <= 0) {
            // this.ball.bounce(0.5)
            this.ball.bounce(90)
        }

        if ((this.ball.x + this.ball.width) >= this.width) {
            this.ball.bounce(90)
        }
    }
}