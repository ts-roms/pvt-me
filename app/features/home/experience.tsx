import {motion} from 'framer-motion';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {useLoaderData} from "react-router";
import type {Experience} from "~/@types/experience";


export const Experiences =  () => {
  const {experiences} = useLoaderData();
  return (
    <div className="grid grid-4">
      {
        experiences.map((exp: Experience, idx: number) => (
          <motion.div
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.35, delay: idx * 0.05}}
            className="pb-5"
            key={exp.company}
          >
            <ExperienceItem exp={exp}/>
          </motion.div>))
      }
    </div>
  )
}

function ExperienceItem({exp}: Readonly<{
  exp: Experience
}>) {

  return (
    <Card className="bg-white dark:bg-gray-900/40">
      <CardHeader>
        <CardTitle className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <span className="font-semibold">{exp.role}</span>
          <span className="text-sm font-normal text-gray-500">{exp.period}</span>
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">{exp.company}</CardDescription>
      </CardHeader>
      <CardContent>
        { exp.description && <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{exp.description}</p> }
        <ul className={ "mt-2 list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300"}>
          {exp.responsibilities.map((r, idx) => <li key={idx}>{r}</li>)}
        </ul>
      </CardContent>
    </Card>
  )
}
