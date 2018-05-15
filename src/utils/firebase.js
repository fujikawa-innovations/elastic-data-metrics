import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyAff2H0Ww14wiCtM_QthaMLQ3ZUQt5qyWE",
  authDomain: "famagas-elastic.firebaseapp.com",
  databaseURL: "https://famagas-elastic.firebaseio.com",
  projectId: "famagas-elastic",
  storageBucket: "famagas-elastic.appspot.com"
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp
