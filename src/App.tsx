import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Symbiosis from './components/Symbiosis/Symbiosis';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import CyberBackground from './components/CyberBackground/CyberBackground';
import './styles/global.css';

function ScrollIndicator() {
  const { t } = useTranslation();
  return (
    <div
      className="scroll-indicator-section"
      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <span>{t('hero.scroll')}</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={24} color="var(--accent-color)" />
      </motion.div>
    </div>
  );
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Reseta o scroll de forma INSTANTÂNEA: sem behavior: 'smooth' (herdado do
    // `html { scroll-behavior: smooth }`), o navegador mobile não anima o
    // viewport de volta ao topo, evitando o efeito de "zoom" na entrada.
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  return (
    <div className="App">
      <CyberBackground />

      <Navbar />

      {/* Sem a classe container aqui: cada seção já aplica o próprio .container,
          e o duplo padding deixava o conteúdo (4rem) desalinhado com a navbar (2rem). */}
      <main>
        <Hero />
        <ScrollIndicator />
        <About />
        <Symbiosis />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
export default App;