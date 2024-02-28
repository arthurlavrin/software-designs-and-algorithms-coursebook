export class Point {
  constructor();
  constructor(x: number, y: number)
  constructor(public x: number = 0, public y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;

  public distance(other?: Point | number, y?: number) {
    if (typeof other === "number" && typeof y === 'number') {
      return Math.sqrt(Math.pow(other - this.x, 2) + Math.pow(y - this.y, 2));
    } else if (other instanceof Point) {
      return Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));
    }
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
