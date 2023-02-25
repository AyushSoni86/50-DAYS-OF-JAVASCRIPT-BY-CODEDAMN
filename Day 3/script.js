// Write a program to reverse a given integer number

const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    let rev = num;
    let ans = 0;
    while(rev != 0){
        let digit = rev % 10;
        rev = Math.floor( rev / 10);
        ans = ans*10 + digit;
    }
    return ans;
}
console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
