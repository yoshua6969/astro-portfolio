import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/yoshua6969',
  linkedin: 'https://www.linkedin.com/in/dafstin-yoshua-principe-pacheco-2002p04p10/',
  mail: 'mailto:principeyoshua@gmail.com',
  instagram: 'https://www.instagram.com/caj_ink/',
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Multiplatform Application Developer',
    institution: 'Egibide',
    link: 'https://www.egibide.org/campus-arriaga/',
    date: '2021 - 2025',
  },
  {
    title: '...',
    institution: 'ClaseFlix',
    link: 'https://claseflix.io/',
    date: '2024 - 2024',
  },
  {
    title: '...',
    institution: 'Cisco Academy',
    link: 'https://www.netacad.com/es/',
    date: '2024 - 2024',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Ticmatic Solutions S.L.',
    location: 'Alava, Spain',
    position: 'Web Developer',
    start: '2024',
    link: 'https://www.ticmatic.es/',
    end: 'Current',
  },
]
