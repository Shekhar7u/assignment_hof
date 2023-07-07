// Function to match valid URLs
function matchURL(input) {
    var regex = /^(http:\/\/|https:\/\/)[\w\d\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
  
    if (regex.test(input)) {
      console.log("The input is a valid URL.");
    } else {
      console.log("The input is not a valid URL.");
    }
  }
  
  matchURL("http://www.example.com"); 
  matchURL("http://example"); 

  