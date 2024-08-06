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


// let num = [ 1,2,3,4,5,6]
// let maxNumber = 0;
// for (let i = 1; i <= num.length; i++){
//     if(i < maxNumber){
//         maxNumber = i
//     }
// };
// console.log(maxNumber)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxNumber = 0;
let startIndex = Math.floor(num.length / 2); // 5
for (let i = startIndex; i < num.length; i++) {
    maxNumber += num[i];
}
console.log(`Massivning oxirgis yarmini qo'shgan yig'indi: ${maxNumber}`);





// let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// let halfLength = Math.floor(num1.length / 2); // 5
// for (let i = 0; i < halfLength; i++) {
//     sum += num1[i];
// }
// console.log(`Massivning bosh qismini qo'shgan yig'indi: ${sum}`);














