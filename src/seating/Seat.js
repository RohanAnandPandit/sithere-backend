import Block from "./Block";

export default class Seat extends Block {
  constructor(row, column, occupant = null) {
    super();
    this.row = row;
    this.column = column;
    this.occupant = null;
    this.available = true;
  }

  setOccupant(occupant) {
    this.occupant = occupant;
  }

  toString() {
    return `|${this.occupant ? occupat.toString() : "_"}|`;
  }
}
