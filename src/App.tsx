import AboutMe from "./features/aboutMe/AboutMe";
import Skills from "./features/skills/Skills";
import Portfolio from "./features/portfolio/Portfolio";
import Header from "./features/header/Header";
import Contact from "./features/contact/Contact";

import "./App.css";

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
