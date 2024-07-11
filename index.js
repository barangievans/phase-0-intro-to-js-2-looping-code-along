// index.js

// Function to generate thank you messages
function writeCards(names, gift) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${gift} gift!`);
  }
  
  // Function to count down from a number to zero
  function countDown(startingNumber) {
    let currentNumber = startingNumber;
  
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  
  module.exports = {
    writeCards,
    countDown
  };
  
