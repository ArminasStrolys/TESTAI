function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------- 1 -----------------------

// let a = rndNum(0, 10)
// let b = rndNum(0, 10)

// if (a > b){
//   console.log(`A daugiau už B: A=${a}, B=${b}`);
// } else if (a < b) {
//   console.log(`B daugiau už A: B=${b}, A=${a}`);
// } else {
//   console.log(`Lygu: A=${a}, B=${b}`);
// }

// ----------------------- 2 -----------------------

// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }

// ----------------------- 3 -----------------------

// for (let i = 0; i <= 5; i++){
//   console.log(i*2);
// }

// ----------------------- 4 -----------------------

// for (let i = 0; i < 5; i++){
//   console.log(rndNum(1, 10));
// }

// ----------------------- 5 -----------------------

// while (true){
//   let x = rndNum(1, 10)
//   console.log(x);
//   if (x == 5){
//     break
//   }
// }

// ----------------------- 6 -----------------------

// let array = [];
// let ilgis = rndNum(20, 30);

// for (let i = 0; i < ilgis; i++) {
//   array.push(rndNum(10, 30));
// }

// let max = array[0];
// let max2 = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (max < array[i]) {
//     max2 = max;
//     max = array[i];
//   }
// }

// console.log("Pirma didžiausia reikšmė masyve: " + max);
// console.log("Antra didžiausia reikšmė masyve: " + max2);
// console.log(array);

// ----------------------- 7 -----------------------

// let string = "ABCD";
// let array = [];
// let ilgis = 100;

// let countA = 0;
// let countB = 0;
// let countC = 0;
// let countD = 0;

// for (let i = 0; i < ilgis; i++) {
//   let x = rndNum(0, 3);
//   let y = string.charAt(x);
//   array.push(y);
// }

// array.forEach((element) => {
//   if (element == "A") {
//     countA++;
//   } else if (element == "B") {
//     countB++;
//   } else if (element == "C") {
//     countC++;
//   } else if (element == "D") {
//     countD++;
//   }
// });

// console.log(array);
// console.log('A: ' + countA);
// console.log('B: ' + countB);
// console.log('C: ' + countC);
// console.log('D: ' + countD);

// ----------------------- 8 -----------------------

// const lygineSuma = (a, b) => {
//   let sum = a + b;
//   if (
//     (typeof a === "number" && typeof b === "number") ||
//     (a === Array.isArray(a) && b === Array.isArray(b))
//   ) {
//     return true;
//   } if (sum % 2 != 0){
//     console.log("Nelyginė suma");
//   } 
//   if (true){
//     return sum
//   }
// } 

// console.log(lygineSuma(8, 2));

// ----------------------- 9 -----------------------

// const pirminisSkaicius = (a) => {
//   let b = 0
//   if (typeof a === "number"){
//     return b = true}
//    else if (a % a == 0 && a % 1 == 0){
//     return a
//   }
// }

// console.log(pirminisSkaicius(14));

// ----------------------- 10 -----------------------

//  const telefonoNumeris = (array) => {
//   if (array === Array.isArray(array) && array.length == 10 && typeof array[i] === "number"){
// return (``)
//   }

//  }

//  console.log(telefonoNumeris(3708856224));