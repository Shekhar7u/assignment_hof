
let items = {
    item1: 10,
    item2: 20,
    item3: 15,
    item4: 30
  };
  
  // Exchange rate: 1 USD to 80 INR
  let exchangeRate = 80;
  
  // Function to convert USD to INR
  function convertToRupees(price) {
    return price * exchangeRate;
  }
  
  // Convert prices to Rupees using the map function
  let convertedItems = Object.keys(items).reduce(function(result, key) {
    result[key] = convertToRupees(items[key]);
    return result;
  }, {});
  
  // Output the converted prices
  console.log(convertedItems);
  