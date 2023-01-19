var time = new Date().getHours();
//console.log(time);
// var time = 20;
// Your conditional statements here
var greeting = "Hello";
var name = "RW";

if (time <= 12) {
  console.log("Good morning!");
} else if (time <= 18) {
  console.log("Good afternoon!");
} else if (time <= 22) {
  console.log("Good evening!");
} else {
  console.log("Go to bed!");
}

alert(`${greeting}, ${name}!`);

// alert()
