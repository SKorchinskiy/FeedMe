import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { ThemeContext } from "styled-components";
import { UserContext } from "../../../../providers/user/user.provider";

import {
  RegisterScreenContainer,
  RegisterTitleContainer,
  RegisterTitle,
} from "./register.styles";
import RegisterForm from "../../components/register-form/register-form.component";

export default function RegisterScreen() {
  return (
    <RegisterScreenContainer>
      <RegisterTitleContainer>
        <RegisterTitle>Register</RegisterTitle>
      </RegisterTitleContainer>
      <RegisterForm />
    </RegisterScreenContainer>
  );
}
