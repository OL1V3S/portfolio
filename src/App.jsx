import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BootScreen from "./components/BootScreen";

import useAnimations from "./hooks/useAnimations";
import useScrollSpy from "./hooks/useScrollSpy";

export default function App() {
  const [bootDone, setBootDone] = useState(false);

  useAnimations();
  useScrollSpy();

  return (
    <>
      {!bootDone && <BootScreen onComplete={() => setBootDone(true)} />}

      <Header />

      <main id="portfolio">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}