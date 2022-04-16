// function draw(n) {
//   text = "";
//   for (let i = n; i >= 1; i--) {
//     for (let j = n * i; j >= n * i + 1 - n; j--) {
//       text += j;
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
  let z = n * n;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      text += z;
      z--;
    }
    text += "\n";
  }
  console.log(text);
}
draw(2);
draw(3);
draw(4);
