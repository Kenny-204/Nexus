"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/clientConfig";
import { User } from "@supabase/supabase-js";

interface value {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, passoword: string) => Promise<void>;
  logout: () => Promise<void>;
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
    supabase.auth.getSession().then(({ data: { session } }) => {
      setCurrentUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(session?.user ?? null);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, [currentUser]);

  async function signup(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "http://localhost:3000/home",
      },
    });
  }

  async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }

  function googleSignIn() {}

  async function passwordReset(email: string) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();
  }

  const value = {
    currentUser,
    login,
    signup,
    passwordReset,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
