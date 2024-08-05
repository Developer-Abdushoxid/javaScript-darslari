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

const movies = [
    { name: 'Avatar 3D', year: 2008, rating: 9},
    { name: 'Titanik 7D', year: 1997, rating: 7},
    { name: 'Forsaj 5D', year: 2020, rating: 5},
    { name: 'Avengers 3D', year: 2012, rating: 3},
]

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






