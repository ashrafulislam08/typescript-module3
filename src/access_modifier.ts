// access modifiers


type ID = number;
type Amount = number;

class BankAccount {
   public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: ID, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance  = _balance;
    }


    addMoney(id: ID, amount: Amount) {
        if(id === this.id) {
            return this._balance += amount;
        } else {
            return `Enter a valid Account Id`
        }
    }


    withdrawMoney(id: ID, amount: ID) {
        if(id === this.id && this._balance >= amount) {
            return this._balance -= amount
        } else {
            return "Please be sure your Account ID is alright and Amount is less than your current amount "
        }
    }

    getBalance() {
        return `Your total amount is: ${this._balance}tk`
    }
}


class StudentAccount extends BankAccount {
    constructor(public name: string, public id: number, _balance: number) {
        super(id, name, _balance)
    }
}


const goribManusherAccount = new BankAccount(11, "Mr. Poor", 2000)

console.log(goribManusherAccount.addMoney(111, 50000))
console.log(goribManusherAccount.withdrawMoney(111, 5000))
console.log(goribManusherAccount)
console.log(goribManusherAccount.getBalance())