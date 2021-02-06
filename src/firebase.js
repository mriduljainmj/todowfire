import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDmLQ0N1t6d-H3Yrp85kzuhDZbBm6KpRFc",
        authDomain: "todo-react-73721.firebaseapp.com",
        projectId: "todo-react-73721",
        storageBucket: "todo-react-73721.appspot.com",
        messagingSenderId: "825731991812",
        appId: "1:825731991812:web:4a707d6faf58ff282ea851",
        measurementId: "G-PBLSRF6CJS"
      
});

const db = firebaseApp.firestore();
export default db;

