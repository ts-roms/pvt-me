import type {Route} from "./+types/home";
import {Section} from "~/components/ui/section";
import {
  Educations,
  Experiences,
  Feedbacks,
  HeroBanner, InquiryForm,
  Introduction,
  Projects,
  TechStack
} from "~/features/home";
import {getProfile} from "~/api/home.service";
import type {LoaderFunctionArgs} from "react-router";

export async function loader(_: LoaderFunctionArgs) {
  const {
    banner,
    introduction,
    experiences,
    techStack,
    educations,
    projects,
    feedbacks
  } = await getProfile();

  return {
    banner,
    introduction,
    experiences,
    techStack,
    educations,
    projects,
    feedbacks
  }
}

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Pvt Hub"},
    {name: "description", content: "Welcome to My Portfolio!"},
  ];
}

export default function Home() {

  return (
    <div className=' from-white to-slate-50 text-slate-900 dark:from-slate-950
       dark:to-slate-900 dark:text-slate-100'>
      <HeroBanner/>
      <Section id={"about-me"} title={"Professional Overview"}>
        <Introduction/>
      </Section>
      <Section id={'experience'} title="Work Experience">
        <Experiences/>
      </Section>

      <Section id={'stack'} title="Tech Stack">
        <TechStack/>
      </Section>
      <Section id={'education'} title="Education">
        <Educations/>
      </Section>
      <Section id={'projects'} title="Projects">
        <Projects/>
      </Section>
      <Section id={'feedback'} title="Feedbacks">
        <Feedbacks/>
      </Section>
      <Section id={'contact-form'} title="Let's Connect">
        <InquiryForm/>
      </Section>
    </div>
  );
}
