"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
var array6 = [];
var user1 = { name: "Nikhil", age: 18 };
// array1.push("sssf")// error array1->type is never
array2.push(18);
array3.push(18);
array4.push({ name: "Nikhil", age: 18 });
array5.push(array4);
array4.push(user1);
array6.push(array4);


console.log()