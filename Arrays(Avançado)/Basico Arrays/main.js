const nomes = ['Yuiri', 'Lincoln', 'Josephina'];
const novo = [];
novo.pop();
console.log(nomes);

[3,4,5,6].at(1); // 4
[3,4,5,6].pop() ;// [3,4.5]
[3,4,5,6].push(7); // [3,4,5,6,7]
[3,4,5,6].fill(1);// [1,1,1,1]
[3,4,5,6].join("-"); //'3-4-5-6'
[3,4,5,6].reverse(); // [6, 5, 4, 3]
[3,4,5,6].shift(); // [4,5,6]
[3,4,5,6].unshift(); // [1, 3, 4 ,5 ,6]
[3,4,5,6].includes(5); // true
[3,4,5,6].map((num) => num + 6); // [9, 10, 11, 12]
[3,4,5,6].find((num) => num > 4); // 5
[3,4,5,6].some((num) => num > 5); // true
[3,4,5,6].filter((num) => num > 4); // [5, 6]
[3,4,5,6].every((num) => num > 5); // false
[3,4,5,6].findIndex((num) => num > 4); // 2
[3,4,5,6].reduve((acc, num) => acc + num); // 18


















