import { expect } from 'chai';
import Operations from '../../src/operations';

describe('#sum', () => {
  it('returns the sum of two positive integers', () => {
    expect(Operations.sum(1, 3)).to.equal(4);
  });
});
