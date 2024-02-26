import React, { useContext, useState } from "react";
import { UserContext } from "../../../../providers/user/user.provider";

import {
  RegisterFormContainer,
  RegisterInputField,
  RegisterButton,
  RegisterButtonText,
} from "./register-form.styles";

const DEFAULT_INPUT_VALUES = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const { onSignUp } = useContext(UserContext);

  const [inputValues, setInputValues] = useState(DEFAULT_INPUT_VALUES);

  const onInputChangeHandler = ({ fieldName, fieldValue }) => {
    if (fieldName === "confirm_password") {
    } else {
      setInputValues((prevValues) => ({
        ...prevValues,
        [fieldName]: fieldValue,
      }));
    }
  };

  return (
    <RegisterFormContainer>
      <RegisterInputField
        label="Name"
        textContentType="name"
        onChangeText={(value) =>
          onInputChangeHandler({
            fieldName: "name",
            fieldValue: value,
          })
        }
      />
      <RegisterInputField
        label="Email"
        textContentType="emailAddress"
        onChangeText={(value) =>
          onInputChangeHandler({
            fieldName: "email",
            fieldValue: value,
          })
        }
      />
      <RegisterInputField
        label="Password"
        textContentType="password"
        onChangeText={(value) =>
          onInputChangeHandler({
            fieldName: "password",
            fieldValue: value,
          })
        }
        secureTextEntry
      />
      <RegisterInputField
        label="Confirm password"
        textContentType="password"
        onChangeText={(value) =>
          onInputChangeHandler({
            fieldName: "confirm_password",
            fieldValue: value,
          })
        }
        secureTextEntry
      />
      <RegisterButton icon="shield-home" onPress={() => onSignUp(inputValues)}>
        <RegisterButtonText>Register</RegisterButtonText>
      </RegisterButton>
    </RegisterFormContainer>
  );
}
