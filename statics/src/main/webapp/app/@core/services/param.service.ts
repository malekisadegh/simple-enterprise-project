import { Injectable } from '@angular/core';
import { ConnectionService } from '@core/services/connection.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ParamService {
  baseURL = '/param';
  paramConfig = '/general-ir.sadad.config/relation';

  constructor(private service: ConnectionService, private hc: HttpClient) {}

  public findEconomicSection(type: number, parentId: number) {
    const url = this.baseURL + '/economic/economic-section';
    let params = new HttpParams();

    params = params.append('type', type.toString());

    if (parentId) {
      params = params.append('parentId', parentId.toString());
    }

    return this.service.getConnectionParams(url, params);
  }

  public getProductDocument(productId: number) {
    const url = this.baseURL + this.paramConfig + '/product-doc/';
    return this.service.getConnection(url + productId);
  }
}
