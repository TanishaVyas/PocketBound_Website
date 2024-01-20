import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Terms from "./components/Terms";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Terms />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
