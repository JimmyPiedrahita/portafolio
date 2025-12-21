import { useParams, Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import { useTranslation } from '../translations'
import { useLanguage } from '../contexts/LanguageContext'
import { Helmet } from 'react-helmet-async'
import { projects } from './HomePage'
import '../styles/ProjectDetail.css'

function ProjectPage() {
  const { projectId } = useParams()
  const { t } = useTranslation()
  const { language } = useLanguage()

  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="project-page-not-found">
        <h1>{language === 'es' ? 'Proyecto no encontrado' : 'Project not found'}</h1>
        <Link to="/" className="back-home-link">
          <FaArrowLeft /> {language === 'es' ? 'Volver al inicio' : 'Back to home'}
        </Link>
      </div>
    )
  }

  const description = t(project.descriptionKey)

  return (
    <>
      <Helmet>
        <title>{project.name} | Jimmy Piedrahita</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="project-page">
        <div className="project-page-container">
          <Link to="/#projects" className="project-page-back">
            <FaArrowLeft size={20} />
            <span>{language === 'es' ? 'Volver a proyectos' : 'Back to projects'}</span>
          </Link>

          <div className="project-page-header">
            <img 
              src={project.image} 
              alt={project.name} 
              className="project-page-image"
            />
          </div>

          <div className="project-page-content">
            <h1 className="project-page-title">{project.name}</h1>
            
            <div className="project-page-category">
              <span className="category-badge">{t(project.category)}</span>
            </div>

            <p className="project-page-description">{description}</p>

            <div className="project-page-technologies">
              <h3>{t('projectDetails.technologies')}</h3>
              <div className="technologies-list">
                {project.technologies.map((tech, idx) => (
                  <span className="technology-tag" key={idx}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-page-actions">
              {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
                <a
                  href={project.githubUrl}
                  className="project-page-btn github"
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
                  className="project-page-btn site"
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
    </>
  )
}

export default ProjectPage
