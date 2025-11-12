import admin from "firebase-admin";
//import serviceAccount from "@/serviceAccounts.json";

if (!admin.apps.length) {
  const serviceAccount = require("@/serviceAccounts.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount
      //JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string),
    ),
  });
}

export const authAdmin = admin.auth();
export const dbAdmin = admin.firestore();
