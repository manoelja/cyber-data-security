import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { ArrowRight, Shield, Lock, ShieldCheck, Mail } from 'lucide-react';
import MagneticButton from '../Common/MagneticButton';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="footer-title">{t('footer.title')}</h2>
            <p className="footer-desc">
              {t('footer.description')}
            </p>
            
            <div className="footer-security-badges">
              <motion.div whileHover={{ scale: 1.1, color: '#fff' }}><Shield size={32} opacity={0.4} /></motion.div>
              <motion.div whileHover={{ scale: 1.1, color: '#fff' }}><Lock size={32} opacity={0.4} /></motion.div>
              <motion.div whileHover={{ scale: 1.1, color: '#fff' }}><ShieldCheck size={32} opacity={0.4} /></motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="footer-terminal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <span style={{ fontSize: '0.6rem', marginLeft: '10px', opacity: 0.5, fontFamily: 'monospace' }}>SECURE_CHANNEL.SH</span>
            </div>
            
            <div className="terminal-content" style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
              <p style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>&gt; Initializing encrypted connection...</p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Ready to receive research inquiries or collaboration requests.</p>
              
              <MagneticButton className="footer-cta" href="mailto:research@data-security.hub">
                <span className="cta-content" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} /> {t('footer.email_label') || "ESTABLISH CONTACT"} <ArrowRight size={16} />
                </span>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content container">
          <p className="footer-latency">LATENCY: 12ms | NODE: ALPHA-01</p>
          <p className="footer-copyright">{t('footer.copyright')}</p>
          <p className="footer-author">DS.Manoel</p>
        </div>
      </div>
    </footer>
  );
}

