import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwXqnuI3BolV_VsbHGNSx9KaY0vBVn2YE",
  authDomain: "react-netflix-clone-3d579.firebaseapp.com",
  projectId: "react-netflix-clone-3d579",
  storageBucket: "react-netflix-clone-3d579.appspot.com",
  messagingSenderId: "1016075444727",
  appId: "1:1016075444727:web:014e590c8db4a7ec574ef2",
  measurementId: "G-6GSCDDETM5"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
