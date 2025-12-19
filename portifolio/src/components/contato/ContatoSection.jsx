import React from "react";
import styled from "styled-components";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

const Section = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0 clamp(3rem, 7vw, 5rem);
  background: #0D1117;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    filter: blur(140px);
    opacity: 0.18;
    z-index: 0;
  }

  &::before {
    top: -200px;
    left: -160px;
    background: ${({ theme }) => `${theme.colors.primary}40`};
  }

  &::after {
    bottom: -220px;
    right: -160px;
    background: rgba(0, 180, 216, 0.14);
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 2.5rem);
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: calc(clamp(3rem, 8vw, 5rem) + 40px);
  align-items: stretch;

  @media (max-width: 1024px) {
    gap: clamp(2rem, 6vw, 3rem);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionHeading = styled(SectionTitle).attrs({ showBrackets: false })`
  margin: 0;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  max-width: 580px;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const IntroText = styled(motion.p)`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SectionAccent = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(108, 99, 255, 0.12);

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const AccentDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
`;

const FeatureList = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.9rem 1.1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.textSecondary};
  backdrop-filter: blur(18px);
`;

const FeatureIndicator = styled.span`
  width: 12px;
  height: 12px;
  margin-top: 0.2rem;
  border-radius: 4px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, rgba(0, 180, 216, 0.85) 100%);
  flex-shrink: 0;
  box-shadow: 0 0 14px rgba(108, 99, 255, 0.45);
`;

const FeatureText = styled.span`
  font-size: 0.98rem;
  line-height: 1.6;
`;

const SocialTitle = styled(motion.span)`
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.64);
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const ContactForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: clamp(0.55rem, 1.5vw, 0.95rem);
  padding: clamp(0.85rem, 2.5vw, 1.4rem);
  align-self: start;
  border-radius: 20px;
  background: radial-gradient(circle at top left, rgba(108, 99, 255, 0.22), transparent 55%),
    linear-gradient(155deg, rgba(8, 25, 88, 0.92), rgba(4, 15, 54, 0.92));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 26px 58px rgba(5, 12, 36, 0.55);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(140deg, rgba(255, 255, 255, 0.08), transparent 50%);
    opacity: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.08);
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    max-width: 460px;
    margin: 0 auto;
  }
`;

const ContactFormBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const ContactFormTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(1.28rem, 2.8vw, 1.48rem);
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
`;

const ContactFormText = styled.p`
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.45;
  color: rgba(235, 236, 248, 0.72);
`;

const ContactButton = styled(Button)`
  width: 220px;
  justify-content: center;
  padding: 0.68rem 1.45rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.98rem;
  font-weight: 600;
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: linear-gradient(135deg, #041b61 0%, #0a2f99 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
  box-shadow: 0 24px 45px rgba(4, 27, 97, 0.42);
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow: 0 28px 55px rgba(4, 27, 97, 0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 16px 30px rgba(4, 27, 97, 0.36);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ContactNote = styled.span`
  font-size: 0.78rem;
  color: rgba(211, 215, 235, 0.68);
  line-height: 1.4;
`;

const SocialButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 0.85rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialButton = styled(motion.a)`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${({ accent }) => accent};
  text-decoration: none;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 18px 36px rgba(8, 12, 34, 0.4);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -12px;
    border-radius: inherit;
    background: ${({ accent }) => accent}26;
    filter: blur(18px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 24px 48px rgba(8, 12, 34, 0.46);

    &::before {
      opacity: 1;
    }
  }
`;

const SocialButtonIcon = styled.span`
  font-size: 1.45rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const featureItems = [
  "Experiência em desenvolvimento front-end com React",
  "Foco em performance, acessibilidade e SEO",
  "Habilidades sólidas em UI/UX design",
  "Comprometimento com prazos e qualidade",
  "Soluções criativas para desafios complexos"
];

const socialLinks = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "+55 77 98804-8026",
    href: "https://wa.me/5577988048026",
    icon: FaWhatsapp,
    color: "#25D366"
  },
  {
    id: "github",
    label: "GitHub",
    handle: "github.com/01Lucasena",
    href: "https://github.com/01Lucasena",
    icon: FaGithub,
    color: "#F5F5F5"
  }
];

const ContactSection = () => {
  return (
    <Section id="contato">
      <Container>
        <Content>
          <TextContent>
            <SectionAccent
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <AccentDot /> Disponível para novos projetos
            </SectionAccent>

            <SectionHeading
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            Vamos trabalhar juntos?
            </SectionHeading>

            <IntroText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Com minha experiência em desenvolvimento front-end e habilidades em criar experiências digitais impactantes, posso ajudar a transformar suas ideias em produtos modernos, acessíveis e de alta performance.
            </IntroText>

            <FeatureList
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {featureItems.map((item, index) => (
                <FeatureItem key={`${item}-${index}`}>
                  <FeatureIndicator />
                  <FeatureText>{item}</FeatureText>
                </FeatureItem>
              ))}
            </FeatureList>

            <SocialTitle
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Conecte-se comigo
            </SocialTitle>

            <SocialButtons
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <SocialButton
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    accent={link.color}
                    aria-label={`Abrir ${link.label}`}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <SocialButtonIcon>
                      <Icon />
                    </SocialButtonIcon>
                    <VisuallyHidden>
                      {`Perfil no ${link.label}: ${link.handle}`}
                    </VisuallyHidden>
                  </SocialButton>
                );
              })}
            </SocialButtons>
          </TextContent>

          <ContactForm
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactFormBadge>
              <AccentDot /> contato direto
            </ContactFormBadge>
            <ContactFormTitle>Vamos conversar!</ContactFormTitle>
            <ContactFormText>
              Estou disponível para oportunidades, projetos freelance ou parcerias criativas. Vamos construir algo memorável juntos.
            </ContactFormText>

            <ContactButton
              as="a"
              href="https://wa.me/5577988048026"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp />
              Falar via WhatsApp
            </ContactButton>

            <ContactNote>Tempo médio de resposta: menos de 1 hora.</ContactNote>
          </ContactForm>
        </Content>
      </Container>
    </Section>
  );
};

export default ContactSection;
