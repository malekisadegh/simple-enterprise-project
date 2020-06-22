export class JobStatusInfoModel {
  /**
   * کد وضعیت شغلی
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  job_status_code: string;
  /**
   * عنوان وضعیت شغلی
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  job_status_name: string;
  /**
   * وضعیت اشتغال
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  employed: boolean;
  /**
   * وضعیت اشتغال در بانک
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  bank_employed: boolean;
}
