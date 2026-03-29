// // 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.

// function ucFirstLetters(str) {
//     let words = str.split(' ')
//     let newWords = words.map(function(word) {
//        return word[0].toUpperCase() + word.slice(1)
//         })

//         return newWords.join(' ')
// }

// console.log(ucFirstLetters("los angeles") )
// console.log(ucFirstLetters("new york"))
// console.log(ucFirstLetters("this is a longer sentance to try"))

// // 2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. 
// // It should return either the truncated text, with an ellipsis (…) added to the end if it was too long, or the original text otherwise. 
// // b) Write another variant of the truncate function that uses a conditional operator

// // function truncate(str, max) {
// //     if (str.length > max) {
// //         return str.slice(0, max) + '...'
// //     } else {
// //         return str
// //     }
// // }

// function truncate(str, max) {
//     return str.length > max
//     ? str.slice(0, max) + '...'
//     : str
// }


// console.log(truncate('This text will be truncated if it is too long', 25))

// // 3. Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips:
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
// // a) Add 2 new values to the end 
// // b) Add 2 new values to the beginning 
// // c) Sort the values alphabetically 
// // d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue 
// // e) Write a function findMatchingAnimals(beginsWith) 
// // that returns a new array containing all the animals that begin with the beginsWith string. 
// // Try to make it work regardless of upper/lower case.

// const animals = ['Tiger', 'Giraffe']

// animals.push('Dog', 'Cow')
// animals.unshift('Donkey', 'Lion')
// animals.sort();

// console.log(animals)

// function replaceMiddleAnimal(newValue) {
//     let middle = Math.floor(animals.length / 2)
//     animals[middle] = newValue
//     return animals
// }

// console.log(replaceMiddleAnimal('Human'))

// function findMatchingAnimals(beginsWith) {
//     return animals.filter(function(animal) {
//         return animal.toLowerCase().startsWith(beginsWith.toLowerCase())
//     })
// }

// console.log(findMatchingAnimals('d'))
// console.log(findMatchingAnimals('D'))

// // 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. 
// // The function should remove all dashes, and uppercase the first letter of each word after a dash. 
// // b) Create variants of the camelCase function that use different types of for loops, and 
// // c) with and without the conditional operator.

// function camelCase(cssProp) {
//     let words = cssProp.split('-')
//     let newWords = words.map(function(word, index) {
//         if (index === 0) {
//             return word
//         } else {
//             return word[0].toUpperCase() + word.slice(1)
//         }
//     })
//     return newWords.join('')
// }


// console.log(camelCase('margin-left'))
// console.log(camelCase('background-image'))
// console.log(camelCase('display'))

// //5.a) Explain why the above code returns the wrong answer 
// // b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result. 
// // c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result.


// //A) Javascript uses floating point numbers which can represent decimal numbers with perfect precision

// function currencyAddition(float1, float2) {
//     return (float1 * 100 + float2 * 100) / 100
// }

// function currencyOperation(float1, float2, operation){
//     let float1Cents = float1 * 100
//     let float2Cents = float2 * 100

//     let result;
//    switch(operation) {
//     case '+':
//         result = float1Cents + float2Cents
//         break
//     case '-':
//         result = float1Cents - float2Cents
//         break
//     case '*': 
//         result = float1Cents * float2Cents
//         break
//     case '/':
//         result = float1Cents / float2Cents
//         break
//    }

//     return result / 100
// }

// console.log(0.3 == currencyAddition(0.1, 0.2))
// console.log(0.3 == currencyOperation(0.1, 0.2, '+'))

// //6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. 
// // Your function should return an array containing only the unique values from duplicatesArray.
// // Test with the following arrays and create another one of your own. 

// function unique(duplicatesArray) {
//     return duplicatesArray.filter((item, index) => duplicatesArray.indexOf(item) === index);
// }

// //test 

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
// const animals = ['sheep', 'cow', 'dog', 'horse', 'rabbit', 'snake', 'dog', 'cat', 'sheep', 'cow'];

// console.log(unique(colours));
// console.log(unique(testScores));
// console.log(unique(animals));

// //7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.


// const books = [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//   { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//   { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//   { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// ];

// //a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.

// function getBookTitle(bookId) {
//     return books.find(book => book.id === bookId).title;
// }

// //b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.

// function getOldBooks() {
//     return books.filter(book => book.year < 1950);
// }

// //c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.

// function addGenre () {
//     return books.map(book => ({ ...book, genre: 'classic'}));
// }

// // test

// console.log(getBookTitle(4));
// console.log(getOldBooks());
// console.log(addGenre()); 

// //8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers. 
// // const phoneBookABC = new Map()

// const phoneBookABC = new Map()
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

// // a) Create a new phoneBookDEF Map to store names beginning with D, E or F 

// // const phoneBookDEF = new Map()

// // b) Initialise the contents of phoneBookDEF by passing in an array of keys/values 


// const phoneBookDEF = new Map([
//     ['David', '0466777999'],
//     ['Erica', '0444555666'],
//     ['Francesca', '0499888777']
// ])

// // c) Update the phone number for Caroline 

// phoneBookABC.set('Caroline', '0422333444')

// // d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map 

// function printPhoneBook(contacts) {
//     contacts.forEach((number, name) => {
//         console.log(`${name}: ${number}`)
//     })
// }

// //test 
// printPhoneBook(phoneBookABC)
// printPhoneBook(phoneBookDEF)
// // e) Combine the contents of the two individual Maps into a single phoneBook Map 

// const phoneBook = new Map ([...phoneBookABC, ...phoneBookDEF])
// printPhoneBook(phoneBook)

// // f) Print out the full list of names in the combined phone book

// console.log([...phoneBook.keys()])

// // 9. Given the below salaries object, perform the following tasks.

// let salaries = {
//     "Timothy": 35000,
//     "David": 25000,
//     "Mary": 55000,
//     "Christina": 75000,
//     "James": 43000
// };

// //a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((total, salary) => total + salary, 0) 
// }

// //b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

// function topEarner(salaries) {
//     return Object.keys(salaries).reduce((topName, name) => {
//         return salaries[name] > salaries[topName] ? name : topName;
//     });
// }

// //test

// console.log(sumSalaries(salaries))
// console.log(topEarner(salaries))

//10. The following code uses the Date object to print the current time and the number of hours that have passed today so far. 
// Extend the code to do the following:

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())

console.log(today.getHours() + ' hours have passed so far today')

//a) Print the total number of minutes that have passed so far today

const minutesToday = today.getHours() * 60 + today.getMinutes()
console.log(minutesToday + ' minutes have passed so far today')

// b) Print the total number of seconds that have passed so far today

const secondsToday = minutesToday * 60 + today.getSeconds()
console.log(secondsToday + ' seconds have passed so far today')

// c) Calculate and print your age as: 'I am x years, y months and z days old'

const birthDate = new Date('1991-03-27')


let years = today.getFullYear() - birthDate.getFullYear()
let months = today.getMonth() - birthDate.getMonth()
let days = today.getDate() - birthDate.getDate()

if (days < 0) {
  months--
  days += 30
}

if (months < 0) {
  years--
  months += 12
}

console.log(`I am ${years} years, ${months} months and ${days} days old`)

// d) Write a function daysInBetween(date1, date2) which calculates 
// and returns the amount of days in between the two given dates.

function daysInBetween(date1, date2) {
  const msPerDay = 1000 * 60 * 60 * 24
  return (date2 - date1) / msPerDay
}

console.log(daysInBetween(new Date(2024, 5, 17), new Date(2024, 11, 4)))