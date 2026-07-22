import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MousePointer2, Shield, Lock, ShieldCheck, Activity, Cpu, HardDrive } from 'lucide-react';
import MagneticButton from '../Common/MagneticButton';
import { useTypewriter } from '../../hooks/useTypewriter';
import './Hero.css';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const words = i18n.language === 'pt'
    ? ["Cibersegurança", "Proteção de Dados", "Inteligência Defensiva"]
    : i18n.language === 'es'
    ? ["Ciberseguridad", "Protección de Datos", "Inteligencia Defensiva"]
    : ["Cybersecurity", "Data Protection", "Defensive Intelligence"];
    
  const typewriterText = useTypewriter(words, 80, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge" variants={itemVariants}>
              <span className="pulse-dot"></span>
              {t('hero.badge')}
            </motion.div>
            
            <motion.h1 className="hero-title" variants={itemVariants}>
              {t('hero.title_pre')} <br />
              <span className="highlight">
                {typewriterText}<span className="cursor">|</span>
              </span>
            </motion.h1>
            
            <motion.p className="hero-description" variants={itemVariants}>
              {t('hero.description')}
            </motion.p>
            
            <motion.div className="hero-btns" variants={itemVariants}>
              <MagneticButton href="#projects" className="btn btn-primary">
                {t('hero.view_projects')} <MousePointer2 size={18} />
              </MagneticButton>
              
              <div className="hero-socials">
                <motion.div 
                  className="security-icon-hero"
                  whileHover={{ y: -3, color: 'var(--accent-color)' }}
                  title="Secure System"
                >
                  <Shield size={24} />
                </motion.div>
                <motion.div 
                  className="security-icon-hero"
                  whileHover={{ y: -3, color: 'var(--accent-color)' }}
                  title="Encrypted"
                >
                  <Lock size={24} />
                </motion.div>
                <motion.div 
                  className="security-icon-hero"
                  whileHover={{ y: -3, color: 'var(--accent-color)' }}
                  title="Verified"
                >
                  <ShieldCheck size={24} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="system-status">
              <div className="status-header">
                <span>SYSTEM STATUS</span>
                <Activity size={14} className="pulse-icon" />
              </div>
              
              <div className="status-grid">
                <div className="status-item">
                  <div className="status-label">DEFENSE LEVEL</div>
                  <div className="status-value">MAXIMUM</div>
                  <div className="status-bar">
                    <motion.div 
                      className="status-progress"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 1 }}
                    ></motion.div>
                  </div>
                </div>
                
                <div className="status-item">
                  <div className="status-label"><Cpu size={10} /> CORE LOAD</div>
                  <div className="status-value">12.4%</div>
                  <div className="status-bar">
                    <motion.div 
                      className="status-progress"
                      initial={{ width: 0 }}
                      animate={{ width: '12.4%' }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    ></motion.div>
                  </div>
                </div>
                
                <div className="status-item">
                  <div className="status-label"><HardDrive size={10} /> ENCRYPTED DATA</div>
                  <div className="status-value">1.2 PB</div>
                  <div className="status-bar">
                    <motion.div 
                      className="status-progress"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
