const number = "+919876543210";

function validateMobile(number) {
  const regexMobile = /^(\+91|0)?\s?\d{10}$/;
  return regexMobile.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
