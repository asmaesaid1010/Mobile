// database/firebase.js
import   firebase from 'firebase';
 
  
export default firebase;
var firebaseConfig = {
  apiKey: "AIzaSyADY8akdIOSegH3Z3EsHNpu9mlWckuNm_Y",
  authDomain: "moviesandme-74085.firebaseapp.com",
  databaseURL: "https://moviesandme-74085.firebaseio.com",
  projectId: "moviesandme-74085",
  storageBucket: "moviesandme-74085.appspot.com",
  messagingSenderId: "183963847140",
  appId: "1:183963847140:web:dcf912e6bbea5cd4389ff1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);