import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>{displayedValue}</CustomSelect>
      <IconWrapper>
        <Icon id="chevron-down" size={24}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const CustomSelect = styled.div`
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;

  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

export default Select;
