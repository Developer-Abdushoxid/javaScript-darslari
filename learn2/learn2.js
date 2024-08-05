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

const filteredMovie = movies.filter((movie) => {
    return movie.year > 2010
})

console.log(filteredMovie)










