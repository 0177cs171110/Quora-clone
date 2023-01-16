import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCV_UzHqA-fIWdjwwI8SEfH0LH5XnE6qC8",
    authDomain: "quora-clone-4b3d5.firebaseapp.com",
    projectId: "quora-clone-4b3d5",
    storageBucket: "quora-clone-4b3d5.appspot.com",
    messagingSenderId: "875506006246",
    appId: "1:875506006246:web:f4694e5e942ba8ad392327",
    measurementId: "G-B50MXRPF2Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;