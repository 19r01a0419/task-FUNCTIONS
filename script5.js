 //functions
 function task5(){
    console.log("this is task 5");
}
task5();
function task51(){
    console.log("hello task");
}

task51();

//addition
function addition(num1,num2){  //paremeters
    return num1 + num2;
}
let result1 = addition(10, 5)    //arguments
console.log(result1);
//strings
let text="chennu";
console.log(text.length);
//strings slicing
let name="Chennubhavani"
console.log(name.slice(0,6));

let animal="lion"
console.log(animal.startsWith('l'));
console.log(animal.endsWith('i'));
console.log(animal.replace("lion","tiger"));
// Array
let fruits=["watermelon","banana","grapes"];
 console.log(fruits);
console.log(fruits[0]);
fruits.pop()
console.log(fruits);
fruits.push("mango");
console.log(fruits);
// objects
const vegetable = {
    name:"carrot",
    type:"root",
    color:"red"
}
    console.log(vegetable.color);
// for in
const pets = {
    name:"dog",
    color:"goldenbrown",
    bread:"retriver"
}
let demo;
for(demo in pets){
    console.log(demo);
}
// for of
const fruit = "watermelon";
let demo1;
for(demo1 of fruit){
    console.log(demo1);
}

