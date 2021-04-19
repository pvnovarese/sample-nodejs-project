import { expect } from 'chai';
import { sum } from '../../src/index';

describe('#sum', () => {
  it('returns the sum of two positive integers', () => {
    expect(sum(1, 3)).to.equal(4);
  });
});
