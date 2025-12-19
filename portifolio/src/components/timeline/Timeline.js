import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0;
`;

const VerticalLine = styled.span`
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  left: 12px;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(0, 139, 242, 0.1) 0%,
    ${({ theme }) => `${theme.colors.blueLight}55`} 50%,
    rgba(0, 139, 242, 0.1) 100%
  );
  pointer-events: none;
`;

const TimelineList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Item = styled.li`
  position: relative;
  padding-left: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 0.45rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => `${theme.colors.blueLight}66`};
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0 0 0 4px rgba(0, 139, 242, 0.08);
  }
`;

const Title = styled.h3`
  margin: 0 0 0.35rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(1.28rem, 2.8vw, 1.48rem);
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
`;

const DefaultEvents = [
  {
    id: 1,
    title: "Início na programação",
    subtitle: "Primeiros contatos com HTML, CSS e JavaScript.",
  },
  {
    id: 2,
    title: "Foco em React",
    subtitle: "Criação de SPAs, componentes reutilizáveis e boas práticas.",
  },
];

export default function Timeline({ events = DefaultEvents }) {
  return (
    <Wrapper aria-label="Linha do tempo profissional">
      <VerticalLine aria-hidden="true" />
      <TimelineList>
        {events.map((event) => (
          <Item key={event.id}>
            <Title>{event.title}</Title>
            {event.subtitle && <Subtitle>{event.subtitle}</Subtitle>}
          </Item>
        ))}
      </TimelineList>
    </Wrapper>
  );
}
