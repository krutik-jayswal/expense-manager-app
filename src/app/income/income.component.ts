import { Component, OnInit} from '@angular/core';
import { Income } from './income';
import { IncomeService } from './income.service';

@Component({
  templateUrl: './income.component.html',
  styleUrls: [ './income.component.css' ]
})
export class IncomeComponent implements OnInit {

  incomes: Income[];

  constructor(private incomeService: IncomeService) { }
 
   ngOnInit(): void {
    this.getIncomes();
   } 
	
  getIncomes(): void {
    this.incomeService.getIncomes().then(incomes => this.incomes = incomes);
  }
}