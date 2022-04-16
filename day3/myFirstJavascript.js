// alert("Alert Hello World");

// debugger;

// let arr2 = [2, 4, 6, 8, 10];

// function myFunc() {
//   for (let i = 0; i < 2; i++) {
//     console.log("Hello, world");
//   }
// }

// for (let i = 0; i < 10; i++) {
//   // debugger;
//   console.log(arr2[i]);
//   myFunc();
// }

// Homework - Loop

let n = 4;
// 1.1
function draw11(n) {
  text = "";
  for (let i = 0; i < n; i++) {
    text += "*";
  }
  console.log(text);
}
draw11(n);

// 1.2
function draw12(n) {
  text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += "*";
    }
    text += "\n";
  }
  console.log(text);
}
draw12(n);
