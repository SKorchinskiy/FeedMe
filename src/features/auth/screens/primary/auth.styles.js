import styled from "styled-components";
import LottieView from "lottie-react-native";
import { Button } from "react-native-paper";

export const AuthScreenContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ui.tertiary};
`;

export const AuthTitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  justify-content: flex-end;
  align-items: center;
`;

export const AuthTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const AuthOptionsContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const AuthOptionButton = styled(Button).attrs({
  mode: "contained",
})`
  border-radius: ${({ theme }) => theme.sizes[0]};
  padding: ${({ theme }) => theme.sizes[0]};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  margin-bottom: ${({ theme }) => theme.sizes[1]};
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const AuthOptionText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.tertiary};
`;

export const AnimatedView = styled(LottieView).attrs({
  autoPlay: true,
})`
  width: 400px;
  height: 400px;
`;
