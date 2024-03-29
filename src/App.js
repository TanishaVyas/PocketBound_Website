// Importing necessary dependencies and components
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Demo from "./components/Demo";
import VrFeaturesPage from "./components/features";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Terms from "./components/Terms";
import ParticlesComponent from "./components/parti";

// Main App component
function App() {
  return (
    <div style={{ backgroundColor: "#180F22" }}>
      {/* Navbar component */}
      <Navbar />
      <div>
        <ParticlesComponent />
        <Hero />
      </div>
      <About />
      <VrFeaturesPage />
      <Demo />
      <Contact />
      <Terms />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
