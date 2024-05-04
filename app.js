// 1-mashq

// let arr = [];
// function getLevel2(n) {
//   for (i = 1; i <= n; i++) {
//     arr.push(2 ** i);
//   }
//   console.log(arr);
// }
// getLevel2(5);

// 2-mashq

// let arr = [];
// function arrBuilder(n, a, b) {
//   for (i = 1; i <= n; i++) {
//     if (i == 2) {
//       arr.push(a, b);
//     } else if (i > 2) {
//       let sum = arr.reduce((total, num) => total + num, 0);
//       arr.push(sum);
//     }
//   }
//   console.log(arr);
// }
// arrBuilder(5, 2, 3);

// 3-mashq

// let arr = [1, 5, 8, 9, 10];
// function reversedArr(arr) {
//   return arr.reverse();
// }
// console.log(reversedArr(arr));

// 4-mashq

// let arr = [1, 5, 8, 9, 3, 10];
// let newArr = [];
// let count = 0;
// function getOddNums(arr) {
//   arr.forEach((element) => {
//     if (element % 2 == 1) {
//       count++;
//       newArr.push(element);
//     }
//   });
//   console.log(`${newArr}, ${count} ta toq son bor`);
// }
// getOddNums(arr);

// 5-mashq

// let arr = [4, 5, 7, 8, 6, 9];
// let newArr = [];
// let nnewArr = [];
// function separateOddEvens(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       nnewArr.unshift(arr[i]);
//     }
//   }
//   return newArr.concat(nnewArr);
// }
// console.log(separateOddEvens(arr));

// 6-mashq

// let arr = [4, 5, 7, 8, 6, 9, 6, 8, 0, 3];
// let newArr = [];
// function printEvenIndex(arr) {
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[i * 2]);
//   }
//   return newArr;
// }
// console.log(printEvenIndex(arr));

// 7-mashq

// let arr = [4, 5, 7, 8, 6, 9, 6, 8, 0, 3];
// let newArr = [];
// function printEvenIndex(arr) {
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[arr.length - 1 - i * 2]);
//   }
//   return newArr;
// }
// console.log(printEvenIndex(arr));

// 8-mashq

// let arr = [4, 5, 7, 8, 6, 9, 6, 8, 0, 3];
// let newArr = [];
// function printEvenIndex(arr) {
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[i * 2]);
//   }
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[i * 2 + 1]);
//   }
//   return newArr;
// }
// console.log(printEvenIndex(arr));

// 9-mashq

// let arr = [4, 5, 7, 8, 6, 9, 6, 8, 0, 3];
// let newArr = [];
// let nnewArr = [];
// function printEvenIndex(arr) {
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[i * 2 + 1]);
//   }
//   for (i = 0; i < arr.length / 2; i++) {
//     nnewArr.unshift(arr[i * 2]);
//   }
//   return newArr.concat(nnewArr);
// }
// console.log(printEvenIndex(arr));

// 10-mashq

// function alternateArray(arr) {
//   let result = [];
//   let n = arr.length;

//   for (let i = 0; i < n / 2; i += 2) {
//     result.push(arr[i], arr[i + 1], arr[n - 1 - i], arr[n - 2 - i]);
//   }

//   return result;
// }
// let inputArray = [4, 5, 7, 8, 6, 9];
// let outputArray = alternateArray(inputArray);

// console.log(outputArray);

// 11-mashq

// let arr = [1, 6, 9, 5, 8, 10, 15];
// let k = 2;
// let l = 5;
// let sum = 0;
// function rangeOutSum(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (i >= k && i <= l) {
//       continue;
//     } else {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(rangeOutSum(arr));

// 12-mashq

// let arr = [10, false, "", "Abdulaziz", null];
// let truthy = [];
// let falsy = [];
// for (let element of arr) {
//   if (Boolean(element) === true) {
//     truthy.push(element);
//   } else {
//     falsy.push(element);
//   }
// }
// console.log("truthy:", truthy);
// console.log("falsy:", falsy);

// 13-mashq
// let arr = [13, 6, 9, 5, 8, 10, 15, 42, 3, 0, 1];
// let minNum = arr[0];
// function getOddMin(arr) {
//   for (i = 0; i < arr.length; i += 2) {
//     if (minNum > arr[i]) {
//       minNum = arr[i];
//     }
//   }
//   return minNum;
// }
// console.log(getOddMin(arr));

// 14-mashq

// let arr = [13, 6, 9, 5, 8, 10, 15, 42, 3, 0, 1, 99, 3];
// let maxNum = arr[0];
// function getOddMin(arr) {
//   for (i = 1; i < arr.length - 1; i += 2) {
//     if (maxNum < arr[i]) {
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// }
// console.log(getOddMin(arr));

// 15-mashq

// function findLastLocalMax(arr) {
//   let n = arr.length;
//   for (let i = n - 1; i >= 1; i--) {
//     if (arr[i] > arr[i - 1]) {
//       return i;
//     }
//   }

//   return 0;
// }
// let arr = [3, 5, 2, 8, 6, 9];
// console.log(findLastLocalMax(arr));

// Qo'shimcha masalalar

// 16-mashq

// function engYaqinElementTopuvchi(massiv, R) {
//   let engYaqin = massiv[0];

//   for (let i = 1; i < massiv.length; i++) {
//     if (Math.abs(massiv[i] - R) < Math.abs(engYaqin - R)) {
//       engYaqin = massiv[i];
//     }
//   }

//   return engYaqin;
// }
// let massiv = [2, 5, 8, 10, 13];
// let R = 7;
// let engYaqin = engYaqinElementTopuvchi(massiv, R);
// console.log(
//   "Massivning elementlari orasidan",
//   R,
//   "ga eng yaqin son:",
//   engYaqin
// );
