export class Bank{
    bankId:number;
    bankName:string;
    balance:number;

    constructor(bankInfo:any){
        this.bankName=bankInfo;
    }
}