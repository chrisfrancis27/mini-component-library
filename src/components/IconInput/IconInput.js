import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    iconSize: 16,
    "--borderWidth": "1px",
    "--fontSize": "14px",
    "--height": "24px",
    "--paddingLeft": "24px",
  },
  large: {
    iconSize: 24,
    "--borderWidth": "2px",
    "--fontSize": "18px",
    "--height": "36px",
    "--paddingLeft": "36px",
  },
};

const InputWrapper = styled.div`
  color: ${COLORS.gray700};
  isolation: isolate;
  position: relative;
  width: max-content;

  & > div {
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover,
  &:hover > input::placeholder {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  height: var(--height);
  padding-left: var(--paddingLeft);
  outline-offset: 2px;
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  return (
    <InputWrapper style={{ "--width": width + "px", ...styles }}>
      <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
      <VisuallyHidden>
        <label htmlFor="fancyInput">{label}</label>
      </VisuallyHidden>
      <Input id="fancyInput" type="text" placeholder={placeholder} />
    </InputWrapper>
  );
};

export default IconInput;
