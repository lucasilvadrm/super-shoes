import styled, { css } from "styled-components";

interface ButtonProps {
  position: "left" | "right";
}

const ButtonDefault = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledButton = styled(ButtonDefault)<ButtonProps>`
  ${({ position: direction }) => {
    if (direction === "left") {
      return css`
        img {
          transform: rotate(180deg);
        }
      `;
    }

    return;
  }}
`;
