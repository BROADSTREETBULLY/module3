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

// 3. Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
// a) Add 2 new values to the end 
// b) Add 2 new values to the beginning 
// c) Sort the values alphabetically 
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue 
// e) Write a function findMatchingAnimals(beginsWith) 
// that returns a new array containing all the animals that begin with the beginsWith string. 
// Try to make it work regardless of upper/lower case.

const animals = ['Tiger', 'Giraffe']

animals.push('Dog', 'Cow')
animals.unshift('Donkey', 'Lion')
animals.sort();

console.log(animals)

function replaceMiddleAnimal(newValue) {
    let middle = Math.floor(animals.length / 2)
    animals[middle] = newValue
    return animals
}

console.log(replaceMiddleAnimal('Human'))

function findMatchingAnimals(beginsWith) {
    let 
}
