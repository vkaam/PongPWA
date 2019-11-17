import { Player } from "./Player";


export class PlayingField {
    constructor(height, width, ctx) {
        this.height = height
        this.width = width
        this.ctx = ctx
        this.scorePlayer = 0
        this.scoreComputer = 0
        this.computerPlayer = new Player("computer", width / 2 - 50)
        this.realPlayer = new Player("real", 50)
        this.drawMiddleLine()
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
}