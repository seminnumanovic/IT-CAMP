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

// let brojevi=0;
// let st=0;
// let de=0;
// let je=0;
// let suma=0;

// for(let i=100; i<=999; i++){
    
//      st = Math.floor(i / 100);
//      de = Math.floor((i%100)/10);
//      je = Math.floor(i%10);

//     if(st+de+je === 5){
//         brojevi++;
//         suma += i;
//     }
// }
// console.log("suma je:", suma);
// console.log("takvih brojeva ima:", brojevi); 



// ///4.19

// let broj = parseInt(prompt("Unesite broj:"))
// console.log("Delioci su:");
// for(let i=1; i <= broj; i++)
// if(broj % i === 0)
// console.log(i);

///////4.20
// let broj = parseInt(prompt("Unesite broj:"))
// let suma = 0;
// for ( i = 1; i < broj; i++)
// {
//     if( broj % i === 0)
//     suma += i;
// }
// if (suma === broj){
//     console.log("Jeste savrsen broj");
// }
// else
// console.log("Nije savrsen");

//////////4.21

// let brojuc = parseInt(prompt("Unesite broj ucenika:"))
// let ocena = 1;
// for( let i = 1; i<=brojuc; i++ )
// {
//     ocena = parseInt(prompt("Unesite ocenu ucenika od 1 do 5:"))
    
// }


// let n = parseInt(prompt("Unesite broj ucenika:"));

// let ukupnaOcena = 0;
// let brojOcena1 = 0;

// for (let i = 1; i <= n; i++) {
//   let ocena = parseInt(prompt("Unesite ocenu za ucenika " + i + ":"));
//   ukupnaOcena += ocena;
//   if (ocena === 1) {
//     brojOcena1++;
//   }
// }

// let prosecnaOcena = ukupnaOcena / n;

// console.log("Prosecna ocena svih ucenika: " + prosecnaOcena);
// console.log("Broj ucenika sa ocenom 1 je: " + brojOcena1);



/// 4.22
// let n = parseInt(prompt("Unesite n:"))
// let h,m,s;

// for( h = 0; h<=23; h++)
//     for( m = 0; m <=59; m++)
//         for( s = 0; s<= 59; s++)
//     {
//         if( h + m +s = n){
//         }
//     }

// let n = parseInt(prompt("unesite n:"));

// for (let i = 0; i < n; i++) 
//     for (let j = 0; j < n*2; j++){
//       console.log("*");
//     console.log("\n");
//     }

/////  4.27

// let n = parseInt(prompt("Unesite n:"))
// let m = parseInt(prompt("Unesite m:"))

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < m; j++){
//         console.log(i);
//     }
//     console.log("\n");
// }

// let n = parseInt(prompt("Unesite n:"))

// for( i =i <=n; i++ ){
//     for( )
// }


/////4.28 

///// a)

// let n = parseInt(prompt("Unesite n: "))

// for ( let i = 1; i<=n; i++){
//     for (let j = 1; j <=n; j++)
//     console.log("*");
//     console.log("\n");
// }



///////  b)

// let n = parseInt(prompt("Unesite n: "))

// for(let i = 1; i<=n; i++){
//     for (let j = 1; j <= n; j++){
//         if( i === 1 && i === n;){
//         console.log("* ");
//     }
//         else if( j===1 && j===n){
//         console.log("* ");
//     }
//     else console.log("  ");

//     }
// }

////// v)

// let n = parseInt(prompt("Unesite n: "))

// for( let i = 1; i <=n; i++){
//     for(let j = 1; j <=i; j++)
//     console.log("*");
// console.log("\n");
// }


////// d)

// let n = parseInt(prompt("Unesite n: "))

// for( let i = 1; i <= n; i++){
//     for(let j = n; j >=i; j--)
//     console.log("*");
// console.log("\n");
// }



// let n = parseInt(prompt("Unesite broj redova"))
// let m = parseInt(prompt("Uneiste broj kolona"))

// for ( let i = 1; i <= 1; i++);
//     let rowOutput = '';
//     for( let j = 0; j <= m; j++){
//         if( i === 1 && i === n){
//             rowOutput += '*'
//         }
//         else{
//             if( j ==== 1 && j ==== m)
//         }
//     }

// let n = parseInt(prompt(" n : "))

// for (let i = 1; i <= i; i++)
// {
//     for ( let j = 1; j <=i; j++ )
//     {
//         if ( i === n){
//             console.log("* ");
//         }
//         else {
//             if (j===1 || j===i)
//             {
//                 console.log("* ");
//             }
//             else console.log(" ");
//         }
//         console.log("\n");
//     }
// }

