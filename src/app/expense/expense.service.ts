import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable()
export class ExpenseService {

    constructor(){ 
        
    }

    saveExpense(e:Expense){
        console.log(e);
    }

}

