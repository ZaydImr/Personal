import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_APIKEY,
  authDomain: process.env.REACT_APP_FIRE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIRE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIRE_APPID,
  measurementId: process.env.REACT_APP_FIRE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const db = getFirestore(app);

export default app;