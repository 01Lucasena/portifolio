import React from "react";
import styled from "styled-components";
import { projects } from "../../data/content";
import ProjectCard from "../ui/Card";

const Grid = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export default function Destaques() {
  const destacados = projects.filter((p) => p.featured);

  return (
    <Grid id="projetos">
      {destacados.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </Grid>
  );
}
