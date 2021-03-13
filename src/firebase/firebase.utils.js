import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDIW7rTX5_SshgysKkwfa-lTYwwkWXSoDE",
    authDomain: "mi-tienda-react.firebaseapp.com",
    projectId: "mi-tienda-react",
    storageBucket: "mi-tienda-react.appspot.com",
    messagingSenderId: "799753970067",
    appId: "1:799753970067:web:698e5c8dcf83fbdac0c866",
    measurementId: "G-2SVG80LKMZ"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;