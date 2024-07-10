import React, { createContext, useState } from "react";
import { signIn, signUp, me } from "../services/resources/user";

export const AuthContext = createContext({
  user: null,
  userSignIn: async () => {},
  userSignUp: async () => {},
  getCurrentUser: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userSignIn = async (userData) => {
    const { data } = await signIn(userData);

    if (data?.status === "error") {
      return data;
    }

    if (data.accessToken) {
      localStorage.setItem("@VirtusBank:Token", data.accessToken);
    }

    const user = await getCurrentUser();
    return user;
  };

  const userSignUp = async (userData) => {
    const { data } = await signUp(userData);

    if (data.accessToken) {
      localStorage.setItem("@VirtusBank:Token", data.accessToken);
    }

    const user = await getCurrentUser();
    return user;
  };

  const getCurrentUser = async () => {
    const { data } = await me();
    setUser(data);
    localStorage.setItem("@VirtusBank:User", JSON.stringify(data));
    return data;
  };

  return (
    <AuthContext.Provider
      value={{ user, userSignIn, userSignUp, getCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
