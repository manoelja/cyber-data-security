import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Symbiosis from './components/Symbiosis/Symbiosis';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import CyberBackground from './components/CyberBackground/CyberBackground';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <CyberBackground />

      <Navbar />

      <main className="container">
        <Hero />
        <About />
        <Symbiosis />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
export default App;