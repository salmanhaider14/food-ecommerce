import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq_NekpZ1CpWyNMI7bwR8440ETpQ7JP5Y",
  authDomain: "ecommerce-1cafb.firebaseapp.com",
  projectId: "ecommerce-1cafb",
  storageBucket: "ecommerce-1cafb.appspot.com",
  messagingSenderId: "167888184084",
  appId: "1:167888184084:web:2506daa5c824e3a9add801",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
