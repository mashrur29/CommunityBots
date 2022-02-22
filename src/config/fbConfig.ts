import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC-BDWSA7ysP0GzaO0Js8GU3G9TrH4xZyQ",
  authDomain: "communitybots-m.firebaseapp.com",
  projectId: "communitybots-m",
  storageBucket: "communitybots-m.appspot.com",
  messagingSenderId: "277635095297",
  appId: "1:277635095297:web:27906c9450483380939900",
  measurementId: "G-HQNN8N3VJ1"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

// db.settings({ timestampsInSnapshots: true });

export default firebase;