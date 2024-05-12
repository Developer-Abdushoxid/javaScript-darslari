// const demo = document.getElementById('demo')
// const button1 = document.getElementById('button1')
// const button2 = document.getElementById('button2')
// const salom = document.getElementById('salom')
// const button = document.getElementById('button')


// button.onclick = function salom1(){
//     salom.textContent = 'hello'
// }



// button1.onclick = function myFunction(){
//  demo.innerHTML = 'Welcome Java Script'
// }

// button2.onclick = function myFunction(){
//     demo.innerHTML = 'Good bye'
//    }

// myFunction();

// document.write(15 + 13)

// alert (5 +9)

// console.log(5 + 55, 87+90)

// button2.onclick = function myfunction(){
//     window.print()
// }

// const a = 11;
// const b = 85;
// let z = a + b;

// console.log(z)

// let x = 2 + 3 + '5'
// const demo = document.getElementById('salom')

// demo.innerHTML = x


// const cars = ["Saab", "Volvo", "BMW"];


// cars[1] = "Toyota";

// cars.push("Audi");
// cars.push('lacetti')
// cars[0] = 'gentra'
// console.log(cars)


    //       OPERATORLAR

    //    Java scriptda operatorlar quyidagi turlarga bo'linadi :
       
    //    1. Arifmetik operatorlar
    //    2. Belgilash operatorlari
    //    3. Taqqoslash operatorlar
    //    4. String operatorlar
    //    5. Mantiqiy operatorlar
    //    6. Bitwise operatorlar
    //    7. Uchlik operatorlar
    //    8. Operatorlar turlari

    //            Arifmetik operatorlar

    // 1. =  tayinlash operatori
    // 2. +  qo'shish operatori
    // 3. *  ko'paytirish operatori
    // 4. < va >  taqqoshlash operatori
    // 5. -  ayirish operatori
    // 6. ** darajalash operatori
    // 7. / bo'lish operatori
            
    //        Tayinlash operatorlar

    // 1. =+ qo'shishni tayinlash
    // 2. =- ayirishni tayinlash
    // 3. =* ko'paytirishni tayinlash va hokazo..
      
    //   Mantiqiy operatorlar

    // 1. && - logical and  mantiqiy va
    // 2. || - logical or  mantiqiy yoki
    // 3. ! - logical not  mantiqiy yo'q

    //     Bitwise tayinlash operatorlari

    // 1. &=
    // 2. ^=
    // 3. |= 

    //    let x = 10
    //     x =+ 15
    //    let y = 2
       
    //    console.log(x + y)
    //    let result = 10 & 12; 
    //    console.log(result);


    //            Java scriptda 8 ta ma'lumot turi (data types) mavjud 

    //     1. string - qator
    //     2. number -  raqam
    //     3. biginnt
    //     4. boolean -  mantiqiy (true, false)
    //     5. undefined -  aniqlanmagan
    //     6. null 
    //     7. symbol -  belgi
    //     8. object -  obyekt

    //     Object ma'lumotlar 3 turga bo'linadi

    //     1. object
    //     2. array
    //     3. date

    //           Obyektlar
            
    //   const name = {} -- bo'sh obyekt



    //   const person = {
    //     name: 'ali',
    //     surname: 'vali',
    //     phone: 2222222,
    //     date: 20240402,
    //     fullname: function(){
    //      return this.name + ' ' + this.surname
    //     }
    //   }
    //   console.log(person.fullname)

    // const person = {
    //     firstName: "John",
    //     lastName : "Doe",
    //     id  : 5566,
    //   };
    //   console.log(person.firstName)

//                  HTML holatlari (EVENTS)

//     1. onchange - html elementini o'zgartiradi
//     2. onclick - foydalanuvchi html elementini bosganda 
//     3. onmouseover - Foydalanuvchi sichqonchani HTML elementi ustiga siljitadi
//     4. onmouseout - Foydalanuvchi sichqonchani HTML elementidan uzoqlashtiradi
//     5. onkeydown - Foydalanuvchi klaviatura tugmachasini bosadi
//     6. onload - Brauzer sahifani yuklashni tugatdi
                  

//               STRING metodlar

//     1. charAt() - satrda belgilangan indeksini qaytaradi
//        let text = 'hello world'
//        console.log(text.charAt(1))

//    2. lenght - string (satr) uzunligini qaytaradi
//        let text = 'salom'
//        alert(text.length)

//    3. charCodeAt() - unicode dagi indeksini qaytaradi
//       let word = 'assalomu aleykum'
//     console.log(word.charCodeAt(1))
   
//    4. at() - elementning indeksini aniqlaydi
//        at() - metodi 2022 yildan qo'shilgan
//        let salom = 'hello world'
//        console.log(salom.at(-2))
//        let salom1 = 'hello world'
//        console.log(salom1.at(2))

//        String (satr) belgilarini qismlarga ajratishni 3 ta usuli bor
//        java script pozitsiyalar 0 dan boshlanadi
//          1. slice (start, end)
//          2. substring (start, end)
//          3.substr(start, length)

//       1. Slice (tilim) satrni bir qismini chiqaradi va chiqarilgan qismni yangi qatorga qaytaradi
//          Usul ikkita parametr qabul qiladi (boshlang'ich qiymat va oxirgi qiymat)
//          misol:
//           let qism = 'uzbekistan'      
//           console.log(qism.slice(0,5)) // console.log(uzbek)
//         Agar ikkinchi parametr yozilmasa qolgan qismni kesib tashlaydi
//          misol:
//            let word = 'Australia'
//            console.log(word.slice(5))  // console.log(alia)
//         Agar parametr manfiy bo'lsa oxiridan hisoblatdi
//            let word = 'Australia'
//            console.log(word.slice(5))  // console.log(ralia)

//       2. substring() - slice() ga o'xshaydi
//          farqi 0 dan kichik boshlang'ich va yakuniy qiymatlarni 0 sifatida qabul qiladi
//          misol:
//           let str = 'Uzbekistan'
//           console.log(str.substring(1,5))  // console.log(zbek)
//           Agar ikkinchi parametr yozilmasa qolgan qismni kesib tashlaydi 

//       3.substr() slice() ga o'xshaydi farqi ikkinchi parametr chiqarilgan qismning uzunlugini aniqlaydi
//       misol:
//           let str = 'Uzbekistan'
//           console.log(str.substr(0,5)) //console.log(uzbek)

//           SATRLAR ni katta yoki kichik qilishimiz munkin quyida:
//       1. toUpperCase() - harflarni katta qilib beradi
//         misol:
//         let str = 'Uzbekistan'
//         console.log(str.toUpperCase()) //console.log(UZBEKISTAN)

//       2. toLowerCase() - harflarni kichik qilib beradi
//       misol:
//         let str = 'Uzbekistan'
//         console.log(str.toLowerCase()) //console.log(uzbekistan)

//       concat - ikki yoki undan ortiq qatorlarni birlashtiradi
//          misol: 
//            let text = 'ali'
//            let text1 = 'vali'
//            let text2 = text.concat(' ', text1)
//            console.log(text2)

//             Barcha string usullar satrni o'zgartirmaydi balki almashtiradi asli o'zgarmaydi
//       trim() - metodi satrning ikki yon tarafidagi bo'shliqlarni olib tashlaydi
//          misol:
//              let text = ' toshkent  '
//              console.log(text.trim())  // console.log(toshkent)   
             
//       trimStart() - metodi 2019 yilda qo'shiilgan bu metod satrni boshidan bosh joyni olib tashlaydi
//          misol:
//            let text = ' toshkent  '
//            console.log(text.trimStart())  // console.log(toshkent  ) 
//       trimStart() metodi 2020 yil yanvardan brauzer qo'llab quvvatlaydi

//       trimEnd() - metodi 2019 yilda qo'shiilgan bu metod satrni oxiridan bosh joyni olib tashlaydi

//       padStart() - metodi boshidan boshlab satrni to'ldiradi bu metod 2017 yilda qo'shilgan
//       misol:
//          let word = '8'
//          let pad = word.padStart(7,'a')
//          document.getElementById('salom').innerHTML = pad  // aaaaaa8

//       padEnd() - metodi oxiridan boshlab satrni o'rnatadi bu metod 2017 yilda qo'shilgan
//          let word = '8'
//          let pad = word.padEnd(7,'a')
//          document.getElementById('salom').innerHTML = pad  // 8aaaaaa

//       repeat() bu metod satrni bir qator nusxalar bilan qaytaradi
//         misol:
//           let text = "Hello world!";
//           let result = text.repeat(2);
//           document.getElementById('salom').innerHTML = result  // Hello world!Hello world!
//            repeat() satrning bir qator nusxalari bilan qatorni qaytaradi.
//            repeat() yangi qatorni qaytaradi.

//       replace() bu metod belgilangan qiymatni satrdagi boshqa qiymat bilan almashtiradi
//         misol:
//           let text = "Hello world!";
//           let result = text.replace('world!','John');
//           document.getElementById('salom').innerHTML = result  // Hello John

//           Katta - kichik harflarni o'zgartirish uchun /satr/i dan foydalanamiz
//            let text = "Hello world!";
//           let result = text.replace(/WORLD/i,'John');
//           document.getElementById('salom').innerHTML = result  // Hello John
          
//           Barcha mosliklarni almashtirish uchun /satr/g dan fodalanamiz
//           misol:
//            let text = "Please visit Microsoft and Microsoft!";
//           let newText = text.replace(/Microsoft/g, "W3Schools");
//            document.getElementById('salom').innerHTML = newText  // Please visit W3Schools and W3Schools!
//        replaceAll() bu metod 2021 yilda qo'shilgan 
//        replaceAll() Internet Explorerda ishlamaydi

//          let text = 'I love cats.
//           Cats are very easy to love.
//            Cats are very popular.'
//          text = text.replaceAll('Cats', 'Dogs')
//          text = text.replaceAll('cats', 'Dogs')
//         console.log(text)

//       split() bu metod satrni massivga aylantirish uchun ishlatiladi
//       misol:
//        let text = "a,b,c,d,e,f";
//        const myArray = text.split(",");
//        console.log(myArray)

//                 ARRAY
//         Java scriptda pozitsiyalar 0 dan boshlanadi

//     1. indexOf() bu metod birinchi paydo bo'lgan satrni indeksni qaytaradi
//        misol:
//          let text = "Please locate where 'locate' occurs!";
//          let index = text.indexOf("locate"); 
//          console.log(index)  // 7

//     2. lastIndexOf() bu metod satrda belgilangan matnning oxirgi marta paydo
//         bo'lish indeksini belgilaydi agar matn topilmasa -1 chiqadi
//         misol:
//           let text = "Please locate where 'locate' occurs!";
//           let index = text.lastIndexOf("locate");
//           console.log(index)  // 21

//     3. match()satrni satrga (yoki oddiy ifodaga) moslashtirish natijalarini o'z ichiga
//        olgan massivni qaytaradi
//        misol:
//           let text = "The rain in SPAIN stays mainly in the plain";
//           const myArr = text.match("stays");
//           console.log(myArr)
//         Agar satrlardagi barcha bir xil elememtlarni topish uchun
//         /satr/gi belgisidan foydalanamiz
//         misol:
//         let text = "The rain in SPAIN stays mainly in the plain";
//          const  text1= text.match(/ain/gi);
//          console.log(text1)

//     4. matchALL() bu metod satrdagi bir xil elementlarni barchasini qaytaradi
//        misol:
//         let txt = 'I love you cats. Cats are very easy to love.Cats are very popular';
//         let text1 = txt.matchAll('Cats')
//         console.log(text1)
//       matchALL() bu metod 2020 yilda qo'shilgan

//     5. includes() metod agar satrda belgilangan qiymat bo'lsa true chiqadi
//         aks holda false qiymat chiqadi
//         misol:
//       let text = "Hello world, welcome to the universe.";
//      let text1 = text.includes("world");
//      console.log(text1)
          
//       Java scriptda back-tics usuli sintaksisi quyidagicha:
//       let text = `satr`

//       Java scriptda interpolatsiya usuli sintaksisi quyidagicha:
//       ${satr nomi}
//       misol:
//        let firstName = "John";
//        let lastName = "Doe";
//        let text = `Welcome ${firstName}, ${lastName}!`;
//        console.log(text)

//        java scriptda raqamlar har doim 64 bitli suzuvchi nuqtadir
//        JavaScript qoʻshish va birlashtirish uchun + operatoridan foydalanadi.
//        Raqamlar qo'shiladi. Satrlar birlashtiriladi.
//        java scriptda raqamni satrga qo'shsangiz satr bo'lib chiqadi
//        agar ikkita raqam uchinchi satr kiritsabgiz birinchi raqamni qo'shadi
//        keyin satrni birlashtiradi
//        misol:
//         let x = 10;
//         let y = 20;
//         let z = "30";
//         let result = x + y + z;
//         console.log(result)   // 3030

//         JavaScript barcha raqamli operatsiyalarda satrlarni raqamlarga aylantirishga harakat qiladi:
//         misol:
//         let x = "100";
//         let y = "10";
//         let z = x / y; // 10

//         Lekin + bu belgi satrlar hisoblanmaydi balki biriktiriladi
        
//         Infinity(yoki -Infinity) eng katta raqamdan tashqari raqamni hisoblasangiz, JavaScript qaytariladigan qiymatdir.
//         misol:
//         let myNumber = 2;
//         let txt = '';
// // Execute until Infinity
//        while (myNumber != Infinity) {
//       myNumber = myNumber * myNumber;
//       txt = txt + myNumber + "<br>";
// }
//      document.getElementById('salom').innerHTML = txt

//      JavaScript raqamli konstantalarni, agar ular oldida 0x bo'lsa, o'n oltilik deb izohlaydi.

//      toString()raqamni satr sifatida qaytaradi.

//      valueOf()raqamni raqam sifatida qaytaradi.

//      Hozirgi sanani ko'rish
//        let sana = Date()
//        console.log(sana)

//     Integer() metod agar kiritilgan son butun bo'lsa true 
//       butun bo'lmasa false qaytaradi
//         let x = Number.isInteger(10);
//          console.log(x)

//       Number.EPSILON1 va 1 dan katta bo'lgan eng kichik suzuvchi nuqta o'rtasidagi farq.
//       misol:
//       let x = Number.EPSILON;

//       Number.MAX_VALUEJavaScript-da mumkin bo'lgan eng katta sonni ifodalovchi doimiydir.
//       misol:
//         let number = Number.MAX_VALUE
//         console.log(number)

//         Number.MIN_VALUEJavaScript-da mumkin bo'lgan eng kichik sonni ifodalovchi doimiydir.
//         misol:
//         let number = Number.MIN_VALUE
//         console.log(number)

//         Number.MAX_SAFE_INTEGERJavaScript-dagi maksimal xavfsiz butun sonni ifodalaydi.
//         misol:
//           let number = Number.MAX_SAFE_INTEGER
//            console.log(number) 

//            Number.MIN_SAFE_INTEGERJavaScript-dagi minimal xavfsiz butun sonni ifodalaydi.
//            misol:
//             let number = Number.MIN_SAFE_INTEGER
//             console.log(number)

//                ARRAY - MASSIVLAR

//    Array bu bitta nom ostida ko'p qiymatlarni saqlash uchun ishlatiladi va 
//      array larga indeks raqam orqali qiymatlarni topish mumkin
//   Bo'sh massiv quyidagi ko'ninishda bo'ladi:
//     const array_name = [ item 1, item 2, ...]
//   Massiv indeksi 0 dan boshlanadi
//   Massivni satrlarga quyidagicha o'zgartiriladi:
//     const fruit = ['Banana', 'Orange', 'Apple', 'Mango']
//     document.getElementById('example').innerHTML = fruit.toString();

//     Massivlar bu obyektlarning maxsus turi java scriptda typeof operatori 
//      massiv uchun 'obyektni' qaytaradi

//     Massivlarga elementlarga kirish uchun indeksdan foydaniladi
//     Obyektlar uchun elementlarga kirish uchun nomlardan foydaniladi
//     Obyektlar kalit qiymat hisobida ma'lumot saqlanadi
//     misol:
//     const person = {
//       firstName: 'john',
//       lastName: 'doe',
//       age: '23'
//     }
//     let result = person.firstName
//     console.log(result)

//     Massillarning uzunligi (length) dan foydalanamiz
//     misol:
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//      let length = fruits.length;
//      console.log(length)

//     Birinchi massivning birinchisiga kirish uchun quyidagicha yo'l tutiladi
//      const fruits = ["Banana", "Orange", "Apple", "Mango"];
//      let length = fruits[1];
//      console.log(length)

//     Birinchi massivning oxiriga kirish uchun quyidagicha yo'l tutiladi
//      const fruits = ["Banana", "Orange", "Apple", "Mango"];
//      let length = fruits[fruits.length-1];
//      console.log(length)
     
//      Massiv elementlarini aylanish
//      const fruits = ["Banana", "Orange", "Apple", "Mango"];
//      let fLen = fruits.length;
//       let text = "<ol>";
//       for (let i = 0; i < fLen; i++) {
//         text += "<li>" + fruits[i] + "</li>";
//       }
//       text += "</ol>";
//       document.getElementById('example').innerHTML = text

//       Massivga ma'lumot qo'shish uchun 'push()' dan foydalanamiz
//       misol:
//        const fruits = ["Banana", "Orange", "Apple", "Mango"];
//        fruits.push('lemon')   
//        console.log(fruits)
        
//           ARRAY METODLAR

// 1.  java scriptda massivning uzunligini "length" dan foydalanamiz
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//      let size = fruits.length;

// 2. toString - massivni (vergul bilan ajratiladigan) massiv qiymatlar qatoriga aylantiradi
//   misol:
//           const fruits = ["Banana", "Orange", "Apple", "Mango"];
//           document.getElementById("example").innerHTML = fruits.toString();

// 3. at() - massiv ichidagi elementni olishda ishlatiladi  2022 yilda qo'shilgan
//       misol:
//        const fruits = ["Banana", "Orange", "Apple", "Mango"];
//        let fruit = fruits.at[2];

// 4. join() - barcha massiv elementlarii satrga birlashtiradi
//    toString() bilan bir xil ammo farqi join() da orasiga belgi qo'yish munkin
//    misol:
//      const fruits = ["Banana", "Orange", "Apple", "Mango"];
//      document.getElementById("one").innerHTML = fruits.join(" @ ");

// 5. pop() - massivdan oxirgi elementni olib tashlaydi va olib tashlangan qiymatni qaytaradi
//    misol:
//        const fruits = ["Banana", "Orange", "Apple", "Mango"];
//       document.getElementById("one").innerHTML = fruits.pop();

// 6. shift() - massivning birinchi elementini olib tashlaydi
//     misol:
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("one").innerHTML = fruits.shift();
 ;

// 7. push() bu massiv oxiriga element qo'shadi
//     misol:
//       const fruits = ["Banana", "Orange", "Apple", "Mango"];
//         fruits.push("Kiwi");


  
// 8. unshift() - massivga yangi element qo'shadi (boshiga)
//  misol:
    //  const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.unshift("Lemon");
    // document.getElementById("one").innerHTML = fruits

//     Massivning elementlarini o'zgartirish uchun indeksidan ham foydalansak bo'ladi
//     misol:
//       const fruits = ["Banana", "Orange", "Apple", "Mango"];
//       fruits[0] = "Kiwi";
//       document.getElementById("one").innerHTML = fruits

//       delete() metodi massivdan element o'chirishda foydalaniladi
//       AMMO TAVSIYA BERILMAYDI uning o'rniga pop() yoki shift() tavsiya beriladi
// 9. concat() - massivlarni birlashtirishda ishlatiladi va yangi massiv yaratadi va asl massivni o'zgartirmaydi
//     misol:
//       const myGirls = ["Cecilie", "Lone"];
//       const myBoys = ["Emil", "Tobias", "Linus"];
//       console.log(myGirls.concat(myBoys)) ;

// 10. coptWithin() - massiv elementlarini massivdagi boshqa joyga ko'chiradi
//    Bu massiv ikkita parametr qabul qiladi(1-parametr - qayerga) (2-parametr - qaysi elementni o'chirish kerak) 
 
// 11. flat() - 2019 yilda qo'shilgan metod ma'lum bir chuqurlikka birlashtirilgan pastki qator elementlari bilan yangi massiv yaratadi.
//       ya'ni massivlarni bir qatorda joylashtirib beradi
//      misol:
//       const myArr = [[1,2],[3,4],[5,6]];
//       console.log(myArr.flat());

// 12. splice - massivga yangi element qo'shadi
//  Bu massiv ikkita parametr qabul qiladi(1-parametr - qayerga) (2-parametr - qaysi elementni o'chirish kerak)
//  splice() metodidan foydanib o'chirish tavsiya qilinadi
//      misol:
//       const fruits = ["Banana", "Orange", "Apple", "Mango"];
//       fruits.splice(2, 0, "Lemon", "Kiwi");
//       console.log(fruits)
// 13. toSpliced() - 2023 Array toSpliced() usulini asl massivni oʻzgartirmasdan massivni birlashtirishning xavfsiz usuli sifatida qoʻshdi.
//     toSpliced() usuli va eski splice() usuli oʻrtasidagi farq shundaki, yangi usul asl massivni oʻzgarmagan holda yangi massiv yaratadi,
//      eski usul esa asl massivni oʻzgartirdi
//      misol:
//        const months = ["Jan", "Feb", "Mar", "Apr"];
//      console.log(months)
//     const spliced = months.toSpliced(0,1);
//     console.log(spliced)

// 14. slice() - massivning bir qismini olib yangi massivga ajratadi:
     
//      misol:
//       const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//       console.log(fruits)
//       const citrus = fruits.slice(1);
//       console.log(citrus)
//       slice()ikkita argumentni qabul qilishi mumkin slice(1, 3).

// slice()ikkita argumentni qabul qilishi mumkin slice(1, 3).
// Keyin usul boshlang'ich argumentdan elementlarni va 
// yakuniy argumentgacha (lekin shu jumladan emas) elementlarni tanlaydi.   
// misol:
//   const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//   console.log(fruits)
//   const citrus = fruits.slice(1, 3);
//   console.log(citrus)

          //     JS DA MASSIVLARNI QIDIRISH

// 1.
// indexOF() - massivda element qiymatini qidiradi va uning o'rnini qaytaradi
    // misol:
    // const fruit = ['apple', 'orange', 'apple', 'mango'];
    // let position = fruit.indexOf('apple');
    // console.log(position)

  //2.
  //  lastIndexOf() - massivda belgilangan elementning oxirgi paydo bo'lish o'rnini qaytaradi
  // misol:
  // const fruits = ["Apple", "Orange", "Apple", "Mango"];
  // let position = fruits.lastIndexOf("Apple");
  // console.log(position)
   
// 3.
  // includes() - bu massivda elemnt mavjudligini tekshiradi agar bor bo'lsa true yo'q bo'lsa false qaytaradi
  // bu metod katta kichik harflarga sezgir
  // misol:
  //  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  // let position = fruits.includes('Orange');
  //  console.log(position)

  // 4.
  // find() metodi sinov funksiyadan o'tgan birinchi massiv elementini qaytaradi

// const numbers = [4, 9, 16, 19, 29];
// function myFunction(value,) {
//   return value > 18;
// }  
// let first = numbers.find(myFunction);
// document.getElementById("one").innerHTML = "First number over 18 is " + first;

  //  5. 
  //  findIndex() bu metod test funksiyadan o'tgan birinchi massiv elementining indeksini qaytaradi
//   const numbers = [4, 9, 16, 19, 29];
//  function myFunction(index) {
//    return index > 18;
//  }  
//  let first = numbers.findIndex(myFunction);
//  document.getElementById("one").innerHTML = "First number over 18 is index " + first;

//  6. 
      // findLast - massiv oxiridan boshlanadi va shartga tushgan birinchi elementni qaytaradi
//       const temp = [41, 40, 30, 40, 42, 35, 30];
//       let high = temp.findLast(x => x > 40);

// document.getElementById("one").innerHTML = "The last temperature over 40 was " + high;

// 7. 
// findLastIndex() usuli shartni qanoatlantiradigan oxirgi element indeksini topadi. ECMA 2023 yilda qo'shilgan
// const temp = [41, 40, 30, 40, 42, 35, 30];
//        let high = temp.findLastIndex(x => x > 40);

//  document.getElementById("one").innerHTML = "The last temperature over 40 was in position " + high;

              //  JS DA MASSIVLARNI SARALASH

// 1.
  //  sort() massivni alifbo tartibida tartiblaydi
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // console.log(fruits.sort());

// 2.
//  reverse() - massivdagi elementlarni teskariga aylantiradi
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());

// 3.
//  toSorted - ES2023 yilda qo'shilgan bu usul asl massivni o'zgartirmagan holda yangi massiv yaratadi 
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted)

// 4.
  // toReversed() - ES2023 yilda qo'shilgan bu usul ham asl massivni o'zgartirmasdan yangi massiv yaratadi
    // let months = ['jan', 'feb', 'mar', 'apr'];
    // const reversed = months.toReversed();
    // console.log(reversed)

// 5. 
  // Math.min.apply() massivdagi eng past raqamni topish uchun ishlatiladi
  // const points = [40, 100, 5, 25, 10];
  // document.getElementById("one").innerHTML = myArrayMin(points);
  
  // function myArrayMin(arr) {
  //   return Math.min.apply(null, arr);
  // }

  // 6. 
  // Math.max.apply() massivdagi eng katta raqamni topish uchun ishlatiladi
  //    const points = [40, 100, 5, 25, 10];
  //  console.log(myArrayMax(points));
  
  //  function myArrayMax(arr) {
  //    return Math.max.apply(null, arr);
  //  }

            //  JS MASSIVINI TAKRORLASH

        // Quyidagi funksiyalar 3 ta argument qabul qiladi
        // Element indeksi
        // Element qiymati
        // Massivning O'zi

  // 1.
    // forEach() - har bir massiv elementi uchun bir marta funksiya chaqiradi  
    // const numbers = [1, 2, 3, 4, 5];
    // numbers.forEach(function(number) {
    //   console.log(number);
    // });

  // 2. 
  // map() har bir massiv elementida funksiyani bajarish orqali yangi massiv yaratadi
  //   const numbers = [1, 2, 3, 4, 5];
  //    function myfunction(value){
  //     return value * 2
  //    }
  //    const number = numbers.map(myfunction)
  //    console.log(number)

  // 3. 
  //  flatMap() usuli ES2019 yilda qo'shilgan bu usul birinchi massivning barcha elementlarini xaritalaydi
  //  va keyin massivni tekislash orqali yangi massiv yaratadi
  //  const myArr = [1, 2, 3, 4, 5,6];
  //  const newArr = myArr.flatMap((x) => x * 2);
  // document.getElementById("one").innerHTML = newArr;

// 4. 
// filter() sinovdan o'tgan massiv elementlari bilan yangi massiv yaratadi
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);
// document.getElementById("one").innerHTML = over18;
// function myFunction(value) {
//   return value < 18;}

// 5. 
//   reduce() usuli har bir massiv elementida bitta qiymat ishlab chiqarish(uni kamaytirish)
//     uchun funksiyani ishga tushiradi
    // const numbers = [45, 4, 9, 16, 25];
    // let sum = numbers.reduce(myFunction);
    
    // document.getElementById("one").innerHTML = "The sum is " + sum;
    
    // function myFunction(total, value) {
    //   return total + value;
    // }

  // 6. 
  // Array.from() uzunligi xususiyatiga ega har qanday obyektdan yoki har qanday takrorlanadigan obyektdan Array obyektini qaytaradi
    // const myArr = Array.from("ABCDEFG");
    // document.getElementById("one").innerHTML = myArr;

                      // SANALAR

// const d = new Date();
// console.log(d)

// Java scriptda oylar 0 dan boshlanadi
// yanvar = 0
// dekabr = 11

// 7 ta raqam yil, oy, kun, soat, daqiqa, soniya va millisekundni belgilaydi

// 6 ta raqam yil, oy, kun, soat, daqiqa, soniyani bildiradi

// 5 ta raqam yil, oy, kun, soat va daqiqani bildiradi

// 4 ta raqam yil, oy, kun va soatni bildiradi

// 3 ta raqam yil, oy va kunni bildiradi

// 2 raqam yil va oyni ko'rsatadi

// java scriptda sanalar millisekundda hisoblanadi

// java scriptda sanalarni 1970 yil 1 yanvardan boshlab millisekundlar sifatida saqlaydi

// java script sanalarini kiritish 3 xil usulda foydaniladi

// 1. ISO Date  - '2024-05-12'(Xalqaro standart)
// 2. Short Date - '12.05.2024'
// 3. Long Date - '2024 yil 12 may'


// ISO 8601 sana va vaqtni ko'rsatish uchun xalqaro standartdir.

// ISO 8601 sintaksisi (YYYY-AA-KK) ham afzal qilingan JavaScript sana formati hisoblanadi
// const d = new Date("2015-03-25");

// Qisqa sanalar "MM/DD/YYYY" sintaksisi bilan quyidagicha yoziladi
// const d = new Date("03/25/2015");

// Date.parse()Agar sizda haqiqiy sana qatori bo'lsa, uni millisekundlarga aylantirish usulidan foydalanishingiz mumkin .

let msec = Date.parse('May 12,2024');
console.log(msec)


