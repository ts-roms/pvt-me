import {motion} from 'framer-motion';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/layouts/ui/card";


export const Projects = () => {

  return (
    <div className="grid grid-4 md:grid-cols-2 gap-5">

      {
        [
          {
            "name": "Portfolio Starter",
            "description": "A lightweight portfolio template using Next.js, Tailwind CSS, and shadcn/ui components.",
            "tech": ["Next.js", "Tailwind", "shadcn/ui"],
            "link": "#"
          },
          {
            "name": "Motion Gallery",
            "description": "Image gallery with smooth animations powered by Framer Motion and optimized images.",
            "tech": ["Framer Motion", "React", "Next/Image"],
            "link": "#"
          },
          {
            "name": "API Toolkit",
            "description": "Reusable API client with type‑safe endpoints and caching utilities.",
            "tech": ["TypeScript", "React Query", "Node.js"],
            "link": "#"
          }
        ].map((project) => <ProjectCard key={project.name} project={project} />)
      }

    </div>
  )
}


function ProjectCard({project}: Readonly<{ project: { name: string, description: string, tech: string[], link: string } }>) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.35, delay: 3 * 0.05 }}
    >
      <Card className="h-full bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{project.name}</span>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                View
              </a>
            ) : null}
          </CardTitle>
          {project.tech && project.tech.length > 0 ? (
            <CardDescription>{project.tech.join(' • ')}</CardDescription>
          ) : null}
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>
        </CardContent>
      </Card>

    </motion.div>
  )
}
