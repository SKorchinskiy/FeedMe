import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { ThemeContext } from "styled-components";
import { UserContext } from "../../../providers/user/user.provider";

const DEFAULT_INPUT_VALUES = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const theme = useContext(ThemeContext);
  const { onSignIn } = useContext(UserContext);

  const [inputValues, setInputValues] = useState(DEFAULT_INPUT_VALUES);

  const onInputValuesChangeHandler = ({ fieldName, fieldValue }) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.ui.tertiary,
      }}
    >
      <View
        style={{
          top: 80,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: theme.fonts.body,
          }}
        >
          Login
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "80%",
        }}
      >
        <TextInput
          label="Email"
          textContentType="emailAddress"
          onChangeText={(value) =>
            onInputValuesChangeHandler({
              fieldName: "email",
              fieldValue: value,
            })
          }
          style={{
            width: "100%",
            marginBottom: 20,
          }}
        />
        <TextInput
          label="Password"
          textContentType="password"
          onChangeText={(value) =>
            onInputValuesChangeHandler({
              fieldName: "password",
              fieldValue: value,
            })
          }
          secureTextEntry
          style={{
            width: "100%",
            marginBottom: 20,
          }}
        />
        <Button
          mode="contained"
          icon="shield-home"
          style={{
            borderRadius: 5,
            padding: 5,
            width: "100%",
            backgroundColor: theme.colors.brand.secondary,
            shadowOffset: {
              width: 4,
              height: 4,
            },
            shadowColor: "black",
            shadowRadius: 5,
            shadowOpacity: 0.2,
            marginBottom: 20,
          }}
          onPress={() => onSignIn(inputValues)}
        >
          <Text
            style={{
              fontSize: 16,
              color: theme.colors.text.tertiary,
            }}
          >
            Log in
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
