
const firebase = require("firebase/app");
require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyDaMmpzQgm-oGpdQRBxk--T5gd_zBUMk-Y",
  authDomain: "hofu-sushi.firebaseapp.com",
  projectId: "hofu-sushi",
  storageBucket: "hofu-sushi.appspot.com",
  messagingSenderId: "506545650441",
  appId: "1:506545650441:web:e4652bd68fb766832b71d8",
  measurementId: "G-Z4HC4JX7Q0"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database(app);
