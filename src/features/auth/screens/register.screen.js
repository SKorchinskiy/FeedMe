import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { ThemeContext } from "styled-components";
import { UserContext } from "../../../providers/user/user.provider";

const DEFAULT_INPUT_VALUES = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterScreen({ navigation }) {
  const theme = useContext(ThemeContext);
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
          Register
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "80%",
        }}
      >
        <TextInput
          label="Name"
          textContentType="name"
          style={{
            width: "100%",
            marginBottom: 20,
          }}
          onChangeText={(value) =>
            onInputChangeHandler({
              fieldName: "name",
              fieldValue: value,
            })
          }
        />
        <TextInput
          label="Email"
          textContentType="emailAddress"
          onChangeText={(value) =>
            onInputChangeHandler({
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
            onInputChangeHandler({
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
        <TextInput
          label="Confirm password"
          textContentType="password"
          onChangeText={(value) =>
            onInputChangeHandler({
              fieldName: "confirm_password",
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
          onPress={() => onSignUp(inputValues)}
        >
          <Text
            style={{
              fontSize: 16,
              color: theme.colors.text.tertiary,
            }}
          >
            Register
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
