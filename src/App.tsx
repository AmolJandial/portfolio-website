import React from "react";
import AboutMe from "./features/AboutMe";
import Skills from "./features/Skills";
import Portfolio from "./features/Portfolio";
import Header from "./features/Header";
import Contact from "./features/Contact";

export default function App() {
  return (
    <main>
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
