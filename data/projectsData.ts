interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Deeployed',
    description: `The company I founded with friends. My most important project ever.`,
    imgSrc: '/static/images/deeployed.png',
    href: 'https://www.deeployed.com',
  },
]

export default projectsData
