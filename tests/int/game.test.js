'use strict';

global.console = {
  error: jest.fn(),
  warn: jest.fn(),
  log: jest.fn()
};

describe('It\'s A Good Game', () => {
  beforeAll(() => {});
  beforeEach(() => {});

  it('should initialise the game with grid', () => {
  });

  it('should initialise a robot', () => {
  });
  it('should move a robot', () => {
  });

  it('should initialise a second robot', () => {
  });
  it('should move a second robot off grid', () => {
  });

  it('should initialise a third robot', () => {
  });
  it('should move a third robot', () => {
  });


  it('should initialise a fourth robot', () => {
  });
  it('should move a fourth robot, off grid with scent', () => {
  });
});

describe('It\'s A Bad Game', () => {
  beforeAll(() => {});
  beforeEach(() => {});

  it('should fail to initialise robot with no grid', () => {
  });
  it('should fail to initialise a robot with starting position outside of grid', () => {
  });

});
