'use strict';

class Grid {
  constructor() {
    this._x = null;
    this._y = null;
  }

  get x() {
    return this._x;
  }
  set x(x) {
    if (x < 1) throw new Error('Grid x axis out of bounds');
    this._x = x;
    return this.x;
  }

  get y() {
    return this._y;
  }
  set y(y) {
    if (y < 1) throw new Error('Grid y axis out of bounds');
    this._y = y;
    return this.y;
  }

  // return true if the given position (x,y) is on the grid, otherwise false
  isOn(x, y) {
    if (x >= 0 && x <= this._x &&
        y >= 0 && y <= this._y) {
      return true;
    }

    return false;
  }

  // returns true if known x & y
  get isValid() {
    return (this._x !== null) && (this._y !== null);
  }

  toString() {
    return {
      x: this._x,
      y: this._y
    };
  }
};

module.exports = Grid;
