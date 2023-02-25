// write a program to reverse a string

const str = "JavaScript is awesome"

function reverseAString(str) {
    let ans = "";
    for(let i = str.length - 1 ; i >= 0 ; i--){
        ans += str.charAt(i);
    }
    return ans;
}

console.log(`Reversed string is: ${reverseAString(str)}`)
