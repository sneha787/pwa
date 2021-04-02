import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCyKmgIYcTyrkGUwHBhsdMrHbVeadC2VY",
    authDomain: "pwa-app-3f239.firebaseapp.com",
    projectId: "pwa-app-3f239",
    storageBucket: "pwa-app-3f239.appspot.com",
    messagingSenderId: "865717224607",
    appId: "1:865717224607:web:4c0db10dad8170ac850eaa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase