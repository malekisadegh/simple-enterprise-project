import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StaticValueService } from '@shared/util/static-value.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-start-up-alert-home',
  templateUrl: './start-up-alert-home.component.html',
  styleUrls: ['./start-up-alert-home.component.scss'],
})
export class StartUpAlertHomeComponent implements OnInit {
  law: string;
  startUpForm: false;

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.law = environment.server.startLaw;
  }

  submitLaw() {
    if (this.startUpForm) {
      localStorage.setItem(
        StaticValueService.LOCAL_STORAGE_STARTUP_LAW,
        StaticValueService.LOCAL_STORAGE_STARTUP_LAW_ACCEPT
      );
      this.dialogRef.close();
    }
  }
}
