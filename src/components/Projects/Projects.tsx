import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import { projects } from '../../data/projects';
import { Lock } from 'lucide-react';

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
      transition: { staggerChildren: 0.1 }
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
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card cyber-card"
              onClick={() => toggleProject(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="skill-content-wrapper">
                <AnimatePresence mode="wait">
                  {expandedId !== project.id ? (
                    <motion.div
                      key="preview"
                      className="project-preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="project-header">
                        <span className="project-category">
                          <Lock size={10} style={{ marginRight: '5px' }} />
                          {project.category[currentLang] || project.category['pt']}
                        </span>
                      </div>
                      <h3 className="project-title">{project.title[currentLang] || project.title['pt']}</h3>
                      <p className="project-desc">
                        {project.description[currentLang] || project.description['pt']}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      className="project-detail-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="project-header">
                        <span className="project-category">
                          <Lock size={10} style={{ marginRight: '5px' }} />
                          {project.category[currentLang] || project.category['pt']}
                        </span>
                      </div>
                      <h3 className="project-title-expanded">{project.title[currentLang] || project.title['pt']}</h3>
                      <div className="project-details">
                        <div className="detail-item">
                          <strong>THREAT_VULN:</strong> {project.problem[currentLang] || project.problem['pt']}
                        </div>
                        <div className="detail-item">
                          <strong>SECURITY_RESULT:</strong> {project.result[currentLang] || project.result['pt']}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
