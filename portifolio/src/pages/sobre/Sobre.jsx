import React from "react";
import styled from "styled-components";
import SectionTitle from "../../components/ui/SectionTitle";
import Timeline from "../../components/timeline/Timeline";

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


const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 680px;
  margin: 0 auto;
  text-align: center;

  p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.78);
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const BadgesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const BadgeCard = styled.article`
  position: relative;
  padding: 1.35rem 1.5rem;
  border-radius: 20px;
  background: rgba(4, 15, 54, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 22px 45px rgba(5, 12, 36, 0.45);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 200px;

  &::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.06);
    opacity: 0.9;
    pointer-events: none;
  }
`;

const BadgeTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
`;

const BadgeIssuer = styled.span`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
`;

const BadgeMeta = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: auto;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.65);
`;

const MetaTag = styled.span`
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.blueLight};
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const TimelineSection = styled(PageSection)`
  padding-top: clamp(2.5rem, 5vw, 3.5rem);
`;

const certificates = [
  {
    id: "1",
    title: "Técnico em Desenvolvimento de Sistemas",
    issuer: "SENAI-BA",
    year: "2025",
    type: "Desenvolvimento de Sistemas",
  },
  {
    id: "2",
    title: "Copilot na Prática",
    issuer: "DIO",
    year: "2025",
    type: "IA",
  },
  {
    id: "alura-react",
    title: "React com TypeScript",
    issuer: "Alura",
    year: "2025",
    type: "Especialização",
  },
  {
    id: "ux-ui",
    title: "UI/UX Design Essentials",
    issuer: "Origamid",
    year: "2025",
    type: "Design",
  },
];

const timelineEvents = [
  {
    id: "2024",
    title: "2024 · Primeiros passos na programação",
    subtitle:
      "Iniciei estudos autodidatas em HTML, CSS e JavaScript, construindo meus primeiros projetos pessoais.",
  },
  {
    id: "2024",
    title: "2024 · Foco em React e componentização",
    subtitle:
      "Aprofundei conhecimento em SPAs, hooks e integração com APIs, aplicando boas práticas e padrões de arquitetura.",
  },
  {
    id: "2025",
    title: "2025 · Especialização em UI/UX e performance",
    subtitle:
      "Participei de bootcamps intensivos, refinei habilidades de design e passei a construir interfaces com foco em acessibilidade.",
  },
  {
    id: "2025",
    title: "2025 · Projetos profissionais e freelas",
    subtitle:
      "Desenvolvi soluções completas para clientes, atuando desde a concepção visual até a entrega técnica.",
  },
];

export default function Sobre() {
  return (
    <PageWrapper>
      <Hero>
        <HeroHeading>
          <Highlight>sobre mim</Highlight>
          <HeroTitle>Desenvolvedor front-end apaixonado por experiências digitais.</HeroTitle>
          <HeroDescription>
            Olá! Eu sou Lucas Sena, um desenvolvedor que combina código, design e estratégia para
            construir interfaces enxutas, performáticas e alinhadas às necessidades de negócio.
            Adoro transformar ideias em produtos que entregam valor real para as pessoas.
          </HeroDescription>
          <HeroList>
            <HeroListItem>Experiência com design systems, acessibilidade e animações.</HeroListItem>
            <HeroListItem>Colaborações com times multidisciplinares e projetos freelance.</HeroListItem>
          </HeroList>
        </HeroHeading>
      </Hero>

      <PageSection>
        <SectionTitle>Biografia</SectionTitle>
        <SectionIntro>
          <p>
            Minha trajetória começou com curiosidade pelas interfaces que usava no dia a dia. A partir
            daí, mergulhei em cursos especializados, comunidades de tecnologia e projetos próprios para
            experimentar diferentes abordagens de UI. Hoje, aplico princípios de usabilidade, tipografia
            e storytelling visual para construir experiências consistentes e encantadoras.
          </p>
          <p>
            Além de codificar, me dedico a entender o usuário final, prototipar fluxos e iterar com base
            em feedbacks. Acredito que um bom produto nasce do equilíbrio entre tecnologia e empatia,
            por isso mantenho uma postura colaborativa e aberta a novas perspectivas em cada projeto.
          </p>
        </SectionIntro>
      </PageSection>

      <PageSection>
        <SectionTitle>Certificados em destaque</SectionTitle>
        <BadgesGrid>
          {certificates.map((certificate) => (
            <BadgeCard key={certificate.id}>
              <MetaTag>Certificado</MetaTag>
              <BadgeTitle>{certificate.title}</BadgeTitle>
              <BadgeIssuer>{certificate.issuer}</BadgeIssuer>
              <BadgeMeta>
                <span>{certificate.year}</span>
                <span>•</span>
                <span>{certificate.type}</span>
              </BadgeMeta>
            </BadgeCard>
          ))}
        </BadgesGrid>
      </PageSection>

      <TimelineSection>
        <SectionTitle>Linha do tempo</SectionTitle>
        <Timeline events={timelineEvents} />
      </TimelineSection>
    </PageWrapper>
  );
}
