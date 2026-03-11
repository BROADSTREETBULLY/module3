//1. What are the results of these expressions? (answer first, then use console.log() to check)

// "" + 1 + 0 // "10" - string at front of "+" converts the numbers behind it to string as its read from left to right
//  "" - 1 + 0 // -1 - "-" means it must be a numeric equation even with string in front
// true + false // 1 - "+" converts booleans to numbers true = 1, false = 0
// !true // false - ! not operator switches value to false
// 6 / "3" // 2 - "/" means it must be a numeric equation not strings
// "2" * "3" // 6 - "*" also means it must be a numeric equation not strings
// 4 + 5 + "px" // "9px" - string is behind equation so the equation is done first but then the result converts to a string "9" + the strings contents "px"
// "$" + 4 + 5 // "$45" - same as 1 - string at front of "+" converts the numbers behind it to string as its read from left to right
// "4" - 2 // 2 - "-" means it must be a numeric equation 
// "4px" - 2 // NaN - "4px" cant be converted to a number by "-"
// " -9 " + 5 // " -9 5" - string with "+" turns number after it in to a string - spaces are preserved in strings
// " -9 " - 5 // -14 - "-" with string in front means numeric equation, spaces not preserved 
// null + 1 // 1 - null equals 0 in numeric equation 
// undefined + 1 // NaN - undefined can't be quantified 
// undefined == null // true - both convert to 0 
// undefined === null // false - different types so false 
// " \t \n" - 2 // -2 - "\t" in a string equals tab "\n" in a string equals new line so technically this string is empty/space only which will conver to 0 

// console.log("" + 1 + 0) 
// console.log("" - 1 + 0)  
// console.log(true + false) 
// console.log(!true) 
// console.log(6 / "3")
// console.log("2" * "3") 
// console.log(4 + 5 + "px")
// console.log("$" + 4 + 5 )
// console.log("4" - 2)
// console.log("4px" - 2)
// console.log(" -9 " + 5)
// console.log(" -9 " - 5)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(undefined == null)
// console.log(undefined === null)
// console.log(" \t \n" - 2 )

//2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

// let three = "3"
// let four = "4"
// let thirty = "30"

// let addition = three + four // result is "34" value of the ecquation should be 5
// let multiplication = three * four // 12
// let division = three / four // 0.75
// let subtraction = three - four // -1 

// let lessThan1 = three < four //true
// let lessThan2 = thirty < four // result is false because alphabetically "3" becomes before "4" and it compares character by character 

// console.log(addition)
// console.log(multiplication)
// console.log(division)
// console.log(subtraction)
// console.log(lessThan1)
// console.log(lessThan2)

// //Updated correct calculations below

// let threeNumb = Number(three)
// let fourNumb = Number(four)
// let thirtyNumb = Number(thirty)

// let additionFixed = threeNumb + fourNumb 
// let lessThan2Fixed = thirtyNumb < fourNumb

// console.log(additionFixed)
// console.log(lessThan2Fixed)



// 3. Which of the following console.log messages will print? Why?

// if (0) console.log('#1 zero is true') // false - won't print - zero value
// if ("0") console.log('#2 zero is true') // true - will print string with digit will print as true
// if (null) console.log('null is true') // false - won't print - doesn't have a value
// if (-1) console.log('negative is true') // true - will print - number other then zero
// if (1) console.log('positive is true') // true - will print - number other then zero


// Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

// let a = 400, b =49;
// let result = `${a} + ${b} is `;

// (a + b < 10) ? result += 'less than 10': result += 'greater than 10';

// console.log(result)

// PS C:\Users\hjwpe\Documents\Software _Engineering_Bootcamp\dev\source\2026_SE\module3> node javaScriptF.js
// 11 + 3 is greater than 10
// PS C:\Users\hjwpe\Documents\Software _Engineering_Bootcamp\dev\source\2026_SE\module3> node javaScriptF.js
// 3 + 3 is less than 10
// PS C:\Users\hjwpe\Documents\Software _Engineering_Bootcamp\dev\source\2026_SE\module3> node javaScriptF.js
// 400 + 49 is greater than 10

// // 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

// const Greeting = function(name) {
//     return 'Hello ' + name + '!';
// }



// const GreetingArrow = (nameA) => 'Hello ' + nameA + '!';



// console.log(Greeting('Hannah'))
// console.log(GreetingArrow('Hanananah'))

// 6. a) Complete the inigo object by adding a lastName property and including it in the greeting. 
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597. 
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.


const westley = {
    name: 'Westley',
    numfingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person){
        return 'Nice to meet you.'
    }
}

inigo.greeting(westley)
inigo.greeting(rugen)