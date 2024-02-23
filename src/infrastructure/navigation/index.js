import React, { useState } from "react";
import AppNavigator from "./app.navigator";
import AuthNavigator from "./auth.navigator";

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}
