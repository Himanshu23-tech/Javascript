class InvalidUsernameError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidUsernameError";
    }
}

function checkUsername(username) {
    if (username.length < 5) {
        throw new InvalidUsernameError(
            "Username must contain at least 5 characters"
        );
    }

    console.log("Valid username");
}

try {
    checkUsername("abc");
} catch (error) {
    console.log(error.name + ": " + error.message);
}