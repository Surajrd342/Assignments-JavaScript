// String Manipulation
// Q1. Function that convert lowecase to uppercase 
// function convertToUpperCase (string) {
//     return string.toUpperCase()
// }
// console.log("Uppercase :",convertToUpperCase("apple"));


// //Q2. Program that takes a string as input and counts
// //the number of words in it
// const stringValue = "apple"
// console.log("No of letter is:", stringValue.length);

// // Q3. A program that takes a string as input and reverses it.
// function reverseString (str) {

//     //First of all split the strings by using split method
//     var splitString = str.split("");

//     //reverse the split array from above using reverse method
//     var reverseArray = splitString.reverse();

//     //Join the string using join method
//     var joinArray = reverseArray.join("");

//     return joinArray;
// }

// console.log("Reverse string:",reverseString("apple") );


// Q4. A program that checks if a given string is a palindrome
// function checkPalindrome (stringValue) {

//     var regExpression = /[\W_]/g;

//     var lowRegString = stringValue.toLowerCase().replace(regExpression," ");

//     var reverseString = lowRegString.split().reverse().join(" ");

//     return reverseString === lowRegString;

// }
// console.log("Check weather Palindromes or not (Yes/No) :",checkPalindrome("level"));


// Q5. A program that takes a string as input and removes all the vowels from it
// function removeVowels (stringValue) {

//     //using RegExp ang "g" stands for global value
//     let vowelsLetter = new RegExp("[aeiouAEIOU]", "g")
//     return stringValue.replace(vowelsLetter, "")
// }
// console.log("Removed vowels letter are :", removeVowels("Hello world enigma"));



//Number Manuplation
// Q1. A program that takes a number as input and checks if it is a prime number
// function isPrime(number) {
//     // Prime numbers must be greater than 1
//     if (number <= 1) {
//         return false;
//     }

//     // Check if the number is divisible by any integer from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     // If the number is not divisible by any integer other than 1 and itself, it's a prime number
//     return true;
// }

// // Test the function
// const num = parseInt(prompt("Enter a number:"));

// if (isPrime(num)) {
//     console.log(num + " is a prime number.");
// } else {
//     console.log(num + " is not a prime number.");
// }



// Q2. A program that takes an array of numbers as input and returns the sum of all the numbers
// function sumofArray (numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum;
// }
// const numbers = [1,5,6,4];
// console.log("Sum:", sumofArray(numbers));


// Q3. A program that takes an array of numbers as input and returns the sum of all the numbers
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// // Example usage:4*3*2*1
// const number = 4;
// console.log("Factorial of", number, "is:", factorial(number));

// Q4. A program that takes an array of numbers as input and returns the sum of all the numbers
// function isPerfectSquare(num) {
//     const sqrt = Math.sqrt(num);
//     return Number.isInteger(sqrt);
// }

// // Example usage:
// const num = 4;
// console.log(num, "is a perfect square:", isPerfectSquare(num)); 


// Q5. A program that takes an array of numbers as input and returns the sum of all the numbers
// function isPerfectSquare(number) {
//     const sqrt = Math.sqrt(number);
//     return Number.isInteger(sqrt);
// }

// function isFibonacci(number) {
//     return isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4);
// }

// // Example usage:
// const number = 21;
// console.log(number, "is a Fibonacci number:", isFibonacci(number)); 



// Array Manipulation :
// Q1.Write a program that takes two arrays as input and merges them into a single array.
// function mergeArrays(array1, array2) {
//     return array1.concat(array2);
// }

// const array1 = [5, 9, 15];
// const array2 = [5, 1, 2];
// const mergedArray = mergeArrays(array1, array2);
// console.log("Merged array:", mergedArray);


// Q2 Write a program that takes an array of numbers as input and returns the largest number
// function findLargestNumber(numbers) {
//     if (numbers.length === 0) {
//         return null; // Return null for an empty array
//     }
    
//     let largest = numbers[0]; // Assume the first number is the largest
    
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }
    
//     return largest;
// }

// const numbers = [220, 155, 50, 15, 8];
// console.log("Largest number:", findLargestNumber(numbers)); 



// Q3 Write a program that takes an array of strings as input and sorts them alphabetically
// function sortStringsAlphabetically(strings) {
//     return strings.sort();
// }

// const strings = ["ram", "shyam", "hari", "sarah"];
// const sortedStrings = sortStringsAlphabetically(strings);
// console.log("Sorted strings:", sortedStrings); // Output: Sorted strings: [ 'apple', 'banana', 'grape', 'orange' ]



// Q4. Write a program that takes an array of numbers as input and removes all duplicates
// function removeDuplicates(numbers) {
//     return [...new Set(numbers)];
// }

// const numbers = [5, 4, 3, 4, 3, 2, 10];
// const uniqueNumbers = removeDuplicates(numbers);
// console.log("Unique numbers:", uniqueNumbers); 

// Q5. Write a program that takes an array of numbers as input and returns a new array with only the even numbers
// function filterEvenNumbers(numbers) {
//     return numbers.filter(num => num % 2 === 0);
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumbers = filterEvenNumbers(numbers);
// console.log("Even numbers:", evenNumbers);



// Object Manipulation :
// Q1. Write a program that creates an object representing a person with properties like name, age, and gender
// let personDetails = {
//     name : "Ram",
//     age : 25,
//     gender : "male"
// }

// console.log("The name of the person is " + personDetails.name + " and age is " + personDetails.age + ". Gender is " + personDetails.gender + ".");


// Q2. Write a program that takes two objects as input and merges their properties into a single object
// const details = {
//     name : "Ram",
//     address : "Kathmandu",
// }

// const phoneDeatils = {
//     phoneNumber : 9874563214
// }

// //merge two strings 
// const mergeObject = {...details, ...phoneDeatils};
// console.log(mergeObject);



// Q3. Write a program that takes an array of objects representing students and returns an array of their names.
function getNames(studentsDetails) {
    var names = [];
    for (var i = 0; i < studentsDetails.length; i++) {
        names.push(studentsDetails[i].name);
    }
    return names;
}

var studentsDetails = [
    { name: "Ram" },
    { name: "Shyam" },
    { name: "Hari" }
];

var studentNames = getNames(studentsDetails);
console.log(studentNames);

// Q4. Write a program that takes an object representing a student with properties like name and grades, and calculates their average grade.
function calAvergae (student) {
    var totalGrade = 0;
    var numberOfGrades = student.grades.length;

    for (var i = 0; i < numberOfGrades; i++) {
        totalGrade += student.grades[i];
    }

    var averageGrade = totalGrade / numberOfGrades;
    return averageGrade;
}

var student = {
    name: "Ram",
    grades: [55, 85, 75, 60, 80]
};

var averageGrade = calAvergae(student);
console.log("Average grade of " + student.name + " is :", averageGrade);


// Q5. Write a program that takes an array of objects representing books with properties like title and author, and sorts them alphabetically by title.
// Sample array of book objects
const books = [
    { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez" },
    { title: "In Search of Lost Time", author: "Marcel Proust" },
    { title: "Don Quixote", author: "Miguel de Cervantes" },
  ];
  
  function sortBooksByTitle(books) {
    books.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }
  
  sortBooksByTitle(books);
  console.log("Sorted Books:");
  books.forEach(book => {
    console.log(`${book.title} by ${book.author}`);
  });
  
