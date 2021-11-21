import firebase from "firebase/app";
import "firebase/firestore";
// import * as firebase from "firebase/app";
import "firebase/auth";

// import "firebase/auth";

// import dotenv from "dotenv";
// dotenv.config();

require("firebase/auth");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkuqAX6BtEsr-GMBInBT1DGPQiunqv40M",
  authDomain: "d-note-c4650.firebaseapp.com",
  projectId: "d-note-c4650",
  storageBucket: "d-note-c4650.appspot.com",
  messagingSenderId: "541052765762",
  appId: "1:541052765762:web:a67931eacf72f6f5670fdb",
  measurementId: "G-J9Y2FP9WL6",
};

// this will add our front to backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

// to established database
const db = firebaseApp.firestore();

// for Authentications
const auth = firebase.auth();

// provider

var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, firebase };

// export const Login = () => {
//   const dispatch = useDispatch();
//   auth
//     .signInWithPopup(provider)
//     .then((user) => {
//       dispatch(
//         login({
//           displayName: user.displayName,
//           email: user.email,
//           photourl: user.photoURL,
//         })
//       );
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// };
