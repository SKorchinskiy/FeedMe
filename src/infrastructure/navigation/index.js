import React, { useContext } from "react";
import AppNavigator from "./app.navigator";
import AuthNavigator from "./auth.navigator";
import { UserContext } from "../../providers/user/user.provider";

export default function Navigation() {
  const { user } = useContext(UserContext);

  return !!user ? <AppNavigator /> : <AuthNavigator />;
}
