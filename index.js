// Code your solution here!
function printString(str) {
  console.log(str[0]);
  
  if (str.length > 1) {
    let mySubString = str.substring(1, str.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

function isPalindrome(str) {
    var len = str.length;
    if (len === 0 || len === 1) {
        return true;
    }
    
    if (str[0] === str[len - 1]) {
        return isPalindrome(str.slice(1, len - 1));
    }
    
    return false;
}

function addUpTo(array) {
    return (array.length === 0) ? 0 : array[0] + addUpTo(array.slice(1));
}