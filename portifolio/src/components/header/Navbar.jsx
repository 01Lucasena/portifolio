import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  background: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Brand = styled(NavLink)`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.blueLight};
  }

  &::before {
    content: "<";
    color: ${({ theme }) => theme.colors.blueLight};
  }

  &::after {
    content: "/>";
    color: ${({ theme }) => theme.colors.blueLight};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: #000000;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-16px)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    transition: transform 0.3s ease, opacity 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;
  }
`;

const NavOverlay = styled.button`
  position: fixed;
  inset: 0;
  border: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.55);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: opacity 0.3s ease;
  z-index: 999;
  display: none;

  @media (max-width: 768px) {
    display: block;
    backdrop-filter: blur(4px);
  }
`;

const StyledLink = styled(NavLink)`
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.blueLight};
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: white;
    font-weight: 600;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.75rem 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Início", end: true },
    { to: "/sobre", label: "Sobre" },
    { to: "/projetos", label: "Projetos" },
    { to: "/contato", label: "Contato" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateView = () => {
      setIsMobileView(mediaQuery.matches);
    };

    updateView();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateView);
    } else {
      mediaQuery.addListener(updateView);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateView);
      } else {
        mediaQuery.removeListener(updateView);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      setIsOpen(false);
    }
  }, [isMobileView]);

  useEffect(() => {
    if (!isMobileView) return undefined;

    document.body.style.overflow = isOpen ? "hidden" : "";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isMobileView]);

  return (
    <Bar>
      <Brand to="/">Lucas Sena</Brand>

      <MobileMenuButton 
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>

      <NavOverlay
        type="button"
        aria-hidden={!isOpen}
        $visible={isOpen}
        onClick={() => setIsOpen(false)}
      />

      <Nav
        id="primary-navigation"
        isOpen={isOpen}
        aria-hidden={isMobileView && !isOpen}
      >
        {navLinks.map(({ to, label, end }) => (
          <StyledLink
            key={to}
            to={to}
            end={end}
            onClick={() => {
              if (isMobileView) {
                setIsOpen(false);
              }
            }}
          >
            {label}
          </StyledLink>
        ))}
      </Nav>
    </Bar>
  );
}
