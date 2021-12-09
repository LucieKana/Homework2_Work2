// Write a program to add up all the elements of a number array.
let arr1 = [1,2,3,4,5];
let sum = 0
function sumarr(arr){
    for(let i = 0; i<arr.length; i++)
    {
        sum += arr[i]
    }
  return sum
}
console.log(sumarr(arr1));