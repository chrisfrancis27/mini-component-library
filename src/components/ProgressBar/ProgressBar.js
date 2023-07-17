/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--borderRadius": "0.25rem",
    "--height": "0.5rem",
    "--padding": "0",
  },
  medium: {
    "--borderRadius": "0.25rem",
    "--height": "0.75rem",
    "--padding": "0",
  },
  large: {
    "--borderRadius": "0.5rem",
    "--height": "1rem",
    "--padding": "0.25rem",
  },
};

const ProgressTrack = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const ProgressClip = styled.div`
  border-radius: 0.25rem;
  overflow: clip;
`;

const ProgressValue = styled.div`
  background: ${COLORS.primary};
  background-clip: content-box;
  height: var(--height);
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <ProgressTrack
      role="progressbar"
      aria-label={value}
      aria-valuenow={value}
      style={styles}
    >
      <ProgressClip>
        <ProgressValue style={{ width: `${value}%` }}></ProgressValue>
      </ProgressClip>
      <VisuallyHidden>{value}</VisuallyHidden>
    </ProgressTrack>
  );
};

export default ProgressBar;
