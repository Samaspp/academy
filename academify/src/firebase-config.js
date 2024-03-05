import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAGWMJc4d9-rcoUej8cb1qlrRhSu-7hNd8",
  authDomain: "academify-8f2b6.firebaseapp.com",
  projectId: "academify-8f2b6",
  storageBucket: "academify-8f2b6.appspot.com",
  messagingSenderId: "806454792652",
  appId: "1:806454792652:web:af01be6a3b0ca3cc3fcd69",
  measurementId: "G-YWZ5ET00LP"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)