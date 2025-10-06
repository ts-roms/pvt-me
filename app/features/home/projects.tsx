import {motion} from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import {useLoaderData} from "react-router";
import type {Project} from "~/@types/project";


export const Projects = () => {
  const {projects} = useLoaderData()
  return (
    <>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{projects.description}</p>
      <div className="grid grid-4 md:grid-cols-2 gap-5">
        {projects.projects.map((project: Project, idx: number) => (<motion.div
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.35, delay: idx * 0.05}}
            key={project.name}
          >
            <ProjectCard project={project}/>
          </motion.div>))}
      </div>
    </>
  )
}


function ProjectCard({project}: Readonly<{
  project: Project
}>) {

  return (

    <Card className="h-full bg-white dark:bg-gray-900/40">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{project.name}</span>
          {project.link ? (<a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              View
            </a>) : null}
        </CardTitle>
        {project.technologies && project.technologies.length > 0 ? (
          <CardDescription>{project.technologies.join(' • ')}</CardDescription>) : null}
      </CardHeader>
      <CardContent>
        <p
          className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>
      </CardContent>
    </Card>)
}
