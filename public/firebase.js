
// No arquivo firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyDuexLT4tqdisAycAOIO-ZheaUfRJlCBNg",
  authDomain: "hype-rec.firebaseapp.com",
  projectId: "hype-rec",
  storageBucket: "hype-rec.appspot.com",
  messagingSenderId: "230602631230",
  appId: "1:230602631230:web:14643badfd7139ad98496f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db }; 
