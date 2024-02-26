import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhcFd3-XKu8kblKq7rqc2xi4YQ1SSB0l8",
  authDomain: "test-project-6b474.firebaseapp.com",
  projectId: "test-project-6b474",
  storageBucket: "test-project-6b474.appspot.com",
  messagingSenderId: "61656643311",
  appId: "1:61656643311:web:e80a9815bae76218778d1a",
  measurementId: "G-M9T4B094DV"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
