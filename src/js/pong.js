import { Player } from './Player';
import { PlayerMovementHandler } from './PlayerMovementHandler';
import { PlayingField } from './PlayingField'

let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
let menu = document.getElementById("menu")
let canvasWrapper = document.getElementById("canvas-wrapper");


window.addEventListener('load', showMenu);


function showMenu() {
    menu.style.width = "100%"
}

function hideMenu() {
    menu.style.height = "0"
}

document.getElementById("start-game-button").onclick = function () {
    hideMenu()
    initialiseGame()
}



function startGame() {

}

function initialiseGame() {
    fix_dpi()
    // let player = new Player("real", 50)
    let playingField = new PlayingField(canvas.height, canvas.width, ctx)
    let playerMovementHandler = new PlayerMovementHandler(playingField.realPlayer, canvas)
}



function startCountDown() {

}

let dpi = window.devicePixelRatio;

function fix_dpi() {
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
}

