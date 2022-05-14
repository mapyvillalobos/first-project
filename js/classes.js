//Background
class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "images/background-01.png";
  }
  draw() {
    if (this.x < -canvas.width) {
      this.x = 0;
    }
    this.x--;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.img,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

//Misty
class Misty {
  constructor(x, y, w, h, arrImg) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img1 = new Image();
    this.img1.src = arrImg[0];
    this.img2 = new Image();
    this.img2.src = arrImg[1];
    this.imgMain = this.img1;
    this.grav = 1;
    this.userPull = 0;
  }
  draw() {
    if (frames % 50 === 0) {
      this.imgMain = this.imgMain === this.img1 ? this.img2 : this.img1;
    }
    this.grav = this.grav + (gravity - this.userPull);

    if (this.y <= 0) {
      this.userPull = 0;
      this.y = 0;
      this.grav = 1;
    }

    if (this.y + this.height < canvas.height) {
      this.y += this.grav;
    }
    ctx.drawImage(this.imgMain, this.x, this.y, this.width, this.height);
  }

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }
}

//mud
class Mud {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = 350;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.img.src = "images/lodo-07.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
