function first() {
    throw new Error("Error in first function");
}

function second() {
    first();
}

function third() {
    try {
        second();
    } catch (error) {
        console.log("Error handled:", error.message);
    }
}

third();