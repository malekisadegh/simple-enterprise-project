import { BranchInfoRequestModel } from '@shared/models/public/branch-info-request.model';

export class RequestTrackingModel {
  id: number;

  userId: number;
  unitId: number;

  // Local Use
  unitName: BranchInfoRequestModel;
  branchName: string;

  unitCode: string;
  version: number;
  createUID: string;
  createDateTime: Date;
  updateUID: string;
  updateDateTime: Date;
  enable: boolean = true;

  requestNumber: string;
  proposeNumber: string;
  parentId: number;
  regDate: number;
  lastActionId: number;
  nextActionId: number;
  cifCode: string;
  natCode: string;
  cifName: string;
  reqUnitCode: string;
  reqUnitId: number;
  reqUserId: number;
  reqUserName: string;
  execUnitCode: string;
  execUnitId: number;
  execUserId: number;
  execUserName: string;
  pageUrl: string;
  status: number; //0=reg , 1=view, 2=tmp_done, 3=final_done
  description: string;
}
