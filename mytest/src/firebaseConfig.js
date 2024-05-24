
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwS5nzwwwmR_rynavzAiB_-i8322QAD9Q",
  authDomain: "jesminer-rannaghor.firebaseapp.com",
  projectId: "jesminer-rannaghor",
  storageBucket: "jesminer-rannaghor.appspot.com",
  messagingSenderId: "529938776045",
  appId: "1:529938776045:web:979753ca306f473632f1e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
