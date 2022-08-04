// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting (){
  console.log(`Hello! How are you today?`);

}
printGreeting()
printGreeting()
printGreeting()


// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function favoriteFood(foodType){
  console.log(`My favorite food is ${foodType}`);

}
favoriteFood(pizza);
// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function payRange(maxPay, minPay, companyName){
  var salary = minPay + maxPay
  console.log(`Looking for a delievery driver at ${companyName}, make up to $${salary} per year!`);
  console.log(`Looking for a delievery driver at ${companyName}, make a minimum pay of $${minPay} per year!`);
}

payRange(11000, 9000, "Amazon");
payRange(11000, 9000, "Amazon");
// 4: Write a function that satifies the following interaction pattern:
function checkStock (quantity, product){
  if (quantity = 3){
    console.log(`${product} - running low`);
  }
  if (quantity >= 4){
    console.log(`${product} is stocked`)
  }
  if (quantity === 0){
    console.log(`${product} - OUT of stock!`)
  }

}
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
