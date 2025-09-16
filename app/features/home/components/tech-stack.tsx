import {motion} from "framer-motion";
import {cn} from "~/utils/cn";
import {Card, CardContent, CardHeader, CardTitle} from "~/layouts/ui/card";

export const TechStack = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 12}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-100px'}}
      transition={{duration: 0.35}}
    >
      <div className="grid gap-4 md:grid-cols-2">

        {
          [
            { "label": "Core", "items": ["TypeScript", "JavaScript", "Node.js"] },
            { "label": "Frontend", "items": ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"] },
            { "label": "Backend & APIs", "items": ["Express", "tRPC/REST", "JWT/Auth", "Prisma"] },
            { "label": "Tools", "items": ["Git", "Nx", "Vite", "Jest", "Playwright"] }
          ].map((stack) => <TechStackItem key={stack.label} label={stack.label} items={stack.items}/>)}

      </div>
    </motion.div>
  )
}


function TechStackItem({label, items}: Readonly<{ label: string, items: string[] }>) {
  return (
    <Card className="bg-white dark:bg-gray-900/40">
      <CardHeader>
        <CardTitle className="text-base md:text-lg">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {items.map((t) => (
            <li key={t}>
                    <span
                      className="inline-flex items-center rounded-full border border-gray-200 bg-white/70
                      px-3 py-1 text-xs font-medium text-gray-800 shadow-sm backdrop-blur-sm transition
                      dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-200">
                      {t}
                    </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
