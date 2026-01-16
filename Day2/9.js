function getUserData(userId) {
    return new Promise((resolve, reject) => {
        if (userId === 1) {
            resolve({
                name: "Hello",
                age: 21,
                city: "Pune"
            });
        } else {
            reject("User not found");
        }
    });
}
getUserData(1)
    .then(user => {
        console.log("User data retrieved:");
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    });





//2
console.log("1: Start");

setTimeout(() => {

  console.log("2: setTimeout");

}, 0);

Promise.resolve().then(() => {

  console.log("3: Promise");

});

console.log("4: End");

