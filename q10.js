function divide(a, b) {
    if (b === 0) {
        throw new Error("Second number cannot be zero");
    }

    console.log(a / b);
}

try {
    divide(10, 2);
    divide(10, 0);
} catch (error) {
    console.log(error.message);
}