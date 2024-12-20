let User = {
    name: "Nikhil",
    email: "nikhi@gmail.com",
    isActive: true
}

function createUser({name:string,age:number}){
    console.log("User Created Successfully");
}

createUser({name:"Nikhil",age:45});

function createCource({name:string}):{name:string}{return {name:"Nikhil"};}
console.log(createCource({name:"nikhil"}));
let userName = {lastName:"Patidar",name: "Nikhil",age:18}
createCource(userName);


type Complex={
    x:number,
    y:number
}

function printComplex(C:Complex):Complex{
    console.log(C.x,"+ i",C.y);
    return C
}
let C = {x : 5, y: 20}
printComplex(C)

type User= {
    readonly _id:number,
    name:string,
    email:string,
    isActive:boolean,
    credit?:number
}
let myUser :User = {
    _id:44,
    name:"Nikhil",
    email:"nikhi@gmail.com",
    isActive:true
}

myUser.email = "nikh@gmail.com"
console.log(myUser._id)

type cardNumber={
    num:number
}
type cardDate={
    date:number
    month:number
    year:number
}
type cardDetails = cardNumber & cardDate & {
    cvv:number
}
let a:cardDetails = {
    num:34,
    date:21,
    month:9,
    year:2024,
    cvv:456
}
console.log(a)



export{}