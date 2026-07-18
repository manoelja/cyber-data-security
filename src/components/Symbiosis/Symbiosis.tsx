import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Database, ShieldAlert, Zap, Cpu, Activity, Lock, Eye } from 'lucide-react';
import './Symbiosis.css';

const Symbiosis = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="symbiosis" className="symbiosis">
      <div className="container">
        <motion.div 
          className="symbiosis-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">{t('symbiosis.subtitle')}</span>
          <h2 className="section-title">{t('symbiosis.title')}</h2>
          <p className="description">{t('symbiosis.description')}</p>
        </motion.div>

        <motion.div 
          className="symbiosis-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="symbiosis-card cyber-card" variants={itemVariants}>
            <div className="corner-accent corner-tl"></div>
            <div className="corner-accent corner-br"></div>
            <div className="card-icon">
              <Database size={32} />
            </div>
            <h3>{t('symbiosis.item1_title')}</h3>
            <p>{t('symbiosis.item1_desc')}</p>
          </motion.div>

          <motion.div className="symbiosis-card cyber-card" variants={itemVariants}>
            <div className="corner-accent corner-tl"></div>
            <div className="corner-accent corner-br"></div>
            <div className="card-icon">
              <ShieldAlert size={32} />
            </div>
            <h3>{t('symbiosis.item2_title')}</h3>
            <p>{t('symbiosis.item2_desc')}</p>
          </motion.div>

          <motion.div className="symbiosis-card cyber-card" variants={itemVariants}>
            <div className="corner-accent corner-tl"></div>
            <div className="corner-accent corner-br"></div>
            <div className="card-icon">
              <Activity size={32} />
            </div>
            <h3>{t('symbiosis.item3_title')}</h3>
            <p>{t('symbiosis.item3_desc')}</p>
          </motion.div>

          <motion.div className="symbiosis-card cyber-card" variants={itemVariants}>
            <div className="corner-accent corner-tl"></div>
            <div className="corner-accent corner-br"></div>
            <div className="card-icon">
              <Lock size={32} />
            </div>
            <h3>{t('symbiosis.item4_title')}</h3>
            <p>{t('symbiosis.item4_desc')}</p>
          </motion.div>

          <motion.div className="symbiosis-card cyber-card" variants={itemVariants}>
            <div className="corner-accent corner-tl"></div>
            <div className="corner-accent corner-br"></div>
            <div className="card-icon">
              <Eye size={32} />
            </div>
            <h3>{t('symbiosis.item5_title')}</h3>
            <p>{t('symbiosis.item5_desc')}</p>
          </motion.div>

          <motion.div className="symbiosis-fact cyber-card" variants={itemVariants}>
             <div className="fact-header">
                <Zap size={16} />
                <span>{t('symbiosis.fact_title')}</span>
             </div>
             <p className="fact-text">{t('symbiosis.fact_text')}</p>
             <div className="fact-visual">
                <Cpu size={40} opacity={0.1} />
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Symbiosis;

