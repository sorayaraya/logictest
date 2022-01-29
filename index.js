// create a function that accept single parameter. the parameter will be an array of integer
// your function should be able to count the unique value inside the array
// examples:
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) => 7
// countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])) => 4
// countUniqueValues([])) => 0

// function averagePair(num1, num2) {
//   for (let i = 0; i < num1.length; i++) {
//     for (let j = i + 1; j < num1.length; j++) {
//       let sum = num1[i] + num1[j] / 2;
//       if (sum == num2) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));

var params1 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
var params2 = [1, 2, 2, 2, 2, 2, 2, 2, 4, 6];

// function dataUnique(params) {
//   let numCounter = {};
//   for (let i = 0; i < params.length; i++) {
//     if (!numCounter[params[i]]) {
//
//mengecek apkah sudah ada key ini dlm objek
// numCounter[params[i]] = "exist"; //kalo ada nilainya key diberikan nilai +1
// console.log(numCounter[params[i]]); //print nilai key
// } else {
//   numCounter[params[i]]++;
//     }
//     console.log(numCounter);
//   }
//   let key = Object.keys(numCounter);
//   return key.length;
// }
// console.log(dataUnique(params));

//sifat objek kalau udah punya key, bisa di check lagi tanpa melakukan looping
//
// cara kerja logic
//ketahui yg diinginkan soal itu apa
//ingin mngethui jumlah data unique contohnya
//unique adalah saat angka beberda dengan yg lain
//agar tahu itu unique, maka kita check satu2 data nya, apakah data tersebut sdh ada sebelumnya
//solusinmya cari tahu sifat kodingan (array, objek) gunakan objek utk ngecek krena di data vobjek ada value dan key. dmana key tdak bisa bersifat double
//bagaimana cara memasukkan nilai key dalam sbuah objek? caranya
//console.log setiap proses

// function dataUnique(params2) {
//   let totalUniqueData = 0;
//   for (let i = 0; i < params2.length; i++) {
//     if (i === 0) {
//       totalUniqueData++;
//     } else {
//       //utk mengecek data terakhir
//       if (params2[i] !== params2[i - 1]) {
//         totalUniqueData++;
//       }
//     }
//   }

//   console.log(totalUniqueData);
//   return totalUniqueData;
// }

// // console.log(dataUnique(params2));

var keramik = [];
var addKeramik = function (warna, keramik) {
  keramik.push(warna); //menambhkan isi arraynya
  return keramik;
};
console.log(["merah", "hijau", "ungu", "pink"]);
var ambil = function (keramik) {
  if (keramik.length == 0) {
    console.log("tidak ada tumpukan keramik");
  } else {
    keramik.pop(keramik);
    return keramik;
  }
};
console.log(ambil(keramik));
