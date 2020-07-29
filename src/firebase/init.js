import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA5KcAIYOn618tfEi5rmtyBpo0PtqnRYlU",
  authDomain: "udemy-ninja-chat-3d84b.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-3d84b.firebaseio.com",
  projectId: "udemy-ninja-chat-3d84b",
  storageBucket: "udemy-ninja-chat-3d84b.appspot.com",
  messagingSenderId: "763127795600",
  appId: "1:763127795600:web:08c7b9739aa4b298fded15",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
