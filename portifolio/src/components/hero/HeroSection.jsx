import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { theme } from "../../styles/theme";
import ProfileImage from "../../assets/images/lucasena.jpg";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const morph = keyframes`
  0% { border-radius: 32% 68% 58% 42% / 40% 32% 68% 60%; }
  50% { border-radius: 58% 42% 32% 68% / 58% 38% 62% 42%; }
  100% { border-radius: 32% 68% 58% 42% / 40% 32% 68% 60%; }
`;

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 2rem 0;
  background: #000000;
  overflow: hidden;
  isolation: isolate;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 70% 50%,
      ${theme.colors.primary}10 0%,
      transparent 70%
    ),
    radial-gradient(
      circle at 30% 70%,
      ${theme.colors.secondary}08 0%,
      transparent 60%
    );
    animation: ${float} 25s ease-in-out infinite;
    z-index: 1;
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 0;
  }
`;

const Inner = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    padding: 4rem 0;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem 0;
  }
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 1.75rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    margin-top: 2rem;
  }
`;

const Title = styled(motion.div)`
  margin: 0 0 1.5rem;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const CodeText = styled.div`
  display: block;
  font-family: 'Poppins', 'Fira Code', 'Roboto Mono', monospace;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Bracket = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.8;
`;

const TypingText = ({ text = '', delay = 0, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!text) return;
    
    let currentIndex = 0;
    let typingTimeout;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
        typingTimeout = setTimeout(typeNextCharacter, speed);
      } else {
        setIsTyping(false);
      }
    };

    const startTyping = setTimeout(() => {
      setDisplayText('');
      typeNextCharacter();
    }, delay);

    return () => {
      clearTimeout(startTyping);
      clearTimeout(typingTimeout);
    };
  }, [text, delay, speed]);

  return (
    <span>
      {displayText}
      <Cursor $isVisible={isTyping}>|</Cursor>
    </span>
  );
};

const Cursor = styled.span`
  display: inline-block;
  margin-left: 2px;
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  animation: ${props => props.$isVisible ? 'blink 0.7s infinite' : 'none'};
  color: ${({ theme }) => theme.colors.primary};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.blueLight};
  -webkit-text-fill-color: ${({ theme }) => theme.colors.blueLight};
  display: inline-block;
  font-weight: bold;
`;

const Subtitle = styled(motion.p)`
  max-width: 700px;
  font-size: clamp(1.1rem, 1.6vw, 1.5rem);
  line-height: 1.7;
  margin: 0 0 3rem 0;
  color: rgba(255, 255, 255, 0.9);
  color: ${theme.colors.textSecondary};
  font-weight: 400;
  padding: 0;
  opacity: 0.9;
  word-break: keep-all;
  hyphens: none;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const PhotoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 420px;
    margin: 0 auto;
  }
`;

const PhotoSectionDesktop = styled(PhotoContainer)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const PhotoSectionMobile = styled(PhotoContainer)`
  display: none;
  margin: 1rem auto 0;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const PhotoHalo = styled.div`
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle at center, rgba(0, 160, 255, 0.28) 0%, rgba(0, 160, 255, 0.08) 35%, transparent 70%);
  filter: blur(45px);
  opacity: 0.55;
  animation: ${float} 22s ease-in-out infinite;
  z-index: -2;
`;

const PhotoFrame = styled.div`
  position: relative;
  width: clamp(240px, 32vw, 380px);
  aspect-ratio: 1 / 1;
  background: #0a0a12;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const PhotoRing = styled.div`
  position: absolute;
  inset: -10%;
  border: 2px solid rgba(0, 160, 255, 0.32);
  border-radius: inherit;
  animation: ${morph} 18s ease-in-out infinite;
  z-index: -1;
`;

const PhotoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  background: #1a1a2e;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const PhotoComposition = () => (
  <>
    <PhotoHalo />
    <PhotoFrame>
      <PhotoRing />
      <PhotoPlaceholder>
        <img src={ProfileImage} alt="Lucas Sena" />
      </PhotoPlaceholder>
    </PhotoFrame>
  </>
);

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  z-index: 10;
  padding: 1rem;
  pointer-events: none;

  /* Removidos estilos de hover e active */

  @media (max-width: 768px) {
    display: none;
  }
`;

const Mouse = styled.div`
  width: 32px;
  height: 52px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  position: relative;
  margin-bottom: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    width: 5px;
    height: 10px;
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
    animation: scroll 2.5s ease-in-out infinite;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }

  @keyframes scroll {
    0%, 100% {
      transform: translateX(-50%) translateY(0px);
      opacity: 1;
    }
    50% {
      transform: translateX(-50%) translateY(12px);
      opacity: 0.3;
    }
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 46px;
    border-radius: 14px;

    &::before {
      width: 4px;
      height: 8px;
      top: 7px;
    }
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin: 0 0 2rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const DownloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #6c63ff;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`;

const GithubButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #24292e;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  
  &:hover {
    background: #2f363d;
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

export default function HeroSection() {
  return (
    <Wrapper>
      <Inner>
        <Content
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            <CodeText>
              <Bracket>&#60;</Bracket>
              <TypingText text=" Lucas Sena" delay={300} speed={50} />
              <Bracket>/&#62;</Bracket>
            </CodeText>
            <CodeText>
              <Highlight>
                Desenvolvedor Front-end
              </Highlight>
            </CodeText>
          </Title>

          <PhotoSectionMobile
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PhotoComposition />
          </PhotoSectionMobile>

          <Subtitle variants={itemVariants}>
            Transformo ideias em experiências digitais incríveis com foco em design responsivo, 
            performance e acessibilidade. Especializado em React e tecnologias modernas de front-end.
          </Subtitle>
          
          <Actions variants={itemVariants}>
            <Button 
              as={Link}
              to="/projetos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver projetos
            </Button>
            <DownloadButton 
              as="a" 
              href="/curriculo.pdf" 
              download="Lucas_Sena_Curriculo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload size={16} />
              Baixar CV
            </DownloadButton>
            <GithubButton 
              as="a" 
              href="https://github.com/01Lucasena"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={20} />
              01Lucasena
            </GithubButton>
          </Actions>
        </Content>

        <PhotoSectionDesktop
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <PhotoComposition />
        </PhotoSectionDesktop>

        <ScrollIndicator 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Mouse />
          Role para baixo
        </ScrollIndicator>
      </Inner>
      
      {/* Decorative elements */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 92, 193, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </Wrapper>
  );
}
