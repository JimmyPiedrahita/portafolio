import Work1 from '../assets/images/project1.webp'
import Work2 from '../assets/images/project2.webp'
import Work3 from '../assets/images/project3.webp'
import Work4 from '../assets/images/project4.webp'
import Work5 from '../assets/images/project5.webp'
import Work6 from '../assets/images/project6.webp'

// Imágenes de detalle para la página de proyecto
import DetailWork1 from '../assets/images/project1-detail.webp'
import DetailWork2 from '../assets/images/project2-detail.webp'
import DetailWork3 from '../assets/images/project3-detail.webp'
import DetailWork4 from '../assets/images/project4-detail.webp'
import DetailWork5 from '../assets/images/project5-detail.webp'
import DetailWork6 from '../assets/images/project6-detail.webp'

export const projects = [
  {
    id: 'uniscan',
    image: Work1,
    detailImage: DetailWork1,
    name: 'UniScan',
    descriptionKey: 'projectDescriptions.uniScan',
    detailDescriptionKey: 'projectDetailDescriptions.uniScan',
    technologies: ['Java', 'Firebase', 'Android Studio'],
    githubUrl: 'https://github.com/JimmyPiedrahita/UniScan',
    siteUrl: null,
    category: 'mobile', 
  },
  {
    id: 'reportapp',
    image: Work2,
    detailImage: DetailWork2,
    name: 'ReportApp',
    descriptionKey: 'projectDescriptions.reportApp',
    detailDescriptionKey: 'projectDetailDescriptions.reportApp',
    technologies: ['Java', 'Firebase', 'Android Studio'],
    githubUrl: 'https://github.com/JimmyPiedrahita/ReportApp',
    siteUrl: null,
    category: 'mobile',
  },
  {
    id: 'filtro-protector',
    image: Work3,
    detailImage: DetailWork3,
    name: 'Screen filter',
    descriptionKey: 'projectDescriptions.filterProtector',
    detailDescriptionKey: 'projectDetailDescriptions.filterProtector',
    technologies: ['Kotlin', 'Android Studio'],
    githubUrl: 'https://github.com/JimmyPiedrahita/filtro-protector',
    siteUrl: null,
    category: 'mobile',
  },
  {
    id: 'paintchat',
    image: Work4,
    detailImage: DetailWork4,
    name: 'PaintChat',
    descriptionKey: 'projectDescriptions.paintChat',
    detailDescriptionKey: 'projectDetailDescriptions.paintChat',
    technologies: ['Java', 'Firebase', 'Android Studio'],
    githubUrl: 'https://github.com/JimmyPiedrahita/PaintChat',
    siteUrl: null,
    category: 'mobile',
  },
  {
    id: 'sketchvibes',
    image: Work5,
    detailImage: DetailWork5,
    name: 'SketchVibes',
    descriptionKey: 'projectDescriptions.sketchVibes',
    detailDescriptionKey: 'projectDetailDescriptions.sketchVibes',
    technologies: ['PHP', 'MySql', 'bootstrap'],
    githubUrl: 'https://github.com/JimmyPiedrahita/sketchvibes',
    siteUrl: 'https://sketchvibes.practicas.me',
    category: 'web',
  },
  {
    id: 'frutastic-shoot',
    image: Work6,
    detailImage: DetailWork6,
    name: 'Frutastic Shoot',
    descriptionKey: 'projectDescriptions.frutasticShoot',
    detailDescriptionKey: 'projectDetailDescriptions.frutasticShoot',
    technologies: ['C#', 'Unity'],
    githubUrl: 'https://github.com/JimmyPiedrahita/frutastic-shoot',
    siteUrl: 'https://jimmypiedrahita.itch.io/frutastic-shoot',
    category: 'videogames',
  },
]
