import { Injectable } from '@angular/core';
import { ConnectionService } from '@core/services/connection.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InquiryRequestService {
  constructor(private connection: ConnectionService, private hc: HttpClient) {}

  public findTracking() {
    const url = '/tracking/find';
    return this.connection.getConnection(url);
  }

  public findTrackingParentId(parentId: number) {
    const url = '/tracking/find';
    return this.connection.getConnection(url + '/' + parentId);
  }
}
