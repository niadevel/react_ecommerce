import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHOx5uVvNFC7cY0QaUhpnz65Xd0K6HVws",
  authDomain: "nia-joyas.firebaseapp.com",
  projectId: "nia-joyas",
  storageBucket: "nia-joyas.firebasestorage.app",
  messagingSenderId: "974652505804",
  appId: "1:974652505804:web:88ae2ab5cfd58414b54c69"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)