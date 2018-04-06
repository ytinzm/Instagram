import * as firebase from "firebase";

const config = firebase.initializeApp({
  apiKey: "AIzaSyB9So7cOeKprxApWec0sRrrULSUsH1HA3E",
  authDomain: "instagram-b3397.firebaseapp.com",
  databaseURL: "https://instagram-b3397.firebaseio.com",
  projectId: "instagram-b3397",
  storageBucket: "instagram-b3397.appspot.com",
  messagingSenderId: "387354036691"
});

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
