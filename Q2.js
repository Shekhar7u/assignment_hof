//Q2 generate a random number generator with progress indication

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); 
  }
  
  // Function to display the remaining time
  function displayTimeRemaining(seconds) {
    console.log("Time remaining : " + seconds + " seconds");
  }
  
  // Delay function
  function delayGenerateRandomNumber(delay) {
    let seconds = delay / 1000; // Convert milliseconds to seconds
  
    let countdown = setInterval(function() {
      displayTimeRemaining(seconds);
      seconds--;
  
      if (seconds == 0) {
        clearInterval(countdown);
        let randomNumber = generateRandomNumber();
        console.log("Random number generated: " + randomNumber);
      }
    }, 100); // Display time remaining every 1 second
  
    setTimeout(function() {
      clearInterval(countdown);
      var randomNumber = generateRandomNumber();
      console.log("Random number generated: " + randomNumber);
    }, delay);
  }

  let delay = 3000; 
  
  // Call the delay function with the specified delay
  delayGenerateRandomNumber(delay);
  