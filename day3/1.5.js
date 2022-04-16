function draw(n) {
  text = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n; j++) {
      text += i;
    }
    text += "\n";
  }
  console.log(text);
}
draw(2);
draw(3);
draw(4);
