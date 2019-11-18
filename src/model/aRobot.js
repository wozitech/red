class Robot {
  // A robot is constrained by grid - throws error on construction if not on the grid
  constructor(grid, x, y, orientiation) {
    // initialise with 
    if (!grid || !grid.isValid) {
      throw new Error('Invalid grid');
    }
    this._grid = grid;

    // initialise starting position
    this._validatePosition(x, y, orientiation);
    this._startingPosition = {
      x,
      y,
      o: orientiation
    };
  }

  _validateX(x) {
    if (x<0) throw new Error('Robot x position out of bounds');
  }
  _validateY(y) {
    if (y<0) throw new Error('Robot y position out of bounds');
  }
  _validateOrientiation(orientiation) {
    if (!['N', 'E', 'S', 'W'].includes(orientiation)) throw new Error('Robot orientiation out of bounds');
  }

  _validdateAgainstGrid(x,y) {
    if (!this._grid.isOn(x,y)) throw new Error('Robot position out of grid bounds');
  }

  _validatePosition(x, y, orientiation) {
    this._validateX(x);
    this._validateY(y);
    this._validateOrientiation(orientiation);
    this._validdateAgainstGrid(x, y, orientiation);
  }

  get startingPosition() {
    return this._startingPosition;
  }

};

module.exports = Robot;