import firebase from 'firebse'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5ttxlKt_no8lyew-OPu39rRbjy3rHTj0",
    authDomain: "revents-216121.firebaseapp.com",
    databaseURL: "https://revents-216121.firebaseio.com",
    projectId: "revents-216121",
    storageBucket: "",
    messagingSenderId: "147718816050"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase