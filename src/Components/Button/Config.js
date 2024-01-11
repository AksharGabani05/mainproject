
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB9D_SWpQCmMnbw9ygsUZFiva4TQN_SzTk",
  authDomain: "ag-marketing-3222a.firebaseapp.com",
  projectId: "ag-marketing-3222a",
  storageBucket: "ag-marketing-3222a.appspot.com",
  messagingSenderId: "320752712525",
  appId: "1:320752712525:web:9ecc1193a5bb83ccbc1504"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const GoogleAuth=()=>{
    let provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
}