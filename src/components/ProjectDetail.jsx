import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { useTranslation } from '../translations'
import '../styles/ProjectDetail.css'

function ProjectDetail({ project, onClose }) {
  const { t } = useTranslation()

  if (!project) return null

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('project-detail-overlay')) {
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div 
      className="project-detail-overlay" 
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div className="project-detail-container">
        <button 
          className="project-detail-close" 
          onClick={onClose}
          aria-label={t('close')}
        >
          <FaTimes size={24} />
        </button>

        <div className="project-detail-header">
          <img 
            src={project.image} 
            alt={project.name} 
            className="project-detail-image"
          />
        </div>

        <div className="project-detail-content">
          <h2 id="project-title" className="project-detail-title">{project.name}</h2>
          
          <div className="project-detail-category">
            <span className="category-badge">{t(project.category)}</span>
          </div>

          <p className="project-detail-description">{project.description}</p>

          {project.longDescription && (
            <div className="project-detail-long-description">
              <h3>{t('projectDetails.features')}</h3>
              <p>{project.longDescription}</p>
            </div>
          )}

          <div className="project-detail-technologies">
            <h3>{t('projectDetails.technologies')}</h3>
            <div className="technologies-list">
              {project.technologies.map((tech, idx) => (
                <span className="technology-tag" key={idx}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-detail-actions">
            {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
              <a
                href={project.githubUrl}
                className="project-detail-btn github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
                <span>{t('projectDetails.viewCode')}</span>
              </a>
            )}
            {project.siteUrl && project.siteUrl !== '#' && project.siteUrl !== '' && (
              <a
                href={project.siteUrl}
                className="project-detail-btn site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt size={18} />
                <span>{t('projectDetails.viewSite')}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
