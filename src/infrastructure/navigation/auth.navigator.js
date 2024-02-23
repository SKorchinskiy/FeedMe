import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../../features/auth/screens/auth.screen";
import LoginScreen from "../../features/auth/screens/login.screen";
import RegisterScreen from "../../features/auth/screens/register.screen";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Auth Screen">
      <AuthStack.Screen
        name="Auth Screen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login Screen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register Screen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
