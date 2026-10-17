function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }

    console.log("Age is valid");
}

checkAge(20);