// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCe3UXyyjWSoOaQ9fOVn_hk2FCcjiMnnz8",
  authDomain: "shopping-9105e.firebaseapp.com",
  databaseURL: "https://shopping-9105e-default-rtdb.firebaseio.com/",
  projectId: "shopping-9105e",
  storageBucket: "shopping-9105e.firebasestorage.app",
  messagingSenderId: "953618335796",
  appId: "1:953618335796:web:4f5c628287476f94e52261",
  measurementId: "G-M9FMDBSPHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
