import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Team from './components/Team';
import GraphicDesignTeam from './components/GraphicDesignTeam';
// import Gallery from './components/Gallery';
import ImageShowcase from './components/ImageShowcase';
import Infrastructure from './components/Infrastructure';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Values />
      <Team />
      <GraphicDesignTeam />
      {/* <Gallery /> */}
      <ImageShowcase />
      <Infrastructure />
      <Contact />
    </div>
  );
}

export default App;
