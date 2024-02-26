import styled from "styled-components";

export const LoginScreenContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ui.tertiary};
`;

export const LoginTitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  top: 80px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-family: ${({ theme }) => theme.fonts.body};
`;
