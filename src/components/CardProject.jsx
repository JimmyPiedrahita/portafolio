import { logEvent } from "firebase/analytics";
import { analytics } from '../config/firebase';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import '../styles/CardProject.css';

function CardProject({ id, name, image, githubUrl, siteUrl, description, technologies = [] }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    logEvent(analytics, 'select_project', {
      project_id: id,
      project_name: name
    });

    navigate(`/proyecto/${id}`);
  };

  const handleExternalLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="card-project" 
      onClick={handleCardClick}
      style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
    >
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
                onClick={(e) => e.stopPropagation()} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Ver proyecto ${name} en GitHub`}
              >
                <FaGithub size={20} />
              </a>
            )}
            {siteUrl && siteUrl !== '#' && siteUrl !== '' && (
              <a
                href={siteUrl}
                className="project-btn site-btn"
                onClick={(e) => e.stopPropagation()}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visitar sitio web de ${name}`}
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;