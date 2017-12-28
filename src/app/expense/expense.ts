import { Category } from '../category/Category';
import { Bank } from '../bank/Bank';

export class Expense{

    id:number;
    expenseName:string;
    amount:number;
    category:Category;
    bank:Bank;      

    constructor(expenseInfo:any) {
        this.expenseName = expenseInfo.name;
        this.amount = expenseInfo.amount;
        this.category = new Category(expenseInfo.category);
        this.bank = new Bank(expenseInfo.bank);
    }
}