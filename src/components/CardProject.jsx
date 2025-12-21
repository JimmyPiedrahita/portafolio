import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/CardProject.css'

function CardProject({ id, name, image, githubUrl, siteUrl, description, technologies = [] }) {
  const handleExternalLinkClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer')
  }

  return (
    <Link to={`/proyecto/${id}`} className="card-project" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
      <img src={image} alt={name} className="card-project-image" loading="lazy" />
      <div className="card-project-content">
        <h3 className="card-project-title">{name}</h3>
        <p className="card-project-description">{description}</p>
        <div className="card-project-footer">
          <div className="card-project-technologies">
            {technologies.map((tech, idx) => (
              <span className="technology" key={idx}>{tech}</span>
            ))}
          </div>
          <div className="card-project-buttons">
            {githubUrl && githubUrl !== '#' && githubUrl !== '' && (
              <a
                href={githubUrl}
                className="project-btn github-btn"
                onClick={handleExternalLinkClick}
                aria-label={`Ver proyecto ${name} en GitHub`}
              >
                <FaGithub size={20} />
              </a>
            )}
            {siteUrl && siteUrl !== '#' && siteUrl !== '' && (
              <a
                href={siteUrl}
                className="project-btn site-btn"
                onClick={handleExternalLinkClick}
                aria-label={`Visitar sitio web de ${name}`}
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardProject