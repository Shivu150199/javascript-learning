// //normal function
// // function greet(name) {
// //   return `hello ${name}`
// // }

// // let a = greet('shivam')
// // console.log(a)


// // let greet=(name)=>`hello ${name}`
// // console.log(greet('shivam'))

// // function add(a,b){
// //     console.log(arguments)
// // }
// // add(2,3)


// // let add=(...arguments)=>console.log(arguments)
// // add(2,3)

// // 2. Write a JavaScript program to find the maximum number in an array. 
// let arr=[2,4,6,8]
// // function findMaximum(arr){
// //     let a=Math.max(...arr)
// // console.log(a)
// // }
// // findMaximum(arr)

// // Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
// // let strs='mlm'
// // function palindrome(str){
// //     return str===str.split("").reverse().join('')
// // }

// // let result=palindrome(strs)
// // console.log(result)


// // Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
// // 6. Write a JavaScript program to calculate the factorial of a given number.
// // function factorial(n){
// //     let i=1;
// //     let factorial=1;
// //     while(i<=n){
// // factorial=factorial*i
// // i++;
// //     }
// //     console.log(factorial)
// // }

// // factorial(5)


// // 7. Write a JavaScript function to check if a given number is prime. 

// // let num=16
// // console.log(Math.sqrt(num))

// // 8. Write a JavaScript program to find the largest element in a nested array. 
// // let array=[2,4,2,2,12,[3247,56,34,54],54,3,23]

// // function nest(arr){
// //     let flat=arr.flat()
// //     let max=Math.max(...flat)
// //     console.log(max)
// // }
// // nest(array)


// // 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// function fib(n){
// let f=1;
// let s=2;
// let fib=0;



// }

// fib(36)


// // 5. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions


// // Given a string, write a function to count the occurrences of each character in the string. 


// // Write a function that reverses the order of words in a sentence

// // write a function that generate a random number 

// // write a function that generate random num between two values


// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42,
//   },
// }

//default parameter

// const bookings = []
// const createBooking = function (flightNum, numPassenger, price) {
//   const booking = { flightNum, numPassenger, price }
//   console.log(booking)
// bookings.push(booking)
// }

// createBooking('lh123') 

// //value vs reference 
// const flight='LH1234'
// const jonas={
//   name:'shivam',
//   passport:23424325,

// }


// const checkIn=function(flightNum,numPassenger){
 

// }

// checkIn(flight,jonas)

// //first class and higher order function

// treats function as first class citizen 
// function are treat as simple value
// just another type of object

   

function showMessage() {
  let message = "Hello, I'm JavaScript!" // local variable

  console.log(message)
}

showMessage() // Hello, I'm JavaScript!
console.log(message)

