import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeRa_JrWWI1uGjJLOW_enh1KOo8hjmTbs",
  authDomain: "vibetune-29a6c.firebaseapp.com",
  databaseURL: "https://vibetune-29a6c-default-rtdb.firebaseio.com",
  projectId: "vibetune-29a6c",
  storageBucket: "vibetune-29a6c.appspot.com", 
  messagingSenderId: "888461144088",
  appId: "1:888461144088:web:96773b9b7acddeefbb136d",
  measurementId: "G-MB8D7PZEKR"
};

const app = initializeApp(firebaseConfig);

// Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
