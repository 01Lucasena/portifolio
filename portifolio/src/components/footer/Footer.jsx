import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background: #000000;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 1rem 0 0;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;
  
  &:hover {
    color: #6c63ff;
    opacity: 1;
    transform: translateY(-2px);
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <SocialLinks>
        <SocialLink 
          href="https://github.com/01Lucasena" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialLink>
      </SocialLinks>
      <FooterText>
        2025 Lucas Sena - Criando experiências digitais completas.
      </FooterText>
    </FooterWrapper>
  );
}
