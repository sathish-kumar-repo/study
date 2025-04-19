import React from "react";
import styled from "styled-components";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";

interface Props {
  onRotateLeft: () => void;
  onRotateRight: () => void;
}

export const RotateLeftStyled = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
`;

export const RotateRightStyled = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
`;

const RotateButtons: React.FC<Props> = ({ onRotateLeft, onRotateRight }) => {
  return (
    <>
      <RotateLeftStyled onClick={onRotateLeft} aria-label="Rotate Left">
        <RotateLeftIcon style={{ padding: 2 }} />
      </RotateLeftStyled>
      <RotateRightStyled onClick={onRotateRight} aria-label="Rotate Right">
        <RotateRightIcon style={{ padding: 2 }} />
      </RotateRightStyled>
    </>
  );
};

export default RotateButtons;
