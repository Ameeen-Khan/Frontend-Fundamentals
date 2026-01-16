async function getUserData(userId) {
    try {
        if (userId === 1) {
            return {
                name: "Hello",
                age: 21,
                city: "Pune"
            };
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        throw error; // rethrow so caller can handle it
    }
}
getUserData(0)
    .then(data => console.log(data))
    .catch(err => console.error(err.message));
