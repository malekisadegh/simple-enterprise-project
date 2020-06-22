import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class ConnectionService {
  serverURL = environment.server.inquiryService;

  constructor(private hc: HttpClient) {}

  public getConnection(url: string): Observable<any> {
    return this.hc.get(this.serverURL + url, {
      observe: 'response',
    });
  }

  public getConnectionParams(url: string, params: HttpParams): Observable<any> {
    return this.hc.get(this.serverURL + url, {
      observe: 'response',
      params: params,
    });
  }

  public postConnection(url: string, data: any): Observable<any> {
    return this.hc.post(this.serverURL + url, data, {
      observe: 'response',
      responseType: 'json',
    });
  }

  public putConnection(url: string, data: any): Observable<any> {
    return this.hc.put(this.serverURL + url, data, {
      observe: 'response',
      responseType: 'json',
    });
  }

  public deleteConnection(url: string): Observable<any> {
    return this.hc.delete(this.serverURL + url, {
      observe: 'response',
    });
  }
}
