import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/MenuItem.css'

function Button({ label, to, active, onClick }) {
  const location = useLocation()
  const navigate = useNavigate()
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Si no estamos en la página principal, navegar a home con el hash
    if (location.pathname !== '/') {
      navigate('/' + to);
      if (onClick) onClick();
      return;
    }
    
    if (to === '#home' ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = to.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const absoluteElementTop = sectionRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (sectionRect.height / 2);
        window.scrollTo({ top: middle, behavior: 'smooth' });
      }
    }
    // Close the menu if there's an onClick function
    if (onClick) onClick();
  }
  return (
    <li>
      <a
        href={to}
        className={`btn-menu${active ? ' active' : ''}`}
        onClick={handleClick}
      >
        {label}
      </a>
    </li>
  )
}

export default Button