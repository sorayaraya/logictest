var a = "";
var n = 5;
var m = n - 1;
for (i = 1; i <= n; i++) {
  a = a.trim();
  a = " ".repeat(m) + a + (i > 1 ? " " : "") + "*";
  console.log(a);
  m--;
}
