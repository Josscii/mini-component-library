/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE = {
  small: {
    height: "8px",
    padding: 0,
    radius: "4px",
  },
  medium: {
    height: "12px",
    padding: 0,
    radius: "4px",
  },
  large: {
    height: "24px",
    padding: "4px",
    radius: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const { height, padding, radius } = SIZE[size] ?? SIZE.small;

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--height": height, "--padding": padding, "--radius": radius }}
    >
      <BarWrapper>
        <Bar style={{ "--value": `${value}%` }}></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.gray50};
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  width: var(--value);
  height: 100%;
  background-color: ${COLORS.primary};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export default ProgressBar;
