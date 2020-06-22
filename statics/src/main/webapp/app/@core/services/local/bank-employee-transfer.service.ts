import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BankEmployeeInfoResponseModel } from '@shared/models/employee/bank-employee-info-response.model';

@Injectable()
export class BankEmployeeTransferService {
  private bankEmployeeInfoSource = new BehaviorSubject(
    new BankEmployeeInfoResponseModel()
  );
  currentBankEmployeeInfoSource = this.bankEmployeeInfoSource.asObservable();

  constructor() {}

  changeMessage(bankEmployee: BankEmployeeInfoResponseModel) {
    this.bankEmployeeInfoSource.next(bankEmployee);
  }
}
