export class UserPersonalInfoModel {
  /**
   * آدرس
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  address: string;
  /**
   * شماره تلفن
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  phone_number: string;
  /**
   * تایید شماره تلفن
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  phone_verified: boolean;
  /**
   * ایمیل
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  email: string;
  /**
   * تایید ایمیل
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  email_verified: boolean;
  /**
   * تاریخ تولد
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  birthDate: number;
  /**
   * عکس
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  picture: string;
  /**
   * پروفایل
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  profile: string;
  /**
   * نام کاربری
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  username: string;
  /**
   * به روز رسانی شده در
   * می تواند null ، صفر یا مقادیر نامعتبر باشد
   */
  update_at: number;
  /**
   * جنسیت
   */
  gender: string;
}
