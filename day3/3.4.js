function draw(n) {
  // text = "";
  let arr = [];
  // ครึ่งบน
  for (let i = 1; i <= n; i++) {
    let text = [];
    for (let j = n; j > i; j--) {
      text.push("-");
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      text.push("*");
    }
    for (let j = n; j > i; j--) {
      text.push("-");
    }
    // text += "\n";
    arr.push(text);
  }
  // ครึ่งล่าง
  for (let i = 1; i <= n - 1; i++) {
    let text = [];
    for (let j = 0; j < i; j++) {
      text.push("-");
    }
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      text.push("*");
    }
    for (let j = 0; j < i; j++) {
      text.push("-");
    }
    // text += "\n";
    arr.push(text);
  }
  // console.log(text);
  console.log(arr);
}

draw(2);
draw(3);
draw(4);
