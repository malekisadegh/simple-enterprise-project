import { Injectable } from '@angular/core';
import { SelectMapModel } from '@shared/models/public/select-map.model';

@Injectable({
  providedIn: 'root',
})
export class StaticValueService {
  public static readonly LOCAL_STORAGE_STARTUP_LAW = 'STARTUP_LAW';
  public static readonly LOCAL_STORAGE_STARTUP_LAW_ACCEPT = 'TRUE';
  public static readonly ACTION_ID_PAGE_SIMPLE_REQUEST = 70;
  public static readonly STATUS_PAGE_SIMPLE_REQUEST = 0;

  public static readonly ACTION_ID_FOLLOW_UP_REQUEST = 80;
  public static readonly STATUS_FOLLOW_UP_REQUEST = 1;

  public static readonly customerTypeList: SelectMapModel[] = [
    { value: '1', nameValue: 'مشتری حقیقی' },
    { value: '2', nameValue: 'مشتری حقوقی' },
  ];

  public static readonly collateralCodeList: SelectMapModel[] = [
    // {value: '1', nameValue: 'ملک داخل شهر'},
    // {value: '2', nameValue: 'سهام'},
    // {value: '3', nameValue: 'سفته و برات تضميني'},
    { value: '4', nameValue: 'چک' },
    // {value: '5', nameValue: 'سایر'},
    { value: '5', nameValue: 'سفته و برات تضميني' },
    { value: '6', nameValue: 'سپرده متمرکز' },
    { value: '7', nameValue: 'ضمانت نامه بانکی' },
    { value: '8', nameValue: 'قراردادهاي لازم الاجرا' },
    { value: '9', nameValue: 'تعهدنامه کارمندی' },
    { value: '10', nameValue: 'اوراق بهادار' },
    { value: '11', nameValue: 'اموال در گرو بانک' },
    { value: '12', nameValue: 'قراردادهاي لازم الاجرا | چک' },
    // {value: '13', nameValue: 'ملک داخل شهر | چک'},
    // {value: '14', nameValue: 'سفته و برات تضميني | چک'},
    // {value: '15', nameValue: 'اوراق بهادار | سفته و برات تضميني | چک'},
    // {value: '16', nameValue: 'اوراق بهادار | چک'},
    // {value: '17', nameValue: 'سفته و برات تضميني | ضمانتنامه بانکهاي داخلي | چک'},
    // {value: '18', nameValue: 'تعهد نامه کارمندي | چک'},
    // {value: '19', nameValue: 'تعهد نامه کارمندي | سفته و برات تضميني | چک'},
    // {value: '20', nameValue: 'سفته و برات تضميني | ملک داخل شهر | چک'},
    // {value: '21', nameValue: 'سفته و برات تضميني | قراردادهاي لازم الاجرا | چک'},
    // {value: '22', nameValue: 'سپرده در  سبا'},
    // {value: '23', nameValue: 'ملک خارج شهر | ملک داخل شهر | چک'},
    // {value: '24', nameValue: 'ملک تجاري | چک'},
    // {value: '25', nameValue: 'اوراق بهادار | ملک داخل شهر'},
    // {value: '26', nameValue: 'اوراق بهادار | ملک داخل شهر | چک'},
    // {value: '27', nameValue: 'ملک خارج شهر | چک'},
    // {value: '28', nameValue: 'تعهد نامه کارمندي | قراردادهاي لازم الاجرا | چک'},
    // {value: '29', nameValue: 'سفته و برات تضميني | سهام | چک'},
    // {value: '30', nameValue: 'چک | چک شخص ثالث'},
    // {value: '31', nameValue: 'تعهد نامه کارمندي | سفته و برات تضميني'},
    // {value: '32', nameValue: 'سفته و برات تضميني | ملک خارج شهر'},
    // {value: '33', nameValue: 'تعهد نامه کارمندي | چک | چک شخص ثالث'},
    // {value: '34', nameValue: 'سهام | چک'},
    // {value: '35', nameValue: 'اوراق بهادار | سفته و برات تضميني'},
    // {value: '36', nameValue: 'سپرده در  سبا | چک'},
    // {value: '37', nameValue: 'ملک داخل شهر | چک شخص ثالث'},
    // {value: '38', nameValue: 'اوراق بهادار | سفته و برات تضميني | ملک داخل شهر | چک'},
    // {value: '39', nameValue: 'تعهد نامه کارمندي | ملک داخل شهر'},
    // {value: '40', nameValue: 'سفته و برات تضميني | سهام'},
    // {value: '41', nameValue: 'تعهد نامه کارمندي | سفته و برات تضميني | ملک داخل شهر'},
    // {value: '42', nameValue: 'تعهد نامه کارمندي | ملک داخل شهر | چک'},
    // {value: '43', nameValue: 'سفته و برات تضميني | چک | چک شخص ثالث'},
    // {value: '44', nameValue: 'سپرده متمرکز | چک'},
    // {value: '45', nameValue: 'سفته و برات تضميني | سپرده متمرکز | چک'},
    // {value: '46', nameValue: 'ملک کارخانه | چک'},
    // {value: '47', nameValue: 'تعهد نامه کارمندي | ملک خارج شهر | ملک داخل شهر | چک'},
    // {value: '48', nameValue: 'تعهد نامه کارمندي | سفته و برات تضميني | قراردادهاي لازم الاجرا | چک'},
    // {value: '49', nameValue: 'سفته و برات تضميني | قراردادهاي لازم الاجرا'},
    // {value: '50', nameValue: 'قراردادهاي لازم الاجرا | ملک داخل شهر | چک'},
    // {value: '51', nameValue: 'ضمانتنامه بانکهاي داخلي | چک'},
    // {value: '52', nameValue: 'سفته و برات تضميني | ملک داخل شهر'},
    // {value: '53', nameValue: 'قراردادهاي لازم الاجرا | ملک خارج شهر | چک'},
    // {value: '54', nameValue: 'ضمانتنامه بانکهاي داخلي | ملک داخل شهر | چک'},
    // {value: '55', nameValue: 'تعهد نامه کارمندي | سپرده متمرکز | چک'},
    // {value: '56', nameValue: 'سپرده متمرکز | ملک داخل شهر | چک'},
    // {value: '57', nameValue: 'سهام | سپرده متمرکز'},
    // {value: '58', nameValue: 'سپرده متمرکز | قراردادهاي لازم الاجرا | چک'},
    // {value: '59', nameValue: 'بدون وثيقه'},
    // {value: '60', nameValue: 'سفته و برات تضميني | سپرده متمرکز'},
    // {value: '61', nameValue: 'سفته و برات تضميني | سپرده متمرکز | ملک داخل شهر | چک'},
    // {value: '62', nameValue: 'اوراق بهادار | سپرده متمرکز'},
    // {value: '63', nameValue: 'از محل سپرده | سفته و برات تضميني | چک'},
    // {value: '64', nameValue: 'تعهد نامه کارمندي | سپرده متمرکز | قراردادهاي لازم الاجرا | چک'},
    // {value: '65', nameValue: 'از محل سپرده'},
    // {value: '66', nameValue: 'تعهد نامه کارمندي | سپرده متمرکز | ملک داخل شهر | چک'},
    // {value: '67', nameValue: 'سپرده در  سبا | سپرده متمرکز'},
    // {value: '68', nameValue: 'سفته و برات تضميني | سپرده در  سبا'},
    // {value: '69', nameValue: 'سفته و برات تضميني | سهام | سپرده متمرکز | چک'},
    // {value: '70', nameValue: 'سپرده متمرکز | ضمانتنامه بانکهاي داخلي | چک'},
    // {value: '71', nameValue: 'سپرده در  سبا | قراردادهاي لازم الاجرا | چک'},
    // {value: '72', nameValue: 'سفته و برات تضميني | چک شخص ثالث'},
    // {value: '73', nameValue: 'تعهد نامه کارمندي | قراردادهاي لازم الاجرا | چک | چک شخص ثالث'},
    // {value: '74', nameValue: 'قراردادهاي لازم الاجرا | چک شخص ثالث'},
    // {value: '75', nameValue: 'تعهد نامه کارمندي | چک شخص ثالث'},
    // {value: '76', nameValue: 'ملک داخل شهر | چک | چک شخص ثالث'},
    // {value: '77', nameValue: 'قراردادهاي لازم الاجرا | چک | چک شخص ثالث'},
    // {value: '78', nameValue: 'قراردادهاي لازم الاجرا | چک | چک شخص ثالث'}
  ];
}
