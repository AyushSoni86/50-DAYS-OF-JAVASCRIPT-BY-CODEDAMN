// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = "XeroX";

function getTheGapX(str) {
  let startIndex = str.indexOf("X");
  let lastIndex = str.lastIndexOf("X");
  if (startIndex == -1) return -1;
  // console.log(startIndex+"  "+lastIndex)
  return lastIndex - startIndex;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
