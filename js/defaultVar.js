const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const mistyImg = ["images/Misty-04.png", "images/Misty-05.png"];

let frames = 0;
const gravity = 0;
let requestId;

const mudPuddles = [];
// //audio
// const audio = new Audio()
// audio.src = "
// audio.loop = true

