import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuykYN2RtFSwLEZah4uBwCv6j9tuF01k0",
  authDomain: "disney-plus-clone-8c361.firebaseapp.com",
  projectId: "disney-plus-clone-8c361",
  storageBucket: "disney-plus-clone-8c361.appspot.com",
  messagingSenderId: "826817845719",
  appId: "1:826817845719:web:b632224ec7813bd6ba5392",
  measurementId: "G-WWG2XDK8KD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
