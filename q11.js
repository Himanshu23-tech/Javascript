class InvalidSalaryError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidSalaryError";
    }
}

function checkSalary(salary) {
    if (salary < 0) {
        throw new InvalidSalaryError(
            "Salary cannot be negative"
        );
    }

    console.log("Valid salary:", salary);
}

try {
    checkSalary(-5000);
} catch (error) {
    console.log(error.name + ": " + error.message);
}