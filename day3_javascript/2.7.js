function draw(n) {
  text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i <= n - j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }

  // 2.5 ต่อด้วย 2.6 และเปลี่ยนบรรทัดล่างเป็น i = 1 + 1
  for (let i = 1 + 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i <= j) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
}

draw(2);
draw(3);
draw(4);
