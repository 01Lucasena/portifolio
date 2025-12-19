import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  position: relative;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: rgba(4, 27, 97, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
`;

const Description = styled.p`
  margin: 0;
  opacity: 0.9;
  font-size: 0.95rem;
`;

export default function ProjectCard({ title, description, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </Wrapper>
  );
}
