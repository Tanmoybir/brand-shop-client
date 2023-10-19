import { getAuth } from "firebase/auth";
import { initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEysRQdeDNTXQf3kKpFSudMcgDoZUXpkY",
  authDomain: "brand-shop-c04e3.firebaseapp.com",
  projectId: "brand-shop-c04e3",
  storageBucket: "brand-shop-c04e3.appspot.com",
  messagingSenderId: "355872682573",
  appId: "1:355872682573:web:3c1139496bb4a5ba92e204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)