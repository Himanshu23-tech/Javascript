function validateAge(age) {
    if (age < 18) {
        throw new Error("User must be 18 or above");
    }

    return "Age is valid";
}

function registerUser(age) {
    try {
        console.log(validateAge(age));
        console.log("User registered successfully");
    } catch (error) {
        console.log("Registration failed:", error.message);
    }
}

registerUser(16)
registerUser(20)
