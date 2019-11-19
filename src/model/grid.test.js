'use strict';

const Grid = require('./grid');

global.console = {
  error: jest.fn(),
  warn: jest.fn(),
  log: jest.fn()
};

describe('Grid Awareness', () => {
  beforeAll(() => {});
  beforeEach(() => {});

  it('should have X and Y', () => {
    const newGrid = new Grid();
    newGrid.x = 4;
    newGrid.y = 10;

    expect(newGrid.x).toBe(4);
    expect(newGrid.y).toBe(10);
  });

  it('should fail if X is negative', () => {
    const newGrid = new Grid();

    expect(() => {
      newGrid.x = 0;
    }).toThrow(Error);
  });

  it('should fail if Y is negative', () => {
    const newGrid = new Grid();

    expect(() => {
      newGrid.y = 0;
    }).toThrow(Error);
  });

  it('should fail if not valid', () => {
    const newGridX = new Grid();
    const newGridY = new Grid();
    expect(newGridX.isValid).toBe(false);
    expect(newGridY.isValid).toBe(false);

    newGridX.x = 4;
    expect(newGridX.isValid).toBe(false);
    newGridX.y = 4;
    expect(newGridX.isValid).toBe(true);

    newGridY.y = 4;
    expect(newGridY.isValid).toBe(false);
    newGridY.x = 4;
    expect(newGridY.isValid).toBe(true);
  });
});

describe('Grid Placement', () => {
  let newGrid;
  beforeAll(() => {
    newGrid = new Grid();
    newGrid.x = 4;
    newGrid.y = 4;
  });

  // tests the grid boundaries for a given position to whether it is on or off grid
  it('should be on grid', () => {
    expect(newGrid.isOn(2, 2)).toBe(true);

    // valid boundaries
    expect(newGrid.isOn(0, 4)).toBe(true);
    expect(newGrid.isOn(0, 0)).toBe(true);
    expect(newGrid.isOn(4, 0)).toBe(true);
    expect(newGrid.isOn(4, 4)).toBe(true);
  });

  it('should be off top off grid', () => {
    expect(newGrid.isOn(0, 5)).toBe(false);
  });

  it('should be off left off grid', () => {
    expect(newGrid.isOn(-1, 4)).toBe(false);
  });

  it('should be off right off grid', () => {
    expect(newGrid.isOn(5, 4)).toBe(false);
  });

  it('should be off bottom off grid', () => {
    expect(newGrid.isOn(4, -1)).toBe(false);
  });
});
