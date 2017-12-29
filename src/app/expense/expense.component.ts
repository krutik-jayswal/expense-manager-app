import { Component, OnInit} from '@angular/core';
import { ExpenseService } from './expense.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Expense } from './expense';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AccountComponent } from '../account/account.component';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  templateUrl: './expense.component.html',
  styleUrls: [ './expense.component.css']
})
export class ExpenseComponent implements OnInit {
  
  public banks=[];
  public categories=[];
  expense:Expense;
  constructor(
      private expenseService: ExpenseService,
      public dialog: MatDialog,
      iconRegistry: MatIconRegistry, 
      sanitizer: DomSanitizer
    )
  { 
      iconRegistry.addSvgIcon('plus',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/plus.svg'));
  }

  saveExpense(expenseInfo){
    this.expense = new Expense(expenseInfo.value);
    this.expenseService.saveExpense(this.expense);
  }
  
  ngOnInit(): void {
    this.banks.push({"value":"ICICI-Saving","viewValue":"ICICI-Saving"});
    this.banks.push({"value":"ICICI-Current","viewValue":"ICICI-Current"});
    this.banks.push({"value":"CreditCard-Citi","viewValue":"CreditCard-Citi"});
  } 
  addAccount(){
    let dialogRef = this.dialog.open(AccountComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Values');
      console.log(result);
    });
  }
}