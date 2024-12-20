let greetings:string = "Hello"

greetings.toUpperCase();
console.log(greetings);

let Num: number = 45;
let Num2: number = 45.3;
console.log(43);


let Num3 = 7879
// we avoided : number because typescript is able to detect
// as it gives error in Num3 = "gjos";


// :data type is to be decleared carefully to avoid any at fe places below is a example
let hero/*//*/: string;//
function getHero(){
    return "Thor";
}
hero = getHero();
// any is ment for places were we dont want typechecking errors\
// we then also try not to use any because at mojority of places we want to check type specity
 



export{}