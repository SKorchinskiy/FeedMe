import React, { useContext, useState } from "react";

import {
  LogginButtonText,
  LoginButton,
  LoginFormContainer,
  LoginFormInput,
} from "./login-form.styles";
import { UserContext } from "../../../../providers/user/user.provider";

const DEFAULT_INPUT_VALUES = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const { onSignIn } = useContext(UserContext);

  const [inputValues, setInputValues] = useState(DEFAULT_INPUT_VALUES);

  const onInputValuesChangeHandler = ({ fieldName, fieldValue }) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <LoginFormContainer>
      <LoginFormInput
        label="Email"
        textContentType="emailAddress"
        onChangeText={(value) =>
          onInputValuesChangeHandler({
            fieldName: "email",
            fieldValue: value,
          })
        }
      />
      <LoginFormInput
        label="Password"
        textContentType="password"
        onChangeText={(value) =>
          onInputValuesChangeHandler({
            fieldName: "password",
            fieldValue: value,
          })
        }
        secureTextEntry
      />
      <LoginButton icon="shield-home" onPress={() => onSignIn(inputValues)}>
        <LogginButtonText>Log in</LogginButtonText>
      </LoginButton>
    </LoginFormContainer>
  );
}
