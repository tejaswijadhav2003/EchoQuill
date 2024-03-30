// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCRfD3mCDutWYTRlCEasEkEWBWB-BzzaJw",
  authDomain: "fir-blog-50475.firebaseapp.com",
  projectId: "fir-blog-50475",
  storageBucket: "fir-blog-50475.appspot.com",
  messagingSenderId: "734494130622",
  appId: "1:734494130622:web:f7bc3f6072a5ed931f79ef",
  measurementId: "G-LQ6VDEBTJV"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage  =  getStorage();
export const db = getFirestore();


