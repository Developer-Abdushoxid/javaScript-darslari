
// const first = (array, n) => {
//     // Check if the input array is null, return undefined if true
//     if (array == null)
//       return undefined;
  
//     // Check if the value of n is null, return the first element of the array if true
//     if (n == null)
//       return array[0];
  
//     // Check if the value of n is negative, return an empty array if true
//     if (n < 0)
//       return [];
  
//     // Use the slice method to get the first n elements of the array
//     return array.slice(0, n);
//   };
  
  // Testing the function with constious cases
//   console.log(first([7]))

// const last =  function(array, n) {
//     if (array == null) 
//       return void 0;
//     if (n == null) 
//        return array[array.length - 1];
//     return array.slice(Math.max(array.length - n, 0));  
//     };
  
//   console.log(last([7, 9, 0, -2],4));
//   console.log(last([7, 9, 0, -2],3));


//   const myColor = ["Red", "Green", "White", "Black"];
//   console.log(myColor.toString());
//   console.log(myColor.join());
//   console.log(myColor.join('+'));

// const num = prompt();
// const str = num.toString();
// const result = [str[0]];
  
// for(let x = 1; x < str.length; x++)
//   {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//      {
//       result.push('-', str[x]);
//      }
//     else
//      {
//       result.push(str[x]);
//      }
//   }
// console.log(result.join(''));




// const second = function(arr, x) {
//     if (arr == null) 
//         return void 0;
//         if(x == null) 
//             return arr[0];
//             if(x < 0)
//                 return [];
//             return arr.slice(0,x)
//         };

//         console.log(second([1,2,4]))
//         console.log(second(2))

//  MASSIV NING OXIRGI QATORINI CHIQARISH
        // const third = function(arr, b) {
        //     if(arr == null)
        //         return void 0;
        //     if(b == null)
        //         return arr[arr.length -1]
        //     return arr.slice(arr.length - 1, 0)
        // }
        // console.log(third([1,2,6,3]))
   

        // katta harflarni kichik , kichik harflarni katta qiladigan dastur:

        // function toggleCase(str) {
        //     let result = '';

        //     for (let i = 0; i < str.length; i++) {
        //         let char = str[i];

        //         if (char === char.toUpperCase()){
        //             result += char.toLowerCase();
        //         }else {
        //             result += char.toUpperCase();
        //         }
        //     }
        //     return result;
        // }

        // let word = 'SaLoM'
        // let result = toggleCase(word);
        // console.log(result)

        // HAR BIR MASSIVNI QATORLARIDA ALOHIDA CHIQARISH
        // const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7],[2,5,8,7]];

        // for (let i in a){
        //     console.log("row" + i)

        // for(let n in a[i]){
        //     console.log(" " + a[i][n])
        // }
        // }

        // SONLI VEKTOR KVADRATLARI YIG'INDISINI ANIQLOVCHI DASTUR
        // function sumSquares(arr) {
        //     let sum = 0;

        //     for (let i = 0; i < arr.length; i++){
        //         sum += arr[i] * arr[i]
        //     }

        //     return sum
        // }
        // let result = sumSquares([1,2,3,4]);
        // console.log(result)

        // const cars = ['lacetti', 'tico', 'damas', 'nexia']
        // let result = cars.includes('tico') 
        // console.log(result)

        // KIRITILGAN RAQAMDAN KATTA RAQAMNI TOPISH FUNKSIYASI
        // const number = [12,34,22,1,4,56,7]

        // function myFunction(value) {
        //     return value > 9
        // }
        // let result = number.find(myFunction)
        // console.log(result)

        // const arr1 = [ -3, 8, 7, 6, -5, 4, 3, 2, 1 ];

// Massivni  o'sish bo'yicha saralash
//     arr1.sort(function(a, b) {
//     return a - b;
//   });

//     // Natijani chiqarish
//     console.log(arr1);

// massivni kamayish bo'yicha saralash
// arr1.sort(function(a, b) {
//     return b - a;
//   });

//     // Natijani chiqarish
//     console.log(arr1);

// ARRAY ICHIDAN ENG KICHIK ELEMENTNI TOPISH
//  function myFunction(arr){
//     return Math.min(...arr)
//  }
  
//  let result = myFunction(arr1)

//  console.log(result)

// ARRAY ICHIDAN ENG KATTA ELEMENTNI TOPISH
//  function myFunction(arr){
//     return Math.max(...arr)
//  }
//  let result = myFunction(arr1)
//  console.log(result)

// forEach HAQIDA MA'LUMOT
// har bir massiv uchun  bir marta funksiya chaqiradi
// const arr1 = [ 3, 8, 7, 6 ];

// arr1.forEach(function(element){
//     console.log(element * 2 )
// })

// JAMI QIYMATNI HISOBLASH
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(total, value) {
//   return total + value;
// }
// let sum = arr1.reduce(myFunction);

// console.log(sum)