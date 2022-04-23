// function draw(n) {
//   text = "";

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < 1; j++) {
//       text += j + i * 2 + 2;
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
  let z = 2;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 1; j++) {
      text += z;
      z += 2;
    }
    text += "\n";
  }
  console.log(text);
}
draw(2);
draw(3);
draw(4);
