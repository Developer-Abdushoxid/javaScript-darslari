// let students = [
//     {
//         name: 'john',
//         score: [3,9,3,4,8,43,32]
//     },
//     {
//         name: 'bob',
//         score: [4,5,3,7,9,34,56]
//     },
//     {
//         name: 'joe',
//         score: [1,7,3,4,6,12,33,]
//     },
// ];


// student ballarining jami: 
// for(let i = 0; i < students.length; i++){
//     let total = students[i].score.reduce((acc, item) => {
//         return acc + item
//     }, 0)
// console.log(`Student ${students[i].name}, Score: ${total}`)
// }


// student ballarining o'rtasi : 
// for(let i = 0; i < students.length; i++){
//     let total = students[i].score.reduce((acc, item) => {
//         return acc + item
//     }, 0);

//     let count = students[i].score.length

//     let result = total / count
//     let roundedResult = result.toFixed(1)
// console.log(`Student ${students[i].name},  averageScore: ${roundedResult}`)
// }


// student ballarining boshi va oxirgi raqamlarini topish : 
// for ( let i = 0; i < students.length; i++){
//     let scores = students[i].score

//     let firstScore = scores[0];
//     let lastScore = scores[scores.length -1]

// console.log(`student firstScore: ${firstScore} lastScore: ${lastScore}`)
// }


// student ballarining boshi va oxirgi raqamlarini qo'shish : 
// for ( let i = 0; i < students.length; i++){
//     let scores = students[i].score

//     let firstScore = scores[0];
//     let lastScore = scores[scores.length -1]
//      let sum = firstScore + lastScore

// console.log(`student: ${students[i].name}, Sum of First and Last Score: ${sum}`)
// }


// student score ning ballarini har ikkinchisini qo'shib hisoblash : 
// for(let i = 0; i < students.length; i++){
//     let scores = students[i].score
//     let sum = 0


//     for(let y = 0; y < scores.length; y+= 2){
//         sum += scores[y]
//     }
//     console.log(`Student ${students[i].name}, ${sum}`)
// }


// student scoreni o'suvchi tartibda tartiblash : 
// for (let i = 0; i < students.length; i++){
//      students[i].score.sort((a,b) => a - b)

// }
// console.log(students)



// let students = [
//     {
//         name: "aziz",
//         score: [100, 82, 76, 85, 97, 88, 71, 52, 77]
//     },
//     {
//         name: "laziz",
//         score: [100, 84, 73, 81, 91, 68, 75, 72, 79]
//     }
// ];

// students.forEach(({name, score}) => {
//     const result = score.map((baho, index) => 
//         index === 0 ? '100.0' : 
//         (((baho - score[index - 1]) / score[index - 1]) * 100).toFixed(1)
//     );

//     console.log(`Student : ${name}`);
//     console.log(`Foiz o'zgaruvchi: ${result.join('% , ')}%`);
// });


// let num = [5,2,3,4,5,6]

// let min = Math.min(...num)
// console.log(min)


// let minNumber = num[0];
// for(let i = 1; i < num.length; i++){
//     if(num[i] < minNumber){
//         minNumber = num[i]
//     }
// }
// console.log(minNumber)





// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
// let sum = 0;
// boshidan o'rtasigacha
// for (let i = 0; i < num.length / 2; i ++){
//     sum += num[i]

// }
// console.log(sum)
// // O'rtacha indeks
// let middleIndex = Math.floor(num.length / 2);

// // Oxiridan boshlab o'rtacha indeksgacha bo'lgan sonlarni qo'shish
// for (let i = num.length - 1; i >= middleIndex; i--) {
//   sum += num[i];
// }

// console.log(sum);




//   function findFactorial(num) {
//     if (num === 0){
//         return 1
//     } else{
//      return   num * findFactorial(num - 1)
//     }
//   }
  
//   console.log(findFactorial(3)) // 120

// function myFunction (n){
//     if(n <= 0){
//         return 0
//     }else if(n === 1){
//         return 1
//     }else{
//         return myFunction(n - 1) + myFunction(n - 2)
//     }
// }
// console.log(myFunction(10))


// function reverseString(str) {
//     if (str === "") {
//         return ""; // Asosiy shart
//     } else {
//         return reverseString(str.substring(1)) + str.charAt(0); // Rekursiv chaqiriq
//     }
// }

// console.log(reverseString("salom")); // "molas"



// function fibonacciNum(n){
//     if(n <= 0){
//         return 0;
//     }else if(n === 1){
//         return 1
//     }else{
//         return fibonacciNum( n -1 ) + fibonacciNum(n -2)
//     }
// };
// console.log(fibonacciNum(10))

// function myFunction(n) {
//     if (n < 0) {
//         return;
//     }
//     if (n % 2 === 0) {
//         console.log(n);
//     }
//     myFunction(n - 1);
// }
// myFunction(10);

// function myFunction(n) {
//     if (n < 0) {
//         return;
//     }
//     myFunction(n - 1);
//     if (n % 2 === 0) {
//         console.log(n);
//     }
// }
// myFunction(10);







