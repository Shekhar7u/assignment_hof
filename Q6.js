// Function to validate LinkedIn profile URLs
function validateLinkedInURL(input) {
    var regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    if (regex.test(input)) {
      console.log("The input is a valid LinkedIn profile URL.");
    } else {
      console.log("The input is not a valid LinkedIn profile URL.");
    }
  }

  validateLinkedInURL("https://www.linkedin.com/in/shekhar123"); // Valid LinkedIn profile URL
  validateLinkedInURL("https://www.linkedin.com/in/shekhar-url"); // Invalid LinkedIn profile URL
  validateLinkedInURL("https://www.linkedin.com/in/shekhar-singh-is-way-too-long-and-exceeds-the-character-limit"); // Invalid LinkedIn profile URL
  