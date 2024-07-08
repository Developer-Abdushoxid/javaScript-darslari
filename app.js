// // let x = 9
// // let y = '3'
// // console.log(x / y)

// // let name = 'ali';

// // let name1 = name.length;
// // console.log(name1)


// // STRING

// // 1.1

// // let country = 'Uzbekistan';
// // console.log(country.charCodeAt(0))

// // function getBelgi(txt,idx){
// //     let result = txt.charCodeAT(idx);
// //     return result
// // }

// // console.log(getBelgi('',0))

// // let item = prompt('Ingliz alifbosidagi istalgan harf kiriting: ');

// // function getAsci(i){
// //     let result = i.charCodeAt(0)
// //     return result;
// // }

// // console.log(getAsci(item));


// // let n = "Number(prompt('32 dan katta 126 ga teng yoki kichik bo'lgan ixtiyoriy son kiriting: '))";


// // string;
// // 1.1 

// // function getBelgi(txt, idx){
// //   let result = txt.charCodeAt(idx);
// //   return result;
// // }
// // console.log(getBelgi('salom', 4))

// let item = prompt('Ingliz alifbosidagi istalgan harfni kiriting: ');
// function getAsci(i){
//   let result = i.charCodeAt(0);
//   return result;
// }
// console.log(getAsci(item));


// // 2.2 masala

// let n = Number(prompt("32 dan katta 126 ga teng yoki kichik bo'lgan Ixtiyoriy butun son kiriting: "));
// function findCharacter() {
//     if( n > 32  && n <= 126) {
//         let character = String.fromCharCode(n);
//         return character;
//     }
//   } 
//   console.log(findCharacter());
  
//   // 2.3
//   // let str = prompt("Kompyuteringizdagi ixtiyoriy belgini kiriting: ");
  
//   function findCharacterTwo(){
//     let res1 = str.charCodeAt(0);
//     let item1 = String.fromCharCode(res1 - 1);
//     let item2 = String.fromCharCode(res1 + 1);
//     return `ASCII jadvalidagi ${str} belgidan bitta oldindagi belgi: ${item1}, bitta keyingi belgi: ${item2}`;
//   }
  
//   // console.log(findCharacterTwo());
  
  
//   // 2.4
//   // let n = Number(prompt("1 dan katta 26 dan kichik bo'lgan butun son kiriting: "));
  
//   function alfavitN(){
//     let str = 'A';
//     let idx = str.charCodeAt(0);
//     if(n >= 1 && n <= 26){
//       for(let i = 0; i < Math.floor(n); i++){
//         console.log(String.fromCharCode(idx + i))
//       }
//     }else {
//       console.log("Damingni ol")
//     }
//   }
  
//   // alfavitN();
  
//   // 2.5
//   // let n = Number(prompt("1 dan katta 26 dan kichik bo'lgan butun son kiriting: "));
  
//   function alfavitN(){
//     let str = 'z';
//     let idx = str.charCodeAt(0);
//     if(n >= 1 && n <= 26){
//       for(let i = 0; i < Math.floor(n); i++){
//         console.log(String.fromCharCode(idx - i))
//       }
//     }else {
//       console.log("Damingni ol")
//     }
//   }
  
//   // alfavitN();
  
//   // 2.6
//   // let character = prompt('Belgi: ');
//   function identifyCharacter(char) {
//     if (!isNaN(parseInt(char))) {
//         return "digit";
//     }
//     if (/[a-zA-Z]/.test(char)) {
//         return "satr";
//     }
//     return 0;
//   }
  
//   // Test qilib ko'ramiz:
//   // console.log(identifyCharacter(character));
  
  
//   // 2.7 
  
//   // let satr = prompt('Satr kiriting: ');
  
//   function aniqla(a){
//     let res1 = String(a).charCodeAt(0)
//     let res2 =String(a).charCodeAt(String(a).length - 1)
//     return {res1, res2}
//   }
  
//   // console.log(aniqla(satr))
  
  
  
//   // 2.8 
//   function repeatStr(n, str){
//     let result1 = str.padStart(n, str)
//     let result2 = str.repeat(n)
  
//     return {result1, result2};
//   }
  
//   // console.log(repeatStr(5, 'A'));
  
//   // 2.9 
//   function repeatStrTwo(str1, str2){
//     let result = str1.concat(' ', str2)
//     return result;
//   }
  
//   // console.log(repeatStrTwo('Hello', 'world'));
  
//   // let str = prompt('str kiriitng:')
  
//   function repeatStrThree(str){
//     let result = '';
//     for(let i = str.length - 1; i >= 0; i--){
//       result += str.split('')[i];
//     }
  
//     return result;
//   }
  
//   // console.log(repeatStrThree(str));


//   function checkAndPrintString(inputString) {
//     if (inputString.includes(" ")) {
//       console.log("Kiritilgan satrda probel mavjud emas.");
//     } else {
//       console.log(inputString);
//     }
//   }
  
//   // Misol uchun:
//   // checkAndPrintString("Bu birinchi misol"); // Kiritilgan satrda probel mavjud emas.
//   // checkAndPrintString("Ushbu misol probelsiz"); // Ushbu misol probelsiz



//   function insertStars(str, n) {
//     return str.split('').join('*'.repeat(n));
//   }
  
//   // Misol uchun:
//   const inputString = 'hello';
//   const numStars = 1;
//   const outputString = insertStars(inputString, numStars);
//   // console.log(outputString); 


//   // let str = prompt('Lyuboy satr kiriting ichida raqamlardan foydalaning :')

//   function countNumber (str){
//     const arr = String(str).split('');
//     let n = arr.length;
//     let count = 0;
//     for(let i = 0; i < n; i++){
//       if(!isNaN(parseInt(arr[i]))){
//         count += 1
//       }
//     }
//     return count
//   }

//   // console.log(countNumber(str))

//   let str = prompt('Lyuboy satr kiriting ichida raqamlardan foydalaning :')

//   function countNumber (str){
//     const arr = String(str).split('');
//     let n = arr.length;
//     let count = 0;
//     for(let i = 0; i < n; i++){
//       if(!isNaN(parseInt(arr[i]))){
//         count += 1
//       }
//     }
//     return count
//   }

//   console.log(countNumber(str))

     // juft toq sonlarni aniqlash

// const n = prompt('istalgan sonni kiriting :')

// const juftToq = (number) =>{
//     if(number % 2 === 0){
//         console.log(`${number} bu juft son`)
//     } else{
//         console.log(`${number} bu toq son`)
//     }  
// }

// juftToq(n)

    //   ikki sondan kattasini qaytaradigan funksiya
// const n = prompt('istalgan sonni kiriting :')
// const m = prompt('istalgan sonni kiriting :')


//     function maXDec(number1, number2){
//         if(number1 >= number2){
//             return number1
//         }
//             return number2
//     }
//    console.log(maXDec(n,m))

      // berilgan sonni teskarisiga o'giradigan funksiya

// const n = prompt('istalgan ikki xonalik sonni kiriting :')

// function reservedDec (number){
//     const numberString = String(number);
//     const reservedStr = numberString.split('').reverse().join('');
//     return Number(reservedStr)
// };
// console.log(reservedDec(n))

     // Berilgan satrni teskariga o'giradigan funksiya
// const n = prompt('Istalgan satr kiriting :')
//  function Satr (str){
//     const reservedStr = str.split('').reverse().join('');
//     return reservedStr;
//  }
//   console.log(Satr(n));

//  Berilgan raqamlarni tartiblash
// const point = [12,34,11,3,34,45,78,23];
// point.sort(function(a,b){
//   return a - b
// })
// console.log(point)

//  Berilgan raqamlarni teskarisiga tartiblash
// const point = [12,34,11,3,34,45,78,23];
// point.sort(function(a,b){
//   return b - a
// })
// console.log(point)

// Berilgan raqamlarni sorti bilan tartiblash
// const myArr = [
//      {name:"X00",price:100 },
//      {name:"X01",price:100 },
//      {name:"X02",price:100 },
//      {name:"X03",price:100 },
//      {name:"X04",price:110 },
//      {name:"X05",price:110 },
//      {name:"X06",price:110 },
//      {name:"X07",price:110 },
//      {name:"X08",price:120 }
//    ];
   
//    myArr.sort( (p1, p2) => {
//      if (p1.price < p2.price) return -1;
//      if (p1.price > p2.price) return 1;
//      return 0;
//    });
//    console.log(myArr)


// Kiritilgan son berilgan chegara (range) ichidaligini aniqlovchi dastur tuzing

// const inRange = (min, max, number) => {
//      if(number >= min && number <= max){
//           console.log(`Berilgan ${number} soni ${min} va ${max} orasida`);
//      }else{
//           console.log(`Berilgan son ${min} va ${max} orasida emas`)
//      }
// }
//      const minRange = 10;
//      const maxRange = 30;
//      const givenNumber = 20;
// inRange(minRange,maxRange,givenNumber);
   

// Berilgan ikki son ustida ko'rsatilgan arifmetik amalni bajaring va console.logga chiqaring

// const simpleCalculator = (num1, num2, oper) =>{
//      switch(oper) {
//           case "add":
//                console.log(`Yig'indisi: ${num1 + num2}`);
//                break;
//           case "subtrack":
//              console.log(`Yig'indisi: ${num1 - num2}`);
//               break;

//           case "multiply":
//              console.log(`Yig'indisi: ${num1 * num2}`);
//              break;

//           case "divide":
//                console.log(`Yig'indisi: ${num1 / num2}`);
//                break;

//           default:
//                console.log(`Aniqlanmagan amal`);
                       
//      }
// }

// const a = 20;
// const b = 5;
// const operation = 'add'
// simpleCalculator(a,b,operation)

// 10 dan kichik 0 dan katta raqamni tasodifiy tanlansin
//  const a = Math.floor(Math.random() * 10);
//  document.getElementById("one").innerHTML = a;

// taqqoslash operatorida amaliyot
// const n = prompt('yosh kiriting')
// function myFunction(age){
// if (age < 18) {
//   return "Too young to buy coca cola"
// }else{
//   return "you can buy alcohol"
// };
//   12
// }
// document.getElementById('one').innerHTML = (myFunction(n))

// const findNumber = arr => arr.find(num => arr.indexOf(num));

// const b = [1,1,1,0.55,1,1];
// const Number = findUniqueNumber(a);
// console.log(uniqueNumber);  // Natija: 0.55

// const findNumber = arr => {
//      const counts = arr.reduce((acc, num) => {
//          acc[num] = (acc[num] || 0) + 1;
//          return acc;
//      }, {});
     
//      return arr.find(num => counts[num] === 1);
//  }
 
//  const a = [1, 1,1,2, 1, 1];
//  const Number = findNumber(a);
//  console.log(Number);  // Natija: 2

const calculate = n => {
     let product = 1;
     for (let i = 1; i <= n; i++) {
         product *= i;
     }
     return product;
 }
 
 const n = prompt('istalgan son kiriting');  // Bu yerda tashqaridan kiritiladigan son
 const result = calculate(n);
 console.log(result);  
 
 
