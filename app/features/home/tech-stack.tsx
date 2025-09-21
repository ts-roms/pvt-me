import {motion} from "framer-motion";
import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card";
import {useLoaderData} from "react-router";

export const TechStack = () => {

  const { techStack } = useLoaderData();

  return (

    <div className="grid gap-4 md:grid-cols-2">

      {
        techStack.map((stack: { label: string, items: string[]}, idx: number) =>
          (
            <motion.div
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-100px'}}
              transition={{duration: 0.35, delay: idx * 0.05}}
              key={stack.label}
            >
              <TechStackItem label={stack.label} items={stack.items}/>
            </motion.div>
          ))}

    </div>
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
