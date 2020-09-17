import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7MGC4jLtcCtp8k71KLybcwBLzcoSyozY",
    authDomain: "clone-1b167.firebaseapp.com",
    databaseURL: "https://clone-1b167.firebaseio.com",
    projectId: "clone-1b167",
    storageBucket: "clone-1b167.appspot.com",
    messagingSenderId: "420373522104",
    appId: "1:420373522104:web:b824c75298b2d99c0fb64d",
    measurementId: "G-DTB7KHKEHN"
});

const auth = firebase.auth();

export {auth};