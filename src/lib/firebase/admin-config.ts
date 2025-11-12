import admin from "firebase-admin";
//import serviceAccount from "@/serviceAccounts.json";

//const serviceAccount = require("@/serviceAccounts.json");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      //serviceAccount
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string),
    ),
  });
}

export const authAdmin = admin.auth();
export const dbAdmin = admin.firestore();
