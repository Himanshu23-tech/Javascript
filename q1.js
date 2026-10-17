class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
        console.log("Balance:", this.balance);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
            console.log("Balance:", this.balance);
        } else {
            console.log("Insufficient balance");
        }
    }
}

const account = new BankAccount(101, "Himanshu", 5000);

account.deposit(1000);
account.withdraw(2000);