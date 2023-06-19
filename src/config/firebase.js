
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBuv30Gn23gOYoe70zGYZ52rTo1VtzKdtc",
  authDomain: "tiktok---jornada-fc17c.firebaseapp.com",
  projectId: "tiktok---jornada-fc17c",
  storageBucket: "tiktok---jornada-fc17c.appspot.com",
  messagingSenderId: "339415616716",
  appId: "1:339415616716:web:28229fac305cf36db98669"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;