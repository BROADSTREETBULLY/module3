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

//5.a) Explain why the above code returns the wrong answer 
// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result. 
// c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result.


//A) Javascript uses floating point numbers which can represent decimal numbers with perfect precision

function currencyAddition(float1, float2) {
    return (float1 * 100 + float2 * 100) / 100
}

function currencyOperation(float1, float2, operation){
    let float1Cents = float1 * 100
    let float2Cents = float2 * 100

    let result;
   switch(operation) {
    case '+':
        result = float1Cents + float2Cents
        break
    case '-':
        result = float1Cents - float2Cents
        break
    case '*': 
        result = float1Cents * float2Cents
        break
    case '/':
        result = float1Cents / float2Cents
        break
   }

    return result / 100
}

console.log(0.3 == currencyAddition(0.1, 0.2))
console.log(0.3 == currencyOperation(0.1, 0.2, '+'))