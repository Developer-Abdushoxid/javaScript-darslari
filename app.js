// let x = 9
// let y = '3'
// console.log(x / y)

// let name = 'ali';

// let name1 = name.length;
// console.log(name1)


// STRING

// 1.1

// let country = 'Uzbekistan';
// console.log(country.charCodeAt(0))

// function getBelgi(txt,idx){
//     let result = txt.charCodeAT(idx);
//     return result
// }

// console.log(getBelgi('',0))

// let item = prompt('Ingliz alifbosidagi istalgan harf kiriting: ');

// function getAsci(i){
//     let result = i.charCodeAt(0)
//     return result;
// }

// console.log(getAsci(item));

// 10 marta salom chiqarish

// for (let i = 0; i < 10; i++) {
//     console.log("salom");
// }

// let n = Number(prompt('32 dan katta 126 ga teng yoki kichik bo"lgan ixtiyoriy son kiriting: '));

// function getAsci(){
//     if(n > 32 && n <= 126) {
//         let result = n.charCodeAt(0);
//         return charAt(result)
//        }
// }

// console.log(getAsci())

// let n = "Number(prompt('32 dan katta 126 ga teng yoki kichik bo'lgan ixtiyoriy son kiriting: '))";


// string;
// 1.1 

// function getBelgi(txt, idx){
//   let result = txt.charCodeAt(idx);
//   return result;
// }
// console.log(getBelgi('salom', 4))

// let item = prompt('Ingliz alifbosidagi istalgan harfni kiriting: ');
// function getAsci(i){
//   let result = i.charCodeAt(0);
//   return result;
// }
// console.log(getAsci(item));


// 2.2 masala

// let n = Number(prompt("32 dan katta 126 ga teng yoki kichik bo'lgan Ixtiyoriy butun son kiriting: "));

function findCharacter() {
    if( n > 32  && n <= 126) {
        let character = String.fromCharCode(n);
        return character;
    }
  }
  
  // console.log(findCharacter());
  
  // 2.3
  // let str = prompt("Kompyuteringizdagi ixtiyoriy belgini kiriting: ");
  
  function findCharacterTwo(){
    let res1 = str.charCodeAt(0);
    let item1 = String.fromCharCode(res1 - 1);
    let item2 = String.fromCharCode(res1 + 1);
    return `ASCII jadvalidagi ${str} belgidan bitta oldindagi belgi: ${item1}, bitta keyingi belgi: ${item2}`;
  }
  
  // console.log(findCharacterTwo());
  
  
  // 2.4
  // let n = Number(prompt("1 dan katta 26 dan kichik bo'lgan butun son kiriting: "));
  
  function alfavitN(){
    let str = 'A';
    let idx = str.charCodeAt(0);
    if(n >= 1 && n <= 26){
      for(let i = 0; i < Math.floor(n); i++){
        console.log(String.fromCharCode(idx + i))
      }
    }else {
      console.log("Damingni ol")
    }
  }
  
  // alfavitN();
  
  // 2.5
  // let n = Number(prompt("1 dan katta 26 dan kichik bo'lgan butun son kiriting: "));
  
  function alfavitN(){
    let str = 'z';
    let idx = str.charCodeAt(0);
    if(n >= 1 && n <= 26){
      for(let i = 0; i < Math.floor(n); i++){
        console.log(String.fromCharCode(idx - i))
      }
    }else {
      console.log("Damingni ol")
    }
  }
  
  // alfavitN();
  
  // 2.6
  // let character = prompt('Belgi: ');
  function identifyCharacter(char) {
    if (!isNaN(parseInt(char))) {
        return "digit";
    }
    if (/[a-zA-Z]/.test(char)) {
        return "satr";
    }
    return 0;
  }
  
  // Test qilib ko'ramiz:
  // console.log(identifyCharacter(character));
  
  
  // 2.7 
  
  // let satr = prompt('Satr kiriting: ');
  
  function aniqla(a){
    let res1 = String(a).charCodeAt(0)
    let res2 =String(a).charCodeAt(String(a).length - 1)
    return {res1, res2}
  }
  
  // console.log(aniqla(satr))
  
  
  
  // 2.8 
  function repeatStr(n, str){
    let result1 = str.padStart(n, str)
    let result2 = str.repeat(n)
  
    return {result1, result2};
  }
  
  // console.log(repeatStr(5, 'A'));
  
  // 2.9 
  function repeatStrTwo(str1, str2){
    let result = str1.concat(' ', str2)
    return result;
  }
  
  // console.log(repeatStrTwo('Hello', 'world'));
  
  let str = prompt('str kiriitng:')
  
  function repeatStrThree(str){
    let result = '';
    for(let i = str.length - 1; i >= 0; i--){
      result += str.split('')[i];
    }
  
    return result;
  }
  
  console.log(repeatStrThree(str));