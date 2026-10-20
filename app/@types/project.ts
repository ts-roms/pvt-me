export type Screenshot = {
  src: string
  caption?: string
}

export type Project = {
  name: string
  slug: string
  description: string
  overview?: string
  technologies: string[]
  features?: string[]
  screenshots?: Screenshot[]
  link?: string
}
