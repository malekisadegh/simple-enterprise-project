import { Injectable } from '@angular/core';
import { CollateralDocumentModel } from '@shared/models/collateral/collateral-document.model';

@Injectable()
export class PublicUtilityService {
  public static readonly PARAM_DOC_TYPE = -6;

  public static convertArabicToPersian(arabic: string): string {
    return arabic.replace(/\u0643/g, '\u06A9').replace(/\u064A/g, '\u06CC');
  }

  /**
   * Convert Persian Or Arabic Digit To English
   * @param str
   */
  public static toEnglishDigits(str: string) {
    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    var e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, (t: string) => {
      let digit = t.charCodeAt(0) - e;
      return digit.toString();
    });

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, (t: string) => {
      let digit = t.charCodeAt(0) - e;
      return digit.toString();
    });
    return str;
  }

  public static convertToBase64(element: CollateralDocumentModel) {
    if (element.fileSelectString) {
      return 'data:' + element.type + ';base64,' + element.fileSelectString;
    }
  }
}
