import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaArrowRight, FaMagic, FaTools } from 'react-icons/fa';
import { SiReact, SiJavascript, SiFigma } from 'react-icons/si';
import SectionTitle from '../ui/SectionTitle';
import PortifolioImage from '../../assets/images/portifolio-img.png';

const Section = styled.section`
  padding: 6rem 1.5rem;
  background: #161B22;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.3;
    z-index: -1;
    pointer-events: none;
  }

  &::before {
    top: -200px;
    right: 10%;
    background: ${({ theme }) => theme.colors.primary}33;
    animation: float 25s ease-in-out infinite;
  }

  &::after {
    bottom: -200px;
    left: 5%;
    background: rgba(0, 160, 255, 0.25);
    animation: float 30s ease-in-out infinite reverse;
  }

  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, 30px) rotate(1deg); }
    66% { transform: translate(-20px, -30px) rotate(-1deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 1.5rem;
`;

const TitleContainer = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin: 0 auto 3rem;
  color: #fff;
  display: block;
  background: linear-gradient(120deg, #fff 0%, #aaa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0;
  line-height: 1.2;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  position: relative;
  z-index: 2;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;


const Subtitle = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
  margin: 0;
`;

const ProjectSubtitle = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1.25rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  line-height: 1.6;
`;

const ProjectSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    position: relative;
    padding-left: 1.75rem;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #6c63ff;
      font-weight: bold;
      font-size: 0.9em;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding-left: 1.5rem;
    }
  }
`;

const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
  }

  svg {
    font-size: 0.9rem;
    color: #6c63ff;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ProjectActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 300px;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem 2rem;
  border-radius: 40px;
  background: #041B61;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid #041B61;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 24px rgba(4, 27, 97, 0.35);
  
  &:hover {
    background: #082a80;
    border-color: #082a80;
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(4, 27, 97, 0.4);
  }

  svg {
    font-size: 1.1em;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover svg {
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }
`;

const ProjectCard = styled(motion.article)`
  position: relative;
  height: 400px;
  overflow: hidden;
  background: #041B61;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  will-change: transform, box-shadow;
  
  &:hover {
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.4);
    transform: translateY(-6px);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg, 
      rgba(4, 27, 97, 0.75) 0%, 
      rgba(8, 42, 128, 0.75) 100%
    );
    z-index: -1;
  }
`;

const ProjectImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.03);
  }

  &::after {
    content: attr(data-label);
    position: absolute;
    inset-inline: 1.5rem;
    bottom: 1.25rem;
    z-index: 2;
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    font-weight: 600;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const ProjectContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  line-height: 1.3;
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  transition: all 0.3s ease;
  z-index: 2;
  
  ${ProjectCard}:hover & {
    opacity: 0;
    transform: translateY(10px);
  }
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectCardComponent = ({ project }) => {
  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      <ProjectImage>
        <img 
          src={project.image || 'https://via.placeholder.com/800x600/002CB1/FFFFFF?text=Project+Image'} 
          alt={project.title} 
        />
        <ProjectTitle>{project.title}</ProjectTitle>
        
        <ProjectContent>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            textAlign: 'center',
            marginBottom: '1.5rem',
            lineHeight: '1.6'
          }}>
            {project.description}
          </p>
          
          <TechTags>
            {project.techs.map((tech, i) => (
              <TechTag key={i}>
                {tech}
              </TechTag>
            ))}
          </TechTags>
          
          <ProjectActions>
            <CTAButton
              href={project.ctaLink}
              target={project.ctaTarget || '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Projeto
              <FaExternalLinkAlt size={14} />
            </CTAButton>
          </ProjectActions>
        </ProjectContent>
      </ProjectImage>
    </ProjectCard>
  );
};

const projects = [
  {
    id: 'portifolio',
    title: 'Portfólio Pessoal',
    subtitle: 'Apresentação profissional e projetos',
    description:
      'Site portfólio desenvolvido para apresentar meus projetos, habilidades e experiências profissionais de forma interativa e moderna.',
    highlights: [
      'Design responsivo com interface moderna e intuitiva',
      'Animações fluidas usando Framer Motion',
      'Otimizado para performance e acessibilidade',
    ],
    techs: ['React', 'JavaScript', 'Styled Components'],
    image: PortifolioImage,
    imageLabel: 'Projeto Pessoal — Portfólio',
    ctaLink: 'https://github.com/01Lucasena',
    ctaTarget: '_blank',
  },
];

const Destaques = () => {
  return (
    <Section id="destaques">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle delay={300}>
            Projetos em Destaque
          </SectionTitle>
        </motion.div>
        
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCardComponent project={project} key={project.id} />
          ))}
        </ProjectsGrid>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <CTAButton href="/projetos">
            Ver Todos os Meus Projetos
            <FaArrowRight />
          </CTAButton>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default Destaques;
