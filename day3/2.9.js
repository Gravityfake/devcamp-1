function draw(n) {
  text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      text += "-";
    }
    for (let j = 1; j <= i * 2 + 1; j++) {
      text += "*";
    }
    for (let j = 1; j < n - i; j++) {
      text += "-";
    }
    text += "\n";
  }
  console.log(text);
}

// function draw(n) {
//   let sym = "";

//   for (let i = n; i > 0; i--) {
//     for (let j = 1; j <= n; j++) {
//       if (j >= i) {
//         sym += "*";
//       } else {
//         sym += "-";
//       }
//     }
//     for (let k = n - 1; k > 0; k--) {
//       if (k >= i) {
//         sym += "*";
//       } else {
//         sym += "-";
//       }
//     }
//     sym += "\n";
//   }
//   console.log(sym);
// }

draw(2);
draw(3);
draw(4);
