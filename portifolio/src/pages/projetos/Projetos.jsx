import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/content";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

const PageWrapper = styled.main`
  background: #0d1117;
  min-height: calc(100vh - 72px);
`;

const PageSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: clamp(3.5rem, 7vw, 5.5rem) clamp(1.5rem, 5vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 6vw, 3.5rem);
`;

const Hero = styled(PageSection)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.2rem, 3vw, 1.8rem);
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(2.25rem, 5vw, 3.1rem);
  line-height: 1.1;
`;

const Highlight = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  align-self: flex-start;
  background: rgba(108, 99, 255, 0.16);
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 960px) {
    align-self: center;
  }
`;

const HeroDescription = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2.1vw, 1.15rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
`;

const HeroList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.85rem;

  @media (max-width: 960px) {
    justify-items: center;
  }
`;

const HeroListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.blueLight};
    box-shadow: 0 0 14px rgba(0, 139, 242, 0.45);
  }
`;

const FeedContainer = styled(PageSection)``;

const ProjectFeed = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 2.75rem);
`;

const ProjectCard = styled.article`
  position: relative;
  border-radius: 40px;
  padding: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(150deg, rgba(17,1,38,0.85) 0%, rgba(4,27,97,0.65) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 65px rgba(5, 12, 36, 0.4);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(140deg, rgba(255, 255, 255, 0.08), transparent 55%);
    pointer-events: none;
  }
`;

const ProjectHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
`;

const ProjectYear = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.08);
  padding: 0.4rem 1.2rem;
  border-radius: 40px;
`;

const ProjectRole = styled.span`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
`;

const ProjectTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.15;
`;

const ProjectHighlight = styled.p`
  margin: 0 0 1.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectExcerpt = styled.p`
  margin: 0 0 1.5rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.78);
`;

const Deliverables = styled.ul`
  margin: 0 0 1.75rem;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    position: relative;
    padding-left: 1.75rem;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.55rem;
      width: 10px;
      height: 10px;
      border-radius: 3px;
      background: ${({ theme }) => theme.colors.blueLight};
      box-shadow: 0 0 14px rgba(0, 139, 242, 0.45);
    }
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1.2rem;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  backdrop-filter: blur(8px);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ActionButton = styled(Button).attrs({
  as: 'a'
})`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.5rem;
  text-decoration: none;
  font-size: 0.95rem;
  line-height: 1.5;
  
  /* Force border-radius to be 40px */
  && {
    border-radius: 40px;
  }
`;

export default function Projetos() {
  return (
    <PageWrapper>
      <Hero>
        <HeroHeading>
          <Highlight>Meus Trabalhos</Highlight>
          <HeroTitle>Portfólio em Foco</HeroTitle>
          <HeroDescription>
            Uma curadoria dos projetos que contam minha evolução como designer e desenvolvedor.
            Cada entrega foi pensada para criar experiências eficientes, belas e alinhadas aos
            objetivos do cliente.
          </HeroDescription>
          
          <HeroList>
            <HeroListItem>Desenvolvimento Web & Mobile</HeroListItem>
            <HeroListItem>UI/UX Design</HeroListItem>
            <HeroListItem>Soluções Personalizadas</HeroListItem>
          </HeroList>
        </HeroHeading>
      </Hero>
      
      <FeedContainer>

        <ProjectFeed>
          {projects.map((project) => (
            <ProjectCard key={project.id} gradient={project.coverGradient}>
              <ProjectHeader>
                <ProjectYear>{project.year}</ProjectYear>
                <ProjectRole>{project.role}</ProjectRole>
              </ProjectHeader>

              <ProjectTitle>{project.title}</ProjectTitle>
              {project.highlight && <ProjectHighlight>{project.highlight}</ProjectHighlight>}
              <ProjectExcerpt>{project.description}</ProjectExcerpt>

              {project.deliverables?.length > 0 && (
                <Deliverables>
                  {project.deliverables.map((item, index) => (
                    <li key={`${project.id}-deliverable-${index}`}>{item}</li>
                  ))}
                </Deliverables>
              )}

              {project.tags?.length > 0 && (
                <TagList>
                  {project.tags.map((tag) => (
                    <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
                  ))}
                </TagList>
              )}

              <Actions>
                {project.demoUrl && (
                  <ActionButton
                    as="a"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt aria-hidden="true" /> Ver projeto
                  </ActionButton>
                )}
                {project.codeUrl && (
                  <ActionButton
                    as="a"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub aria-hidden="true" /> Código fonte
                  </ActionButton>
                )}
              </Actions>
            </ProjectCard>
          ))}
        </ProjectFeed>
      </FeedContainer>
    </PageWrapper>
  );
}
