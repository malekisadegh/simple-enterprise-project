export class BranchInfoRequestModel {
  /**
   * کد شعبه
   */
  branchCode: number;
  /**
   * نام شعبه
   */
  branchName: string;
  /**
   * آدرس
   */
  address: string;
  /**
   * کد شهر
   */
  cityCode: string;
  /**
   * کد استان
   */
  provinceCode: number;
  /**
   * کد اداره امور
   */
  supervisionOfficeCode: number;
  /**
   * فلگ موجودیت ATM
   */
  hasAtm: boolean;
  /**
   * قلگ موجودیت ارزی بودن شعبه
   */
  currencyBranch: boolean;
}
