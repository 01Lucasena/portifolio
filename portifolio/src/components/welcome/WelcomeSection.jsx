import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";

const WelcomeWrapper = styled.section`
  padding: 6rem 1.5rem;
  background: #0D1117;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainTitle = styled(SectionTitle)`
  margin: 0 auto 1.5rem;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Highlight = styled.span`
  color: #6c63ff;
  font-weight: 600;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: #041B61;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid #041B61;
  cursor: pointer;
  position: relative;
  z-index: 1;
  
  &:hover {
    background: #082a80;
    border-color: #082a80;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(4, 27, 97, 0.35);
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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

export default function WelcomeSection() {
  return (
    <WelcomeWrapper>
      <Content>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <MainTitle delay={200}>
              Olá, eu sou Lucas Sena
            </MainTitle>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Subtitle>
              Desenvolvedor <Highlight>Front-end</Highlight> apaixonado por criar 
              experiências digitais <Highlight>incríveis</Highlight> e 
              <Highlight> funcionais</Highlight>
            </Subtitle>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CTAButton
              as={Link}
              to="/sobre"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conheça Mais Sobre Mim
            </CTAButton>
          </motion.div>
        </motion.div>
      </Content>
    </WelcomeWrapper>
  );
}
