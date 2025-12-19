import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 40px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.blueLight};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
