import {Component,OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  templateUrl: './account.component.html',
  styleUrls:['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountTypes=[];
 
  constructor(
    public dialogRef: MatDialogRef<AccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    close(): void {
      this.dialogRef.close(this.data);
    }

  ngOnInit(): void {
    this.accountTypes=["Credit Card","Bank","Wallet"];
  } 
  saveAccount(account){
    this.dialogRef.close(account);
  }
}