import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, FileText, ChevronDown, Activity, Target, Globe, AlertCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const [expandedEdu, setExpandedEdu] = useState<string | null>(null);
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const toggleEdu = (id: string) => {
    setExpandedEdu(expandedEdu === id ? null : id);
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('about.title')}
        </motion.h2>

        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="about-info" variants={itemVariants}>
            <motion.div 
              layout
              className={`about-card-main cyber-card ${isMainExpanded ? 'expanded' : ''}`}
              onClick={() => setIsMainExpanded(!isMainExpanded)}
              style={{ cursor: 'pointer' }}
            >
              <div className="about-card-header">
                <div className="about-card-header-label">
                  <Shield size={20} color="var(--accent-color)" />
                  <span className="card-label">INTELLIGENCE REPORT</span>
                </div>
                <motion.div 
                  animate={{ rotate: isMainExpanded ? 180 : 0 }}
                >
                  <ChevronDown size={20} opacity={0.5} />
                </motion.div>
              </div>

              <motion.p layout className="about-text">
                {t('about.description')}
              </motion.p>

              <AnimatePresence>
                {isMainExpanded && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="about-details-expanded"
                  >
                    <div className="profile-deep-dive">
                      <p className="deep-text">
                        <span style={{ color: 'var(--accent-color)' }}>&gt;</span> {t('about.detailed_profile')}
                      </p>
                      
                      <div className="mission-box">
                        <div className="mission-header">
                          <Target size={16} color="var(--accent-color)" />
                          <span className="card-label">MISSION OBJECTIVE</span>
                        </div>
                        <p className="mission-body">{t('about.mission_text')}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="about-details-list">
                <div className="detail-item-modern">
                  <Activity size={16} color="var(--accent-color)" />
                  <div className="detail-info-wrap">
                    <span className="detail-label">PROTOCOL</span>
                    <span className="detail-value">ACTIVE-SHIELD</span>
                  </div>
                </div>
                <div className="detail-item-modern">
                  <Globe size={16} color="var(--accent-color)" />
                  <div className="detail-info-wrap">
                    <span className="detail-label">COVERAGE</span>
                    <span className="detail-value">GLOBAL-24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="about-education" variants={itemVariants}>
            {/* Certification 1 */}
            <motion.div 
              layout
              className={`edu-card-modern cyber-card ${expandedEdu === 'cert1' ? 'expanded' : ''}`}
              onClick={() => toggleEdu('cert1')}
              style={{ cursor: 'pointer' }}
            >
              <div className="edu-header-row">
                <div className="edu-icon-container">
                  <Lock size={24} />
                </div>
                <div className="edu-content">
                  <span className="edu-type">{t('about.graduation_label')}</span>
                  <h3 className="edu-title">{t('about.graduation_title')}</h3>
                </div>
                <motion.div 
                  animate={{ rotate: expandedEdu === 'cert1' ? 180 : 0 }}
                >
                  <ChevronDown size={20} opacity={0.5} />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedEdu === 'cert1' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="edu-details-expanded"
                  >
                    <div className="edu-institution">
                      <span className="inst-name">STATUS: VERIFIED</span>
                      <span className="inst-full">{t('about.graduation_inst')}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!expandedEdu && <div className="edu-badge">CERTIFIED</div>}
            </motion.div>

            {/* Certification 2 */}
            <motion.div 
              layout
              className={`edu-card-modern cyber-card ${expandedEdu === 'cert2' ? 'expanded' : ''}`}
              onClick={() => toggleEdu('cert2')}
              style={{ cursor: 'pointer' }}
            >
              <div className="edu-header-row">
                <div className="edu-icon-container">
                  <FileText size={24} />
                </div>
                <div className="edu-content">
                  <span className="edu-type">{t('about.postgrad_label')}</span>
                  <h3 className="edu-title">{t('about.postgrad_title')}</h3>
                </div>
                <motion.div 
                  animate={{ rotate: expandedEdu === 'cert2' ? 180 : 0 }}
                >
                  <ChevronDown size={20} opacity={0.5} />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedEdu === 'cert2' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="edu-details-expanded"
                  >
                    <div className="edu-institution">
                      <span className="inst-name">STATUS: AUTHORIZED</span>
                      <span className="inst-full">{t('about.postgrad_inst')}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!expandedEdu && <div className="edu-badge">VALIDATED</div>}
            </motion.div>

            <div className="mission-box about-alert-box">
              <div className="about-alert-header">
                <AlertCircle size={14} />
                <span className="card-label">SECURITY ALERT SYSTEM ACTIVE</span>
              </div>
              <p className="about-alert-body">No critical vulnerabilities detected in the last 24 cycles.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
