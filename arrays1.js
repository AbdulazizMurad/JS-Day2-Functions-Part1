let groceries = ["toast", "chips", "water", "tissues", "tomatoes", "cucumbers"];
console.log(groceries);
console.log(groceries[1]);
let numberOfGroceries = groceries.length;
console.log(numberOfGroceries);
console.log(groceries[numberOfGroceries - 1]);
let lastElement = groceries.pop();
console.log(lastElement);
console.log(groceries);
groceries.push("soda", "milk");
console.log(groceries);
let first3 = groceries.slice(0, 3);
console.log(`sliced array is: ${first3}`);
console.log(groceries);
delete groceries[2]; //to delete 3rd element it is index 2 we use delete.
console.log(groceries);
groceries.unshift("new-apple"); // to add add beginning of element we use .unshift.
console.log(groceries);
groceries.splice(0, 2, "ketchup", "chilli");
console.log(`after splice: ${groceries}`);
