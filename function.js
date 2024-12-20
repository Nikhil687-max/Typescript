"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sub(a, b) {
    return a - b;
}
function upperCase(str) {
    return str.toUpperCase();
}
var email2;
var name2;
function signup(name, email, paid) {
    var subscription = 45;
    if (subscription - paid > 0)
        return "".concat(sub(subscription, paid), " $, remening to pay for membership.");
    else {
        email2 = email;
        name2 = name;
        return "\n".concat(upperCase("Signed Up"), "\nRemember Your pass word is your name only\n");
    }
}
var isSignedUp = signup("Nikhil", "nikhil@gmail.com", 57);
console.log(isSignedUp);
//AERROW FUNCTIONS
var login = function (email, name) {
    if (email === email2 && name.toLowerCase() === name2.toLowerCase()) {
        console.log("".concat(upperCase("".concat(name)), " You Loged in successfully"));
    }
};
var isLoggedIn = login("nikhil@gmail.com", "Nikhil");
//how we can specify return type of function to 
function f() {
    return "";
}
f();
//or
var f2 = function () {
    return "";
};
f2();
//or 
console.log("History");
var arr = [2, 3, 4, 5, 6];
console.log((arr.map(function (num) { return "You'r points were: ".concat(num); })), "\n");
console.log("Currently you'r points are: ".concat(7));
// there is a case which the upper law we cause error with is 
function f3(val) {
    if (val > 5)
        return true;
    return "is less than 5";
}
