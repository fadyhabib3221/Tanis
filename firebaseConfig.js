// 1) Go to https://console.firebase.google.com
// 2) Create a project (free) -> Build -> Firestore Database -> Create database
//    (choose "Start in test mode" for now, or use the security rules below)
// 3) Project settings (gear icon) -> General -> "Your apps" -> Web app (</>) -> register app
// 4) Copy the firebaseConfig object Firebase gives you and paste its values below.

export const firebaseConfig = {
  apiKey: "AIzaSyCf5AdJ7pWy1DYsXYR4_MbyN0q4D-ja-aA",
  authDomain: "tanis-9e15b.firebaseapp.com",
  projectId: "tanis-9e15b",
  storageBucket: "tanis-9e15b.firebasestorage.app",
  messagingSenderId: "401226831173",
  appId: "1:401226831173:web:e0e899140594974fd81a2c",
  measurementId: "G-9NH56VSWQZ"
};

// Recommended Firestore security rules (Firestore console -> Rules tab).
// This keeps the "storage" collection open to read/write, since the app already has
// its own username/password login screen guarding access to the UI. If you want
// stronger protection, look into Firebase Authentication + rules that check auth.uid.
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /storage/{docId} {
      allow read, write: if true;
    }
  }
}
*/
