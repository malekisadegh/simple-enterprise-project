import { DrlRequestContractInfoListModel } from './drl-request-contract-info-list.model';
import { RequestDocumentInfoCreateModel } from '@shared/models/simple-request/request-document-info-create.model';

export class DrlRequestModel {
  requestNumber: string;
  customerType: string;
  cifNationalCode: string;
  agentNationalCode: string;
  depositNumber: string;
  totalRequestAmount: number;

  mainRequestType: number;
  creditRequestType: number;
  requestSubjectType: number;
  requestSupplySource: number;

  mainEconomicPart: number;
  isicEconomicPart: number;
  isicSubEconomicPart: number;

  receivingOfPurpose: number;
  requestCount: number;
  cifMobile: string;
  description: string;
  actionId: number;
  status: number;

  // For Send To Server
  drlRequestContractInfoDTOList: DrlRequestContractInfoListModel[];
  // For Received From Server
  drlRequestContractInfoEntityList: DrlRequestContractInfoListModel[];
}
