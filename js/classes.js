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
  constructor() {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img1 = new Image();
    this.image1.src = arrImg[0];
    this.image2 = new Image();
    this.image2.src = arrImg[1];
    this.imageMain = this.image1;
  }
  draw() {
    if (frames % 10 === 0) {
        this.imageMain =
        this.imageMain === this.image1 ? this.image2 : this.image1;
    }
    ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
  }
}
