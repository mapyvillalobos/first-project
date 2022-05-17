const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const mistyImg = ["../images/misty-1r.png", "../images/misty-2r.png", "../images/misty-jump-r.png"];

let frames = 0;
let hearts = 50;
const gravity = 0;
let requestId;
let music = false;

const mudPuddles = [];
const pointes = [];


//audio
const audio = new Audio()
audio.src = '../audio/Bizet_-_Habanera_Carmen_-_8-bit_Remix.mp3';
audio.loop = true;

// let mistyDefault = {
//     hearts : 50,
//     x : 150,
//     y : 250,
// }

