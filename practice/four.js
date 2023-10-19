// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount{
  constructor(account_number,name,balance){
    this.account_number=account_number;
    this.balance = balance;
    this.name = name;
    console.log(`Welcome ${this.name} to the Bank of India. Your account number is :${this.account_number}. Your current Balance is :${this.balance}.`)
  }
  deposite_money(amount){
    this.balance += amount
    console.log(`your balance after depositing ${amount} for the account_number ${this.account_number} is :${this.balance}`);
    console.log(`Thanks for banking with us ${this.name}`)
  }
  withdraw_money(amount){
    if(amount<=this.balance){
      this.balance -= this.balance
      console.log(`Your balance after withdrawal of ${amount} for the account_number ${this.account_number} is :${this.balance}`);
      console.log(`Thanks for banking with us ${this.name}`);
    }
    else{
      console.log("Teri maa aha chod ke gayi thi ya tera Baap.....")
      console.log(`Your balance for the account_number ${this.account_number} is :${this.balance}`);
      console.log(`Thanks for banking with us ${this.name}`);
    }
  }
}
let a1 = new BankAccount(2001,'Juvela',50000);
a1.withdraw_money(200000)

