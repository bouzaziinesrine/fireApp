import { initializeApp } from 'firebase/app';
// import {getAuth } from 'firebase/auth'
import { getFirestore}  from '@firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDDXeFv0WGmGmofmwBJYL6U1--SIzX-SU0",
    authDomain: "fireapp-9e56e.firebaseapp.com",
    projectId: "fireapp-9e56e",
    storageBucket: "fireapp-9e56e.appspot.com",
    messagingSenderId: "792051753383",
    appId: "1:792051753383:web:96766bdebbd7dfd99e5682"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
