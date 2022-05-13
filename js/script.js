window.onload = function () {
    const back = new Background();
    const misty = new Misty(mistyImg, 200, 200, 100,100);
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
        if (requestId){
            requestAnimationFrame(updateGame);
        }
    }
    };

  