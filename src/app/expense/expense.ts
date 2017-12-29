import { Category } from '../category/Category';
import { Account } from '../account/Account';

export class Expense{

    id:number;
    expenseName:string;
    amount:number;
    category:Category;
    account:Account;      

    constructor(expenseInfo:any) {
        this.expenseName = expenseInfo.name;
        this.amount = expenseInfo.amount;
        this.category = new Category(expenseInfo.category);
        this.account = new Account(expenseInfo.bank);
    }
}