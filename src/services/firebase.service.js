import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

console.log({ key: process.env.FB_API_KEY });

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
