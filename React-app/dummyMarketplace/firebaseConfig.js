import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAyN-Coeuyc-eH3yIasnc7j52RFQQ-Zu6A",
    authDomain: "first-fb-proj-b4703.firebaseapp.com",
    projectId: "first-fb-proj-b4703",
    storageBucket: "first-fb-proj-b4703.appspot.com",
    messagingSenderId: "186174933856",
    appId: "1:186174933856:web:fa5a552a1e5fb23a1c2c05",
    measurementId: "G-7CE8T71HGD"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
