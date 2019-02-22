define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/typescript
    // https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions/typescript
    // Playground: https://plnkr.co/edit/C3uSHvGcTubFXkZMsEdp
    exports.summation = function (num) {
        // throw new Error('The method or operation is not implemented.')
        var sum = 0;
        for (var i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
    };
});
//# sourceMappingURL=summation.js.map