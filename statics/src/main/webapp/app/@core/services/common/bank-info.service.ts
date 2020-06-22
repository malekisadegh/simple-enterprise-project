import { ConnectionService } from '@core/services/connection.service';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BankInfoService {
  main = '/bank-common';

  constructor(private connection: ConnectionService) {}

  public getBranchInfo(branchId: string, branchName: string) {
    let params = new HttpParams();

    if (branchId) {
      params = params.append('branchCode', branchId);
    }

    if (branchName) {
      params = params.append('branchName', branchName);
    }

    return this.connection.getConnectionParams(
      this.main + '/fetch-branch-info',
      params
    );
  }

  public getEmployeeInfo() {
    return this.connection.getConnection(
      this.main + '/fetch-employee-info-with-token'
    );
  }
}
