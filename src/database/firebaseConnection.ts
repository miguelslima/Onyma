import firebase from "firebase/app";

let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: "https://meuapp-61a82.firebaseio.com",
  storageBucket: "meuapp-61a82.appspot.com",
  messagingSenderId: "843234680313",
  appId: "1:843234680313:web:0be932a7a2fa5d062bf128",
  measurementId: "G-GDV5321YF5",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

// export default firebase;
