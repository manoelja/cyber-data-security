import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, FileText, Activity, Globe, AlertCircle } from 'lucide-react';
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
          viewport={{ once: true }}
        >
          <motion.div className="about-info" variants={itemVariants}>
            <div
              className="about-card-main cyber-card"
              onClick={() => setIsMainExpanded(!isMainExpanded)}
              style={{ cursor: 'pointer' }}
            >
              <div className="about-card-header">
                <div className="about-card-header-label">
                  <Shield size={20} color="var(--accent-color)" />
                  <span className="card-label">INTELLIGENCE REPORT</span>
                </div>
              </div>

              <div className="about-content-wrapper">
                <AnimatePresence mode="wait">
                  {!isMainExpanded ? (
                    <motion.div
                      key="preview"
                      className="about-preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <p className="about-description-text">
                        {t('about.description')}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      className="about-details-expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="profile-deep-dive">
                        <p className="deep-text">
                          <span style={{ color: 'var(--accent-color)' }}>&gt;</span> {t('about.detailed_profile')}
                        </p>

                        <div className="mission-box">
                          <div className="mission-header">
                            <span className="card-label">MISSION OBJECTIVE</span>
                          </div>
                          <p className="mission-body">{t('about.mission_text')}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
            </div>
          </motion.div>

          <motion.div className="about-education" variants={itemVariants}>
            {/* Certification 1 */}
            <div
              className="edu-card-modern cyber-card"
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
              </div>

              <div className="edu-content-wrapper">
                <AnimatePresence mode="wait">
                  {expandedEdu !== 'cert1' ? (
                    <motion.div
                      key="badge"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <div className="edu-badge">CERTIFIED</div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      className="edu-details-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <div className="edu-institution">
                        <span className="inst-name">STATUS: VERIFIED</span>
                        <span className="inst-full">{t('about.graduation_inst')}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Certification 2 */}
            <div
              className="edu-card-modern cyber-card"
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
              </div>

              <div className="edu-content-wrapper">
                <AnimatePresence mode="wait">
                  {expandedEdu !== 'cert2' ? (
                    <motion.div
                      key="badge"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <div className="edu-badge">VALIDATED</div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      className="edu-details-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <div className="edu-institution">
                        <span className="inst-name">STATUS: AUTHORIZED</span>
                        <span className="inst-full">{t('about.postgrad_inst')}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

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
