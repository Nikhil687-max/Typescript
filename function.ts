function sub(a:number, b:number)
{
    return a-b;
}

function upperCase(str:string){
    return str.toUpperCase();
}
let email2: string;
let name2: string; 
function signup(name:string, email: string, paid:number){
    let subscription = 45;
    if(subscription - paid > 0) return `${sub(subscription, paid)} $, remening to pay for membership.`;
    else{
        email2 = email;
        name2 = name;
        return `\n${upperCase("Signed Up")}\nRemember Your pass word is your name only\n`;}
}

let isSignedUp = signup("Nikhil", "nikhil@gmail.com", 57);
console.log(isSignedUp);


//AERROW FUNCTIONS
let login = (email: string, name:string) => {
    if(email === email2 && name.toLowerCase() === name2.toLowerCase()){
        console.log(`${upperCase(`${name}`)} You Loged in successfully`);
    }
}
let isLoggedIn = login("nikhil@gmail.com","Nikhil");



//how we can specify return type of function to 
function f():string{
    return ""
}
f()
//or
let f2 = ():string => {
    return ""
}
f2()
//or 
console.log("History");
let arr = [2, 3, 4, 5, 6]
console.log((arr.map((num:number):string => {return `You'r points were: ${num}`})),"\n")
console.log(`Currently you'r points are: ${7}`)

// there is a case which the upper law we cause error with is 
function f3(val){
    if(val > 5)return true
    return "is less than 5"
}
//in this case we cant say the return type that eaisely


export{}