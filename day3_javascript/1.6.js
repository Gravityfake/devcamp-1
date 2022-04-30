// function draw(n) {
//   text = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = n * i + 1; j <= n * i + n; j++) {
//       text += j;
//     }
//     text += "\n";
//   }
//   console.log(text);
// }
// draw(2);
// draw(3);
// draw(4);

// function draw(n) {
//   text = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j <= n; j++) {
//       text += j + i * n;
//     }
//     text += "\n";
//   }
//   console.log(text);
// }
// draw(2);
// draw(3);
// draw(4);

function draw(n) {
  text = "";
  let z = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += z;
      z++;
    }
    text += "\n";
  }
  console.log(text);
}
draw(2);
draw(3);
draw(4);
