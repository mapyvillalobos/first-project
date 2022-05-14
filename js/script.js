window.onload = function () {
  const back = new Background();
  const misty = new Misty(150, 250, 200, 200, mistyImg);
  document.getElementById("start-button").onclick = function () {
    if (!requestId) {
      startGame();
    }
  };

  function startGame() {
    updateGame();
    //audio.play();
    requestId = requestAnimationFrame(updateGame);
  }

  function updateGame() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    back.draw();
    misty.draw();
    generateMud();
    drawMud();
    if (requestId) {
      requestAnimationFrame(updateGame);

    }
  }
  function generateMud() {
    if (frames % 300 === 0) {
      let x = Math.floor(Math.random() * canvas.width * 0.7) + 10;
      const mud = new Mud(
        x,
        300,
        100,
        100,
      )
      mudPuddles.push(mud);
    }
    console.log('mud')
  }

  function drawMud() {
    mudPuddles.forEach((mud, index_mud) => {
      if (mud.x + mud.width <= 0){
        mud.splice(index_mud, 1);
      }
      mud.draw();

      if (misty.collision(mud)) {
        console.log("ya me cai");
        requestId = undefined;
        //bg.gameOver()
      }
    });
  }


  addEventListener("keydown",(event)=>{
    event.preventDefault();
    //izq
    if(event.keyCode === 37 ){
        misty.x -= 20;
    }
  
    //dere
    if(event.keyCode === 39){
        misty.x += 20;
    }
  
    //salto
    if(event.keyCode === 38){
        misty.y -= 60;
        misty.userpull = 0.2;
    }
  });

  addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.keyCode === 38) {
      misty.userPull = 0;
    }
  });
};


