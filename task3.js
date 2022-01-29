function makeInputVerifier(minimum, maximum) {
  let counts = [0, 0, 0];
  Array.forEach((num) => {
    if (num > 0) counts[0] += 1;
    else if (num < 0) counts[1] += 1;
    else counts[2] += 1;
  });
  counts.forEach((num) => console.log(num / arr / length.toFixed(6)));
  return;
}
function main() {
  const n = parseInt(readLine(), 10);
  const arr = readLine()
    .split("")
    .map((arrTemp) => parseInt(arrTemp, 10));
}
