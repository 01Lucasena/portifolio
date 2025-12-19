import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";
import Button from "../../components/ui/Button";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: #0D1117;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 2.5rem);
  width: 100%;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem;
  background: rgba(13, 17, 23, 0.8);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 1.5rem 0;
  text-align: center;
  color: #fff;
  position: relative;
  padding-bottom: 1rem;
  background: linear-gradient(90deg, #fff, #b3b3b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const Label = styled.label`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  margin-left: 0.5rem;
  transition: color 0.3s ease;
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.9rem 1rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}40`};
    background: ${({ theme }) => theme.colors.background};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.7;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Textarea = styled.textarea`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.9rem 1rem;
  min-height: 160px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}40`};
    background: ${({ theme }) => theme.colors.background};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.7;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Feedback = styled.p`
  margin: 1.5rem 0 0;
  padding: 0.875rem 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  border-radius: 6px;
  text-align: center;
  background: ${({ $variant, theme }) => 
    $variant === "error" 
      ? 'rgba(255, 71, 87, 0.1)' 
      : 'rgba(46, 213, 115, 0.1)'};
  color: ${({ $variant, theme }) => 
    $variant === "error" 
      ? theme.colors.error 
      : theme.colors.success};
  border: 1px solid ${({ $variant, theme }) => 
    $variant === "error" 
      ? `${theme.colors.error}33` 
      : `${theme.colors.success}33`};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  svg {
    flex-shrink: 0;
    font-size: 1.1em;
  }
`;

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Configurações EmailJS ausentes. Defina REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID e REACT_APP_EMAILJS_PUBLIC_KEY."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        {
          publicKey,
        }
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar mensagem", error);
      setStatus("error");
      setErrorMessage(
        error?.message || "Não foi possível enviar sua mensagem agora. Tente novamente mais tarde."
      );
    }
  }

  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>Entre em Contato</Title>
          <form onSubmit={handleSubmit}>
            <Field>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
                disabled={status === "loading"}
              />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                disabled={status === "loading"}
              />
            </Field>
            <Field>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Sua mensagem aqui..."
                disabled={status === "loading"}
              />
            </Field>
            <Button
              type="submit"
              disabled={status === "loading"}
              style={{ 
                width: "100px", 
                height: "40px",
                marginTop: "0.5rem",
                padding: 0,
                fontSize: "0",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden"
              }}
              variant="primary"
              title="Enviar mensagem"
            >
              {status === "loading" ? (
                <span style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%"
                }}>
                  <svg
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      animation: `${spin} 1s linear infinite`,
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                    />
                  </svg>
                </span>
              ) : (
                <span style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%"
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </Button>
            {status === "success" && (
              <Feedback>
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </Feedback>
            )}
            {status === "error" && (
              <Feedback $variant="error">
                Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.
                {errorMessage && ` (${errorMessage})`}
              </Feedback>
            )}
          </form>
        </Content>
      </Container>
    </Wrapper>
  );
}
