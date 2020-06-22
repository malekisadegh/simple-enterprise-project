export const environment = {
  production: false,
  hmr: false,
  version: '0.0.1' + '-dev',
  serverUrl: '',
  defaultLanguage: 'fa-IR',
  supportedLanguages: ['fa-IR', 'en-US'],
  oath: {
    grantType: 'authorization_code',
    redirectUri: 'http://localhost:8080/los',
    clientId: 'los-ui-client',
    accessTokenUri: 'http://185.135.30.10:9443/identity/oauth2/auth/token',
    authorizationUri:
      'http://185.135.30.10:9443/identity/oauth2/auth/authorize',
    clientSecret: 'bK4cF1cJ5lF6nH7kG6iI5mN5gL1vB3dP1jF4jC1qB1',
    scope: 'svc-mgmt-indv-lgl-foreign-cust-info',
  },
  server: {
    inquiryService: 'http://192.168.33.81:9010/drl/api',
    startLaw:
      '<ul>\n    <li>مطالعه و رعایت مفاد نامه های شماره 98/359070 مورخ 1398/10/17 و شماره 98/421492 مورخ 1398/12/05 بانک مرکزی ج.ا.ا ضروری می باشد.</li>\n    <li>تسهیلات اعطایی واحد های تولیدی ریالی که تمام یا بخشی از آن در سال 1397 پرداخت نشده است مشمول قانون مذکور می باشند.</li>\n    <li>اخذ درخواست کتبی از مشتری که در آن به مواردی نظیر تسویه نقدی بدهی-تولیدی بودن- شماره قرارداد/قراردادهای مدنظر مشتری اشاره شود.</li>\n    <li>در صورتی که قرارداد تسهیلات گیرنده با بانک یا موسسه اعتباری تجدید یا امهال نشده باشد. همان قرار داد، ملاک محاسبه مانده بدهی تسهیلات گیرنده بر اساس این قانون خواهد بود.</li>\n    <li>در مورد قراردادهایی که یک یا چند نوبت از طرقی مانند انعقاد توافقنامه، قرارداد جدید یا اعطای تسهیلات جایگزین، تجدید یا امهال شده باشند، اگر قرار داد اولیه قبل از 1393/01/01 منعقد شده باشندآخرین قرارداد و یا توافقنامه قبل از تاریخ مذبور، &laquo;قرارداد ملاک محاسبه&raquo; تلقی می گردد. اگر قرارداد اولیه بعد از 1393/01/01 منعقد شده باشد قرار داد ملاک محاسبه، اولین قرارداد بعد از تاریخ یاد شده می باشد.</li>\n    <li>تصویر و اطلاعات کلیه قراردادها و توافقنامه ها می بایست در سامانه بارگذاری شود.</li>\n    <li>مبنای سقف مجاز، اصل تسهیلات مندرج در &laquo;قرارداد های ملاک محاسبه&raquo; می باشد حقیقی - ۵ میلیارد ریال(۵۰۰ میلیون تومان) و حقوقی- ۲۰ میلیارد ریال (۲میلیارد تومان)</li>\n    <li>بر اساس ماده ۲ دستورالعمل اجرایی قانون تسهیل تسویه بدهی بدهکاران شبکه بانکی کشور ملاک تولیدی/غیر تولیدی بودن اطلاعات ثبت شده در سامانه سمات می باشد.</li>\n    <li>مبالغ پرداختی مشتری بین اجزای بدهی مشتمل بر اصل، سود تا سررسید و سود پس از سررسید تسهیم بالنسبه می گردد.</li>\n    <li>استخراج و ثبت صحیح وصولی های مشتری و هزینه ها بر عهده کاربران می باشد که کاربران ملزم به بارگذاری اسناد وصولی ها و هزینه ها می باشد.</li>\n  </ul>',
  },
};

/*

 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
