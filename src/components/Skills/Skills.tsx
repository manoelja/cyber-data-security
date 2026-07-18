import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ShieldCheck, Lock, Cloud, Eye, Search, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const skills = [
    { 
      name: 'Cloud Security', 
      category: 'INFRASTRUCTURE', 
      detail: 'Proteção de infraestruturas críticas em AWS, Azure e Google Cloud com foco em segurança nativa.',
      icon: <Cloud size={18} />
    },
    { 
      name: 'Cryptography', 
      category: 'DATA PROTECTION', 
      detail: 'Implementação de algoritmos AES-256 e RSA para proteção de dados em repouso e em trânsito.',
      icon: <Lock size={18} />
    },
    { 
      name: 'Threat Intel', 
      category: 'INTELLIGENCE', 
      detail: 'Antecipação de ameaças baseada em análise de comportamento e inteligência de dados globais.',
      icon: <Search size={18} />
    },
    { 
      name: 'Compliance', 
      category: 'AUDIT', 
      detail: 'Adequação rigorosa às normas LGPD, GDPR e auditorias constantes de vulnerabilidade.',
      icon: <ShieldCheck size={18} />
    },
    { 
      name: 'Neural Defense', 
      category: 'AI DEFENSE', 
      detail: 'Modelos neurais avançados para detecção de anomalias e ataques de dia zero em tempo real.',
      icon: <Terminal size={18} />
    },
    { 
      name: '24/7 Monitoring', 
      category: 'SOC', 
      detail: 'SOC (Security Operations Center) ativo para resposta imediata a incidentes de segurança.',
      icon: <Eye size={18} />
    },
  ];

  const toggleSkill = (name: string) => {
    setExpandedSkill(expandedSkill === name ? null : name);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div 
              layout
              key={skill.name} 
              className={`skill-badge cyber-card ${expandedSkill === skill.name ? 'expanded' : ''}`}
              variants={itemVariants}
              onClick={() => toggleSkill(skill.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className="skill-header">
                <div className="skill-main-info">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <div className="skill-text-info">
                    <span className="skill-category">{skill.category}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
                <motion.div 
                  className="skill-expand-icon"
                  animate={{ rotate: expandedSkill === skill.name ? 180 : 0 }}
                >
                  <ChevronDown size={16} opacity={0.4} />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedSkill === skill.name && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="skill-detail-text"
                  >
                    <p>{skill.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
