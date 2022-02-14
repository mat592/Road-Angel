// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADkDs9tS0_bxXYYS2b-cX-tg2bE95Oyjo",
    authDomain: "roadangel21-c64f8.firebaseapp.com",
    databaseURL: "https://roadangel21-c64f8-default-rtdb.firebaseio.com",
    projectId: "roadangel21-c64f8",
    storageBucket: "roadangel21-c64f8.appspot.com",
    messagingSenderId: "672618113083",
    appId: "1:672618113083:web:7d33caf2889bb1e6c1541e",
    measurementId: "G-HJ87BMN9DE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;