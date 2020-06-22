import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { DrlRequestModel } from '@shared/models/simple-request/drl-request.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InitialRequestService {
  mainURL = '/integration-inquiry-collateral';

  constructor(private connection: ConnectionService, private hc: HttpClient) {}

  public registerInitialRequestCollateral(drlRequestModel: DrlRequestModel) {
    return this.connection.postConnection(
      '/request',
      JSON.stringify(drlRequestModel)
    );
  }

  public editInitialRequestCollateral(drlRequestModel: DrlRequestModel) {
    return this.connection.putConnection(
      '/request',
      JSON.stringify(drlRequestModel)
    );
  }

  public getInitialRequestCollateralByRequestNumber(requestNumber: string) {
    return this.connection.getConnection('/request/' + requestNumber);
  }

  public getReportingInitialRegistrationRequest(
    fromDate: string,
    toDate: string,
    branchId: string
  ) {
    return this.connection.getConnection(
      '/request/findDrlRequestListByUnitId/' +
        branchId +
        '/' +
        fromDate +
        '/' +
        toDate
    );
  }

  public getDocumentAttachmentByContractId(contractId: number) {
    const URL = '/fetch-document-attachment-by-contract-id/';
    return this.connection.getConnection(this.mainURL + URL + contractId);
  }
}
