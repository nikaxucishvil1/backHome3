// Write a function that takes an object as argument and returns an array of arrays, where each inner array contains the key-value pair of the object.
// const user = {
//   name: "nika",
//   age: 32,
// };

// const getArr = (obj) => {
//   const result = Object.entries(obj);
//   console.log(result);
// };

// getArr(user);

//Implement a function that takes two objects and returns true if they have the same set of keys, false otherwise.
// const user1 = {
//   age: 21,
//   name: "gela",
// };
// const user2 = {
//   age: 32,
//   names: "saba",
// };

// const isUser = (obj1, obj2) => {
//   const keys1 = JSON.stringify(Object.keys(obj1));
//   const keys2 = JSON.stringify(Object.keys(obj2));
//   // array ebs ratomgac ver vadarebdi da momiwia stringad gadametana
//   const result = keys1 === keys2 ? true : false;
//   console.log(result);
// };
// isUser(user1, user2);

//Write a function that takes two or more objects as arguments and merges them into a single object
// const arr = [
//   {
//     age: 21,
//     name: "gela",
//   },
//   {
//     ages: 32,
//     names: "saba",
//   },
//   {
//     sum: 21,
//     summ: 12,
//   },
// ];

// const concatFoo = (objArr) => {
//   const result = {};

//   objArr.map((obj) => {
//     Object.assign(result, obj);
//   });

//   console.log(result);
// };

// concatFoo(arr);

// Write a function that takes an object and a key as input and deletes the specified key from the object.

// const user1 = {
//   age: 21,
//   name: "gela",
// };
// console.log(user1);
// const deleteFoo = (obj, key) => {
//   delete obj[`${key}`];
//   console.log(obj);
// };

// const debauncer = (time, foo) => {
//   let timeOut;
//   return (...args) => {
//     clearTimeout(timeOut);
//     timeOut = setTimeout(() => {
//       foo(...args);
//     }, time);
//   };
// };
// const inputFoo = (e) => {
//   const value = e.target.value;
//   deleteFoo(user1, value);
// };

// const handleInput = debauncer(300, inputFoo);

// const input = document.querySelector("input");
// input.addEventListener("input", handleInput);

// Create a class representing a car with properties like make, model, and year.

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand,
//     this.model = model,
//     this.year = year
//   }
//   getCarInfo() {
//     console.log(`${this.year} ${this.brand} ${this.model}`);
//   }
// }

// const newCar = new Car("Toyota", "Corolla", 2020);
// newCar.getCarInfo();

// make a class of rectangle that recieves width and height and add this methods

// class rectangle {
//   constructor(width,height){
//     this.height = height,
//     this.width = width
//   }
//   getArea(){
//     console.log(this.width * this.height);
//   }
//   getPerimeter(){
//     console.log((this.width + this.height) * 2)
//   }
//   isSquare(){
//     this.width === this.height ? console.log(true) : console.log(false);
//   }
// }

// const square = new rectangle(10,20)
// square.getArea()
// square.getPerimeter()
// square.isSquare()