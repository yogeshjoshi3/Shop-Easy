import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAY1HY_nzSuylZ64JtWbbV8GuUQUAnIF7Q",
    authDomain: "shop-easy-5bb54.firebaseapp.com",
    projectId: "shop-easy-5bb54",
    storageBucket: "shop-easy-5bb54.appspot.com",
    messagingSenderId: "782426490061",
    appId: "1:782426490061:web:9030ebc6fa705e7a85d584"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const fireDB = getFirestore(app);
  
  
  export{auth,fireDB};