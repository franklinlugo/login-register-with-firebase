import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDJYG4WMUNTlmHr1WdxVbSp11pUpaH3uF4',
  authDomain: 'login-register-with-fire-cea26.firebaseapp.com',
  databaseURL: 'https://login-register-with-fire-cea26.firebaseio.com',
  projectId: 'login-register-with-fire-cea26',
  storageBucket: 'login-register-with-fire-cea26.appspot.com',
  messagingSenderId: '203985687844',
  appId: '1:203985687844:web:6c33a0529f0c6a69378fb1',
});

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { app, googleAuthProvider, facebookAuthProvider };
