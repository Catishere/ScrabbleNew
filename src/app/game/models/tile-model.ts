import { Point } from '@angular/cdk/drag-drop';
import { TileType } from './../tile/tile-type.enum';
export class TileModel {
    public type: TileType = TileType.NM;
    public displayString: String = "";
    public pos: Point = {x: 0, y: 0};
}
