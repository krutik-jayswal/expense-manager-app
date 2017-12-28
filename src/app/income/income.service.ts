import { Injectable } from '@angular/core';
import { Income } from './income';
import { INCOMES } from '../data/mock-incomes';

@Injectable()
export class IncomeService {
  getIncomes(): Promise<Income[]> {
    return Promise.resolve(INCOMES);
  }
  getIncome(id: number): Promise<Income> {
  return this.getIncomes()
             .then(incomes => incomes.find(income => income.id === id));
  }
}

