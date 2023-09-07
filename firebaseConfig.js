import { initializeApp } from 'firebase/app';
// import {getAuth } from 'firebase/auth'
import { getFirestore}  from '@firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCc-TbhnFO8nawVyrPA6xEzGgXXzSWfEnU",
  authDomain: "todo-eadf4.firebaseapp.com",
  projectId: "todo-eadf4",
  storageBucket: "todo-eadf4.appspot.com",
  messagingSenderId: "80864763927",
  appId: "1:80864763927:web:a00479a29ddac5dbce7c52"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
