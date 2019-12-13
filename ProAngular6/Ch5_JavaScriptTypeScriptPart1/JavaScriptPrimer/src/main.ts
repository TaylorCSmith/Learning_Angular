console.log('Hello');
console.log('Apples'); 
console.log('blah'); 

let myFunc = function()
{
  console.log('this is a function'); 
}

myFunc(); 

let myFuncTwo = function(name, weather)
{
  console.log('Hello ' + name + '.');
  console.log("It is " + weather + " today");
};

myFuncTwo("Taylor", "Cold"); 


let messageFunction = function(weather)
{
  let message = `It is ${weather} today`;
  console.log(message); 
}

messageFunction('raining'); 
