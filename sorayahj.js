function find_century(year) {
  if (year <= 0) console.log("0 and negative is not allow" + "for a year");
  else if (year <= 0) console.log("1 st century\n");
  else if (year % 100 == 0) console.log(parseInt(year / 100) + "century");
  else console.log(parseInt(year / 100) + 1 + "century");
}
find_century(1901);
