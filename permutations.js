const allCombinations = [];

function permutations(str) {
  // find index of the permutator
  let idx = str.indexOf("*");

  if (idx < 0) {
    // avoid infinite recursion. if there is no more permutator, return the string
    allCombinations.push(str);
    console.log(idx);
    return;
  }
  // separate all the elements of the string to replace the permutator with all the possible combinations

  const splitStr = str.split("");

  const addZero = splitStr.slice();

  const addOne = splitStr.slice();

  addZero.splice(idx, 1, "0");

  addOne.splice(idx, 1, "1");

  // use recursion to find all the combinations of the string

  permutations(addZero.join(""));
  permutations(addOne.join(""));
}

permutations("***10*1*");

console.log(allCombinations);
