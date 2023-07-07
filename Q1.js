//Q1 reverse string

let input = "Shekhar";
function reverseString(str) {
  return str.split("").reverse().join("");
}
function delayReverseString(str) {
  setTimeout(function() {
    let reversed = reverseString(str);
    console.log(reversed);
  }, 2000); 
}

// Call the delay function with the input string
delayReverseString(input);



