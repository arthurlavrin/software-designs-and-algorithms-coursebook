import { Shape } from "./Shape";
import { Point } from "./Point";
import {Shapes} from "./interfaces";

export class Triangle extends Shape {
  constructor(v1: Point, v2: Point, v3: Point, color?: string, filled?: boolean) {
    super([v1, v2, v3], color, filled);
  }

  getType(): Shapes {
    const [v1Distance, v2Distance, v3Distance] = this.points;

    const side1 = v1Distance.distance(v2Distance).toFixed(2);
    const side2 = v2Distance.distance(v3Distance).toFixed(2);
    const side3 = v3Distance.distance(v1Distance).toFixed(2);

    if (side1 === side2 && side2 === side3) {
      return Shapes.EQUILATERAL_TRIANGLE;
    }
    if (side1 === side2 || side2 === side3 || side1 === side3) {
      return Shapes.ISOSCELES_TRIANGLE;
    }
    return Shapes.SCALENE_TRIANGLE;
  }

  toString(): string {
    return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
  }
}
