import Section from "~/layouts/ui/section";
import {
  ContactForm,
  Education,
  Experience,
  Feedback,
  HeroBanner,
  Introduction,
  Projects,
  TechStack
} from "~/features/home/components";


export const HomePage = () => {
  return (
    <div
      className="min-h-dvh  from-white to-slate-50 text-slate-900 dark:from-slate-950
       dark:to-slate-900 dark:text-slate-100">
      <HeroBanner/>
      <Section id={'about-me'} title="About Me">
        <Introduction/>
      </Section>

      <Section id={'experience'} title="Work Experience">
        <Experience/>
      </Section>

      <Section id={'stack'} title="Tech Stack">
        <TechStack/>
      </Section>

      <Section id={'education'} title="Education">
        <Education/>
      </Section>

      <Section id={'project'} title="Projects">
        <Projects />
      </Section>

      <Section id={'feedback'} title="Feedbacks">
        <Feedback />
      </Section>

      <Section id={'contact-form'} title="Contact / Hire Me">
        <ContactForm />
      </Section>
    </div>
  )
}
