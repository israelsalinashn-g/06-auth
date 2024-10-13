// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTZQItdmt-wqOaSrPTBixNjbemyLN7FoA",
  authDomain: "fases-e1df5.firebaseapp.com",
  projectId: "fases-e1df5",
  storageBucket: "fases-e1df5.appspot.com",
  messagingSenderId: "856300586514",
  appId: "1:856300586514:web:af1e8ab650b4e4735bbacb",
  measurementId: "G-LGQXLB8NWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'es';

export const firebase = {
  app,
  auth,
};
