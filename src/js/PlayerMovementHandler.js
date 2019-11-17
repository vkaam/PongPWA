
export class PlayerMovementHandler {
    constructor(player, canvas) {
        this.player = player;
        this.canvas = canvas;
        canvas.addEventListener("mousemove", this.updateMouseLocation.bind(this))
        canvas.addEventListener("touchmove", this.updateTouchLocation.bind(this))
    }

    updateTouchLocation(e) {
        this.updateMouseLocation(e.touches[0])
    }

    updateMouseLocation(e) {
        // console.log(e.clientY)
        this.player.updateLocation(e.clientY * 2)
    }
}