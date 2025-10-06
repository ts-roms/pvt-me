import {motion} from "framer-motion";
import {useLoaderData} from "react-router";

export const HeroBanner = () => {
  const {banner} = useLoaderData();
  return (<section className="relative overflow-hidden py-16 md:py-24">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <p
          className="mb-2 text-sm uppercase tracking-widest text-gray-500">{banner.welcome}</p>
        <h1
          className="text-4xl font-bold tracking-tight md:text-6xl">{banner.iam}</h1>
        <div className="flex flex-row items-center justify-center gap-2 mt-4">
          {Object.entries(banner.contact).map(([key, value]) => (
            <div key={key}>
              <label className="capitalize text-md">{key}:&nbsp;</label>
              <label className="text-gray-500">{value as string}</label>
            </div>
          ))}
        </div>
        <p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300">{banner.title}</p>
        <p className="mt-2 text-base text-gray-500">{banner.description}</p>
      </motion.div>
      <motion.div
        initial={{scale: 0.95, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 0.8, delay: 0.1}}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent"
      />
    </section>)
}
