import styled from "styled-components";
import { TextInput, Button } from "react-native-paper";

export const LoginFormContainer = styled.View`
  align-items: center;
  width: 80%;
`;

export const LoginFormInput = styled(TextInput)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

export const LoginButton = styled(Button).attrs({
  mode: "contained",
})`
  border-radius: ${({ theme }) => theme.sizes[0]};
  padding: ${({ theme }) => theme.space[2]};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  margin-bottom: ${({ theme }) => theme.space[3]};
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const LogginButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.tertiary};
`;
