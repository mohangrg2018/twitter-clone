import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYMD7aQzAXyHG7wLdDrJwghR_C-i3QVFA",
  authDomain: "twitter-clone-390606.firebaseapp.com",
  projectId: "twitter-clone-390606",
  storageBucket: "twitter-clone-390606.appspot.com",
  messagingSenderId: "716788140939",
  appId: "1:716788140939:web:8596a12a433671aafd3d8e",
  measurementId: "G-KZ7SN4RD25",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
