import { Component, OnInit} from '@angular/core';
import { ExpenseService } from './expense.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Expense } from './expense';


@Component({
  templateUrl: './expense.component.html',
  styleUrls: [ './expense.component.css']
})
export class ExpenseComponent implements OnInit {
  
  public banks=[];
  public categories=[];
  expense:Expense;
  constructor(private expenseService: ExpenseService) { 

  }

  saveExpense(expenseInfo){
    console.log("From :"+expenseInfo.amount);
    this.expense = new Expense(expenseInfo);
    this.expenseService.saveExpense(this.expense);
  }
  
  ngOnInit(): void {
    this.banks.push({"value":"ICICI-Saving","viewValue":"ICICI-Saving"});
    this.banks.push({"value":"ICICI-Current","viewValue":"ICICI-Current"});
    this.banks.push({"value":"CreditCard-Citi","viewValue":"CreditCard-Citi"});
  } 
}