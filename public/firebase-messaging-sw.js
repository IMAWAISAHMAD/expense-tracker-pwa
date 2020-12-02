/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyA9pVeM8G1b4YpQz8EhqfC2INs2ZjQY5no",
    authDomain: "react-pushnotificaiton-pwa.firebaseapp.com",
    databaseURL: "https://react-pushnotificaiton-pwa.firebaseio.com",
    projectId: "react-pushnotificaiton-pwa",
    storageBucket: "react-pushnotificaiton-pwa.appspot.com",
    messagingSenderId: "640626644496",
    appId: "1:640626644496:web:5f5757420b337446c45c95"
});

firebase.messaging();