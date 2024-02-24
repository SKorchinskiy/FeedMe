import LottieView from "lottie-react-native";
import React, { useContext } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { ThemeContext } from "styled-components";

export default function AuthScreen({ navigation }) {
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.ui.tertiary,
      }}
    >
      <View
        style={{ flex: 0.5, justifyContent: "flex-end", alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: theme.fonts.body,
          }}
        >
          Feed Me
        </Text>
      </View>
      <LottieView
        autoPlay
        source={require("../../../../assets/main-animation.json")}
        style={{
          width: 400,
          height: 400,
        }}
      />
      <View
        style={{
          alignItems: "center",
          width: "80%",
        }}
      >
        <Button
          mode="contained"
          icon="lock-open-outline"
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
          onPress={() => navigation.navigate("Login Screen")}
        >
          <Text
            style={{
              fontSize: 16,
              color: theme.colors.text.tertiary,
            }}
          >
            Login
          </Text>
        </Button>
        <Button
          mode="contained"
          icon="account-key-outline"
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
          }}
          onPress={() => navigation.navigate("Register Screen")}
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
