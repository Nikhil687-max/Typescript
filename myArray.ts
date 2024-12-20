type User = {
    name: string
    age:number
}


let array1 = []
let array2:number[] = []
let array3:Array<number> = []
let array4:Array<User> = []
let array5:Array<Array<User>> = []
let array6:User[][] = []

let user1:User = {name:"Nikhil",age:18};
// array1.push("sssf")// error array1->type is never
array2.push(18)
array3.push(18)
array4.push({name:"Nikhil",age:18})
array5.push(array4)
array4.push(user1)
array6.push(array4)

export{}