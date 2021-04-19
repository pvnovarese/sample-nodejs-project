import { expect } from 'chai';
import { subtract } from '../../src/index';

describe('#subtract', () => {
  it('returns the subtraction of two positive integers', () => {
    expect(subtract(1, 3)).to.equal(-2);
  });
});
