import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAtVRpcoNpyhJqD6NfLezl_rHTY5zR3bB0",
  authDomain: "biblioteca-509e4.firebaseapp.com",
  projectId: "biblioteca-509e4",
  storageBucket: "biblioteca-509e4.appspot.com",
  messagingSenderId: "940488110642",
  appId: "1:940488110642:web:bfac66da8ff8cda843c22b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
