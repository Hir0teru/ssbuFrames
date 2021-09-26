import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnMBb-JM2No4cJb4BPPNGVV7rHYbZHQl8",
    authDomain: "ssbu-flames.firebaseapp.com",
    projectId: "ssbu-flames",
    storageBucket: "ssbu-flames.appspot.com",
    messagingSenderId: "272140067065",
    appId: "1:272140067065:web:7226381d906650894e8228",
    measurementId: "G-7GKVDR7PLW"
};

const firebaseApp = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = firebaseApp.firestore();

export default db