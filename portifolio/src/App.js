import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import StarsBackground from "./components/ui/StarsBackground";
import { theme as baseTheme } from "./styles/theme";

// Extend the theme with additional variables
const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: "#0a0f2e",
    card: "#1a1a4a",
    border: "rgba(255, 255, 255, 0.1)",
    primary: "#6c63ff",
    text: "#ffffff",
  },
};

const Home = lazy(() => import("./pages/Home"));
const Sobre = lazy(() => import("./pages/sobre/Sobre"));
const Projetos = lazy(() => import("./pages/projetos/Projetos"));
const Contato = lazy(() => import("./pages/contato/Contato"));

function LoadingFallback() {
  return (
    <div className="app-loading">
      <span className="app-loading__spinner" />
      <p>Carregando...</p>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-root">
        <StarsBackground />
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
