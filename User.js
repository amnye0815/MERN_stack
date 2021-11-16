
class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }

    displayBalance() {
        console.log(`Name: ${this.name}, Account Balance: $${this.accountBalance}`);
    }

}

const austin = new User("Austin Nye", "amnye0815@gmail.com");
const michael = new User("Michael Plenn", "mnplenn@gmail.com");
const will = new User("William Hoppen", "willhoppen@gmail.com");

austin.makeDeposit(2000);
austin.makeDeposit(100);
austin.makeDeposit(250);
austin.makeWithdrawal(700);
austin.displayBalance();

michael.makeDeposit(300);
michael.makeDeposit(5000);
michael.makeWithdrawal(400);
michael.makeWithdrawal(3000);
michael.displayBalance();

will.makeDeposit(4000);
will.makeWithdrawal(30);
will.makeWithdrawal(500);
will.makeWithdrawal(600);
will.displayBalance();

