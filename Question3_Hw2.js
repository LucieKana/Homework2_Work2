//Write a program to find the longest element in a string array.
let arr =["Banana", "Orange", "Avocado", "tomato", "Lucie is the best at coding"];
let size;
for (let i=0; i<arr.length-1; i++){
     if (arr[i].length > arr[i+1].length)
     size = arr[i]  
    else
    size = arr[i+1]
}
console.log("The longest element is " + size)
