// Write a function to truncate a string to a certain number of words

const str = "JavaScript is simple but not easy to master";
const wordLimit = 2;

function truncateWithWordLimit(str, wordLimit) {
  // let count = 0;
  // let slice = 0;
  // for (let index = 0; index < str.length; index++) {
  //   if (str.charAt(index) == " ") {
  //     count++;
  //   }
  //   if (count == wordLimit) {
  //     slice = index;
  //     break;
  //   }
  // }

  return str.split(' ').slice(0, 
    wordLimit).join(' ');
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
