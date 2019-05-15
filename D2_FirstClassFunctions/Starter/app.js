// Your Javascript Code Goes Here
//function statement
function greet()
{
    console.log("Functions in JS");
}
greet();
//functions in JS is first class

function logGreet(fun)
{
    fun();
}
logGreet(greet);