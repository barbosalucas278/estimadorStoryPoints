// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'estimador-his-points',
    appId: '1:869270087625:web:962d9b6c1970985403ea18',
    storageBucket: 'estimador-his-points.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyB3-ZE8KmhgbkuLb9ikVow7r55ZvHrrIdY',
    authDomain: 'estimador-his-points.firebaseapp.com',
    messagingSenderId: '869270087625',
    measurementId: 'G-2KJJWQXDHT',
  },
  production: false,
  version: '1.0.0',
  imgBackground: '../assets/background-estimador-limpio.png',
  // nombreSector: 'Squad SOM - Telecom Argentina',
  nombreSector: '',
  firebaseConfig: {
    apiKey: 'AIzaSyB3-ZE8KmhgbkuLb9ikVow7r55ZvHrrIdY',
    authDomain: 'estimador-his-points.firebaseapp.com',
    projectId: 'estimador-his-points',
    storageBucket: 'estimador-his-points.appspot.com',
    messagingSenderId: '869270087625',
    appId: '1:869270087625:web:962d9b6c1970985403ea18',
    measurementId: 'G-2KJJWQXDHT',
  },
  urlImgSpinner: '../assets/img-spinner.gif',
  urlImgBtnGoogle: '../assets/logo-google.svg',
  urlImgLogin: '../assets/img-login.png',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
