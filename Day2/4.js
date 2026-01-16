const user = {
    name: "Ameen",
    age: 21,
    city: "Pune"
};

console.log("Object.keys():");
Object.keys(user).forEach(key => {
    console.log(key);
});

console.log("\nObject.values():");
Object.values(user).forEach(value => {
    console.log(value);
});

user.mobileNumber = 123456789;

delete user.city;
console.log("\n Adding mobileno and delete city");
Object.values(user).forEach(value => {
    console.log(value);
});

//4
const users = [
    { name: "Pratik", role: "admin" },
    { name: "Amit", role: "user" },
    { name: "Neha", role: "admin" },
    { name: "Ravi", role: "user" },
];

const groupedByRole = {};

users.forEach(user => {
    const role = user.role;

    if (!groupedByRole[role]) {
        groupedByRole[role] = [];
    }

    groupedByRole[role].push(user);
});

console.log(groupedByRole);
