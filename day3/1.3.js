function draw(n) {
  text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j++) {
      text += j;
    }
    text += "\n";
  }
  console.log(text);
}
draw(2);
draw(3);
draw(4);
