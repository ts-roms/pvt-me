import { motion } from 'framer-motion'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/layouts/ui/card";

export const Education = () => {
  return (
    <div className="grid grid-4">
      {
        [
          {
            "school": "University of Technology",
            "degree": "B.S. in Computer Science",
            "period": "2015 — 2019",
            "details": "Graduated with honors. Specialized in Web Engineering and Human‑Computer Interaction."
          }
        ].map((edu) => <EducationItem key={edu.school} edu={edu} />)
      }
    </div>
  )
}

function EducationItem({ edu }: Readonly<{
  edu: { degree: string, period: string, school: string, details?: string }
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.35, delay: 3 * 0.05 }}
    >
      <Card className="bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <span className="font-semibold">{edu.degree}</span>
            <span className="text-sm font-normal text-gray-500">{edu.period}</span>
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">{edu.school}</CardDescription>
        </CardHeader>
        {edu.details ? (
          <CardContent>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{edu.details}</p>
          </CardContent>
        ) : null}
      </Card>
    </motion.div>
  )
}
