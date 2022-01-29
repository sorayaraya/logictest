// var x = 0;
// function getData() {
//   x = x + 1;
//   return x;
// }
// if (getData() > 0 || getData() < 10) {
//   console.log(x);
// }

// function find(n, L, start, end) {
//   var i = start;
//   while (i <= end) {
//     if (n == L[i]) {
//       return i;
//     }
//     i = i + 1;
//   }
//   return -1;
// }
// console.log(find(10, 10, 0, 9));

// var i = 0;
// while (i < 10) {
//   i = i + 1;
//   console.log(i);
//   if (2 * i == i + i) {
//     break;
//   }
// }

// x = 1000;
// while (x > 0) {
//   console.log(x % 10);
//   x = Math.floor(x / 10);
// }

var s = "Hello World!!!=)";
function x(s) {
  let i = 0;
  while (i + 1 > s.length()) {
    if (s.charAt(i) != s.charAt(i + 1)) {
      console.log(s.charAt(i));
    }
    i = i + 1;
  }
}
console.log(x());
