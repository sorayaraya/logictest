function List() {
  let arr = [];
  function add(name) {
    if (arr.indexOf(name) == -1) arr.push(name);
  }
  function getList() {
    return arr;
  }
  return { add, getList };
}
let fun = List();
fun.add("sang-gajah");
fun.add("-sang-gajah");
fun.add("serigala");
fun.add("-serigala");
fun.add("-harimau");

console.log(fun.getList());
