import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCGOcN5HjVf8DIvcAUDjzDVc22RomQ-dSI",
  authDomain: "work-place-238b7.firebaseapp.com",
  projectId: "work-place-238b7",
  storageBucket: "work-place-238b7.appspot.com",
  messagingSenderId: "170019076362",
  appId: "1:170019076362:web:c5eb981087b48091f5e2f3"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth= getAuth(app);
 export const db=getFirestore(app);
 export const storage=getStorage(app);