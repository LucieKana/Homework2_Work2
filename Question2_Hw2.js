//Write a program to look for the user input in an array. When it finds the first occurrence, display the value and the index of that value
let prompt= require('prompt-sync')()
 // requesting a user input
userInput = prompt('Enter an input: ')
let arr =["Banana", "Orange", "Avocado", "tomato","Orange", "Avocado", "tomato"]
let count = 0
for (let i=0; i<arr.length; i++)
  {
    if(arr[i] == userInput) {
      value = arr[i];
      index = i+1;
      break;
    }        
  } 
console.log(value) 
console.log(index)