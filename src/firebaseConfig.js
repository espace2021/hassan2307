import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyBlWs2Aqc7t9xIHdjsTyddFlC2nXs76tU4",
  authDomain: "gestcom-4a752.firebaseapp.com",
  projectId: "gestcom-4a752",
  storageBucket: "gestcom-4a752.appspot.com",
  messagingSenderId: "676737216571",
  appId: "1:676737216571:web:6655dcd90e681d36f3ac1e"

});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;
