// Exercise: Count Unique Fruits
const fruits = ["Apple", "banana", "orange", "aPPle", "Banana", "ORANGE"];
const formattedFruit = fruits.map((fruit) => fruit.toLowerCase());
console.log("formattedFruit", formattedFruit);
const uniqueFruits = new Set(formattedFruit);
console.log("uniqueFruits", uniqueFruits.size);
// Extract values from an array into variables
const colors = ["red", "blue", "green", "yellow"];
[red, blue, green, yellow] = colors;
console.log(red, blue, green, yellow);
// write a function to consume destructing student object
// and return a string with the format: "Name: [name], Age: [age], Grade: [grade]"
const student = {
  name: "John",
  age: 20,
  grade: "A",
};
function a({ name, age, grade }) {
  return `Name: [${name}], Age: [${age}], Grade: [${grade}]`;
}
console.log(a(student));