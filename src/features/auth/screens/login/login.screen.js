import React from "react";
import LoginForm from "../../components/login-form/login-form.component";

import {
  LoginScreenContainer,
  LoginTitleContainer,
  LoginTitle,
} from "./login.styles";

export default function LoginScreen() {
  return (
    <LoginScreenContainer>
      <LoginTitleContainer>
        <LoginTitle>Login</LoginTitle>
      </LoginTitleContainer>
      <LoginForm />
    </LoginScreenContainer>
  );
}
