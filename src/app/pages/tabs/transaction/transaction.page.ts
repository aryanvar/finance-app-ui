import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  allTransactions: any[] = [];
  transactions: any[] = [];
  segmentValue = 'in';
  constructor() { }

  ngOnInit() {
    this.allTransactions=[
      { id: 1, to: 'Prathmesh', date: '2023-05-22', amount: 5000 },
      { id: 2, to: 'Alok', date: '2023-03-02', amount: 7000 },
      { id: 3, to: 'Nishant', date: '2023-07-28', amount: -3250 },
      { id: 4, to: 'Prasad', date: '2023-01-09', amount: 1000 },
      { id: 5, to: 'Aryan', date: '2023-04-13', amount: -800 },
    ]
    this.filterTransactions();
  }
  filterTransactions() {
    if(this.segmentValue == 'in') {
      this.transactions = this.allTransactions.filter(x => x.amount >= 0);
    } else {
      this.transactions = this.allTransactions.filter(x => x.amount < 0);
    }
  }
  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }
}
