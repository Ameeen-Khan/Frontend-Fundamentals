const arr = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];

//1
const doubled = arr.map(num => num*2);
console.log(doubled) 

//2
const greater = arr.filter(num => num>10);
console.log(greater);

//3
const sum = arr.reduce((a,b) => a+b,0);
console.log(sum);

//4
//const rev = arr.reverse()
const rev = arr.reduce((a,b) => [b,...a],[]);
console.log(rev);