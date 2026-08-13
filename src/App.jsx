import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useAnimations from "./hooks/useAnimations";
import useScrollSpy from "./hooks/useScrollSpy";

export default function App() {
  useAnimations();
  const activeSection = useScrollSpy();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
