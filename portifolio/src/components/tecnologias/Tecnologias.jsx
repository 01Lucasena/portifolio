import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFigma } from "react-icons/si";
import SectionTitle from "../ui/SectionTitle";

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: #0D1117;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionHeading = styled(SectionTitle)`
  margin: 0 auto 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled(motion.div)`
  text-align: center;
  padding: 1.5rem 0;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${({ theme, color }) => color || theme.colors.primary};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const TechName = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TechLevel = styled.div`
  display: none;
`;

const LevelBar = styled.div`
  height: 100%;
  width: ${({ level }) => level}%;
  background: ${({ theme, color }) => color || theme.colors.primary};
  border-radius: 3px;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const technologies = [
  { 
    name: "HTML5", 
    icon: <FaHtml5 />, 
    level: 90, 
    color: "#E34F26" 
  },
  { 
    name: "CSS3", 
    icon: <FaCss3Alt />, 
    level: 85, 
    color: "#1572B6" 
  },
  { 
    name: "JavaScript", 
    icon: <FaJs />, 
    level: 80, 
    color: "#F7DF1E" 
  },
  { 
    name: "TypeScript", 
    icon: <SiTypescript />, 
    level: 75, 
    color: "#3178C6" 
  },
  { 
    name: "React", 
    icon: <FaReact />, 
    level: 80, 
    color: "#61DAFB" 
  },
  { 
    name: "React Native", 
    icon: <FaReact />, 
    level: 70, 
    color: "#61DAFB" 
  },
  { 
    name: "Next.js", 
    icon: <SiNextdotjs style={{ color: '#ffffff' }} />, 
    level: 75, 
    color: "#ffffff" 
  },
  { 
    name: "Figma", 
    icon: <SiFigma />, 
    level: 70, 
    color: "#F24E1E" 
  },
];

export default function Tecnologias() {
  return (
    <Section id="tecnologias">
      <Container>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          delay={300}
        >
          Tecnologias que eu uso
        </SectionHeading>
        
        <Grid 
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name}
              variants={itemVariants}
            >
              <IconWrapper color={tech.color}>
                {tech.icon}
              </IconWrapper>
              <TechName>{tech.name}</TechName>
              <TechLevel>
                <LevelBar 
                  level={tech.level} 
                  color={tech.color}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                />
              </TechLevel>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
