import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA9pVeM8G1b4YpQz8EhqfC2INs2ZjQY5no",
    authDomain: "react-pushnotificaiton-pwa.firebaseapp.com",
    databaseURL: "https://react-pushnotificaiton-pwa.firebaseio.com",
    projectId: "react-pushnotificaiton-pwa",
    storageBucket: "react-pushnotificaiton-pwa.appspot.com",
    messagingSenderId: "640626644496",
    appId: "1:640626644496:web:5f5757420b337446c45c95"

};
firebase.initializeApp(config);
export default firebase;
