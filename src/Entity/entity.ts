class Entity {
  public image: p5.Image; // Behöver göra en import av p5 förs att kunna använda Image?
  public size: number;
  public x: number;
  public y: number;

  constructor(image: p5.Image, size: number, x: number, y: number) {
    this.image = image;
    this.size = size;
    this.x = x;
    this.y = y;
  }
  draw() {}
}