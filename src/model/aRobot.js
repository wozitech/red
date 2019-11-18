const ORIENTATION = ['N', 'E', 'S', 'W'];

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

    // when initialising a robot, the current position is the same as the starting position
    this._currentPosition = this._startingPosition;

    // last position is where the Robot ended up
    this._lastPosition = null;

    // scent is only applied if the Robot drops off the grid
    this._scent = null;
  }

  _validateX(x) {
    if (x<0) throw new Error('Robot x position out of bounds');
  }
  _validateY(y) {
    if (y<0) throw new Error('Robot y position out of bounds');
  }
  _validateOrientiation(orientiation) {
    if (!ORIENTATION.includes(orientiation)) throw new Error('Robot orientiation out of bounds');
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
  get currentPosition() {
    return this._currentPosition;
  }
  get lastPosition() {
    return this._lastPosition;
  }
  get scent() {
    return this._scent;
  }

  // move this robot - a single instruction to either rotate "L" (left), "R" (right) or "F" (forward)
  // returns true on success, false on failure to move
  move(instruction) {
    if (!['L', 'R', 'F'].includes(instruction)) throw new Error('Unexpected move command');

    const targetPosition = this._currentPosition;

    switch (instruction) {
      case 'L':
        // to rotate left (anti-clockwise - step back in the ORIENTIATION array
        //    can't use "%" because it does not work on negative indexes
        let nextIndex = ORIENTATION.indexOf(targetPosition.o) - 1;
        if (nextIndex < 0) nextIndex = ORIENTATION.length - 1;
        targetPosition.o = ORIENTATION[nextIndex];
        break;
      case 'R':
        // to rotate left (anti-clockwise - step forward in the ORIENTIATION array
        targetPosition.o = ORIENTATION[(ORIENTATION.indexOf(targetPosition.o) + 1) % ORIENTATION.length];
        break;
      case 'F':
        // the orientiation determines the target position when forwarding one step
        switch (targetPosition.o) {
          case 'N':
            // facing north, step up one
            targetPosition.y++;
            break;
          case 'E':
            // facing east, step right one
            targetPosition.x++;
            break;
          case 'S':
            // facing south, step down one
            targetPosition.y--;
            break;
          case 'W':
            // facing west, step left one
            targetPosition.x--;
            break;
        }
        break;
    }

    // if the target position is not on grid, then hold scent
    if (!this._grid.isOn(targetPosition.x, targetPosition.y)) {
      this._lastPosition = this._currentPosition;
      this._scent = targetPosition;
      return false;
    }

    // the target position remains on grid, the move is successful
    this._currentPosition = targetPosition;
    return true;
  }
};

module.exports = Robot;