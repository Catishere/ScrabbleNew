import { Point } from "@angular/cdk/drag-drop";

type Position<T> = {
    pos: Point,
    data: T
};

export default Position;