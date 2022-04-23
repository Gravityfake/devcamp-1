function draw(n) {
  text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i >= j) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }

  // 2.1 ต่อด้วย 2.2 และเปลี่ยนบรรทัดล่างเป็น i = n - 1
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n; j++) {
      if (i < j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
}

draw(2);
draw(3);
draw(4);
