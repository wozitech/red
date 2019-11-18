const Grid = require('./grid');
const Robot = require('./aRobot');

global.console = {
  error: jest.fn(),
  warn: jest.fn(),
  log: jest.fn()
};

describe('Robot Awareness', () => {
  let newGrid;
  beforeAll (() => {
    newGrid = new Grid();
    newGrid.x = 4;
    newGrid.y = 4;
  });
  beforeEach (() => {});

  it ('should have starting position', () => {
    // missing grid
    expect(() => {
      const newRobot = new Robot(null, 1,1,'N');
    }).toThrow(Error('Invalid grid'));

    // starting x out of bounds
    expect(() => {
      const newRobot = new Robot(newGrid,-1,1,'N');
    }).toThrow(Error('Robot x position out of bounds'));
    expect(() => {
      const newRobot = new Robot(newGrid,5,1,'N');
    }).toThrow(Error('Robot position out of grid bounds'));

    // starting y out of bounds
    expect(() => {
      const newRobot = new Robot(newGrid,1,-1,'N');
    }).toThrow(Error('Robot y position out of bounds'));
    expect(() => {
      const newRobot = new Robot(newGrid,1,5,'N');
    }).toThrow(Error('Robot position out of grid bounds'));

    // starting orientation out of bounds
    expect(() => {
      const newRobot = new Robot(newGrid,1,1,'L');
    }).toThrow(Error('Robot orientiation out of bounds'));
    
    // good initialisation
    let newRobot = null;
    expect(() => {
      newRobot = new Robot(newGrid,1,3,'N');
    }).not.toThrow();
    expect(newRobot.startingPosition.x).toBe(3);
    expect(newRobot.startingPosition.y).toBe(3);
    expect(newRobot.startingPosition.o).toBe('N');

  });

  it ('should have current position', () => {
  });

  it ("should have last position", () => {
  });

  it ("should have scent position", () => {
  });
});

describe('Robot Orientiation', () => {
  beforeAll (() => {});
  beforeEach (() => {});

  it ('should face north', () => {
  });

  it ('should face east', () => {
  });

  it ('should face south', () => {
  });

  it ('should face west', () => {
  });
});

describe('Robot Movement', () => {
  beforeAll (() => {});
  beforeEach (() => {});

  it ('should move north', () => {
  });

  it ('should move east', () => {
  });

  it ('should move south', () => {
  });

  it ('should move west', () => {
  });
});
