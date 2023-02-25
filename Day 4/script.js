// Write a function which can convert the time input given in 12 hours format to 24 hours format

const time = '12:10AM';

function convertTo24HrsFormat(time) {
  var textToLower = time.toLowerCase();
  let [hrs, min] = textToLower.split(":");

  if (textToLower.endsWith("am")) hrs = hrs == 12 ? "0" : hrs;
  else if (textToLower.endsWith("pm")) hrs = hrs == 12 ? hrs : String( +hrs + 12);

  return hrs.padStart(2, 0) + ":" + min.slice(0, -2).padStart(2,0);
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
