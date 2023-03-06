/* 1. Difference between mutating and non mutating array methods in JavaScript
* Mutating array methods change the original array rather than returning a new array i.e they modify the array they are called on. 
* While non-mutuating array methods return a new array which has all the new changes but do not modify the original array

* Mutating array methods: 
* array.push(): adds a new element at the end of an array and returns the new array length
* array.pop(): removes the last element of an array and return the element that wa popped-out
* array.shift(): removes the first element of an array and return the value that was shifted-out
* array.unshift(): adds a new element at the beginning of an array and returns the new array length
* array.splice(): adds new item(s) within the array

* Non-mutuating methods:
* array.concat(): creates a new array by merging existing arrays
* array.slice(): slices out a piece of an array into a new array
* array.includes(): return true if an array contains a specified value and return false if the value is not found
* array.indexOf(): returns the index/position of a specified value but return -1 if the value is not found
* array.join(): returns an array as a string
*/

// 2. 
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

languages.push('Kotlin');
console.log(languages);
//[ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]

languages.splice(3, 0, 'Java');
console.log(languages);
//[ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

languages.shift();
console.log(languages);
//[ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]


languages.unshift('Scala', 'Swift');
console.log(languages);
//['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin']

languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);
//['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python','Kotlin']
 
//3.
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = 'orange';
    return fruit;
}  
console.log(fruit.valueOf());
//[ 'apple', 'mango', 'banana' ]


// 4.
let numbers = [2, 7, 50, -5, -75];
let max = Math.max(...numbers);
console.log(max);
// 50

// 5.
let values = [2, 4, 6, 8, 10];
let valTimesIndex = values.map(multiply);
function multiply(value, index) {
    return value * index;
}
console.log(valTimesIndex);
//[ 0, 4, 12, 24, 40 ]

