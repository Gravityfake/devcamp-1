let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.filter((x) => x % 2 === 0).map((x) => x * 1000);
console.log(result);
