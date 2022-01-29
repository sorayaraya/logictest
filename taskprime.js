var x = 10;

for (x = 0; x <= 10; x++) {
  let prima = true;

  if (x === 1) {
    const name = "1 bukan bilangan prima";
    const hasil = `${name}`;
    console.log(hasil);
  } else if (x > 0) {
    for (y = 2; y < x; y += 1) {
      if (x % y === 0) {
        prima = false;
      }
    }

    if (prima) {
      console.log(x + " adalah bilangan prima.");
    }
  }
}
