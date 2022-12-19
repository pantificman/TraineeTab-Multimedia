$("h2").css("color","green");

$(function(){
    $("h3").css("text-align", "center");
})
$("h3").html("New Title 3");

/* alert("Hello"); */

/* let a=1;
    b="2";
    c=true;
function Example(a,b) {
alert(a+b);
}
Example(a,b); */

let answer=confirm("How old are you?");
let answer2=prompt("Are you 18 years old?");

let arr = [];
arr[0] = prompt("question1", "someData");
arr[1] = prompt("question2", "someData");
arr[2] = prompt("question3", "someData");

let incr = 10;
let decr = 16;

console.log(++incr);
console.log(decr--);