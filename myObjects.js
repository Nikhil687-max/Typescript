"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Nikhil",
    email: "nikhi@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, number = _a.age;
    console.log("User Created Successfully");
}
createUser({ name: "Nikhil", age: 45 });
function createCource(_a) {
    var string = _a.name;
    return { name: "Nikhil" };
}
console.log(createCource({ name: "nikhil" }));
var userName = { lastName: "Patidar", name: "Nikhil", age: 18 };
createCource(userName);
function printComplex(C) {
    console.log(C.x, "+ i", C.y);
    return C;
}
var C = { x: 5, y: 20 };
printComplex(C);
var myUser = {
    _id: 44,
    name: "Nikhil",
    email: "nikhi@gmail.com",
    isActive: true
};
myUser.email = "nikh@gmail.com";
console.log(myUser._id);
var a = {
    num: 34,
    date: 21,
    month: 9,
    year: 2024,
    cvv: 456
};
console.log(a);
