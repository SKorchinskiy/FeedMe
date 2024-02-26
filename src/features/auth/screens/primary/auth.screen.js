import React from "react";

import {
  AuthTitle,
  AnimatedView,
  AuthOptionText,
  AuthOptionButton,
  AuthTitleContainer,
  AuthScreenContainer,
  AuthOptionsContainer,
} from "./auth.styles";

export default function AuthScreen({ navigation }) {
  return (
    <AuthScreenContainer>
      <AuthTitleContainer>
        <AuthTitle>Feed Me</AuthTitle>
      </AuthTitleContainer>
      <AnimatedView
        source={require("../../../../../assets/main-animation.json")}
      />
      <AuthOptionsContainer>
        <AuthOptionButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Login Screen")}
        >
          <AuthOptionText>Login</AuthOptionText>
        </AuthOptionButton>
        <AuthOptionButton
          icon="account-key-outline"
          onPress={() => navigation.navigate("Register Screen")}
        >
          <AuthOptionText>Register</AuthOptionText>
        </AuthOptionButton>
      </AuthOptionsContainer>
    </AuthScreenContainer>
  );
}
