export class Loandetails {
    LoanName: string;
    Balance: number;
    Showdetails: boolean;
    Interest:number;
    Repay:number;
    Payout:number;

     constructor(private loanName: string,private balance: number,private interest: number, showdetails:boolean,private repay: number,private payout: number) {
        this.Balance = balance;
        this.LoanName = loanName;
        this.Showdetails=showdetails;
        this.Interest=interest;
        this.Repay=repay;
        this.Payout=payout;
    }
}

