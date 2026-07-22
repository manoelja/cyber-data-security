import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Lock, Cloud, Eye, Search, Terminal } from 'lucide-react';
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
      transition: { staggerChildren: 0.1 }
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
            <div
              key={skill.name}
              className="skill-badge cyber-card"
              onClick={() => toggleSkill(skill.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className="skill-content-wrapper">
                <AnimatePresence mode="wait">
                  {expandedSkill !== skill.name ? (
                    <motion.div
                      key="header"
                      className="skill-header"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <div className="skill-main-info">
                        <div className="skill-icon-wrapper">
                          {skill.icon}
                        </div>
                        <div className="skill-text-info">
                          <span className="skill-category">{skill.category}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="detail"
                      className="skill-detail-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <span className="skill-name-detail">{skill.name}</span>
                      <p>{skill.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
