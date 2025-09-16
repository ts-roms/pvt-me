import {motion} from "framer-motion";

export const HeroBanner = () => {
  return (
    <div>
      <Hero/>
    </div>
  )
}


function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <p className="mb-2 text-sm uppercase tracking-widest text-gray-500">Welcome</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Hi, I&apos;m Roms</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Software Developer</p>
        <p className="mt-2 text-base text-gray-500">I craft reliable, delightful web experiences.</p>
      </motion.div>
      <motion.div
        initial={{scale: 0.95, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 0.8, delay: 0.1}}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent"
      />
    </section>
  )
}
