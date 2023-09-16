// 4.14

// for (let i = 100; i <= 999; i++) {
//     let a = Math.floor(i / 100);
//     let b = Math.floor((i / 10) % 10);  
//     let c = i % 10;                    
    
//     if (b === a + 2 && c === b + 1) {
//         console.log(i);
//     }
// }


// var n = parseFloat(prompt("n ="));
// for (i=0; i<n; i++){
//     var broj = parseFloat(prompt("Unesite broj:"))
// }


// var n = parseInt(prompt("Унесите цели број n:"));

// if (isNaN(n) || n < 0) {
//   console.log("Невалидан унос. Молимо унесите позитиван цели број или нулу.");
// } else {
//   var faktorijel = 1;

//   for (var i = 2; i <= n; i++) {
//     faktorijel *= i;
//   }

//   console.log("Факторијел броја " + n + " је: " + faktorijel);
// }


// let a = parseFloat(prompt("Unesite prirodan broj n: "));
// let f=1, s=0;
// for (i=1; i<=n; i++){
//     f*=i;
//     s+=f;
// }

// let n = parseFloat(prompt("Unesite prirodan broj n: "))
// var s = 0, x=0;
// for (var i=1; i<=n; i++){
//     s +=i;
//     x = s/i;
// }
// console.log("Zbir prvih " + n + " celih brojeva je: " + s);
// console.log("Aritmeticka sredina je : "+ x);


//////////////////////// 4.14 zadatak //////////////////

// let broj = 0;
// let s=0;
// let d=0;
// let j=0;

// for(let i=100; i<=999; i++){

//      s = Math.floor(i / 100);
//      d = Math.floor((i%100)/10);
//      j = Math.floor(i%10);
    
//     if(s+2 === d && d+1 ===j){
//         broj = s*100+d*10+j;
//         console.log(broj);
//     }

// }



//////////////////////// 4.15 zadatak ///////////

// let broj=0;
// let st=0;
// let de=0;
// let je=0;

// for(let i=100; i<=999; i++){
    
//      st = Math.floor(i / 100);
//      de = Math.floor((i%100)/10);
//      je = Math.floor(i%10);
    
//     if(i === Math.pow(st,3)+Math.pow(de,3)+Math.pow(je,3)){
//         broj = i;
//         console.log("amstrongovi brojevi:", broj);
//     }
// }


//////////////////////// 4.16 zadatak //////////////

// let broj=0;
// let st=0;
// let de=0;
// let je=0;

// for(let i=100; i<=999; i++){
    
//      st = Math.floor(i / 100);
//      de = Math.floor((i%100)/10);
//      je = Math.floor(i%10);
    
//     if(i === Math.pow(st*10+de,2)-Math.pow(je,2)){
//         broj = i;
//         console.log("brojevi:", broj);
//     }
// }


////////////////////// 4.17 zadatak ///////////////

// let broj=0;
// let st=0;
// let de=0;
// let je=0;

// for(let i=100; i<=999; i++){
    
//      st = Math.floor(i / 100);
//      de = Math.floor((i%100)/10);
//      je = Math.floor(i%10);

//      broj = st*10+je;
    
//     if(i % broj === 0){
//         console.log("brojevi:", i);
//     }
// }


///////////////////////// 4.18 zadatak //////////////

let brojevi=0;
let st=0;
let de=0;
let je=0;
let suma=0;

for(let i=100; i<=999; i++){
    
     st = Math.floor(i / 100);
     de = Math.floor((i%100)/10);
     je = Math.floor(i%10);

    if(st+de+je === 5){
        brojevi++;
        suma += i;
    }
}
console.log("suma je:", suma);
console.log("takvih brojeva ima:", brojevi);