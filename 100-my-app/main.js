// Define global variables
let name = "Janet";
let age = 25;
let hasDriverLicense = true;
 

// Calculate whether the person is eligible to rent a car
let canRentCar = age >= 25 && hasDriverLicense;

// Compare the person's name with a specified string
let isNameMatch = name === "Bob" || name === "Alice";

// Check if the person is a underage
let isUnderage = age >= 25 && age <= 24;

// Display the decision output based on the variables
if (canRentCar) {
  console.log(`${name} can rent a car.`);
} else {
  console.log(`${name} cannot rent a car.`);
}

if (isNameMatch) {
  console.log(`The name ${name} matches.`);
} else {
  console.log(`The name ${name} does not match.`);
}

if (isUnderage) {
  console.log(`${name} is too young.`);
} else {
  console.log(`${name} is not young.`);
}