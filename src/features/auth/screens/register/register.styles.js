import { TextInput } from "react-native-paper";
import styled from "styled-components";

export const RegisterScreenContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ui.tertiary};
`;

export const RegisterTitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  top: 80px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const RegisterTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const RegisterFormContainer = styled.View`
  align-items: center;
  width: 80%;
`;

export const RegisterInputField = styled(TextInput)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space[3]};
`;
