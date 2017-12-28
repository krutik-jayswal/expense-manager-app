import { Injectable } from '@angular/core';
import { Expense } from './expense';


@Injectable()
export class ExpenseService {

    saveExpense(e:Expense){
        console.log(e);
    }
}

