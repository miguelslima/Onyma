import firebase from "firebase";

let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "onyma-test-front.appspot.com",
  messagingSenderId: "306050170546",
  appId: "1:306050170546:web:1c46e120079f6fb11253ab",
  measurementId: "G-QP2FSFBTNH",
};
// Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

// export default firebase;
