import firebase from 'firebase';
require('firebase/firestore')

const config = {
    apiKey: "AIzaSyD_DBj8vCHEeT8uDOCuC7u6aG4QVqKcslw",
    authDomain: "testmap-app-c78de.firebaseapp.com",
    databaseURL: "https://testmap-app-c78de.firebaseio.com",
    projectId: "testmap-app-c78de",
    storageBucket: "testmap-app-c78de.appspot.com",
    messagingSenderId: "79085262934"
};

firebase.initializeApp(config)

export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();
export const db = firebase.firestore()
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);
export default firebase;
