window.onload = function () {
  const back = new Background();
  const misty = new Misty(150, 250, 150, 150, mistyImg);
  const heart = new Heart (canvas.width - 200, 20, 80, 80);
  const gameOverImg = new GameOverImg (371, 112, 458,176)
  // document.getElementById("start-button").onclick = function () {
  //   if (!requestId) {
    startGame();
  //   }
  // };

  function startGame() {
    updateGame();
    audio.play();
    requestId = requestAnimationFrame(updateGame);
  }

  function gameOver(){
    gameOverImg.draw();
    audio.pause();
    music = false;
    requestId = undefined;
  }

  // function resetGame() {
  //   misty.x = mistyDefault.x;
  //   misty.y = mistyDefault.y;
  //   hearts = mistyDefault.hearts;
  //   if (!requestId) {
  //     startGame();
  //   }
  // }

  function updateGame() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    back.draw();
    misty.draw();
    generateMud();
    drawMud();
    generatePointes();
    drawPointes();
    heart.draw();
    ctx.font = '20px Mali';
    ctx.fillText(`${hearts}`, canvas.width - 175, 60);
    
    
    if (hearts <= 0)
    gameOver();
    if (requestId) {
      requestAnimationFrame(updateGame);
    }
  }


  function generateMud() {
    if (frames % 300 === 0) {
      let x = Math.floor(Math.random() * canvas.width * 0.7) + 10;
      const mud = new Mud(x, 300, 100, 100);
      mudPuddles.push(mud);
    }
  }

  function drawMud() {
    mudPuddles.forEach((mud, index_mud) => {
      if (mud.x + mud.width <= 0) {
        mudPuddles.splice(index_mud, 1);
      }
      mud.draw();
      let cleanMud = mud.cleanMud(() => {
        mudPuddles.splice(index_mud, 1)
        clearTimeout(cleanMud);
      });

      if (misty.collision(mud)) {
        hearts -= 10;
        mudPuddles.splice(index_mud, 1);
        clearTimeout(cleanMud);
      }
    });
  }

  function generatePointes() {
    if (frames % 500 === 0) {
      let x = Math.floor(Math.random() * canvas.width * 0.5) + 80;
      const pointe = new Pointe(x, 50, 100, 100);
      pointes.push(pointe);
    }
  }

  function drawPointes() {
    pointes.forEach((pointe, index_pointe) => {
      if (pointe.x + pointe.width <= 0) {
        pointes.splice(index_pointe, 1);
        clearTimeout(cleanPointes);
      }
      pointe.draw();
      let cleanPointes = pointe.cleanPointe(() => {
        pointes.splice(index_pointe, 1)
        clearTimeout(cleanPointes);
      });

      if (misty.collision(pointe)) {
  pointes.splice(index_pointe, 1);
        hearts += 20;
        clearTimeout(cleanPointes);
      }
    });
  }

  addEventListener("keydown", (event) => {
    event.preventDefault();
    //izq
    if (event.keyCode === 37) {
      misty.x -= 20;
    }

    //dere
    if (event.keyCode === 39) {
      misty.x += 20;

      if(!music){
        audio.play()
        music = true;
      }
    }

    //salto
    if (event.keyCode === 38) {
      misty.y -= 60;
      misty.userpull = 0.2;
      misty.isJump = true;
    }
  });

  addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.keyCode === 38) {
      misty.userPull = 0;
    }
  });
};
