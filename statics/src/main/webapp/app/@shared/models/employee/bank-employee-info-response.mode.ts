import { BranchInfoModel } from '@shared/models/employee/branch-info.model';
import { JobInfoModel } from '@shared/models/employee/job-info.model';
import { JobStatusInfoModel } from '@shared/models/employee/job-status-info.model';
import { UserInfoModel } from '@shared/models/employee/user-info.model';
import { UserPersonalInfoModel } from '@shared/models/employee/user-personal-info.model';

export class BankEmployeeInfoResponseMode {
  branchInfo: BranchInfoModel;
  jobInfo: JobInfoModel;
  jobStatusInfo: JobStatusInfoModel;
  userInfo: UserInfoModel;
  userPersonalInfo: UserPersonalInfoModel;
}
