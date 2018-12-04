// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/typescript
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions/typescript
// Playground: https://plnkr.co/edit/C3uSHvGcTubFXkZMsEdp
export const summation = (num: number) =>
{
    // throw new Error('The method or operation is not implemented.')
    let sum = 0;
    for (let i = 1; i <= num; i++)
    {
        sum += i;
    }
    return sum;
}