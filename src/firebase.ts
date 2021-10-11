// https://www.npmjs.com/package/firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDuSPkUTR99MH2YpSUKeHtlZ2ggRmfvK4M",
  authDomain: "react-tutorial-5bf66.firebaseapp.com",
  projectId: "react-tutorial-5bf66",
  storageBucket: "react-tutorial-5bf66.appspot.com",
  messagingSenderId: "342014013042",
  appId: "1:342014013042:web:554853b3f1cfc48ebf1ceb",
  measurementId: "G-48W6CGB5T9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
