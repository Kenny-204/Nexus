"use client";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

interface value {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, passoword: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  googleSignIn: () => void;
  passwordReset: (email: string) => Promise<void>;
}
const AuthContext = createContext<value | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("Cannot use Auth Context outside Auth provider");
  return context;
}

export function Authprovider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        const token = await user.getIdToken();
        await fetch("/api/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleSignIn() {}

  function passwordReset(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  function logout() {
    return auth.signOut();
  }

  const value = {
    currentUser,
    login,
    signup,
    passwordReset,
    logout,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
