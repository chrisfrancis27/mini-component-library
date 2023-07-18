import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 0.5rem;
  color: ${COLORS.gray700};
  cursor: default;
  display: inline-block;
  padding: 0.75rem 1rem;
  position: relative;

  & > p {
    position: relative;
    padding-right: 2rem;

    & > div {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  & > select {
    border: none;
    background-color: transparent;
    color: transparent;
    inset: 0;
    position: absolute;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <p aria-ignore>
        {displayedValue} <Icon id="chevron-down" size={20} strokeWidth={2} />
      </p>
      <select value={value} onChange={onChange} aria-label={label}>
        {children}
      </select>
    </Wrapper>
  );
};

export default Select;
