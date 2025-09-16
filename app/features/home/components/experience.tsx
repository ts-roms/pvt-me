import {motion} from 'framer-motion';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/layouts/ui/card";

export const Experience = () => {

  return (
    <div className="grid grid-4">
      {
        [
          {
            "company": "TechCorp Inc.",
            "role": "Senior Software Engineer",
            "period": "2023 — Present",
            "details": "Leading the development of scalable web applications with React, Next.js, and Node.js. Mentoring engineers and driving best practices."
          },
          {
            "company": "Innovate Labs",
            "role": "Full‑Stack Engineer",
            "period": "2021 — 2023",
            "details": "Built end‑to‑end product features across the stack. Focused on performance, accessibility, and DX improvements."
          },
          {
            "company": "Startup XYZ",
            "role": "Frontend Engineer",
            "period": "2019 — 2021",
            "details": "Shipped UI components and design systems with React, Tailwind, and Storybook; collaborated closely with design and product teams."
          }
        ].map((exp) => <ExperienceItem key={exp.company} exp={exp} />)
      }
    </div>
  )
}

function ExperienceItem({exp}: Readonly<{
  exp: { role: string, period: string, company: string, details?: string }
}>) {

  return (
    <motion.div
      initial={{opacity: 0, y: 12}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-100px'}}
      transition={{duration: 0.35, delay: 3 * 0.05}}
      className="pb-5"
    >
      <Card className="bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <span className="font-semibold">{exp.role}</span>
            <span className="text-sm font-normal text-gray-500">{exp.period}</span>
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">{exp.company}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{exp.details}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

