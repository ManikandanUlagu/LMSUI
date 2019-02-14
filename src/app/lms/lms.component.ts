import { Component, OnInit,Input } from '@angular/core';
import { EnvironmentContext } from '../model/EnvironVal.model'
import { Loandetails } from '../model/loandetails.model';
import { GetloanService } from '../getloan.service'
@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrls: ['./lms.component.css']
})
export class LmsComponent implements OnInit {

// @Input() environmentContext: EnvironmentContext = {
//     'gatewayUrl': '',
//     'authorizationKey': 'Api-Key Ykkkk',
//     'requestcontext':"test",
//   };
  public loanlist: any[] = [];
  showApply:string;
  showbtnInc:string;
  constructor(private loans: GetloanService) { }

  ngOnInit() {
    this.showApply='disabled';
    this.showbtnInc='disabled';
    this.getLoanDetails();
  }
  getLoanDetails(): void {
    this.loans.getLoanDetails().subscribe((res) => {
      //this.result = res[0];
      this.loanlist=[];
      res.forEach(loan => {
        this.loanlist.push({ 'LoanName':loan.loanName, 'Balance': loan.balance,'Showdetails':loan.showdetails,'Interest':loan.interest,'Repay':loan.repay,'Payout':loan.payout });
      });
    });
  }
  sum: number = 0;
 

  change(e, item: any) {
    if (e.target.checked) {
      item.showdetails = true;
      this.sum = this.sum + parseFloat(item.Repay);
      if(this.sum>0)
      {
        this.showbtnInc='';
      }
    }
    else {
      item.showdetails = false;
      
      this.sum = this.sum - parseFloat(item.Repay);
       if(this.sum<=0)
       {
         this.showbtnInc='disabled';
       }
    }
  }
}


export class LoanDetails {
  LoanName: string;
  Balance: number;
  Showdetails: boolean;
  Interest:number;
  Repay:number;
  Payout:number;

  constructor(private loanName: string, private balance: number, showdetails: boolean,private interest: number,private repay: number,private payout: number) {
    this.LoanName = loanName;
    this.Balance = balance;
    this.Showdetails = showdetails;
    this.Interest=interest;
    this.Repay=repay;
    this.Payout=payout;
  }
}
