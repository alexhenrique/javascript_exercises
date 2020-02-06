//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

// const binaryArrayToNumber = arr => {
//     let total = 0;
//     for (let i = arr.length - 1, pos = 0; i != -1; i--, pos++) {
//         if (arr[pos]) {
//             total += 2 ** i;
//         }
//     }
//     return total;
// };

const binaryArrayToNumber = arr => {
    let total = 0; for (let i = arr.length - 1, pos = 0; i != -1; i--, pos++) {
        if (arr[pos]) {
            total += 2 ** i
        }
    }
    return total
}

// console.log(binaryArrayToNumber([0, 0, 0, 1]))//, 1);
// console.log(binaryArrayToNumber([0, 0, 1, 0]))//, 2);
// console.log(binaryArrayToNumber([1, 1, 1, 1, 0, 1]))//, 15);
// console.log(binaryArrayToNumber([0, 1, 1, 0, 1]))//, 6);
console.log(binaryArrayToNumber([1, 1, 1, 1, 1, 1, 1, 0]));