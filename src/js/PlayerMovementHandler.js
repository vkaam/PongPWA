
export class PlayerMovementHandler {
    constructor(player, canvas) {
        this.player = player
        this.canvas = canvas
        this.yVelocity = 0
        this.keyUpPressed = false
        this.keyDownPressed = false
        // canvas.addEventListener("mousemove", this.handleMouseLocationUpdate.bind(this))
        // canvas.addEventListener("touchmove", this.handleTouchLocationUpdate.bind(this))
        window.addEventListener("keydown", this.handleKeyDown.bind(this))
        window.addEventListener("keyup", this.handleKeyUp.bind(this))
    }

    handleTouchLocationUpdate(e) {
        this.handleMouseLocationUpdate(e.touches[0])
    }

    handleMouseLocationUpdate(e) {
        // console.log(e.clientY)
        this.player.updateLocation(e.clientY * 2)
    }

    handleKeyDown(e) {
        e = e || window.event;

        if (e.keyCode == '38') {
            this.yVelocity -= .5
        }
        else if (e.keyCode == '40') {
            this.yVelocity += .5
        }
        let newLocation = this.player.y + 10 * this.yVelocity
        this.player.updateLocation(newLocation)
        e.preventDefault()
    }

    handleKeyUp(e) {
        e = e || window.event;

        if (e.keyCode == '38') {
            this.keyUpPressed = false
        }
        else if (e.keyCode == '40') {
            this.this.keyDownPressed = false
        }
        this.yVelocity = 0
        e.preventDefault()
    }
}