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


// bu rekursiya yordamida :
// function sumRange(n) {
//     if (n == 1) {
//         return 1
//     }
//     return n + sumRange(n - 1)
// }
// console.log(sumRange(10))

// const movies = [
//     { name: 'Avatar 3D', year: 2008, rating: 9},
//     { name: 'Titanik 7D', year: 1997, rating: 7},
//     { name: 'Forsaj 5D', year: 2020, rating: 5},
//     { name: 'Avengers 3D', year: 2012, rating: 3},
// ]

// forEach siklida:
// const newMovies = [];
// movies.forEach((movie) => {
//     if( movie.year < 2010){
//         newMovies.push(movie)
//     }
// } )
// console.log(newMovies)


// for siklida :
// for (let i = 0; i < movies.length; i++){
//     const movie = movies[i]
//     if(movie.year < 2010){
//         newMovies.push(movie)
//     }
// }
// console.log(newMovies)

// filter metodida: 

// const filteredMovie = movies.filter((movie) => {
//     return movie.year > 2010
// })

// console.log(filteredMovie)


// let numbers = [1,2,3,4]
// let double = numbers.map((num) => {
//     return num * 2
// })
// console.log(double)


// let users = [
//     {name: 'alice', yosh: 25},
//     {name: 'john', yosh: 21},
//     {name: 'bob', yosh: 19},
// ]
// let names = users.map((user) => {
//    return user.yosh += 1
// })
// console.log(names)


// let numbers = [10, 20, 30];
// let modifiedNumbers = numbers.map((num, index) => {
//   console.log('Element:', num);
//   console.log('Indeks:', index);
//   return num * 2;
// });

// console.log(modifiedNumbers); // [20, 40, 60]

// let priceUSD = [10,20,30]
// let change = 12600;
// let priceUZB = priceUSD.map((price) => {
//     return price * change
// })
// console.log(priceUZB)

// map -  metodi JavaScriptda massivlar bilan ishlashda juda kuchli va moslashuvchan vositadir. U massiv elementlarini o'zgartirish, hisoblash va qayta ishlashda keng qo'llaniladi.


// reduce metodi : 

// eng katta qiymatni aniqlash
// let numbers = [12,34,5,212];

// let max = numbers.reduce((acc, current) => {
//     return current < acc ? current : acc
// })
// console.log(max)


// jamini hisoblash
// let products = [
//     {name: 'gilos', price: 12},
//     {name: 'olma', price: 22},
//     {name: 'banan', price: 32},
// ]

// let totalcost = products.reduce((acc, product) => {
//     return acc + product.price
// },0);
// console.log(totalcost)

// let products = [
//     { name: 'gilos', price: 12 },
//     { name: 'olma', price: 22 },
//     { name: 'banan', price: 32 },
// ];

// let totalcost = products.reduce((acc, product, index) => {
//     // Har bir qadamda qiymatni konsolga chiqaring
//     console.log(` ${index + 1}: ${product.name} narxi: ${product.price}`);

    
//     return acc + product.price;
// }, 0);

// console.log('Final Total Cost:', totalcost);

// takrorlanuvchi elementlarni aniqlash
// let fruits = ['banan', 'olma', 'olma', 'banan','olma', 'anor','anor']

// let fruitCount = fruits.reduce((acc, fruit) => {
//     if(acc[fruit]) {
//         acc[fruit] ++
//     }else{
//         acc[fruit] = 1
//     }
//     return acc
// }, {});
// console.log(fruitCount)


// const words = ['apple', 'banana', 'cherry', 'date'];

// const updatedWords = words.map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// });

// console.log(updatedWords); // ['Apple', 'Banana', 'Cherry', 'Date']


// const words = ['apple', 'banana', 'cherry', 'date'];

// const updatedWords = words.map(word => {
//     // So‘zning bosh harfini katta qilib, qolgan harflarni kichik qilib olish
//     const baseWord = word.slice(0, -1).toLowerCase();
//     // So‘zning oxirgi harfini katta qilish
//     const lastChar = word.charAt(word.length - 1).toUpperCase();
//     return baseWord + lastChar;
// });

// console.log(updatedWords); // ['applE', 'bananA', 'cherrY', 'datE']

// let item = [1, 2, 4, 4, 4, 3, 3, 2, 1, 4];

// function ConvertArray(arr) {
//     // Elementlarning takrorlanish sonini hisoblash
//     let count = arr.reduce((acc, num) => {
//         acc[num] = (acc[num] || 0) + 1;
//         return acc;
//     }, {});
//     // Takrorlanish sonlari bo'yicha massiv yaratish
//     let entries = Object.entries(count);

//     // Eng ko'p va eng kam qaytarilgan elementlarni topish
//     let mostNumber = entries.reduce((max, entry) => entry[1] > max[1] ? entry : max);
//     let leastNumber = entries.reduce((min, entry) => entry[1] < min[1] ? entry : min);

//     // Natijani bevosita qaytarish
//     return {
//         frequencyObject: count,
//         mostNumberElement: Number(mostNumber[0]),
//         mostNumberCount: mostNumber[1],
//         leastNumberElement: Number(leastNumber[0]),
//         leastNumberCount: leastNumber[1]
//     };
// }

// // Misol
// let result = ConvertArray(item);

// console.log('Elementlar takrorlanish obyekti:', result.frequencyObject);
// console.log('Eng ko`p qaytarilgan element:', result.mostNumberElement, '(', result.mostNumberCount, 'marta)');
// console.log('Eng kam qaytarilgan element:', result.leastNumberElement, '(', result.leastNumberCount, 'marta)');



// let item = [1, 2, 4, 4, 4, 3, 3, 2, 1, 4];

// function ConvertArray(arr) {
//     let count = {};
//     for (let i = 0; i < arr.length; i++) {
//         count[arr[i]] = (count[arr[i]] || 0) + 1;
//     }

//     let mostNumber = null;
//     let leastNumber = null;

//     for (let key in count) {
//         if (count.hasOwnProperty(key)) {
//             let current = [Number(key), count[key]];
//             if (!mostNumber || current[1] > mostNumber[1]) mostNumber = current;
//             if (!leastNumber || current[1] < leastNumber[1]) leastNumber = current;
//         }
//     }

//     return {
//         frequencyObject: count,
//         mostNumberElement: mostNumber[0],
//         mostNumberCount: mostNumber[1],
//         leastNumberElement: leastNumber[0],
//         leastNumberCount: leastNumber[1]
//     };
// }

// // Misol
// let result = ConvertArray(item);

// console.log('Elementlar takrorlanish obyekti:', result.frequencyObject);
// console.log('Eng ko\'p qaytarilgan element:', result.mostNumberElement, '(', result.mostNumberCount, 'marta)');
// console.log('Eng kam qaytarilgan element:', result.leastNumberElement, '(', result.leastNumberCount, 'marta)');




// let item1 = [1, 2, 4, 4, 4, 3, 3, 2, 1, 4,5];

// function ConvertArray(arr) {
//     let count = {};
//     for (let i = 0; i < arr.length; i++) {
//         count[arr[i]] = (count[arr[i]] || 0) + 1;
//     }
//     return count
// }
// let result = ConvertArray(item)

// console.log('takrorlargan sonlar:', result)

// function countArray(item) {
//     let count = {};
//     for(let i = 0; i < item.length; i++){
//         count[item[i]] = (count[item[i]] || 0) + 1
//     }
//     return count
// }
// let result = countArray(item1)
// console.log('takrorlangan elementlar', result)
// let item = [1, 2, 4, 4, 4, 3, 3, 2, 1, 4];

// function ConvertArray(arr) {
//     let count = {};
//     let most = { freq: 0 };
//     let least = { freq: Infinity };

//     for (let i = 0; i < arr.length; i++) {
//         count[arr[i]] = (count[arr[i]] || 0) + 1;
//         if (count[arr[i]] > most.freq) {
//             most = { element: arr[i], freq: count[arr[i]] };
//         }
//         if (count[arr[i]] < least.freq) {
//             least = { element: arr[i], freq: count[arr[i]] };
//         }
//     }

//     return { count, most, least };
// }

// let { count, most, least } = ConvertArray(item);

// console.log('Takrorlangan sonlar:', count);
// console.log('Eng ko\'p takrorlangan element:', most.element);
// console.log('Eng kam takrorlangan element:', least.element);




