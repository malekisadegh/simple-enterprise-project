import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from '@app/auth';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BankEmployeeInfoResponseModel } from '@shared/models/employee/bank-employee-info-response.model';
import { BankInfoService } from '@core/services/common/bank-info.service';
import { BankEmployeeTransferService } from '@core/services/local/bank-employee-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMenu = true;
  auth = false;

  name = '';

  @Output() sidenavChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  private employee: BankEmployeeInfoResponseModel;

  constructor(
    private router: Router,
    private credentialsService: CredentialsService,
    private bankInfoService: BankInfoService,
    private bankEmployeeService: BankEmployeeTransferService
  ) {}

  ngOnInit() {
    this.bankInfoService.getEmployeeInfo().subscribe(
      (response: HttpResponse<BankEmployeeInfoResponseModel[]>) => {
        if (
          response.status === 200 &&
          response.body &&
          response.body.length > 0
        ) {
          this.employee = response.body[0];
          this.auth = true;
          this.name =
            this.employee.userInfo.name + this.employee.userInfo.family;
          this.bankEmployeeService.changeMessage(this.employee);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  toggleSidenav() {
    this.showMenu = !this.showMenu;
    this.sidenavChange.emit(this.showMenu);
  }

  logout() {
    this.credentialsService.logout();
  }

  get username(): string | null {
    /*  const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;*/
    return 'user';
  }
}
