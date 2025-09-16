import {motion} from "framer-motion";
import {Card, CardContent, CardHeader, CardTitle} from "~/layouts/ui/card";

export const Introduction = () => {

  const heading = 'Professional Introduction';
    const paragraphs = [
      "I'm a Software Engineer specializing in building fast, reliable, and delightful web applications.",
      'I enjoy crafting clean, scalable frontends with React/Next.js and thoughtful UX, and I collaborate closely with teams to ship features that matter.',
    ]
    const highlights = [
      'Frontend: React, Next.js, TypeScript, Tailwind',
      'Animation/UI: Framer Motion, shadcn/ui',
      'Practices: Performance, Accessibility, DX, Reusability',
    ]
  return (
    <motion.div
      initial={{opacity: 0, y: 12}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-100px'}}
      transition={{duration: 0.35}}
    >
      <Card className="bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="text-xl">{heading}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {paragraphs.map((o, i) => <p key={i}>{o}</p>)}
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
            {
              highlights.map((o, i) => <li key={i}>{o}</li>)
            }
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
