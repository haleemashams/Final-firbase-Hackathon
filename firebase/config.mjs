import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzLRjcnJ2y721fxInnBON-oAX8gdv9-_M",
  authDomain: "fir-final-hakathon.firebaseapp.com",
  databaseURL: "https://fir-final-hakathon-default-rtdb.firebaseio.com",
  projectId: "fir-final-hakathon",
  storageBucket: "fir-final-hakathon.appspot.com",
  messagingSenderId: "1088657051469",
  appId: "1:1088657051469:web:0a32e0637f3d62d87ef104",
  measurementId: "G-TPK0X6ZL1B"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage }