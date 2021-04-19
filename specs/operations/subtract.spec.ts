import { expect } from 'chai';
import Operations from '../../src/operations';

describe('#subtract', () => {
  it('returns the subtraction of two positive integers', () => {
    expect(Operations.subtract(1, 3)).to.equal(-2);
  });
});
