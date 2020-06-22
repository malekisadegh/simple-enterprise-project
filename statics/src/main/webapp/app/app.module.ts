import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UrlSerializer } from '@angular/router';

import { LowerCaseUrlSerializer } from '@shared/serializer/LowerCaseUrlSerializer';
import { HeaderComponent } from '@core/header/header.component';
import { SideMenuComponent } from '@core/side-menu/side-menu.component';
import { TopMenuComponent } from '@core/top-menu/top-menu.component';
import { HomeModule } from '@modules/home/home.module';
import { AuthInterceptor } from '@core/http/auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceModule } from '@core/services/service.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MatCardModule } from '@angular/material/card';
import { StartUpAlertModule } from '@modules/start-up-alert/start-up-alert.module';
import { MatTooltipModule } from '@angular/material/tooltip';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    FormsModule,
    SharedModule,
    CoreModule,
    ShellModule,
    AuthModule,
    BrowserAnimationsModule,
    HomeModule,
    ServiceModule,
    StartUpAlertModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
    MatCardModule,
    MatTooltipModule,
    // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    TopMenuComponent,
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
