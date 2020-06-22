export class UserInfoModel {
  /**
   * نام کاربر
   */
  name: string;
  /**
   * نام انگلیسی
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  english_name: string;
  /**
   * نام خانوادگی
   */
  family: string;
  /**
   * نام خانوادگی انگلیسی
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  english_family: string;
  /**
   * سازمان
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  organization: string;
  /**
   * کد ملی
   */
  national_code: string;
  /**
   * کد پرسنلی
   */
  employee_id: string;
  /***
   * کد شعبه
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  branch_code: string;
  /**
   * کد شغلی
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  job_code: string;
  /**
   * کد وضعیت شغلی
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  job_status_code: string;
}
