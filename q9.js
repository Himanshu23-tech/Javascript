function validateAge(age) {
    try {
        if (age < 18) {
            throw new Error("Age must be 18 or above");
        }

        console.log("Age is valid");
    } catch (error) {
        console.log(error.name + ": " + error.message);
    }
}

validateAge(16);
validateAge(20);