
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

// BUTUN SONLAR MASSIVNING YIG'INDISI VA KO'PAYTMASINI HISOBLASH UCHUN JAVA SCRIPT DASTURI:
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(total, value) {
//   // return total + value;
//   return total * value;
// }
// let sum = numbers.reduce(myFunction);

// console.log(sum)

// BUTUN SONLAR MASSIVNING YIG'INDISI VA KO'PAYTMASINI HISOBLASH UCHUN JAVA SCRIPT DASTURI:

//  const numbers = [45, 4, 9, 16, 25];
// let s = 0;
// let k = 1;
// let i;
//  for (i = 0; i < numbers.length; i+= 1){
//   s += numbers[i] //yig'indisi
//   k *= numbers[i] // ko'paytmasi
//  }
//  console.log(`Sum : ${s} Product : ${k}`)

// BIR XIL RAQAMLARNI ANIQLAB OLIB TASHLAYDIGAN DASTUR

// function remove(arr) {
// return  [...new Set(arr)]
// }
// const numbers = [1,1,2,3,3,3,5,5,6,7];
// const n = remove(numbers)
// console.log(n)

// BIR XIL SATRLARNI ANIQLAB OLIB TASHLAYDIGAN DASTUR:
// function remove(arr) {
//   const seen = new Set();
//   const result = [];

// arr.forEach(item => {
//   const lower = item.toLowerCase();
//   if(!seen.has(lower)){
//     seen.add(lower)
//     result.push(item)
//   }
// });
// return result;
// }
// const original = ['apple','apple','orange','orange']
// const unique = remove(original);
// console.log(unique)

// . Bizda quyidagi massivlar mavjud:
// rang = ["Moviy", "Yashil", "Qizil", "Apelsin", "Binafsha", "Indigo", "Sariq"];
// o = ["th","st","nd","rd"]
// Ranglarni quyidagi tarzda aks ettirish uchun JavaScript dasturini yozing:
// "Birinchi tanlov Moviy rang ."
// "Ikkinchi tanlov yashil rang."
// "Uchinchi tanlov - Qizil."

// const colors = ['Moviy', "Yashil", "Qizil", "Apelsin", "Binafsha", "Indigo", "Sariq"];
// colors.forEach((color, index) => {
//   const position = index + 1;
//   let output;
//   switch(position) {
//     case 1:
//       output = `1 tanlov ${color} rang`;
//       break;
//       case 2:
//       output = `2 tanlov ${color} rang`;
//       break;
//       default:
//         output = `${position} th tanlov ${color} rang`
//   }
//   console.log(output)
// });

// KABISA YILLARNI ANIQLOVCHI DASTUR:
// function findYears(start, end) {
//   const result = [];

//   for (let year = start; year <= end; year++){
//     if((year % 4 === 0 && year % 100 !== 0)){
//       result.push(year)
//     }
//   }
//   return result;
// }
// const start = 2000;
// const end = 2024;
// const result = findYears(start, end);
// console.log(result);

// Massivni aralashtirish uchun JavaScript dasturi:
// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--){
//     const n = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[n]] = [arr[n],arr[i]];
//   }
//   return arr;
// }

// const original = [1,2,3,4,5,6,7,8,9];
// const shuffled = shuffle(original);
// console.log(shuffled)

// Individual qiymatlarga ega ikkita massiv mavjud. Berilgan massivdagi har bir alohida indeks qiymatining yig‘indisini hisoblash uchun JavaScript dasturini yozing.
// const array1 = [1,2,3,4]
// const array2 = [4,5,6,7]

// function num (arr1, arr2){
//   const max = Math.max(arr1.length, arr2.length);
//   const result= [];

//   for (let i = 0; i < max; i ++){
//     const value1 = arr1[i] !== undefined ? arr1[i] : 0;
//     const value2 = arr2[i] !== undefined ? arr2[i] : 0;
//     result.push(value1 + value2)
//   }
//   return result
// }
// const result2 = num(array1, array2);
// console.log(result2)

// JavaScript massivida takroriy qiymatlarni topish uchun JavaScript dasturini yozing.
// const array = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 6, 9];

// function find(arr) {
//   const seen = new Set();
//   const duplicates = [];

//   for (let value of arr){
//     if (seen.has(value)){
//       if(!duplicates.includes(value)){
//         duplicates.push(value)
//       }
//     } else {
//       seen.add(value)
//     }
//   }
//   return duplicates
// }
// const result = find(array);
// console.log(result);




//  const numbers = [45, 4, 9, 16, 25];
// let s = 0;
// let k = 1;
// let i;
//  for (i = 0; i < numbers.length; i+= 1){
//   s += numbers[i] //yig'indisi
//   k *= numbers[i] // ko'paytmasi
//  }
//  console.log(`Sum : ${s} Product : ${k}`)


// BERILGAN ARRAY ELEMENTLAR YIG'INDISINI ANIQLASH:
// const numbers = [1,2,3,4,5,6,7]
// let total = 0;
// let i;
// for(i = 0; i < numbers.length; i += 1){
//   total += numbers[i]
// }
// console.log(`Jami yig'indi ${total}`)


// ELEMENTLARNI IKKIGA KO'PAYTIUVCHI DASTUR
// const numbers = [1,2,3,4,5,6,7]
// numbers.forEach(function(element){
//   console.log(element * 2)
// })


// JUFT SONLARNI ANIQLASH

// const numbers = [1,2,3,4,5,6,7]

// numbers.forEach(number => {
//   if(number % 2 === 0){
//     console.log(`${number} - bu juft son`)
//   }else{
//     console.log(`${number} - bu toq son`)
//   }
// });

// ARRAYLARNI TESKARIGA O'GIRISH:

//  const numbers = [1,2,3,4,5,6,7]
//  function reverseArray(item) {
//   return item.reverse();
//  }
//  const result = reverseArray(numbers)
//  console.log(result)

// 2-yo'l
// function reverseArray(item){
//   let reversedNumbers = [];
//   for(let i = item.length - 1; i >= 0; i--){
//     reversedNumbers.push(item[i])
//   }
//   return reversedNumbers
// }
// const result = reverseArray(numbers)
//  console.log(result)


// ARRAY ELEMENTLARINING O'RTADAGISI TOPING
// const numbers = [1,2,3,4,5,6,7,8]
// function calculateNumber(array){
//   return  array.reduce((a,b) => a + b, 0) / array.length;
// }

// const result = calculateNumber(numbers)
//  console.log(result)


// ELEMENTLARNI TARTIBLASH
// const numbers = [1,6,3,7,5,2,4]
// function sorted(arr){
//  return arr.sort()
// }
// const result = sorted(numbers)
// console.log(result)


// ELEMENTLARNI ENG KATTA QIYMATINI TOPISH
// const numbers = [1,6,3,7,5,2,4]
// function maxNumber(arr){
//  return Math.max(...arr)
// }
// const result = maxNumber(numbers)
// console.log(result);

// ELEMENTLARNI ENG KICHIK QIYMATINI TOPISH
// const numbers = [1,6,3,7,5,2,4]
// function maxNumber(arr){
//  return Math.min(...arr)
// }
// const result = maxNumber(numbers)
// console.log(result);

// TAKRORLANGAN ELEMENTLARNI OLIB TASHLASH:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// function remove (item) {
//   return [...new Set(item)]
// };
// const result = remove(numbers)
// console.log(result);


// BIR NECHTA ELEMENTLARNI BIRLASHTIRISH :
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// function arrays (arr1, arr2){
//   return arr1.concat(arr2)
// }
// const result = arrays(array1, array2)
// console.log(result)

 