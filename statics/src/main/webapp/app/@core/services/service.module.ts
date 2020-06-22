import { NgModule } from '@angular/core';
import { ConnectionService } from '@core/services/connection.service';
import { CustomerDetailsService } from '@core/services/customer/customer-details.service';
import { ParamService } from '@core/services/param.service';
import { InitialRequestService } from '@core/services/request/initial-request.service';
import { DateTimeService } from '@core/services/local/date-time.service';
import { InquiryRequestService } from '@core/services/inquiry-request/inquiry-request.service';
import { BankInfoService } from '@core/services/common/bank-info.service';
import { BankEmployeeTransferService } from '@core/services/local/bank-employee-transfer.service';

@NgModule({
  providers: [
    ConnectionService,
    CustomerDetailsService,
    ParamService,
    InitialRequestService,
    DateTimeService,
    InquiryRequestService,
    BankInfoService,
    BankEmployeeTransferService,
  ],
})
export class ServiceModule {}
