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

//  const arr1 = [ -3, 8, 7, 6, -5, 4, 3, 2, 1 ];

// Massivni  o'sish bo'yicha saralash
//   arr1.sort(function(a, b) {
//   return a - b;
// });

// Natijani chiqarish
// console.log(arr1);

// massivni kamayish bo'yicha saralash
// arr1.sort(function(a, b) {
//     return b - a;
//   });

//     // Natijani chiqarish
// console.log(arr1);

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
// const number = [1,6,3,7,5,2,4]

// function maxNumber(arr){
//  return Math.max(...arr)
// }
// const result = maxNumber(number)
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

// ARRAY ELEMENTLARIDA MA'LUM ELEMENTLARNI BOR YO'QLIGINI ANIQLASH:
// const car = ['lacetti', 'gentra', 'tico']
// function searchElement (item1, item2) {
//   for( let i = 0; i < item1.length; i++){
//     if( item1[i] === item2){
//       return true
//     }
//   }
//   return false
// }
// console.log(searchElement(car,'captiva'))

// ARRAYDAGI BARCHA ELEMENTLARNI KATTA HARFLAR BILAN YOZISH:
// const  cities =  ['toshkent', 'samarqand', 'namangan'];
// function upper(item){
//   let city = [];
//   for(let i = 0; i < item.length; i++){
//     city.push(item[i].toUpperCase())
//   }
//   return city
// }
// console.log(upper(cities))

// ARRAYDAGI HAMMA ELEMENTLARGA QO'SHISH:
// const num = [1,2,4,3,6,5];
// function incArray(arr, arr2){
//   let incremented = [];
//   for(let i = 0; i < arr.length; i++){
//     incremented.push(arr[i] + arr2)
//   }
//   return incremented
// }
// console.log(incArray(num,2))

// 2 - YO'L
// num.forEach(function(element){
//   console.log(element + 2)
// })

// JUFT SONLARNI TOPISH

// const num = [1,2,3,4,5,6,7]
// function filterNumber(item){
//   let evenNumber = [];
//   for(let i = 0; i < item.length; i++){
//     if(item[i] % 2 === 0){
//       evenNumber.push(item[i])
//     }
//   }
//   return evenNumber
// }
// console.log(filterNumber(num))

// 2-YO'L
// const numbers = [1,2,3,4,5,6,7]
// numbers.forEach(number => {
//   if(number % 2 === 0){
//     console.log(`${number} - bu juft son`)
//   }else{
//     console.log(`${number} - bu toq son`)
//   }
// });

// ARRAY ELEMENTLAR BERILGAN ULARNING ORASIDAN JUFT SONLARNI TOPIB SARALAB BERISH:
// const number = [1,2,3,4,5,6,7,8,9,11];

// function getSort(item) {
//   const evenNumber = item.filter(num => num % 2 === 0)
//   evenNumber.sort((a,b) => a - b)
//   return evenNumber;
// }
// const result = getSort(number)
// console.log(result)

// RAQAMLAR BERILGAN ULARDAN IJOBIYSINING YIG'INDISINI ANIQLASH:

// const number = [1, -4, -7, 12];
// const positiveNumbers = number.filter(num => num > 0);
// const result = positiveNumbers.reduce((acc, num) => acc + num,0)
// console.log(`ijobiy raqamlar ${positiveNumbers} yig'indisi ${result}`)



// REACT JSDA KOMPONENTLAR IKKI TURGA BO'LINADI
// SINF KOMPONENTLAR VA FUNCTION KOMPONENTLAR:

// SINF KOMPONENTLAR
// class Car {
//   constructor(name){
//     this.brand = name
//   }
// }

// const myCar = new Car('Ford')
// console.log(myCar.brand)

// FUNCTION KOMPONETLAR
// function Car(){
//   return  'I am a CAR!'
// }
// console.log(Car())

// SPREAD OPERATORGA MISOL:
// const myVehicle = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }

// const updateMyVehicle = {
//   type: 'car',
//   year: 2021,
//   color: 'yellow'
// }

// const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

// console.log(myUpdatedVehicle)

// ARRAYLARDA RAQAM MUSBAT BO'LSA SALBIY QILUVCHI FUNKSIYA
// let number = [1,2,3,-5,-1]
// function negative(numbers){
//   return  numbers.map(num => Math.abs(num) * -1)
// }
// console.log(negative(number))

// Berilgan massivdan ma'lum bir qiymatni o'chiruvchi funksiyani yozing.
// const numbers = [1,2,3]
// const removeNumber = 2;

// function myFunction(item, value){
//   return item.filter(arr => arr !== value)
// }
// console.log(myFunction(numbers,removeNumber))

// Berilgan massivning oxiriga yangi element qo'shuvchi funksiyani yozing.
// const fruits = ['banana', 'qovun'];
// const newFruit = 'tarvuz'

// function myFunction(item,array){
//  item.push(array)
// return item
// }
// console.log(myFunction(fruits,newFruit))

// Berilgan massivdan berilgan qiymatning indeksini qaytaruvchi funksiyani yozing. Agar mavjud bo'lmasa, -1 qaytaring.4
//  const fruits = ['banana', 'qovun'];

// function myFunction(item,item2){
//   return item.indexOf(item2)
// }
// console.log(myFunction(fruits,'banana'))

// Berilgan massivda manfiy sonlar mavjudligini tekshiruvchi funksiyani yozing.
// const num = [1,23,4]
// function myFunction(item,item2){
//   return item.includes(item2)
// }

// console.log(myFunction(num,4))

// Berilgan massiv elementlarini bir-biriga qo'shib bitta string qaytaruvchi funksiyani yozing.
// const words = ['Hello', 'world', '!'];

// function myFunction(item) {
//   return item.join(' ')
// }
// console.log(myFunction(words))

// Arraylarning jami yig'indisi topish
// const numbers = [1, 2, 3, 4];
// let result = 0;
// let i;
// for(i = 0; i < numbers.length; i +=1){
//   result += numbers[i]
// }
// console.log(`jami: yig'indi: ${result}`)

// Berilgan massivdagi barcha sonlarni ikki barobarga oshiruvchi funksiyani yozing.
// function myFunction(item){
//   return item.map(num => num * 2)
// }
// console.log(myFunction(numbers))

// Massivdan muayyan elementni olib tashlash uchun JavaScript funksiyasini yozing.
// const num = [1,2,3,4,5]
// function removeArray(arr1,arr2){
//   let index = arr1.indexOf(arr2);
//   if(index > -1){
//     arr1.splice(index,1)
//   }
//   return arr1
// }
// console.log(removeArray(num,1))

// Muayyan elementni o'z ichiga olgan massivni topish uchun JavaScript funksiyasini yozing.
// function myFunction(arr, element) {
//   for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === element) {
//           return true;
//       }
//   }
//   return false;
// }
// console.log(myFunction(num,2))

// function myFunction(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//       return 'fizzbass';
//   } else if (num % 3 === 0) {
//       return 'fizz';
//   } else if (num % 5 === 0) {
//       return 'bass';
//   } else {
//       return false;
//   }
// }

// for (let i = 1; i <= 15; i++) {
//   console.log(i + ": " + myFunction(i));
// }


// const money = 32000;
// const price = 5000;
// function myFunction(money, price){
//   let count = 0
//   do{
//     money -= price
//     count ++
//   }while(money >= price)
//     return {count, money}
// }
// const result = myFunction(money, price);
// console.log(`Siz ${result.count} ta moshina sotib olasiz va ${result.money} ming so'm pul ortib qoladi`)

// const sum = 32000;
// const price = 1700;
// function myFunction(sum,price){
//   let count = 0
//   do{
//     sum -= price
//     count++
//   }while(sum >= price)
//     return {count,sum}
// }

// const carPrice = myFunction(sum, price)
// console.log(`siz ${carPrice.count} ta mashina sotib olasiz ${carPrice.sum} pul ortib qoladi`)

// const numbers = [1, 2, 3];
// let i = 4;

// do {
//     numbers.push(i);
//     i++;
// } while (i <= 9);

// console.log(numbers);

// let sum = 0;
// let i = 1;
// do{
//   sum += i
//   i++
// }while(i <= 10);
// console.log(`yig'indi: ${sum}`)

// PAROL TO'G'RI KITILMAGUNCHA ISHLAYDI
// let correctPassword = "12345";
// let userPassword;
// do {
//     userPassword = prompt("Parolni kiriting:");
// } while (userPassword !== correctPassword);
// console.log("Parol to'g'ri kiritildi!");

// function calculate(initialAmount, monthlyRate, months) {
//   let currentAmount = initialAmount;
//   let month = 1;
//   do {
//       currentAmount += currentAmount * monthlyRate / 100;
//       console.log(`Oy ${month}: ${currentAmount.toFixed(2)} so'm`);
//       month++;
//   } while (month <= months);
//   return currentAmount.toFixed(2);
// }

// let initialAmount = parseFloat(prompt("Boshlang'ich omonat summasini kiriting:"));
// let monthlyRate = parseFloat(prompt("Oylik foiz stavkasini kiriting:"));
// let months = parseInt(prompt("Omonat muddatini oylarda kiriting:"));

// let finalAmount = calculate(initialAmount, monthlyRate, months);
// console.log(`Foizlar qo'shilgandan keyingi jami summa: ${finalAmount} so'm`);

// let rows = 5;
// let pattern = '';
// let i = 0;

// while (i < rows) {
//     pattern += '1';
//     console.log(pattern);
//     i++;
// }

// function calculateTime(speed, distance) {
//   const time = distance / speed;
//   return time;
// }
// const speed = 60; // km/soat
// const distance = 60; // km
// const travelTime = calculateTime(speed, distance);
// console.log(`Siz ${speed} km/soat tezlikda ${distance} km masofani ${travelTime.toFixed(2)} soatda bosib o'tasiz.`);

//  DO WHILE BO'YICHA

// 10 tagacha chop etish
// let num = 0;
// do{
//   console.log(num)
//   num++
// }while(num <= 10)

// 20 gacha juft sonlarni chiqarish
// let num = 0;
// do{
//   console.log(num)
//   num += 2;
// }while(num <= 20)

// factorial hisoblash
//   const num = 5;
//   function factorial(n){
//     let result = 1
//     let i = n;
//     do{
//       result *= i;
//       i --;
//     }while(i > 0)
//       return result;
//   }
// console.log(`${num} = ${factorial(num)}`)

// 1 dan 100 gacha bo'lgan sonlar yig'indisi
// let sum = 0;
// let result = 1;
// do{
//   sum += result;
//   result ++;
// }while(result <= 100);
// console.log(`1 dan 100 gacha bo'lgan sonlar yig'indisi ${sum}`)

// 10 ta fibonachi kodlarini chiqarish
// let n1 = 0, n2 = 1, nextTerm;
// let count = 1;

// console.log("10 ta birinchi Fibonacci sonlari:");
// console.log(n1); // Birinchi sonni chop etamiz
// console.log(n2); // Ikkinchi sonni chop etamiz
// do {
//     nextTerm = n1 + n2;
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     count++;
// } while (count < 9);

// 10 gacha sonni kvadratini chiqarish
// let number = 1;
// do{
//   console.log(`${number}, kvadrati${number * number}`)
//   number ++
// }while(number <= 10)

// kiritilgan sonni o'rtacha qiymatini topish
// let sum = 0;
// let count = 0;
// do {
//     let number = parseFloat(prompt(`Iltimos, ${count + 1}-sonni kiriting: `));
//     sum += number;
//     count++;
// } while (count < 5);
// let average = sum / 5;
// console.log(`Kiritilgan 5 ta sonning o'rtacha qiymati: ${average}`);

// kiritilgan sonni eng kattasini topish
// let max = -Infinity; // Maksimal qiymatni aniq belgilash uchun
// let count = 0;

// do {
//   let number = parseFloat(prompt(`Iltimos, ${count + 1}-sonni kiriting:`));
//   if (!isNaN(number) && number > max) {
//     max = number;
//   }
//   count++;
// } while (count < 3);

// console.log(`Kiritilgan 5 ta sonning eng kattasi: ${max}`);


// kiritilgan sonni teskariga o'girish
// let number = '1,3,4,5';
// let reversedNumber = '';
// let i = number.length - 1;
// do {
//     reversedNumber += number[i];
//     i--;
// } while (i >= 0);
// console.log(`Kiritilgan sonning teskari tartibda qiymati: ${reversedNumber}`);


// kiritilgan sonni yig'indisini hisoblash

// let number = "12356";
// let sum = 0;
// let i = 0;
// do {
//   let digit = parseInt(number[i]);
//   sum += digit;
//   i++;
// } while (i < number.length);
// console.log(`jami yig'indi: ${sum}`);

// function myFunction(numberstr) {
//   return numberstr.replace(/\./g, "[.]");
// }
// const num = myFunction("1.2.3...4.5");

// console.log(num);
// 10 gacha sonni ko'rsatish
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 20 gacha bo'lgan sonni juftlarini aniqlash
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// 20 gacha bo'lgan sonni toqlarini aniqlash
// for(let i = 1; i < 10; i+=2 ){
//   console.log(i)
// }

// sonlar yig'indisi (1 - 100 gacha)
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum)

// sonlar kvadratini topish
// for( let i = 1; i < 5 ; i ++){
//   console.log(`${i} ning kvadrati ${i * i}`)
// }

//  3 sonni o'rtachasini topish
// let sum = 0;
// for (let i = 0; i < 3; i++) {
//     let number = parseFloat(prompt(`Iltimos, ${i + 1}-sonni kiriting: `));
//     sum += number;
// }
// let average = sum / 5;
// console.log(`Kiritilgan 5 ta sonning o'rtacha qiymati: ${average}`);

// 3 ta sonni eng kattasini topish
// let max = 0;
// for (let i = 0; i < 3; i++) {
//     let number = parseFloat(prompt(`Iltimos, ${i + 1}-sonni kiriting: `));
//     if (max === null || number > max) {
//         max = number;
//     }
// }
// console.log(`Kiritilgan 5 ta sonning eng kattasi: ${max}`);

// raqamlarni teskariga o'girish
// let number = prompt('Iltimos, bir nechta son kiriting: ');
// let reversedNumber = '';
// for (let i = number.length - 1; i >= 0; i--) {
//     reversedNumber += number[i];
// }
// console.log(`Kiritilgan sonning teskari tartibda qiymati: ${reversedNumber}`);

// foydalanuvchi kiritilgan sonni jami yig'indisi:
// let num = prompt('Istalgan sonlarni kiriting');
// let result = 0;
// for(let i = 0; i < num.length; i++){
//   result += parseInt(num[i])
// }
// console.log(`yig'indi: ${result}`)

// const num = [1,2,3,4]
// num.forEach((item) => {
//  const square = Math.pow(item,2)
//   console.log(`son: ${item} kvadrati: ${square}`)
// })

// const num = [1,2,3,4]
// num.forEach((value) => {
//  const square = value ** 2
//   console.log(`son: ${value} kvadrati: ${square}`)
// })

// KIRITILGAN ISIMNI BOSHINI KATTA QILISH
// function myFunction(name){
//   return name.at(0).toUpperCase() + name.slice(1).toLowerCase()
// }
// const car = 'gentra'
// console.log(myFunction(car))

// const num = [1, 2, 3, 4];
// let i = 0;

// do {
//   const value = num[i];
//   const square = value ** 2; // Yoki Math.pow(value, 2)
//   console.log(`Son: ${value}, Kvadrati: ${square}`);
//   i++;
// } while (i < num.length);



// let son = parseInt(prompt('1 dan 10 gacha son kiriting'));

// for(; son < 1 || son > 10;){
//   son = parseInt(prompt("xato 1 dan 10 1gacha son kiriting"))
// }

// console.log(`rahmat kiritilgan son ${son}`)

// let parol;
// do{
//   parol = prompt('parolni kiriting');
// }while(parol !== '123');

// console.log(`xush kelibsiz parol to'g'ri kiritildi`)

const narxlar = [5000, 3000, 8000, 1500, 7000];
let jamiSumma = 0;
let index = 0;

do {
    const narx = narxlar[index];
    console.log("Mahsulot narxi: " + narx);
    jamiSumma += narx;
    index++;
} while (index < narxlar.length);

console.log("Jami summa: " + jamiSumma);







