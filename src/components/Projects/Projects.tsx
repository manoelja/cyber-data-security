import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import { projects } from '../../data/projects';
import { FileCode, Lock } from 'lucide-react';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('projects.title')}
        </motion.h2>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className={`project-card cyber-card ${expandedId === project.id ? 'expanded' : ''}`}
              variants={itemVariants}
              layout
              onClick={() => toggleProject(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="corner-accent corner-tl"></div>
              <div className="corner-accent corner-tr"></div>
              <div className="corner-accent corner-bl"></div>
              <div className="corner-accent corner-br"></div>

              <motion.div layout className="project-header">
                <span className="project-category">
                  <Lock size={10} style={{ marginRight: '5px' }} />
                  {project.category[currentLang] || project.category['pt']}
                </span>
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  <motion.div 
                    className="modern-link-btn"
                    whileHover={{ scale: 1.1, color: 'var(--accent-color)' }}
                  >
                    <FileCode size={18} />
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.h3 layout className="project-title">{project.title[currentLang] || project.title['pt']}</motion.h3>
              <motion.p layout className="project-desc">
                {project.description[currentLang] || project.description['pt']}
              </motion.p>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="project-synopsis"
                  >
                    <div className="project-details">
                      <div className="detail-item">
                        <strong>THREAT_VULN:</strong> {project.problem[currentLang] || project.problem['pt']}
                      </div>
                      <div className="detail-item">
                        <strong>SECURITY_RESULT:</strong> <span className="highlight">{project.result[currentLang] || project.result['pt']}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div layout className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
