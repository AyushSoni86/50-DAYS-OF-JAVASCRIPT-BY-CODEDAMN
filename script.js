// // challenge 3

// let a= 50;
// console.log(a)

// const num = 3849;

// function reverseGivenInteger(num) {
//     // write your solution here
//     let rev = num;
//     let ans = 0;
//     while(rev != 0){
//         let digit = rev % 10;
//         console.log(digit);
//         rev = Math.floor(rev / 10);
//         ans = ans*10 + digit;
//     }
//     return ans;
// }

// console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)

// challenge 4
// const time = "01:59PM";
// const timeText = "10:02PM";

// function convertTo24HrsFormat(time) {
//   var textToLower = time.toLowerCase();
//   let [hrs, min] = textToLower.split(":");

//   console.log(hrs);
//   console.log(min);

//   if (textToLower.endsWith("am")) hrs = hrs == 12 ? "0" : hrs;
//   else if (textToLower.endsWith("pm")) hrs = hrs == 12 ? hrs : String(+hrs + 12);

//   return hrs.padStart(2, 0) + ":" + min.slice(0, -2);
// }

// console.log(`Converted time: ${convertTo24HrsFormat(time)}`);


// challenge 5
