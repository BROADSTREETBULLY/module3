//1. What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0 // "10" - string at front of "+" converts the numbers behind it to string as its read from left to right
 "" - 1 + 0 // -1 - "-" means it must be a numeric equation even with string in front
true + false // 1 - "+" converts booleans to numbers true = 1, false = 0
!true // false - ! not operator switches value to false
6 / "3" // 2 - "/" means it must be a numeric equation not strings
"2" * "3" // 6 - "*" also means it must be a numeric equation not strings
4 + 5 + "px" // "9px" - string is behind equation so the equation is done first but then the result converts to a string "9" + the strings contents "px"
"$" + 4 + 5 // "$45" - same as 1 - string at front of "+" converts the numbers behind it to string as its read from left to right
"4" - 2 // 2 - "-" means it must be a numeric equation 
"4px" - 2 // NaN - "4px" cant be converted to a number by "-"
" -9 " + 5 // " -9 5" - string with "+" turns number after it in to a string - spaces are preserved in strings
" -9 " - 5 // -14 - "-" with string in front means numeric equation, spaces not preserved 
null + 1 // 1 - null equals 0 in numeric equation 
undefined + 1 // NaN - undefined can't be quantified 
undefined == null // true - both convert to 0 
undefined === null // false - different types so false 
" \t \n" - 2 // -2 - "\t" in a string equals tab "\n" in a string equals new line so technically this string is empty/space only which will conver to 0 

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

let three = "3"
let four = "4"
let thirty = "30"

let addition = three + four // result is "34" value of the ecquation should be 5
let multiplication = three * four // 12
let division = three / four // 0.75
let subtraction = three - four // -1 

let lessThan1 = three < four //true
let lessThan2 = thirty < four // result is false because alphabetically "3" becomes before "4" and it compares character by character 

console.log(addition)
console.log(multiplication)
console.log(division)
console.log(subtraction)
console.log(lessThan1)
console.log(lessThan2)

//Updated correct calculations below

let threeNumb = Number(three)
let fourNumb = Number(four)
let thirtyNumb = Number(thirty)

let additionFixed = threeNumb + fourNumb 
let lessThan2Fixed = thirtyNumb < fourNumb

console.log(additionFixed)
console.log(lessThan2Fixed)



// 3. Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true') // false - won't print - zero value
if ("0") console.log('#2 zero is true') // true - will print string with digit will print as true
if (null) console.log('null is true') // false - won't print - doesn't have a value
if (-1) console.log('negative is true') // true - will print - number other then zero
if (1) console.log('positive is true') // true - will print - number other then zero


// Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 400, b =49;
let result = `${a} + ${b} is `;

(a + b < 10) ? result += 'less than 10': result += 'greater than 10';

console.log(result)

// PS C:\Users\hjwpe\Documents\Software _Engineering_Bootcamp\dev\source\2026_SE\module3> node javaScriptF.js
// 11 + 3 is greater than 10
// PS C:\Users\hjwpe\Documents\Software _Engineering_Bootcamp\dev\source\2026_SE\module3> node javaScriptF.js
// 3 + 3 is less than 10
// PS C:\Users\hjwpe\Documents\Software _Engineering_Bootcamp\dev\source\2026_SE\module3> node javaScriptF.js
// 400 + 49 is greater than 10

// // 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

const Greeting = function(name) {
    return 'Hello ' + name + '!';
}



const GreetingArrow = (nameA) => 'Hello ' + nameA + '!';



console.log(Greeting('Hannah'))
console.log(GreetingArrow('Hanananah'))

// 6. a) Complete the inigo object by adding a lastName property and including it in the greeting. 
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597. 
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.


const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) =>
         person.numFingers >= 6 
            ? "I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand?"
            :'Nice to meet you.'
}

inigo.greeting(westley)
inigo.greeting(rugen)

// 7. The following object represents a basketball game and keeps track of the score as the game progresses. a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
// b) Add a new method to print the full time final score c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
    score:0,
    fouls:0,

    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },

    threePointer() {
        this.score += 3;
        return this;
    },

    addFoul() {
        this.fouls++;
        return this
    },

    halfTime() {   
    console.log('Halftime score is ' + this.score + ', fouls: ' + this.fouls);
    return this;
    },

    fullTime() {
    console.log('Fulltime score is ' + this.score + ', fouls: ' + this.fouls);
    return this;
    }
}


basketballGame.basket().freeThrow().freeThrow().basket().threePointer().addFoul().basket().halfTime();
basketballGame.addFoul().freeThrow().freeThrow().basket().addFoul().threePointer().fullTime();

// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for…in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
// b) Create a new object for a different city with different properties and call your function again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const canberra = {
    name: 'Canberra',
    population: -20,
    state: 'ACT (not a real place)',
    founded: '2050',
    timezone: 'mars',
    demographic: 'lizard ppl',
    other: 'I don\'t actually believe this, Canberra is ok'
}

function cities(city) {
    for (let name in city){
        console.log(
           name + ': ' + city[name]
        )
    }
    }

    cities(sydney)
    cities(canberra)


// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian'};

// let moreSports = teamSports;
// moreSports.push('Soccer');
// moreSports.unshift('basketball');

let dog2 = dog1;
dog2 = 'Ted';

// let cat2 = cat1;
// cat2.name = 'Oscar';

// console.log(teamSports);
// console.log(dog1);
// console.log(cat1);

// //teamSports and cat1 updated, Objects and Arrays are stored as references 
// //so when you update them it updates the originals version

let moreSports = [ ...teamSports];
moreSports.push('Soccer');
moreSports.unshift('basketball');

let cat2 = { ...cat1};
cat2.name = 'Oscar';

console.log(teamSports);
console.log(dog1);
console.log(cat1);


//10. The following constructor function creates a new Person object with the given name and age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.canDrive =function() {
//         if (this.age > 17) {
//             return true
//         } else {
//             return false
//          }
//     }
// }

// const person1 = new Person('Arlo', 2)
// const person2 = new Person('Rigs', 8)

class PersonClass {
    constructor(name,age){
    this.name = name;
    this.age = age;
    this.human = true;
    }
    canDrive() {
        if (this.age > 17) {
            return true
        } else {
            return false
        }
    }
}

const person1 = new PersonClass('Arlo', 2)
const person2 = new PersonClass('Rigs', 8)
const person3 = new PersonClass('Hannah', 35)

console.log(person1)
console.log(person2)
console.log(person3)

console.log(person1.canDrive())
console.log(person2.canDrive())
console.log(person3.canDrive())