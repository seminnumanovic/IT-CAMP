// function paperwork(n, m) {
//     if (n < 0 || m < 0) return 0;
//     return n * m;
// }
// for (let i = 0; i < 10, i++)

// let cars = [ "BMW", "Volvo", "Mini", "Mercedes", "Audi", "Fiat", "Porshe", "Volkswagen"];
// for (let i=cars.length - 1; i >= 0; i--)

// function solution(start, finish) 
// {
//   let niz = []
//   for (let i = start; i <= finish;){
//     if( i + 3 < finish ){
//       i += 3;
//       niz.push(i)
//     }
//     else if ( i + 1 <= finish )
//       {
//         i += 1;
//         niz.push(i)
//       }
//     else {
//       if ( i === finish){
//         return niz.length;
//       }
//     }
//   }
// }





// let broj1 = parseFloat(prompt("Unesite broj 1"));
// let broj2 = parseFloat(prompt("Unesite broj 2"));



// if (broj1 > broj2){
//     console.log("Prvi je veci od Drugog broja");
// }
// else if (broj1 < broj2){ 
//     console.log("Drugi je veci od Prvog broja");
// }
// else{
//     console.log("Jednaki su");
// }


let broj1 = parseFloat(prompt("Unesite broj 1"));
let broj2 = parseFloat(prompt("Unesite broj 2"));
let brojx = parseFloat(prompt("Unesite broj x"));

brojx = Math.pow(brojx, 2);

if (brojx>broj1 && brojx<broj2){
    console.log("Broj 3 se nalazi izmedju broja 1 i broja 2");
}
else{
    console.log("Broj 3 se ne nalazi izmedju zadatih brojeva");
}


