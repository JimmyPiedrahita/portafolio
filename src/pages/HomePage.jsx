import { useTranslation } from '../translations'
import { useLanguage } from '../contexts/LanguageContext'
import { Helmet } from 'react-helmet-async'
import CardSkill from '../components/CardSkill'
import TypeWriter from '../components/TypeWriter'
import '../styles/TypeWriter.css'
import ReactLogo from '../assets/icons/react.svg'
import FirebaseLogo from '../assets/icons/firebase.svg'
import KotlinLogo from '../assets/icons/kotlin.svg'
import SprintBootLogo from '../assets/icons/spring-boot.svg'
import PostgresLogo from '../assets/icons/postgres.svg'
import FigmaLogo from '../assets/icons/figma.svg'
import UnityLogo from '../assets/icons/unity.svg'
import AndroidLogo from '../assets/icons/android-studio.svg'
import GitLogo from '../assets/icons/git.svg'
import GithubLogo from '../assets/icons/github.svg'
import JavaLogo from '../assets/icons/java.svg'
import CSharpLogo from '../assets/icons/csharp.svg'
import PhpLogo from '../assets/icons/php.svg'
import MySqlLogo from '../assets/icons/mysql.svg'
import TrelloLogo from '../assets/icons/trello.svg'
import { MdDownload, MdEmail } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5'
import CardProject from '../components/CardProject'
import { projects } from '../data/projects'
import { useState, useMemo, lazy, Suspense } from 'react'
import ContactForm from '../components/ContactForm'
import { logEvent } from "firebase/analytics";
import { analytics } from '../config/firebase'

const LaptopModel = lazy(() => import('../components/LaptopModel'))

function HomePage() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const [downloadStatus, setDownloadStatus] = useState(null)

  const handleDownload = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/documents/CV Jimmy Piedrahita - Full Stack.pdf')
      if (!response.ok) throw new Error('Download failed')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'CV Jimmy Piedrahita - Full Stack.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      setDownloadStatus('success')
      logEvent(analytics, 'download_cv', {
        file_name: 'CV Jimmy Piedrahita',
        language: language
      });
    } catch (error) {
      setDownloadStatus('error')
    }
    setTimeout(() => setDownloadStatus(null), 3000)
  }

  const projectsWithDescription = useMemo(() => 
    projects.map(p => ({
      ...p,
      description: t(p.descriptionKey)
    })), [t])

  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredProjects = useMemo(() => selectedCategory === 'all'
    ? projectsWithDescription
    : projectsWithDescription.filter(p => p.category === selectedCategory), [selectedCategory, projectsWithDescription])

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{language === 'es' ? 'Jimmy Piedrahita - Desarrollador Full Stack' : 'Jimmy Piedrahita - Full Stack Developer'}</title>
        <meta name="description" content={language === 'es' 
          ? 'Portafolio de Jimmy Piedrahita, desarrollador Full Stack. Descubre mis proyectos, habilidades y formas de contacto.'
          : 'Jimmy Piedrahita\'s portfolio, Full Stack Developer. Discover my projects, skills and contact information.'
        } />
      </Helmet>
      <div className="main-container">
        <section id="home" className="hero-section">
          <div className="hero-section-content">
            <div className="greeting">
              <p>{t('hello')}</p>
            </div>
            <h1>Jimmy Piedrahita</h1>
            <h2><TypeWriter phrases={useMemo(() => [t('phases.phase1'), t('phases.phase2'), t('phases.phase3')], [t])} /></h2>
          </div>
          <Suspense fallback={<div style={{ height: '400px' }}></div>}>
            <LaptopModel />
          </Suspense>
        </section>
        <section id='about' className="about-section" >
          <h2 className="about-section-title">{t('tittleAbout')}</h2>
          <p className="about-section-description">
            <span className="highlight-description">{t('aboutDescription.part1')}</span>
            <span>{t('aboutDescription.part2')}</span>
            <span className="highlight-description">{t('aboutDescription.part3')}</span>
            <span>{t('aboutDescription.part4')}</span>
            <span className="highlight-description">{t('aboutDescription.part5')}</span>
            <span>{t('aboutDescription.part6')}</span>
            <span className="highlight-description">{t('aboutDescription.part7')}</span>
            <span>{t('aboutDescription.part8')}</span>
            <span className="highlight-description">{t('aboutDescription.part9')}</span>
            <span>{t('aboutDescription.part10')}</span>
          </p>
          <button 
            onClick={handleDownload} 
            className={`about-section-button ${downloadStatus === 'success' ? 'success' : ''} ${downloadStatus === 'error' ? 'error' : ''}`}
          >
            {downloadStatus === 'success' ? (
              <><IoCheckmarkCircle className="button-icon" /> {t('downloaded')}</>
            ) : downloadStatus === 'error' ? (
              <><IoCloseCircle className="button-icon" /> {t('error')}</>
            ) : (
              <><MdDownload className="button-icon" /> {t('download')}</>
            )}
          </button>
          <div className='about-social-media'>
            <a className='social-icon' target='_blank' href="https://www.facebook.com/JAPB2002" aria-label="Perfil de Facebook">
              <FaFacebook size={28} />
            </a>
            <a className='social-icon' target='_blank' href="https://www.instagram.com/jimmy_ap7" aria-label="Perfil de Instagram">
              <FaInstagram size={28} />
            </a>
            <a className='social-icon' target='_blank' href="https://github.com/JimmyPiedrahita" aria-label="Perfil de GitHub">
              <FaGithub size={28} />
            </a>
            <a className='social-icon' target='_blank' href="https://www.linkedin.com/in/jimmypiedrahita" aria-label="Perfil de LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a className='social-icon' target='_blank' href="mailto:jimmy22piedrahita@gmail.com" aria-label="Enviar correo electrónico">
              <MdEmail size={28} />
            </a>
          </div>
        </section>
        <section id='skills' className="skills-section">
          <h2 className="skills-section-title">{t('skills')}</h2>
          <div className="skills-container-cards">
            <CardSkill title="Kotlin" icon={KotlinLogo} />
            <CardSkill title="Java" icon={JavaLogo} />
            <CardSkill title="PHP" icon={PhpLogo} />
            <CardSkill title="C#" icon={CSharpLogo} />
            <CardSkill title="PostgreSQL" icon={PostgresLogo} />
            <CardSkill title="MySql" icon={MySqlLogo} />
            <CardSkill title="Firebase" icon={FirebaseLogo} />
            <CardSkill title="React" icon={ReactLogo} />
            <CardSkill title="Spring Boot" icon={SprintBootLogo} />
            <CardSkill title="Android Studio" icon={AndroidLogo} />
            <CardSkill title="Figma" icon={FigmaLogo} />
            <CardSkill title="Unity" icon={UnityLogo} />
            <CardSkill title="Git" icon={GitLogo} />
            <CardSkill title="GitHub" icon={GithubLogo} />
            <CardSkill title="Trello" icon={TrelloLogo} />
          </div>
        </section>
        <section id='projects' className="projects-section">
          <h2 className="projects-section-title">{t('projects')}</h2>
          <div className='menu-projects'>
            <button
              className={`menu-projects-button${selectedCategory === 'all' ? ' active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {t('all')}
            </button>
            <button
              className={`menu-projects-button${selectedCategory === 'mobile' ? ' active' : ''}`}
              onClick={() => setSelectedCategory('mobile')}
            >
              {t('mobile')}
            </button>
            <button
              className={`menu-projects-button${selectedCategory === 'web' ? ' active' : ''}`}
              onClick={() => setSelectedCategory('web')}
            >
              {t('web')}
            </button>
            <button
              className={`menu-projects-button${selectedCategory === 'videogames' ? ' active' : ''}`}
              onClick={() => setSelectedCategory('videogames')}
            >
              {t('videogames')}
            </button>
          </div>
          <div className='projects-container'>
            {filteredProjects.map((project) => (
              <CardProject
                key={project.id}
                id={project.id}
                image={project.image}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                siteUrl={project.siteUrl}
              />
            ))}
          </div>
        </section>
        <section id='contact' className="contact-section">
          <h2 className="contact-section-title">{t('contactMe')}</h2>
          <ContactForm />
        </section>
      </div>
    </>
  )
}

export default HomePage
