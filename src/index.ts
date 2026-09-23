// string
let message : string = 'hello'
console.log(message);
// number
let age : number =100
console.log(age);
// Boolean
let isActive : boolean = true
console.log(isActive);
let data : any = "hello"
data = false
data = 100
console.log(data);


// unKnown
let data : unknown = 'world'
if(typeof data ==='string'){
    console.log(data.toUpperCase());
}
// ARRAY
number Array
let numbers : number[] =[1,2,3,4]
console.log(numbers);
let str : string[] =['apple','orange','kiwi']
console.log(str);
let active : boolean[]=[true,false,true]
console.log(active)
mixed Array
let arr : any[] =['hello',100,true]
console.log(arr);

// Tuple
let data  : [string , number]=['roy',20]
console.log(data)   ;
let data : [string , number ,boolean]=['roy',20,true]
console.log(data);

// /Object
let user :{
    name : string,
    age : number 
}={
    name : 'jishnu',

    age : 50
}

console.log(user)

// Functions
// normal function 
// Addtion

function add(a:number,b :number):number{
    return a + b


}
console.log(add(5,10));
// multiplication
function add (a:number , b :number):number{
    return a * b


}
console.log(add(5,10));
// Void
// function  greet():void{
//     console.log('hello');
// }
// greet()

// // optional parameter
// function user(name : string, age ?: number): void{
//     console.log(name);
//     console.log(age);

// }
// user('jishnu',22)
// default parameter
// function greet(name: string="Gust"): string{
//     return `hello ${name}`

// }
// console.log(greet('jishnu'));
// union type= parameter to store multiple data types
// union
// let data : string | number | boolean
// data ='hello'
// data =7637
// data = true
// console.log(data)
// union type in function
// function display(value : string | number | boolean):void{
//     console.log(value);
// }
// display('roy')
// display(2000)
// display(true)    
// literal type
// literal type allows only specific 
// let role : "admin" | "user"
// role ="user"
// console.log(role);
// let fruits : "apple" | "Banana"
// fruits ="Banana"
// console.log(fruits)

// // numbers literals

// let dice : 1|2|3|4|5|6
// dice=6
// console.log(dice);

// let numbers :1|2|3|4|5|6
// numbers =4
// console.log(numbers)
 
// let isActive: true | false
// isActive =true
// console.log(isActive);

// // Null
// let value : null=null
// console.log(value);
// // Undefined
// let  value : undefined = undefined
// console.log(value)
// // Basic Interface
// interface User{
//     name : string;
//     age : number;
// }
// let user : User={
//     name :"Jishnu",
//     age : 25
// };
// console.log(user)
// // Optional Properties
// // properties are not required
// interface Employee{
//     name : string;
//     salary? : number;
// }
// let employee : Employee ={
//     name : "Jishnu",

// };
// console.log(employee)
// Interface with function
// interface Add{
//     (a : number,b:number):number;


// }
// const sum :Add=(a,b)=>{
//     return a + b;
// };
// console.log(sum(10,5));






