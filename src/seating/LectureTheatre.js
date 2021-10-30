import Aisle from "./aisle";
import Door from "./Door";
import Seat from "./Seat";

export default class LectureTheatre {
  constructor(plan) {
    this.grid = [];
    this.plan = plan;
    this.initialiseGrid();
  }

  initialiseGrid() {
    for (let i in this.plan) {
      let row = this.plan[i];
      let rowBlocks = [];

      for (let j in row) {
        let c = row[j];

        switch (c) {
          case "S":
            rowBlocks.push(new Seat(i, j));
            break;
          case "A":
            rowBlocks.push(new Aisle(i, j));
            break;
          case "D":
            rowBlocks.push(new Door(i, j));
            break;
        }
      }
      this.grid.push(rowBlocks);
    }
  }

  toString() {
    return this.grid
      .map((row) => row.map((obj) => obj.toString()).join(" "))
      .join("\n");
  }
}
