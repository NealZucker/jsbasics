// This is a general practice file for JavaScript Basics. Please follow the instructions thoughout the sheet. Do not uncomment the commented out spaces.
var arr, findTwo, pusher, upFront, remover, copyCat, chopIt, sumIt, evenOdd, timesTen, animal, findAge, getKeys, changeName, speechMaker, addKey, keyLoop, cars, findModels

// Arrays

// 1. Create the variable arr and assign it an array with the following list of numbers 12, 42, 36, 51, 96
 arr=[12, 42, 36, 51, 96];
// 2. Create a function called findTwo that takes in the arr array and returns the value at index 2.
function findTwo(arr){
  return arr[2];
}
// 3. Create a function called pusher that takes in an array and a number and positions the number at the end of the array. Return the new array.
function pusher(arr, num)
{
  arr.push(num)
  return arr}
// 4. Create a function called upFront that takes in an array and a number and positions the number in beginning of the array. Return the new array.
function upFront(arr, num){
   arr.unshift(num)
return arr}
// 5. Create a function called remover that takes in an array and removes the value at the end of the array. Return the new array.
function remover(arr)
{
  arr.pop()
  return arr}
// 6. Create a function called copyCat that takes in an array, copies, and returns the second and third index values.
function copyCat(arr){
  var newArray=[];
  newArray.push(arr[2]);
  newArray.push(arr[3]);
  return newArray;
}
// 7. Create a function called chopIt that takes in an array and two numbers. It deletes the original 3rd index value and inserts the two numbers in it's place.
function chopIt(arr, num1, num2){
  var chop=arr;
  chop.splice(3, 1, num1, num2);
return chop}
// 8. Create a function called sumIt that takes in the array and returns the sum of each of the values in the array.
function sumIt(arr){
  var sum=0;
  for(var i=0; i<arr.length; i++){
   sum += arr[i];
} return sum
}
// 9. Create a function called evenOdd that takes in the array and pushes into a new array "even" or "odd" for every value in the array, depending upon whether they are even or odd number values. Return the new array.
// Hint: Use the modulus operator
function evenOdd(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
  if(arr[i]%2 === 0){
    newArr.push("even");
  }
    else {
    newArr.push("odd");
  }
  }
  return newArr;
}
// 10. Create a function called timesTen that takes in an array and multiplies each value by 10 and returns the new array.
// Hint: Use the map method
function timesTen(arr){
return arr.map(function(x) {
   return x * 10;
})
}
// Objects

// 1. Create an object called animal. Make sure the animal has the following keys. (species, name, age, gender, favoriteFood) Also, give the animal a method of speech that returns a string that displays what the animal says.
animal = {species: "owl", name: "killer", age:"5", gender: "male", favoriteFood: "rats", speech:function(){return "hoo"}}
// 2. Create a function called findAge that takes in an object and returns the age key value.
function findAge(obj) {return obj.age}

// 3. Create a function called getKeys that takes in an object and returns all of the key names (not values!).
function getKeys(obj) {
  return Object.getOwnPropertyNames(obj)
}
// 4. Create a function called changeName that takes in an object and a name value and replaces the object name with the given name value. Return the new object.
function changeName(obj, newName) {
  obj.name = newName;
  return obj.name;

}
// 5. Create a function called speechMaker that takes in an object and returns the response from calling the speech method.
function speechMaker(obj) {
  return obj.speech();
}
// 6. Create a function called addKey that takes in an object and adds a new key name bedtime and assigns it a value. Return the object.
function addKey(obj) {
  obj.bedtime = "8:00";
  return obj;
}
// 7. Create a function called keyLoop that takes in an object and loops through each of the key values. If any of the key values are equal to "monkey", then return "There's a monkey!", otherwise return "There's no monkey here!".
function keyLoop(obj){
for (var values in obj)
  if (obj[values] == "monkey"){
  return "There's a monkey!"
}
  else {
    return "There's no monkey here!"
}
}
// Intermediate Arrays and Objects

// 1. Create an array called cars of 3 objects of 3 different cars with the key names of make, model, year.
var cars = [{make: "honda", model: "civic", year: 2009}, {make: "BMW", model: "325i", year: 1987}, {make: "BMW", model: "533i", year: 1984}];
// 2. Create a function called findModels that takes in an array, loops through the array and returns an array of all of the model values of each object.
function findModels(arr){
  return arr.map(function(x){return x.model})
}
module.exports = {
  arr: arr,
  findTwo: findTwo,
  pusher: pusher,
  upFront: upFront,
  remover: remover,
  copyCat: copyCat,
  chopIt: chopIt,
  sumIt: sumIt,
  evenOdd: evenOdd,
  timesTen: timesTen,
  animal: animal,
  findAge: findAge,
  getKeys: getKeys,
  changeName: changeName,
  speechMaker: speechMaker,
  addKey: addKey,
  keyLoop: keyLoop,
  cars: cars,
  findModels: findModels
}
