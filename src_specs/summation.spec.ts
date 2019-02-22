import { summation } from '../src_client/summation';

describe('sumation', () =>
{
    it('test on 1', () =>
    {
        expect(summation(1)).toBe(1);
    });

    it('test on 2', () =>
    {
        expect(summation(2)).toBe(3);
    });

    it('test on 8', () =>
    {
        expect(summation(8)).toBe(36);
    });
});
