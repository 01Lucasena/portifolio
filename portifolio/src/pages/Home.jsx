import React from "react";
import HeroSection from "../components/hero/HeroSection";
import WelcomeSection from "../components/welcome/WelcomeSection";
import Tecnologias from "../components/tecnologias/Tecnologias";
import ContactSection from "../components/contato/ContatoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <Tecnologias />
      <ContactSection />
    </main>
  );
}
