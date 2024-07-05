import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZGUOj5ByzfT-dJQ4yf7yj5owJec4U2dU",
  authDomain: "auth-508eb.firebaseapp.com",
  projectId: "auth-508eb",
  storageBucket: "auth-508eb.appspot.com",
  messagingSenderId: "267953607390",
  appId: "1:267953607390:web:ad8a134e91eb7d5ac6a84f",
  measurementId: "G-39RV6HDBP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
