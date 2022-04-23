function draw(n) {
  // text = "";
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let text = [];
    for (let j = 1; j <= n; j++) {
      if (i >= j) {
        // text += "*";
        text.push("*");
      } else {
        // text += "-";
        text.push("-");
      }
    }
    // text += "\n";
    arr.push(text);
  }
  // console.log(text);
  console.log(arr);
}

// function draw(n) {
//   // text = "";
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr[i] = [];
//     for (let j = 0; j < n; j++) {
//       if (i >= j) {
//         // text += "*";
//         arr[i][j] = "*";
//       } else {
//         // text += "-";
//         arr[i][j] = "-";
//       }
//     }
//     // arr.push(text);
//     // text += "\n";
//   }
//   // console.log(text);
//   // console.log(arr);

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(arr[i][j]);
//     }
//     // console.log("\n");
//   }
// }

draw(2);
draw(3);
draw(4);
