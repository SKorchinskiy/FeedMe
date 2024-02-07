import React from "react";
import styled from "styled-components";
import { theme as styles } from "../../infrastructure/theme/index";

export const directions = {
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
};

export const sizes = {
  none: styles.space[0],
  small: styles.space[1],
  medium: styles.space[2],
  large: styles.space[3],
  xl: styles.space[4],
  xxl: styles.space[5],
};

const CustomSpacer = styled.View`
  ${({ direction, size }) => `margin-${direction}: ${size}`};
`;

CustomSpacer.defaultProps = {
  direction: directions.left,
  size: sizes.none,
};

export default function Spacer({ direction, size, children }) {
  return (
    <CustomSpacer direction={direction} size={size}>
      {children}
    </CustomSpacer>
  );
}
