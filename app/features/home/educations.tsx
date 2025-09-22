import {motion} from 'framer-motion'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {useLoaderData} from "react-router";
import type {Education} from "~/@types/education";

export const Educations = () => {
  const {educations} = useLoaderData()
  return (
    <div className="grid grid-4">
      {
        educations.map((edu: Education, idx: number) =>
          <motion.div
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.35, delay: idx * 0.05}}
            key={edu.school}
            className="pb-5"
          >
            <EducationItem edu={edu}/>

          </motion.div>)
      }
    </div>
  )
}

function EducationItem({edu}: Readonly<{
  edu: Education
}>) {
  return (

    <Card className="bg-white dark:bg-gray-900/40">
      <CardHeader>
        <CardTitle className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <span className="font-semibold">{edu.degree}</span>
          <span className="text-sm font-normal text-gray-500">{edu.period}</span>
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">{edu.school}</CardDescription>
      </CardHeader>
      {edu.description ? (
        <CardContent>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{edu.description}</p>
        </CardContent>
      ) : null}
    </Card>
  )
}
