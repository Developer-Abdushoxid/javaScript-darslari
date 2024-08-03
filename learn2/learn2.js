// factorial hisoblash

// function factorial(num) {
//     if(num === 0){
//       return 1;
//     }
//     return num * factorial(num -1)
//   }
//   console.log(factorial(5));

// bu loop yordamida :
// function sumRange (num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(sumRange(10))


// bu rekusiya yordamida :
function sumRange(n) {
    if (n == 1) {
        return 1
    }
    return n + sumRange(n - 1)
}
console.log(sumRange(10))