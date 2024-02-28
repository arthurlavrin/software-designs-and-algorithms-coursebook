import { Point } from "./Point";
import {Shapes} from "./interfaces";

export abstract class Shape {
  abstract getType(): Shapes;

  constructor(public points: Point[], protected color = "green", protected filled = true) {
    if (this.points.length < 3) {
      throw Error();
    }
  }

  public toString() {
    return `A Shape with color of ${this.color} and ${this.filled ? "filled" : "not filled"}. Points:${this.points.map(
      (point) => " " + point.toString()
    )}.`;
  }

  public getPerimeter(): number {
    return this.points.reduce((acc, point, i) => {
      const nextPoint = i === this.points.length - 1 ? this.points[0] : this.points[i + 1];
      return acc + point.distance(nextPoint);
    }, 0);
  }
}