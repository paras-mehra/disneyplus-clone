import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjw8Pnems4gdrlXCgqNlzUxo47ZRLjvrA",
  authDomain: "disneyplus-clone-69715.firebaseapp.com",
  projectId: "disneyplus-clone-69715",
  storageBucket: "disneyplus-clone-69715.appspot.com",
  messagingSenderId: "835782318489",
  appId: "1:835782318489:web:fd4126134ff3f8518adb08",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default dbConfig; // Global Object
