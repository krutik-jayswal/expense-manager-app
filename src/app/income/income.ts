import { Account } from '../account/Account'
export class Income {
  id: number;
  name: string;
  amount: number;
  account : Account;

  constructor(income){
    this.account=new Account(income.bank);
    this.amount=income.amount;
    this.name=income.name;
  }
}