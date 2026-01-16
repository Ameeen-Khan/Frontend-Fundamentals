//1
const user = {

    name: "Akshay",
  
    age: 25,
  
    city: "Pune"
  
  };
  
const {name,age} = user; 
  
console.log(name); 
console.log(age); 

//2
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1,...arr2]
console.log(mergedArray);

//3
function sum(...num){
    const total = num.reduce((i,j)=>i+j,0);
    console.log(total);
}
sum(1,2,3,4,5);