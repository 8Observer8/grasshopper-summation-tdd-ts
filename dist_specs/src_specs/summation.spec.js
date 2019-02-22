define(["require", "exports", "../src_client/summation"], function (require, exports, summation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('sumation', function () {
        it('test on 1', function () {
            expect(summation_1.summation(1)).toBe(1);
        });
        it('test on 2', function () {
            expect(summation_1.summation(2)).toBe(3);
        });
        it('test on 8', function () {
            expect(summation_1.summation(8)).toBe(36);
        });
    });
});
//# sourceMappingURL=summation.spec.js.map