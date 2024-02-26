import React, { useState } from "react";
import { createContext } from "react";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "../../services/firebase.service";

const DEFAULT_VALUE = {
  user: null,
  onSignUp: () => {},
  onSignIn: () => {},
  onSignOut: () => {},
};

export const UserContext = createContext(DEFAULT_VALUE);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(DEFAULT_VALUE);
      })
      .catch((error) => {
        console.log("An error occured while signing out", { error });
      });
  };

  const onSignIn = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((loggedInUser) => {
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("An error occured while signing in", { error });
      });
  };

  const onSignUp = ({ name, email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((registeredUser) => {
        setUser(registeredUser);
      })
      .catch((error) => {
        console.log("An error occured while registering", { error });
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        onSignUp,
        onSignIn,
        onSignOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
