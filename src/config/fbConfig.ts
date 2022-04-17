import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDzw4M7MuLXJPgS0ScxB0-cLMdB0aCPNUA",
  authDomain: "communitybots-w.firebaseapp.com",
  projectId: "communitybots-w",
  storageBucket: "communitybots-w.appspot.com",
  messagingSenderId: "246914924063",
  appId: "1:246914924063:web:3085f053dbf99730439f2a"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

// db.settings({ timestampsInSnapshots: true });

export default firebase;