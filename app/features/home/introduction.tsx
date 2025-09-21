import {motion} from "framer-motion";
import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card";
import {useLoaderData} from "react-router";

export const Introduction = () => {
 const { introduction } = useLoaderData();

  return (
    <motion.div
      initial={{opacity: 0, y: 12}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-100px'}}
      transition={{duration: 0.35}}
    >
      <Card className="bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="text-xl">{introduction.heading}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {introduction.paragraphs.map((o: string[], i: number) => <p key={i}>{o}</p>)}
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
            {
              introduction.highlights.map((o: string[], i: number) => <li key={i}>{o}</li>)
            }
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
