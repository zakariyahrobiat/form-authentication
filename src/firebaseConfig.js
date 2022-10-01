// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsJYv0-yg2h1tGze9ItZkUK1-_aCBtnbU",
  authDomain: "fir-frontend-e1ef8.firebaseapp.com",
  projectId: "fir-frontend-e1ef8",
  storageBucket: "fir-frontend-e1ef8.appspot.com",
  messagingSenderId: "835175087323",
  appId: "1:835175087323:web:db7463c331a7993f4760fe",
  measurementId: "G-31Y8GWHS85",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
